---
title: "【第 3 弾】mise タスクランナーで Makefile と npm scripts を置き換える"
date: "2026-07-08"
slug: "mise-task-runner"
tags: ["mise", "タスクランナー", "開発環境", "CLI"]
description: "mise シリーズ第 3 弾はタスクランナー。depends による依存グラフと並列実行、sources/outputs による実行スキップ、usage 記法の引数、file tasks、mise watch、そして mise generate によるドキュメント・git フックの自動生成まで紹介します。"
---

# 【第 3 弾】mise タスクランナーで Makefile と npm scripts を置き換える

mise の機能をテーマ別に紹介するシリーズの第 3 弾です。[第 2 弾](/blog/mise-backends/)では backends・mise.lock・mise exec という「実行系」の機能を紹介しました。

1. [第 1 弾：複数言語のバージョン管理](/blog/mise-version-management/)
2. [第 2 弾：実行系 — backends・mise.lock・mise exec](/blog/mise-backends/)
3. 第 3 弾：タスクランナー — tasks・mise generate（本記事）
4. [第 4 弾：環境変数 — env・hooks・secrets](/blog/mise-env-management/)

今回のテーマはタスクランナーです。mise の機能の中で個人的に一番おすすめしたい領域で、Makefile・npm scripts・散らばったシェルスクリプト集を `mise.toml` 一つに置き換えられます。

---

## タスクランナー：Makefile と npm scripts を置き換える

`mise.toml` の `[tasks]` セクションにコマンドを定義すると、`mise run` で実行できます。

```toml
# mise.toml
[tasks.build]
description = "Build the CLI"
run = "cargo build"

[tasks.test]
description = "Run tests"
run = "cargo test"
```

```bash
mise run build

# mise 本体のコマンドと名前が衝突しなければ、run を省略してもよい
mise build

# 定義済みタスクの一覧
mise tasks
```

これだけなら npm scripts と変わりませんが、mise のタスクにはビルドツール由来の便利な仕組みが揃っています。

### 依存関係と並列実行

`depends` でタスク間の依存を宣言すると、mise が依存グラフを解決して実行します。依存のないタスク同士はデフォルトで並列（4 並列、`--jobs` や `MISE_JOBS` で変更可）に走ります。

```toml
[tasks.lint]
run = "cargo clippy"

[tasks.test]
run = "cargo test"

[tasks.ci]
depends = ["lint", "test"]  # lint と test が並列で走ってから ci 本体へ
run = "echo 'all green'"
```

Makefile で `.PHONY` を並べて依存を書いていたのと同じことができます。

### sources / outputs による実行スキップ

make の真骨頂だった「変更がなければ再ビルドしない」も再現できます。`sources` と `outputs` を指定すると、ソースファイルが出力より新しい場合にのみタスクが実行されます。

```toml
[tasks.build]
run = "cargo build"
sources = ["Cargo.toml", "src/**/*.rs"]  # これらが変わっていなければスキップ
outputs = ["target/debug/mycli"]
```

これにより、CI で「フロントエンドに変更がないときはビルドを丸ごとスキップする」といった最適化が、特別な仕組みなしで実現できます。

### 引数を受け取るタスク

タスクは [usage](https://usage.jdx.dev/) 記法で引数やフラグを宣言できます。宣言した引数はテンプレート `{{usage.xxx}}` や環境変数 `$usage_xxx` で参照でき、依存タスクへ引き渡すこともできます。

```toml
[tasks.build]
usage = 'arg "<app>"'
run = 'echo "building {{usage.app}}"'

[tasks.deploy]
usage = 'arg "<app>"'
depends = [{ task = "build", args = ["{{usage.app}}"] }]
run = 'echo "deploying {{usage.app}}"'
```

```bash
mise run deploy api  # build api → deploy api の順で実行される
```

シェルスクリプトで `$1` を捌くのとは違い、引数の過不足はタスク実行前に検証され、ヘルプも自動生成されます。

### file tasks：シェルスクリプトをそのままタスクに

長いスクリプトは、`mise-tasks/` ディレクトリに実行可能ファイルとして置くだけでタスクになります（file tasks）。ファイル名がタスク名になり、シェバン付きなら言語も自由です。シェバンとは、スクリプトの 1 行目に書く `#!/usr/bin/env bash` のような `#!` で始まる行のことで、そのファイルをどのインタープリタで実行するかを指定します。これを `#!/usr/bin/env python3` に変えれば Python で、`#!/usr/bin/env node` に変えれば JavaScript でタスクを書けます。

```bash
mise-tasks/
├── build        # `mise run build` で実行される
└── deploy
```

```python
#!/usr/bin/env python3
# mise-tasks/deploy — シェバンを変えれば好きな言語で書ける
print("deploying...")
```

なお、タスクは mise の環境（`[tools]` の PATH と `[env]` の環境変数）が適用された状態で実行されるため、シェバンの `python3` や `node` も mise 管理のもの、つまりそのプロジェクトの `mise.toml` で指定したバージョンに解決されます。特定バージョンを明示したい場合は、スクリプト内に `#MISE tools={python="3.11"}` のようなコメントを書いてタスク単位で固定することもできます。

### mise watch：ファイル変更で自動再実行

`mise watch` は、タスクの `sources` を監視して変更のたびに再実行してくれるコマンドです（内部は watchexec）。

```bash
mise watch build   # sources が変わるたびに build を再実行
mise watch         # 全タスクの sources を監視
```

各言語の watch ツール（nodemon、cargo-watch など）を個別に入れなくても、タスク定義さえあれば同じ体験が得られます。

---

## mise generate：設定ファイルの自動生成

`mise generate`（エイリアス `mise gen`）は、mise の設定から周辺ツール向けのファイルを生成するコマンド群です。

```bash
mise generate git-pre-commit    # lint タスクなどを実行する pre-commit フックを生成
mise generate github-action     # mise セットアップ込みの GitHub Actions ワークフローを生成
mise generate task-docs         # タスク定義から Markdown ドキュメントを生成
mise generate devcontainer      # Dev Container 設定を生成
mise generate bootstrap         # mise 未インストール環境向けのブートストラップスクリプトを生成
```

地味ながら `task-docs` はおすすめで、`[tasks]` の `description` から「このリポジトリで使えるコマンド一覧」を README 用に自動生成できます。`--inject` フラグを使うと、README に置いたマーカーコメントの間だけを差し替えてくれるので、既存の README にそのまま組み込めます。

```markdown
<!-- README.md にマーカーを置いておく -->
<!-- mise-tasks -->
<!-- /mise-tasks -->
```

```bash
mise generate task-docs --inject --output README.md
```

ただし、生成コマンドを手で叩く運用のままでは、タスクを追加したのに再生成を忘れて README が古くなる、というよくある乖離は防げません。ここで効いてくるのが `git-pre-commit` との連携です。`mise generate git-pre-commit` はデフォルトで「`pre-commit` という名前のタスクを実行する」git フックを生成するので、その中に task-docs の再生成を含めておけば、コミットのたびにドキュメントが自動更新されます。

```toml
[tasks.pre-commit]
description = "Run pre-commit checks"
run = [
  "mise generate task-docs --inject --output README.md",
  "git add README.md",
]
```

```bash
mise generate git-pre-commit --write   # .git/hooks/pre-commit を生成
```

タスク定義が唯一の情報源（single source of truth）になり、README は常にその写像になる、という構図です。

`bootstrap` は mise 本体すら入っていない環境（新規メンバーや素の CI）向けに、mise の取得から `mise run` までを肩代わりするスクリプトを吐いてくれます。生成されたスクリプトをリポジトリにコミットしておけば、新しく参加したメンバーは、そのプロジェクトがどの言語のどのバージョンを使っているのかを個別に意識することなく、clone して `./bin/mise run setup` のような一発のコマンドで開発を始められます。「Node は nvm で 20 系を、Python は 3.13 を uv で…」といった言語ごとのセットアップ手順書が丸ごと不要になるので、オンボーディングが大幅に楽になります。

---

## まとめ

mise のタスクランナーは「npm scripts の手軽さ」と「make の賢さ」の良いとこ取りです。

1. **depends による依存グラフと並列実行** — CI の定義がそのままローカルでも走る
2. **sources / outputs** — 変更がなければスキップ。CI の高速化に特別な仕組みが要らなくなる
3. **usage 記法の引数** — 引数の検証とヘルプ生成込みで、シェルスクリプトの `$1` 捌きから卒業できる
4. **mise generate** — タスク定義を single source of truth にして、ドキュメントや git フックはそこから生成する

次回の[第 4 弾](/blog/mise-env-management/)は環境変数編です。direnv を置き換える `[env]`、ディレクトリ出入りに処理を仕込む hooks、そして secrets 管理までを扱い、プロジェクトに入るだけで環境が全部整っている状態を作ってシリーズを締めくくります。
