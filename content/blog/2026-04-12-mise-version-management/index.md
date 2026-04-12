---
title: "mise で複数言語のバージョン管理をシンプルにする"
date: "2026-04-12"
slug: "mise-version-management"
tags: ["mise", "asdf", "uv", "開発環境", "dotfiles", "CLI"]
description: "Go・Node・Python・Ruby など複数の言語ランタイムを mise で一元管理する方法を解説。asdf・uv・pyenv など既存ツールとのメリデメ比較、OS 依存の注意点、チームでの運用方針まで網羅します。"
---

# mise で複数言語のバージョン管理をシンプルにする

Go・Node.js・Python・Ruby と複数の言語を扱っていると、バージョン管理ツールが乱立してきます。nvm、pyenv、rbenv、goenv……インストール手順もシェルへの設定方法もバラバラで、新しい環境を立ち上げるたびに消耗します。

この問題を解決するのが [mise](https://mise.jdx.dev/)（ミーズ）です。複数言語のランタイムを一つのツールで管理でき、プロジェクトごとのバージョン指定も `.mise.toml` 一ファイルで完結します。

---

## mise とは

mise は Rust 製の開発環境マネージャーです。Go、Node.js、Python、Ruby、Java など幅広いランタイムやツールを一元管理できます。[asdf](https://asdf-vm.com/) の後継として設計されており、asdf のプラグインエコシステムとの互換性を持ちながら、より高速で使いやすくなっています。

2022 年に `rtx` という名前でリリースされ、2023 年後半に `mise` に改名されました。

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

fish での設定例：

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

プロジェクトルートに `.mise.toml` を置くと、そのディレクトリ以下では指定したバージョンが自動的に切り替わります。

```toml
# プロジェクトルートの .mise.toml
[tools]
node = "20"
python = "3.11"
```

`cd` でプロジェクトに入るだけで切り替わります。

```bash
cd ~/project-a  # node 20, python 3.11 が有効になる
cd ~/project-b  # .mise.toml がなければグローバル設定が適用される
```

ただし、初めて入るプロジェクトの `.mise.toml` は `mise trust` で信頼設定を行う必要があります。これは悪意のある設定ファイルを実行してしまうのを防ぐためのセキュリティ機能です。

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

asdf はコマンドの前に差し込む「shim」というラッパースクリプトで切り替えを実現します。コマンドを実行するたびに shim が走るため、1 コマンドあたり約 120ms のオーバーヘッドが発生します。

mise はディレクトリに入るタイミングで `PATH` を書き換えます。コマンド実行時の余分な処理はなく、オーバーヘッドは実質ゼロです。

この差は、ターミナル上でコマンドをひんぱんに叩く開発者にとっては体感できるレベルの違いです。

### asdf の Go 書き換え（0.16 以降）

2025 年初頭にリリースされた asdf 0.16 で、長年 Bash で書かれていたコードが Go に書き直されました。これによりパフォーマンスは大幅に改善されましたが、mise との比較では依然として差があります。また、Go 版では `asdf set` などの新コマンドが追加されており、`mise set`（環境変数のセット）と名前が衝突するなど、互換性が完全ではない部分も出てきました。

### mise が追加で持つ機能

asdf との最大の違いは、mise が **ツールのバージョン管理以外の機能も持っている** 点です。

環境変数の管理（後述）とタスクランナーが組み込まれており、direnv や Makefile を置き換えることができます。プロジェクトの `.mise.toml` 一ファイルに「使うランタイムのバージョン」「環境変数」「よく使うコマンド」をまとめて書けるのは、思ったより便利です。

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

## uv との関係・使い分け

Python を扱うなら [uv](https://github.com/astral-sh/uv) の名前を聞いたことがあると思います。uv は Rust 製の Python パッケージマネージャーで、pip・virtualenv・pyenv の置き換えを目指しており、Python のバージョン管理（`uv python install 3.13`）も含まれます。

「mise の代わりに uv だけで Python 管理できるのでは？」という疑問は自然ですが、両者の守備範囲は違います。

| | mise | uv |
|---|---|---|
| 対応言語 | Go・Node・Python・Ruby など多言語 | Python のみ |
| パッケージ管理 | なし | あり（pip 相当） |
| 仮想環境管理 | なし（uv や venv に委譲） | あり（venv 相当） |

uv はあくまで「Python エコシステムのオールインワン」であり、Go や Node.js のバージョン管理はできません。複数言語を扱う開発者にとって、mise と uv は競合ではなく補完関係にあります。

### 実際の組み合わせ方

自分の環境では次のように使い分けています。

- **mise**: Python を含むすべてのランタイムのバージョン管理
- **uv**: Python のパッケージ管理・仮想環境管理

具体的には、mise で Python 3.13 を管理しつつ、プロジェクト内の仮想環境作成やパッケージインストールは uv を使います。

```bash
# Python バージョンは mise で管理
mise use -g python@3.13

# プロジェクト内のパッケージ管理は uv
cd my-project
uv venv
uv pip install fastapi
```

uv 自体も mise でインストールできます。

```toml
# ~/.config/mise/config.toml
[tools]
python = "3.13"
uv = "latest"
```

uv のプロジェクト（`uv.lock` がある場合）では、mise の `python.uv_venv_auto` 設定を使うと、ディレクトリに入ったときに仮想環境を自動で有効化できます。

```toml
# .mise.toml
[settings]
python.uv_venv_auto = "source"  # 既存の .venv を自動で有効化
# または
python.uv_venv_auto = "create|source"  # なければ作って有効化
```

「Python バージョン管理も uv に統一したい」という場合、uv で Python を管理して mise を外すことも一応できます。ただし Go や Node が絡む場合は結局 mise を外せないため、Python だけ分離するメリットは薄く、mise に統一してしまう方がシンプルです。

---

## OS サポートと注意点

mise は macOS と Linux を主なターゲットとしており、両環境での動作は安定しています。

### Windows

Windows でも動作しますが、制限があります。現状は shim 経由での動作となり、`mise activate` によるシェルの自動切り替えは PowerShell ではまだサポートされていません。環境変数の自動設定も、`mise exec` や `mise run` 経由で実行する場合のみ有効になります。

一方で、asdf は Windows に対応していないため、Windows 環境でバージョン管理ツールを使いたい場合は mise の方が選択肢として現実的です。WSL2 上であれば mise は完全に動作します。

### CI 環境

GitHub Actions では公式の Action が提供されています。

```yaml
# .github/workflows/ci.yml
- uses: jdx/mise-action@v2
```

これで `.mise.toml` の内容に従ったランタイムが CI 環境にインストールされます。

---

## チームでの運用：全員インストールを強制する必要があるか

実務では一番悩むポイントです。

正直なところ、**`.mise.toml` による自動切り替えの恩恵を受けるには、各開発者が mise をインストールする必要があります。** mise がなければ `.mise.toml` は単なるテキストファイルで、バージョン管理は機能しません。

### 現実的な落としどころ

**`.mise.toml` と `.tool-versions` を共存させる**

mise ユーザーは `.mise.toml`、asdf ユーザーは `.tool-versions` を使えます。両方 git 管理することで、どちらのツールを使っても同じバージョンが参照されます。

```toml
# .mise.toml
[tools]
node = "20.11.0"
python = "3.11.8"
```

```
# .tool-versions（asdf ユーザー向けに併置）
nodejs 20.11.0
python 3.11.8
```

**Dockerfile でバージョンを固定する**

コンテナを使っているプロジェクトなら、Dockerfile でバージョンを固定するのが最も確実です。ローカルのバージョン管理ツールは何を使っていても関係なくなります。

**各言語の設定ファイルにバージョン制約を書く**

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

mise のあまり知られていない機能が、`.mise.toml` による環境変数管理です。プロジェクトに入ったとき・出たときに環境変数を自動設定・解除できます。

```toml
# .mise.toml
[tools]
node = "20"

[env]
NODE_ENV = "development"
DATABASE_URL = "postgres://localhost:5432/mydb_dev"
API_BASE_URL = "http://localhost:8080"
```

`cd` でプロジェクトに入ると `NODE_ENV` などが自動設定され、ディレクトリを出ると解除されます。`.env` を手動で `source` したり、`export` を `.zshrc` に直書きしたりする必要がなくなります。

### .env ファイルの読み込み

既存の `.env` ファイルを mise から読み込むこともできます。

```toml
# .mise.toml
[env]
_.file = ".env"
```

`.env` は `.gitignore` に入れて、`.mise.toml` だけをコミットする運用が自然です。

### direnv との使い分け

すでに [direnv](https://direnv.net/) を使っているプロジェクトなら、mise と direnv は共存できます。

どちらを使うかは状況次第で、新規プロジェクトで `.envrc` がまだないなら `[env]` セクションで完結させる方がシンプルです。既存プロジェクトで `.envrc` がすでにある場合や、より複雑な条件分岐（OS によって設定を変えるなど）が必要な場合は direnv の方が表現力があります。

---

## 実際の設定例

自分のグローバル設定はこうなっています（chezmoi で管理している `~/.config/mise/config.toml` の内容です）。

```toml
# ~/.config/mise/config.toml（macOS の場合）
[plugins]
flutter = "https://github.com/mise-plugins/mise-flutter.git"

[tools]
awscli   = "latest"
direnv   = "latest"
flutter  = "latest"
fzf      = "latest"
gcloud   = "latest"
ghq      = "latest"
go       = "latest"
java     = "temurin"
kubectl  = "latest"
node     = "latest"
peco     = "latest"
ruby     = "latest"
starship = "latest"
stern    = "latest"
terraform = "latest"
uv       = "latest"
```

flutter のように公式ビルトインにないツールは `[plugins]` セクションでサードパーティプラグインを追加して対応しています。chezmoi でこのファイルを管理しているので、OS ごとに条件分岐を入れており、flutter は macOS のみインストール対象にしています（Linux では Homebrew 経由でないとビルドが面倒なため）。

新しいマシンをセットアップするときも `mise install` 一コマンドで全ランタイムが揃うので、[前回紹介した ghq + fzf](/blog/ghq-fzf-repository-management/) と組み合わせると、新しいリポジトリに入った瞬間に適切なランタイムに切り替わる体験が得られます。

---

## まとめ

言語ごとのバージョン管理ツールを乱立させるのをやめて mise に統一してから、環境構築の手間が体感で半分以下になりました。特に新しいマシンや CI でのセットアップは、`.mise.toml` があるだけで一発で再現できるのが大きいです。

asdf からの移行も `.tool-versions` 互換のおかげでほぼ摩擦ゼロで、移行してから困ったことはほとんどありません。チームへの展開は「まず推奨、強制はしない」くらいの温度感が現実的で、言語側の設定ファイルでバージョン制約を書いておく方がロバストな運用になります。
