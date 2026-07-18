---
title: "【第 1 弾】mise で複数言語のバージョン管理をシンプルにする"
date: "2026-04-12"
slug: "mise-version-management"
tags: ["mise", "asdf", "uv", "開発環境", "CLI"]
description: "Go・Node・Python・Ruby など複数の言語ランタイムを mise で一元管理する方法を解説。asdf・uv・pyenv など既存ツールとのメリデメ比較、OS 依存の注意点、チームでの運用方針まで網羅します。"
---

# 【第 1 弾】mise で複数言語のバージョン管理をシンプルにする

Go、Node.js、Python、Ruby と複数の言語を扱っていると、バージョン管理ツールが乱立してきます。nvm、pyenv、rbenv、goenv……インストール手順もシェルへの設定方法もバラバラで、新しい環境を立ち上げるたびに消耗します。

この問題を解決するのが [mise](https://mise.jdx.dev/)（ミーズ）です。複数言語のランタイムを一つのツールで管理でき、プロジェクトごとのバージョン指定も `mise.toml` 一ファイルで完結します。

mise の機能をテーマ別に紹介するシリーズの第 1 弾です。まずはバージョン管理から始めます。

1. 第 1 弾：複数言語のバージョン管理（本記事）
2. [第 2 弾：実行系（backends、mise.lock、mise exec）](/blog/mise-backends/)
3. [第 3 弾：タスクランナー（tasks、mise generate）](/blog/mise-task-runner/)
4. [第 4 弾：環境変数管理（env、hooks、secrets）](/blog/mise-env-management/)

---

## mise とは

mise は Rust 製の開発環境マネージャーです。Go、Node.js、Python、Ruby、Java など幅広いランタイムやツールを一元管理できます。[asdf](https://asdf-vm.com/) の後継として設計されており、asdf のプラグインエコシステムとの互換性を持ちながら、より高速で使いやすくなっています。

はじめは `rtx` という名前でリリースされていました。改名の理由は少し意外で、Nvidia のグラフィックカードのブランド名と紛らわしいというものです。2024 年 1 月、`mise` へと変わりました。

### インストール

macOS では Homebrew で一発です。

```bash
brew install mise
```

Linux でも Homebrew が使えますが、curl でのインストールも公式に提供されています。

```bash
curl https://mise.run | sh
```

インストール後、シェルに mise を有効化するための設定を追加します。

```bash
# fish
mise activate fish | source

# zsh
eval "$(mise activate zsh)"

# bash
eval "$(mise activate bash)"
```

fish での設定例です。

```fish
# ~/.config/fish/config.fish
if type -q mise
    mise activate fish | source
end
```

---

## 基本的な使い方

### グローバルにツールをインストールする

```bash
# ツールをインストールして、グローバルに有効化
mise use -g node@22
mise use -g python@3.13
mise use -g go@latest
```

`-g`（`--global`）フラグをつけると `~/.config/mise/config.toml` に書き込まれ、どのディレクトリでも有効になります。

```toml
# ~/.config/mise/config.toml
[tools]
node = "22"
python = "3.13"
go = "latest"
```

`latest` と書いておくと `mise upgrade` で一括アップデートできます。現在のインストール状況は `mise ls` で確認できます。

### プロジェクトごとにバージョンを指定する

プロジェクトルートに `mise.toml` を置くと、そのディレクトリ以下では指定したバージョンが自動的に切り替わります。ドット付きの `.mise.toml` も変わらず読み込まれますが、公式ドキュメントの例は現在どれもドットなしの `mise.toml` で統一されているので、これから書くならこちらに揃えておくのが無難です。

```toml
# プロジェクトルートの mise.toml
[tools]
node = "20"
python = "3.11"
```

`cd` でプロジェクトに入るだけで切り替わります。

```bash
cd ~/project-a  # node 20, python 3.11 が有効になる
cd ~/project-b  # mise.toml がなければグローバル設定が適用される
```

ただし、初めて入るプロジェクトの `mise.toml` は `mise trust` で信頼設定を行う必要があります。これは悪意のある設定ファイルを実行してしまうのを防ぐためのセキュリティ機能です。

```bash
# プロジェクトの設定を信頼する
mise trust

# CI 環境などで対話なしに信頼させる場合
mise trust --all
```

### asdf 形式の `.tool-versions` も読める

mise は asdf の `.tool-versions` をそのまま読み込みます。既存プロジェクトを壊さずに移行できます。

```
# .tool-versions（asdf 形式）
nodejs 20.11.0
python 3.11.8
```

---

## asdf との比較

mise は asdf をリスペクトして設計されており、asdf プラグインとの互換性がコア機能のひとつです。ただし、使い心地には差があります。

### shim と PATH の違い

最も本質的な違いは、バージョン切り替えの仕組みです。

asdf はコマンドの前に差し込む「shim」というラッパースクリプトで切り替えを実現します。mise の公式ドキュメントは、この方式を「コマンドを実行するたびに shim が走り、1 コマンドあたり約 120ms のオーバーヘッドが生じる」と評しています。対して mise はディレクトリに入るタイミングで `PATH` を書き換えるだけなので、コマンド実行時の余分な処理はなく、オーバーヘッドは実質ゼロです。ターミナルでコマンドをひんぱんに打つ開発者にとっては、体感できるレベルの差だと思います。

ただし、この比較には賞味期限があります。

### asdf の Go 書き換え（0.16 以降）

2025 年前半にリリースされた asdf 0.16 で、長年 Bash で書かれていた実装が単一バイナリの Go に書き直されました。公式の報告では 0.15 系比で 2〜7 倍の高速化とされています。さきほどの「約 120ms」という数字も、これで事情が変わりました（そもそも mise 側が引用しているのも 2022 年当時、Bash 実装の asdf を対象にしたベンチマークです）。

書き換えの余波は速度だけにとどまりません。Go 版では `asdf global` / `asdf local` が廃止され、`asdf set` という一つのコマンドに統一されました。これが mise 側の `mise set`（環境変数をセットするコマンド）とコマンド名で衝突しており、mise 公式自身、asdf-go 0.16 以降とのコマンド互換性は今後劣化しうると認めています。

### mise が追加で持つ機能

asdf との最大の違いは、mise が **ツールのバージョン管理以外の機能も持っている** 点です。

環境変数の管理とタスクランナーが組み込まれており、direnv や Makefile を置き換えることができます（環境変数は[第 4 弾](/blog/mise-env-management/)、タスクランナーは[第 3 弾](/blog/mise-task-runner/)でくわしく扱います）。プロジェクトの `mise.toml` 一ファイルに「使うランタイムのバージョン」「環境変数」「よく使うコマンド」をまとめて書けるのは、思ったより便利です。

また、Node.js や Python など主要な言語はプラグインなしでビルトイン対応しています。asdf ではツールを使う前にプラグインを別途インストールする必要がありましたが、mise では `mise use node@22` の一コマンドで完結します。

### asdf の方が有利なケースは？

チームに asdf ユーザーが多い場合は、`.tool-versions` で統一する方が摩擦が少ない場合があります。mise はこのファイルを読めるので、両者が混在しても動作します。

また、マイナーなツールのプラグインが asdf にはあるが mise には（まだ）ない、というケースが稀にあります。ただし mise は asdf プラグインをそのまま利用できるので、実用上困ることはほぼありません。

---

## 言語専用ツール（nvm / pyenv / rbenv）との比較

「Node.js しか使わないから nvm で十分」という考え方もあります。単一言語のプロジェクトならそれでも問題ありません。

ただ、現実には複数の言語が混在することがほとんどです。バックエンドは Go、スクリプトは Python、フロントエンドのビルドは Node.js、というような構成は珍しくなく、それぞれ専用ツールを入れると次の問題が起きます。

- nvm は遅延ロードを工夫しないとシェル起動が重くなる
- pyenv は `pyenv init` をシェルに仕込む必要があり、設定が散らばる
- ツールごとにコマンド体系が違うため、「バージョン一覧を出すコマンド」を毎回調べるはめになる

mise なら `mise use -g go@latest ruby@latest node@22` で一発です。バージョン切り替えの仕組みも統一されているので、どの言語でも同じ操作感で扱えます。

---

## uv との関係と使い分け

Python を扱うなら [uv](https://github.com/astral-sh/uv) の名前を聞いたことがあると思います。uv は Rust 製の Python パッケージマネージャーで、pip、virtualenv、pyenv の置き換えを目指しており、Python のバージョン管理（`uv python install 3.13`）も含まれます。

「mise の代わりに uv だけで Python 管理できるのでは？」という疑問は自然です。ただ、両者の守備範囲は違います。

|                | mise                              | uv                |
| -------------- | --------------------------------- | ----------------- |
| 対応言語       | Go、Node、Python、Ruby など多言語 | Python のみ       |
| パッケージ管理 | なし                              | あり（pip 相当）  |
| 仮想環境管理   | なし（uv や venv に委譲）         | あり（venv 相当） |

uv はあくまで「Python エコシステムのオールインワン」であり、Go や Node.js のバージョン管理はできません。複数言語を扱う開発者にとって、mise と uv は競合ではなく補完関係にあります。

### Python バージョン管理のダブル管理問題

もっとも、両者を素直に組み合わせるだけでは済まない一点があります。uv には `uv python install 3.13` というコマンドがあり、Python インタープリタ自体のインストールも行えるのです。「mise でも Python を管理しているなら、ダブル管理になるのでは」という疑問は正当です。

実際、mise と uv は**それぞれ独立したディレクトリに Python を管理します**。

- mise: `~/.local/share/mise/installs/python/3.13.x/`
- uv: `~/.local/share/uv/python/cpython-3.13.x-*/`

両方でインストールすると、PATH の優先順位次第でどちらの Python が使われるか分かりにくくなり、バージョンのずれや予期しない挙動の原因になります。

推奨する回避策は明快です。Python のバージョン管理は mise に統一し、`uv python install` は使わないことです。

mise が管理する Python は PATH に自動的に追加されます。uv はプロジェクト実行時に PATH 上の python を参照するため、`uv python install` を実行しない限り、uv は mise の Python を自動的に使います。

```bash
# Python バージョンは mise だけで管理
mise use -g python@3.13

# uv はパッケージ管理・仮想環境のみ担当（python install はしない）
cd my-project
uv venv          # mise が提供する python で仮想環境を作成
uv pip install fastapi
```

uv がどの Python を参照しているかは `uv python find` で確認できます。mise の Python のパスが表示されれば正しく統合されています。

プロジェクトの Python バージョン要件を明示したい場合は、`pyproject.toml` の `requires-python` に制約を書くのが自然です。

```toml
# pyproject.toml
[project]
requires-python = ">=3.13"
```

### 実際の組み合わせ方

自分の環境では次のように使い分けています。

- **mise**: Python を含むすべてのランタイムのバージョン管理
- **uv**: Python のパッケージ管理と仮想環境管理（`uv python install` は使わない）

uv 自体も mise でインストールして管理できます。

```toml
# ~/.config/mise/config.toml
[tools]
python = "3.13"
uv = "latest"
```

uv プロジェクト（`uv.lock` がある場合）では、mise の `python.uv_venv_auto` 設定を使うと、ディレクトリに入ったときに仮想環境を自動で有効化できます。値は「既存の `.venv` だけを有効化する」`"source"` と、「なければ作成してから有効化する」`"create|source"` の 2 通りで、どちらも `uv.lock` があるプロジェクトでだけ働きます（過去にあった `true` という値はレガシー扱いで、将来的に廃止される予定です）。

```toml
# mise.toml
[settings]
python.uv_venv_auto = "source" # 既存の .venv を自動で有効化
# または
python.uv_venv_auto = "create|source" # なければ作成してから有効化
```

「Python バージョン管理も uv に完全統一したい」という場合、uv で Python を管理して mise の python 設定を外すことも可能です。ただし Go や Node が絡む場合は結局 mise を外せないため、Python だけ分離するメリットは薄く、mise に統一してしまう方がシンプルです。

---

## OS サポートと注意点

mise は macOS と Linux を主なターゲットとしており、両環境での動作は安定しています。

### Windows

Windows でも動作しますが、制限があります。現状は shim を中心とした動作になり、PowerShell 向けの `mise activate pwsh` も用意されてはいるものの、bash/zsh/fish ほど機能が成熟しているわけではありません。環境変数の自動設定も、そこで動くコマンドが shim 経由でツールを解決するか、`mise exec` や `mise run` に包まれている場合にだけ有効になります。

一方で、asdf は Windows に対応していないため、Windows 環境でバージョン管理ツールを使いたい場合は mise の方が選択肢として現実的です。WSL2 上であれば mise は完全に動作します。

### CI 環境

GitHub Actions では公式の Action が提供されています。

```yaml
# .github/workflows/ci.yml
- uses: jdx/mise-action@v4
```

これで `mise.toml` の内容に従ったランタイムが CI 環境にインストールされます。

---

## チームでの運用：全員インストールを強制する必要があるか

実務では一番悩むポイントです。

正直なところ、**`mise.toml` による自動切り替えの恩恵を受けるには、各開発者が mise をインストールする必要があります。** mise がなければ `mise.toml` は単なるテキストファイルで、バージョン管理は機能しません。

現実的な落としどころは、次の三つです。

### `mise.toml` と `.tool-versions` を共存させる

mise ユーザーは `mise.toml`、asdf ユーザーは `.tool-versions` を使えます。両方 git 管理することで、どちらのツールを使っても同じバージョンが参照されます。

```toml
# mise.toml
[tools]
node = "20.11.0"
python = "3.11.8"
```

```
# .tool-versions（asdf ユーザー向けに併置）
nodejs 20.11.0
python 3.11.8
```

### Dockerfile でバージョンを固定する

コンテナを使っているプロジェクトなら、Dockerfile でバージョンを固定するのが最も確実です。ローカルのバージョン管理ツールは何を使っていても関係なくなります。

### 各言語の設定ファイルにバージョン制約を書く

mise を使わない開発者に対して最低限の気づきを与える手段として、言語ごとの設定ファイルにバージョン制約を書いておくのも有効です。

```json
// package.json
{
  "engines": { "node": ">=20.0.0" }
}
```

```toml
# pyproject.toml
[project]
requires-python = ">=3.11"
```

これらの設定はツールが警告を出してくれるので、バージョンがずれている開発者に気づきを与えられます。

### mise を入れない開発者との環境差異

mise を使わないメンバーが気をつけるべきなのは、**バージョンの自動切り替えが起きない** という点です。`node -v` が期待と違うバージョンになっていても mise が警告してくれません。これが原因の不具合は「自分のマシンだと動く」になりやすいので、言語側の設定でも最低限の制約を持たせておくのが無難です。

---

## 環境変数の管理

mise はバージョン管理だけでなく、`[env]` セクションによる環境変数管理も持っています。プロジェクトに入ったときと出たときに環境変数を自動設定と解除できる仕組みで、direnv の代替になります。

```toml
# mise.toml
[tools]
node = "20"

[env]
NODE_ENV = "development"
DATABASE_URL = "postgres://localhost:5432/mydb_dev"
```

ここで注意したいのは、この自動設定と解除が働くのは、シェルに `mise activate` を仕込んである場合に限られる点です。この条件や、`.env` の読み込み、hooks との組み合わせ、secrets 管理までは、[第 4 弾](/blog/mise-env-management/)でまとめて扱っています。

---

## 実際の設定例

自分のグローバル設定はこうなっています。

```toml
# ~/.config/mise/config.toml（macOS の場合）
[plugins]
flutter = "https://github.com/mise-plugins/mise-flutter.git"

[tools]
awscli = "latest"
direnv = "latest"
flutter = "latest"
fzf = "latest"
gcloud = "latest"
ghq = "latest"
go = "latest"
java = "temurin"
kubectl = "latest"
node = "latest"
peco = "latest"
ruby = "latest"
starship = "latest"
stern = "latest"
terraform = "latest"
uv = "latest"
```

flutter のように公式ビルトインにないツールは `[plugins]` セクションでサードパーティプラグインを追加して対応しています。flutter は macOS のみインストール対象にしており（Linux では Homebrew 経由でないとビルドが面倒なため）、OS ごとに `mise.toml` を使い分けて対応しています。

新しいマシンをセットアップするときも `mise install` 一コマンドで全ランタイムが揃うので、[前回紹介した ghq + fzf](/blog/ghq-fzf-repository-management/) と組み合わせると、新しいリポジトリに入った瞬間に適切なランタイムに切り替わる体験が得られます。

---

## まとめ

言語ごとのバージョン管理ツールを乱立させるのをやめて mise に統一してから、環境構築の手間が体感で半分以下になりました。特に新しいマシンや CI でのセットアップは、`mise.toml` があるだけで一発で再現できるのが大きいです。

asdf からの移行も `.tool-versions` 互換のおかげでほぼ摩擦ゼロで、移行してから困ったことはほとんどありません。チームへの展開は「まず推奨、強制はしない」くらいの温度感が現実的で、言語側の設定ファイルでバージョン制約を書いておく方がロバストな運用になります。

続きは[第 2 弾](/blog/mise-backends/)で、backends、mise.lock、mise exec という「実行系」を扱います。
