---
title: "【第 4 弾】mise 環境変数・hooks・secrets でプロジェクトに入るだけで整う開発環境を作る"
date: "2026-07-09"
slug: "mise-env-management"
tags: ["mise", "開発環境", "CLI", "direnv", "secrets"]
description: "mise シリーズ最終回は環境変数編。direnv を置き換える [env] とディレクティブ、Python venv の自動化、6 種類の hooks とシェル統合の仕組み、sops/redactions/fnox による secrets 管理まで扱い、プロジェクトに入るだけで環境が全部整う状態を作ります。"
---

# 【第 4 弾】mise 環境変数・hooks・secrets でプロジェクトに入るだけで整う開発環境を作る

mise の機能をテーマ別に紹介するシリーズの第 4 弾、最終回です。

1. [第 1 弾：複数言語のバージョン管理](/blog/mise-version-management/)
2. [第 2 弾：実行系 — backends・mise.lock・mise exec](/blog/mise-backends/)
3. [第 3 弾：タスクランナー — tasks・mise generate](/blog/mise-task-runner/)
4. 第 4 弾：環境変数 — env・hooks・secrets（本記事）

今回のテーマは環境変数です。`[env]` セクションによる direnv の置き換えから始めて、その裏側にあるシェル統合の仕組み、同じ仕組みの上に乗っている hooks、そして secrets 管理までを扱います。ゴールは「リポジトリを clone して `cd` したら、ツールも環境変数も venv も全部整っている」状態です。

---

## 環境変数管理：direnv を置き換える

第 1 弾でも少し触れましたが、`[env]` セクションはもっと奥があります。基本は direnv でおなじみの「ディレクトリに入ると設定され、出ると解除される」環境変数管理です。

使い方は、ツールのバージョンを書いているのと同じプロジェクトルートの `mise.toml` に、`[env]` セクションを追加してキーと値を並べるだけです。

```toml
# mise.toml
[env]
NODE_ENV = "development"
DATABASE_URL = "postgres://localhost:5432/mydb_dev"
```

これだけで、`cd` でこのプロジェクトに入ると `NODE_ENV` と `DATABASE_URL` が自動で設定され、ディレクトリを出ると解除されます。`.env` を手動で `source` したり、`export` を `.zshrc` に直書きしたりする必要がなくなります。

なお、この自動設定・解除が働くのは、シェルに `eval "$(mise activate zsh)"` などのシェル統合（[第 1 弾のインストール手順](/blog/mise-version-management/#インストール)で設定したもの）を仕込んである場合です。activate していない環境では `cd` しても何も起きず、`mise run` や `mise exec` 経由で実行したときにのみ `[env]` が適用されます。この仕組みの詳細は後述の hooks のセクションで説明します。

`_.`（アンダースコア）で始まるキーはディレクティブと呼ばれる特殊な指定で、これが実用上かなり便利です。

```toml
[env]
# .env ファイルを読み込む
_.file = ".env"

# プロジェクトの bin を PATH に追加する（node_modules/.bin など）
_.path = ["./node_modules/.bin", "{{config_root}}/bin"]

# 既存のシェルスクリプトを source して環境を取り込む
_.source = "./scripts/env.sh"
```

値には [tera](https://keats.github.io/tera/)（Rust 製のテンプレートエンジン）のテンプレートが使えます。`{{config_root}}` は `mise.toml` のあるディレクトリに展開される変数で、ほかにも他の環境変数を参照するなど、動的な値を書けます。

### Python venv の自動化

Python プロジェクトで特に効くのがこれです。ディレクトリに入った瞬間に venv が作成・有効化されます。

```toml
[tools]
python = "3.13"

[env]
_.python.venv = { path = ".venv", create = true }  # なければ作って activate
```

`source .venv/bin/activate` を打つ生活から解放されます。第 1 弾で紹介した uv と組み合わせる場合は、`settings` の `python.uv_venv_auto` を使う方法もあります（詳細は[第 1 弾の記事](/blog/mise-version-management/#実際の組み合わせ方)を参照）。

---

## hooks：決まったタイミングにコマンドを仕込む

決まったタイミングに任意のコマンドを仕込めるのが `[hooks]` セクションです。中心になるのは環境変数と同じ「ディレクトリに入る・出る」のタイミングですが、ツールインストールの前後に発火するものもあり、フックは全部で 6 種類あります。

| フック        | 発火タイミング                                                           |
| ------------- | ------------------------------------------------------------------------ |
| `enter`       | プロジェクトに入ったとき（1 回だけ）                                     |
| `leave`       | プロジェクトから出たとき                                                 |
| `cd`          | ディレクトリを移動するたび（プロジェクト内のサブディレクトリ移動も含む） |
| `watch_files` | 指定したファイルが変更されたとき                                         |
| `preinstall`  | `mise install` によるツールインストールの直前                            |
| `postinstall` | `mise install` によるツールインストールの直後                            |

```toml
[hooks]
enter = "mise install --quiet"   # プロジェクトに入ったら不足ツールを自動インストール
leave = "echo 'bye'"             # プロジェクトから出たとき
preinstall = "echo 'installing...'"
postinstall = "pnpm install"     # mise install の後に依存もまとめて揃える
```

定番は `enter = "mise install --quiet"` です。これを仕込んでおくと、リポジトリを clone して `cd` した瞬間に `mise.toml` に書かれたツールが自動で揃います。`postinstall` に `pnpm install` や `pdm sync` を足せば、「cd したら開発可能な状態になっている」まで持っていけます。

### シェル統合が必要なフックと、不要なフック

6 種類のフックは「何をトリガーに発火するか」で 2 グループに分かれます。この違いを理解しておかないと、「ローカルでは動くのに CI では何も起きない」と混乱することになります。

前提として、mise は常駐プロセスではないので、mise 自身には「ユーザーがディレクトリを移動した」ことを知る手段がありません。それを可能にしているのが `eval "$(mise activate zsh)"` などのシェル統合です。これはシェルのプロンプト表示前のタイミングに mise のチェック処理を差し込む仕組みで、コマンドを打つたびに「前回と比べてディレクトリや `mise.toml` が変わったか」を確認し、変わっていれば PATH や環境変数を更新します。バージョン自動切り替えも、ここまで見てきた `[env]` の自動設定・解除も、実体はこれです。

`enter` / `leave` / `cd` / `watch_files` は、まさにこのチェック処理の中で検知・発火されます。「入った・出た」を見張っている主体がシェルに差し込まれた関数なので、`mise activate` を設定していない環境ではフック自体が存在せず、絶対に発火しません。CI の非対話シェル、Dockerfile の `RUN`、activate を仕込んでいないメンバーのマシンがこれに該当します。

一方、`preinstall` / `postinstall` はディレクトリ移動ではなく **`mise install` というコマンド自体のライフサイクル**に紐づいています。install コマンドの前後に mise 自身が直接呼び出すため、シェル統合の有無に関係なく動きます。CI で `mise install`（や `jdx/mise-action`）を実行すれば普通に発火します。

### 使い分けの指針

この仕組みを踏まえると、処理の置き場所は次のように整理できます。

- **どの環境でも走らせたいセットアップ処理**（`pnpm install` や `pdm sync` など）は `postinstall` に置く。ローカルでは `enter = "mise install --quiet"` 経由で、CI では `mise install` 一発で、同じセットアップが再現されます。`enter` にすべてを書いてしまうと CI では何も起きません。
- **対話シェルでだけ意味のある処理**（メッセージ表示や venv の deactivate など）は `enter` / `leave` に置く。
- `postinstall` は「インストールすべきものが何もなかった場合でも実行される」と公式に明記されているので、`pnpm install` のような再実行しても安全な冪等の処理にしておくのが無難です。

なお、`enter` と `cd` の違いも押さえておくと便利です。`enter` はプロジェクトに入った 1 回だけで、プロジェクト内のサブディレクトリ移動では再発火しません。移動のたびに実行したい処理だけ `cd` を使います。

`watch_files` だけは書き方が少し異なり、`[hooks]` の中ではなくトップレベルに `[[watch_files]]` として、監視するパターンと実行内容をセットで書きます。シェル統合のチェック処理がファイルの変更を検知すると実行されます。

```toml
[[watch_files]]
patterns = ["uv.lock"]
run = "uv sync"
```

---

## secrets 管理：sops 統合と fnox

環境変数の延長で、機密情報の扱いにも選択肢があります。

### sops による暗号化ファイルの読み込み（experimental）

[sops](https://github.com/getsops/sops)（設定ファイル内の値を暗号化するツール）と [age](https://github.com/FiloSottile/age)（シンプルなファイル暗号化ツール）で暗号化した `.env.json` を、mise が読み込み時に自動で復号して環境変数に展開できます。どちらのツールも、第 2 弾で紹介した backends 経由（`mise use -g sops age`）でインストールできます。

```bash
# age の鍵を作成し、公開鍵で .env.json を暗号化
age-keygen -o ~/.config/mise/age.txt
sops encrypt -i --age "<public key>" .env.json
```

```toml
[env]
_.file = { path = ".env.json", redact = true }
```

暗号化済みファイルは git にコミットでき、復号鍵（デフォルトで `~/.config/mise/age.txt`）を持つメンバーだけが値を得られます。`redact = true` を付けると、`mise env --redacted` などの出力で値がマスクされ、GitHub Actions でのログマスキングにも使えます。個別の変数を `mise.toml` 内にインラインで暗号化して埋め込む `mise set --age-encrypt API_KEY=secret` という方法もあります。

ただし、mise 本体の secrets 機能は現時点では experimental 扱いです。

### redactions：マスク対象をパターンでまとめて宣言する

`redact = true` を変数やファイルに一つずつ付ける以外に、マスク対象をパターンで一括宣言する方法があります。`mise.toml` のトップレベルに書く `redactions` 配列と、`[env]` セクション内のディレクティブ `_.redactions` です。どちらも glob パターンが使えます。

```toml
# mise.toml（[env] や [tasks] などのセクションより前、ファイル先頭のトップレベルに書く）
redactions = ["API_KEY", "SECRETS_*"]

[env]
_.redactions = ["*_KEY", "*_SECRET", "*_TOKEN"]
```

パターンに一致した変数は、[第 3 弾](/blog/mise-task-runner/)で紹介した `mise run` のタスク出力などで値が `[redacted]` に置換されます。GitHub Actions で `jdx/mise-action` を使っている場合は、`redact = true` や `redactions` パターンに一致した値が自動でログマスキングに登録されるため、`::add-mask::` を手で書く必要もありません。

実務的におすすめの運用としては、**secrets 系の環境変数を `*_TOKEN` / `*_SECRET` / `*_KEY` の命名規則に揃えて `_.redactions` で一括宣言しておく**ことだと思います。命名さえ守られていれば、変数を追加するたびに設定を触る必要がなくなります。

注意点は 2 つあります。タスクを `raw = true`（stdin/stdout 直結モード）で実行した場合は redaction が適用されません。また、`true` や `1` のような短い値を持つ変数がパターンに一致すると、出力中のあらゆる `1` が `[redacted]` に置換されて表示が壊れるため、`*KEY*` のような緩いパターンではなく `*_API_KEY` のような具体的なパターンにしておくのが安全です。

### fnox：公式が推奨する専用ツール

公式ドキュメントは現在、本格的な secrets 管理には mise と同じ作者（jdx）による専用ツール [fnox](https://fnox.jdx.dev/) を推奨しています。AWS Secrets Manager・GCP Secret Manager・1Password・Vault などのリモートプロバイダに対応し、`fnox.toml` を git にコミットして運用します。

```bash
mise use -g fnox     # fnox 自体を mise で入れる
fnox init
fnox set DATABASE_URL "postgresql://localhost/mydb"
fnox exec -- npm start
```

mise 本体に統合しなかった理由も明快で、mise はディレクトリ移動のたびに環境を再評価するため、リモート secrets のネットワークアクセスが入ると遅くなりすぎるからだそうです。ローカルの開発用設定は mise の `[env]`、本物の秘密情報は fnox（か sops）、という住み分けが現在の推奨形です。

---

## 全部盛りの mise.toml

シリーズを通して紹介してきた機能を組み合わせると、プロジェクトの `mise.toml` はこんな姿になります。

```toml
# mise.toml
[tools]
node = "22"
python = "3.13"
"npm:prettier" = "3"
"cargo:ripgrep" = "14"

[env]
NODE_ENV = "development"
_.file = ".env"
_.path = ["./node_modules/.bin"]
_.python.venv = { path = ".venv", create = true }

[hooks]
enter = "mise install --quiet"
postinstall = "pnpm install"

[tasks.lint]
description = "Lint all sources"
run = "pnpm eslint ."

[tasks.test]
description = "Run tests"
run = "pnpm vitest run"
sources = ["src/**/*", "package.json"]
outputs = { auto = true }  # 出力ファイルを列挙する代わりに実行記録でスキップ判定する

[tasks.ci]
description = "Run all checks"
depends = ["lint", "test"]

[settings]
lockfile = true
```

このファイル一つで「ツールのバージョン」（第 1・2 弾）、「開発コマンド」（第 3 弾）、「環境変数と venv」「セットアップ手順」（本記事）がすべて宣言され、clone して `cd` すれば開発を始められる状態になります。README の「Getting Started」に書いていた手順書の大半が、実行可能な設定に置き換わるイメージです。

---

## シリーズのまとめ

mise を「asdf の速い版」として使い始めたのが第 1 弾でしたが、実際に手に馴染むのはむしろ第 2 弾以降で紹介した領域です。個人的な体感では、導入効果が大きい順に次のとおりです。

1. **タスクランナー**（[第 3 弾](/blog/mise-task-runner/)）— Makefile / npm scripts / シェルスクリプト集を一本化できる。sources によるスキップと並列実行は CI でも効く
2. **hooks + env**（本記事）— プロジェクトに入るだけで環境が揃っている体験。direnv と venv activate を撤廃できる
3. **backends**（[第 2 弾](/blog/mise-backends/)）— 言語ランタイム以外の CLI ツールも宣言的に管理でき、チームのツールチェーン統一が 1 ファイルで済む
4. **mise.lock**（[第 2 弾](/blog/mise-backends/)）— 再現性が必要なチーム・CI では早めに有効化しておくと後で効いてくる

secrets 周りだけはまだ experimental な部分があるので、本格運用は fnox や sops 側に寄せるのが現時点の正解だと思います。このあたりは、落ち着いたらまた記事にまとめたいと思います。mise は開発が非常に活発で機能追加も速いため、最新の状況は[公式ドキュメント](https://mise.jdx.dev/)を確認してみてください。
