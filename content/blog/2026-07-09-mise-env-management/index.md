---
title: "【第 4 弾】mise 環境変数・hooks・secrets でプロジェクトに入るだけで整う開発環境を作る"
date: "2026-07-09"
slug: "mise-env-management"
tags: ["mise", "開発環境", "CLI", "direnv", "secrets"]
description: "mise シリーズ最終回は環境変数編。direnv を置き換える [env] とディレクティブ、Python venv の自動化、6 種類の hooks とシェル統合の仕組み、sops/redactions/fnox による secrets 管理まで扱い、プロジェクトに入るだけで環境が全部整う状態を作ります。"
---

# 【第 4 弾】mise 環境変数・hooks・secrets でプロジェクトに入るだけで整う開発環境を作る

ツールのバージョンを揃え、タスクランナーで開発コマンドを一本化すれば、環境構築はもう終わったように見えます。実際、ここまで 3 回のシリーズで扱ってきたのは、まさにその話でした。ところが、そうやって整えた `mise.toml` を渡したチームメンバーに実際に `git clone` して `cd` してもらうと、決まって同じ質問が返ってきます。「`.env` は結局どこに置けばいいんですか」。

ツールのバージョンやタスクの定義は、`mise.toml` に書いてそのまま git に置けます。環境変数や secrets はそうはいきません。値そのものは秘密にしたいのに、変数の存在と使い方はチーム全体で共有したい。この相反する要求を扱うぶん、シリーズの最後に回すことになりました。

mise の機能をテーマ別に紹介するシリーズの第 4 弾、最終回です。

1. [第 1 弾：複数言語のバージョン管理](/blog/mise-version-management/)
2. [第 2 弾：実行系（backends、mise.lock、mise exec）](/blog/mise-backends/)
3. [第 3 弾：タスクランナー（tasks、mise generate）](/blog/mise-task-runner/)
4. 第 4 弾：環境変数管理（env、hooks、secrets。本記事）

目指すゴールは一つです。リポジトリを clone して `cd` した瞬間に、ツールも環境変数も venv も、全部整っている状態にすることです。

---

## 環境変数管理：direnv を置き換える

第 1 弾では、`[env]` に `NODE_ENV` を一行足すだけの最小限の例しか見せていません。実際にはここから先にもっと奥があります。

基本は direnv でおなじみの、「ディレクトリに入ると設定され、出ると解除される」という環境変数管理です。使い方は、ツールのバージョンを書いているのと同じプロジェクトルートの `mise.toml` に、`[env]` セクションを追加してキーと値を並べるだけです。

```toml
# mise.toml
[env]
NODE_ENV = "development"
DATABASE_URL = "postgres://localhost:5432/mydb_dev"
```

これだけで、`cd` でこのプロジェクトに入ると `NODE_ENV` と `DATABASE_URL` が自動で設定され、ディレクトリを出ると解除されます。`.env` を手動で `source` したり、`export` を `.zshrc` に直書きしたりする必要がなくなります。

ここまでだけを見ると、`[env]` に書いておきさえすれば、どんな環境でも `cd` 一つで環境変数が切り替わるように読めます。実際には、条件が一つ隠れています。この自動設定と解除が働くのは、シェルに `eval "$(mise activate zsh)"` などのシェル統合（[第 1 弾のインストール手順](/blog/mise-version-management/#インストール)で設定したもの）を仕込んである場合だけです。activate していない環境、たとえば CI の非対話シェルや Dockerfile の `RUN` では、`cd` しても何も起きません。そこで動くコマンドが shims 経由でツールを解決するか、`mise exec` や `mise run` に包まれているか、`mise env` の出力を明示的に評価しているときにだけ、`[env]` の値がその場に乗ります。なぜ `cd` という、ただのシェル組み込みコマンドにここまで反応できるのか。その仕組みは hooks の節で説明します。

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

Python プロジェクトで特に効くのがこれです。ディレクトリに入った瞬間に venv が作成され、有効化されます。

```toml
[tools]
python = "3.13"

[env]
_.python.venv = { path = ".venv", create = true } # なければ作って activate
```

`source .venv/bin/activate` を打つ生活から解放されます。第 1 弾で紹介した uv と組み合わせる場合は、`settings` の `python.uv_venv_auto` を使う方法もあります（詳細は[第 1 弾の記事](/blog/mise-version-management/#実際の組み合わせ方)を参照）。

---

## hooks：決まったタイミングにコマンドを仕込む

決まったタイミングに任意のコマンドを仕込めるのが `[hooks]` セクションです。中心になるのは環境変数と同じ、「ディレクトリに入る」「出る」というタイミングですが、ツールインストールの前後に発火するものもあり、フックは全部で 6 種類あります。

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
enter = "mise install --quiet" # プロジェクトに入ったら不足ツールを自動インストール
leave = "echo 'bye'" # プロジェクトから出たとき
preinstall = "echo 'installing...'"
postinstall = "pnpm install" # mise install の後に依存もまとめて揃える
```

定番は `enter = "mise install --quiet"` です。これを仕込んでおくと、リポジトリを clone して `cd` した瞬間に `mise.toml` に書かれたツールが自動で揃います。`postinstall` に `pnpm install` や `pdm sync` を足せば、「cd したら開発可能な状態になっている」まで持っていけます。

### シェル統合が必要なフックと、不要なフック

チームで hooks を設定した直後によく起きる混乱があります。ローカルではきれいに動いていた `enter` や `postinstall` の設定が、CI に持っていった途端に何も起こさない、というものです。原因は、6 種類のフックが実は 2 つの系統に分かれていることにあります。

前提を一つ置きます。mise は常駐プロセスではありません。ユーザーがどのディレクトリへ `cd` したかを、mise 自身が能動的に知る手段はないということです。ここで、さきほど保留にしていた問いに戻れます。`[env]` はなぜ `cd` だけで自動的に切り替わるのか、という問いです。

答えは、シェル統合そのものにあります。`eval "$(mise activate zsh)"` は、シェルのプロンプトが表示される直前のタイミングに、mise のチェック処理を差し込みます。コマンドを打つたびに「前回と比べてディレクトリや `mise.toml` が変わったか」を確認し、変わっていれば PATH や環境変数を更新します。バージョンの自動切り替えも、ここまで見てきた `[env]` の自動設定と解除も、実体はこの差し込まれた関数です。

`enter` / `leave` / `cd` / `watch_files` は、まさにこのチェック処理の中で検知され、発火します。「ディレクトリに入った」「出た」を見張っている主体がシェルに差し込まれた関数である以上、`mise activate` を設定していない環境ではその関数自体が存在せず、フックは絶対に発火しません。CI の非対話シェル、Dockerfile の `RUN`、activate を仕込んでいないメンバーのマシンは、いずれもこの条件に当てはまります。

一方、`preinstall` / `postinstall` は勝手が違います。これはディレクトリ移動ではなく、`mise install` というコマンド自体のライフサイクルに紐づいているからです。install コマンドの前後に mise 自身が直接呼び出すため、シェル統合の有無とは無関係に動きます。CI で `mise install`（や `jdx/mise-action`）を実行すれば、普通に発火します。

### 使い分けの指針

この二系統を理解しておけば、処理をどちらに置くべきかは機械的に決まります。

- **どの環境でも走らせたいセットアップ処理**（`pnpm install` や `pdm sync` など）は `postinstall` に置きます。ローカルでは `enter = "mise install --quiet"` 経由で、CI では `mise install` 一発で、同じセットアップが再現されます。`enter` にすべてを書いてしまうと、CI では何も起きません。
- **対話シェルでだけ意味のある処理**（メッセージ表示や venv の deactivate など）は `enter` / `leave` に置きます。
- `postinstall` は「インストールすべきものが何もなかった場合でも実行される」と公式に明記されています。`pnpm install` のような、再実行しても安全な冪等の処理にしておくのが無難です。

なお、`enter` と `cd` の違いも押さえておくと便利です。`enter` はプロジェクトに入った 1 回だけで、プロジェクト内のサブディレクトリ移動では再発火しません。移動のたびに実行したい処理だけ `cd` を使います。

`watch_files` だけは書き方が少し異なります。`[hooks]` の中ではなくトップレベルに `[[watch_files]]` として、監視するパターンと実行内容をセットで書きます。シェル統合のチェック処理がファイルの変更を検知すると実行されます。

```toml
[[watch_files]]
patterns = ["uv.lock"]
run = "uv sync"
```

---

## secrets 管理：sops 統合と fnox

環境変数の延長で、機密情報の扱いにも選択肢があります。

### sops による暗号化ファイルの読み込み（experimental）

[sops](https://github.com/getsops/sops)（設定ファイル内の値を暗号化するツール）と [age](https://github.com/FiloSottile/age)（シンプルなファイル暗号化ツール）を組み合わせれば、暗号化した `.env.json` を mise が読み込み時に自動で復号し、環境変数として展開できます。どちらのツールも、第 2 弾で紹介した backends 経由（`mise use -g sops age`）でインストールできます。

ただし、この機能を使うには先に `mise settings set experimental=true` で experimental フラグを有効化しておく必要があります。mise 本体の secrets 機能は、現時点ではまだそういう扱いの機能です。

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

### redactions：マスク対象をパターンでまとめて宣言する

`redact = true` を変数やファイルに一つずつ付ける以外に、マスク対象をパターンでまとめて宣言する方法もあります。`mise.toml` の先頭、`[env]` や `[tasks]` より前のトップレベルに `redactions` という配列を置くと、そこに書いた glob パターンに一致した変数名がすべてマスク対象になります。

```toml
# mise.toml（ファイル先頭のトップレベルに書く）
redactions = ["API_KEY", "SECRETS_*"]

[env]
SECRET_KEY = "sensitive_value"
API_TOKEN = "token_123"
```

パターンに一致した変数は、[第 3 弾](/blog/mise-task-runner/)で紹介した `mise run` のタスク出力などで値が `[redacted]` に置換されます。GitHub Actions で `jdx/mise-action` を使っている場合は、`redact = true` や `redactions` パターンに一致した値が自動でログマスキングに登録されるため、`::add-mask::` を手で書く必要もありません。

実務的には、secrets 系の環境変数を `*_TOKEN` / `*_SECRET` / `*_KEY` のような命名規則に揃えたうえで、対応するパターンを `redactions` にまとめて書いておくのがいいと思います。命名さえ守られていれば、変数を追加するたびに設定を触る必要がなくなります。

注意点は 2 つあります。タスクを `raw = true`（stdin/stdout 直結モード）で実行した場合、redaction は適用されません。mise は出力を 1 行ずつ横取りしてパターン置換する仕組みなので、`raw` モードで直結された標準出力にはそもそも割り込めないからです。もう一つ、この置換がおそらく単純な文字列マッチである以上、`true` や `1` のような短い値を持つ変数までパターンに含めると、出力中の無関係な同じ文字列まで巻き込まれかねません。`*KEY*` のような緩いパターンではなく、`*_API_KEY` のような具体的なパターンにしておいたほうが安全でしょう。

### fnox：公式が推奨する専用ツール

公式ドキュメントは現在、本格的な secrets 管理には mise と同じ作者（jdx）による専用ツール [fnox](https://fnox.jdx.dev/) を推奨しています。AWS Secrets Manager、GCP Secret Manager、1Password、Vault などのリモートプロバイダに対応し、`fnox.toml` を git にコミットして運用します。

```bash
mise use -g fnox     # fnox 自体を mise で入れる
fnox init
fnox set DATABASE_URL "postgresql://localhost/mydb"
fnox exec -- npm start
```

mise 本体に統合しなかった理由は、fnox 自身のドキュメントに書かれています。mise はディレクトリを移動するたび、`mise x` を実行するたび、shim が呼ばれるたびに環境を再評価する設計で、ほかの用途ならこれをキャッシュに寄せて解決できます。ですが secrets に関しては、そのキャッシュ自体が望ましくありません。mise の設計をそこまで作り替えるのは大掛かりな仕事になるため、独立したツールとして fnox を作った、というのが公式の説明です。ローカルの開発用設定は mise の `[env]`、本物の秘密情報は fnox（か sops）、という住み分けが現在の推奨形です。

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
outputs = { auto = true } # 出力ファイルを列挙する代わりに実行記録でスキップ判定する

[tasks.ci]
description = "Run all checks"
depends = ["lint", "test"]

[settings]
lockfile = true
```

このファイル一つで「ツールのバージョン」（第 1 弾、第 2 弾）、「開発コマンド」（第 3 弾）、「環境変数と venv」「セットアップ手順」（本記事）がすべて宣言され、clone して `cd` すれば開発を始められる状態になります。README の「Getting Started」に書いていた手順書の大半が、実行可能な設定に置き換わるイメージです。

---

## シリーズのまとめ

mise を「asdf の速い版」として使い始めたのが第 1 弾でしたが、実際に手に馴染むのはむしろ第 2 弾以降で紹介した領域でした。個人的な体感では、導入効果が大きい順に次のとおりです。

1. **タスクランナー**（[第 3 弾](/blog/mise-task-runner/)）：Makefile、npm scripts、シェルスクリプト集を一本化できる。sources によるスキップと並列実行は CI でも効きます
2. **hooks + env**（本記事）：プロジェクトに入るだけで環境が揃っている体験そのもの。direnv と venv activate を撤廃できます
3. **backends**（[第 2 弾](/blog/mise-backends/)）：言語ランタイム以外の CLI ツールも宣言的に管理でき、チームのツールチェーン統一が 1 ファイルで済みます
4. **mise.lock**（[第 2 弾](/blog/mise-backends/)）：再現性が必要なチームや CI では早めに有効化しておくと後で効いてきます

secrets 周りだけは、まだ experimental な部分が残っています。本格運用は fnox や sops 側に寄せるのが、現時点での正解だと思います。このあたりは、落ち着いたらまた記事にまとめたいと思います。mise はリリースを重ねるペースが速く、この記事に書いた挙動もそう遠くないうちに変わっていく可能性があります。気になった箇所は[公式ドキュメント](https://mise.jdx.dev/)で最新の状況を確認してみてください。
