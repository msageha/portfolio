---
title: "【第 2 弾】mise backends・mise.lock・mise exec でツールを宣言的に扱う"
date: "2026-07-07"
slug: "mise-backends"
tags: ["mise", "backends", "開発環境", "CLI", "セキュリティ"]
description: "mise シリーズ第 2 弾は実行系。cargo/npm/github などの backends であらゆる CLI ツールを宣言的に管理し、mise.lock でバージョンを固定し、mise exec でワンショット実行する方法を、SLSA によるサプライチェーン検証の話とあわせて紹介します。"
---

# 【第 2 弾】mise backends・mise.lock・mise exec でツールを宣言的に扱う

[第 1 弾の記事](/blog/mise-version-management/)では、mise を使って複数言語のランタイムバージョンを一元管理する方法を紹介しました。ただ、mise の本領はバージョン管理だけではありません。公式サイトが掲げるとおり、mise は「dev tools、env vars、task runner」の三本柱を持つツールで、実質的に asdf + direnv + make を一つに統合した存在です。

今回からは、バージョン管理の「その先」にある機能を [公式ドキュメント](https://mise.jdx.dev/)に基づいてテーマ別に紹介していきます。シリーズの構成は次のとおりです。

1. [第 1 弾：複数言語のバージョン管理](/blog/mise-version-management/)
2. 第 2 弾：実行系（backends、mise.lock、mise exec。本記事）
3. [第 3 弾：タスクランナー（tasks、mise generate）](/blog/mise-task-runner/)
4. [第 4 弾：環境変数管理（env、hooks、secrets）](/blog/mise-env-management/)

第 2 弾のテーマは実行系、つまり「ツールをどこから取得し、どうバージョンを固定し、どう実行するか」です。第 1 弾の直接の続きとして、管理対象を言語ランタイムからあらゆる CLI ツールへ広げていきます。

なお、mise はドット付きの `.mise.toml` も変わらず読み込みますが、本シリーズでは公式ドキュメントの例に揃えてドットなしの `mise.toml` で統一しています。

---

## backends：あらゆる CLI ツールを mise で入れる

第 1 弾ではサードパーティプラグインで flutter を入れる例を紹介しましたが、現在の mise はプラグインなしで多様なパッケージソースからツールを入れられます。これが backends です。

```bash
mise use -g cargo:ripgrep@14      # crates.io から
mise use -g npm:prettier@3        # npm から
mise use -g pipx:black            # PyPI から
mise use -g go:github.com/DarthSim/hivemind@latest  # go install 相当
mise use -g github:cli/cli        # GitHub Releases のバイナリを直接
```

`mise use` は第 1 弾でも使ったとおり、ツールのインストールと `mise.toml` への追記を同時に行うコマンドです。`バックエンド名:パッケージ名` の形式で指定すると、その供給元からインストールされます。

言語ランタイムだけでなく、ripgrep、jq、terraform のような単体 CLI ツールも全部 `mise.toml` でバージョン固定できるということです。「チーム全員の開発ツール一式を 1 ファイルで宣言する」という使い方が現実的になります。

`mise use ripgrep` のように短縮名で指定した場合は、[registry](https://mise.jdx.dev/registry.html)（短縮名とデフォルト backend の対応表）に登録された backend が使われます。registry には、採用する backend の信頼度に応じた受け入れ基準の階層（Tier）が定められています。最上位の Tier 1 は [aqua](https://aquaproj.github.io/)（検証情報付きの中央レジストリを持つ、宣言的な CLI ツール管理の仕組み）、`github:`、`gitlab:` の三つで、Tier 2 が conda、Tier 3 が `pipx:`、`npm:`、`gem:`、`go:`、`cargo:`、`dotnet:` です。同じ Tier 1 の中でも、プラグイン不要で SLSA によるサプライチェーン検証まで自動で効く aqua がもっとも推奨されています。かつて汎用バイナリ取得に使われていた `ubi:` backend は現在非推奨で、`github:` への置き換えが進んでいます。また、サプライチェーンリスクの観点から、新規の `asdf:` / `vfox:` プラグインは registry に受け入れられない方針になっており、「プラグインを書く」時代から「backend で宣言する」時代に移行しつつあります。

ここまでは、便利な取得手段の話に見えるかもしれません。ただ、この Tier の階層化は趣味の問題ではありません。

### なぜサプライチェーン検証を重視するのか

[SLSA](https://slsa.dev/)（Supply-chain Levels for Software Artifacts）は、「その成果物が、期待されるソースリポジトリから、期待されるビルドパイプラインでビルドされたこと」を証明する provenance（来歴）検証の枠組みです。ソフトウェアサプライチェーンの完全性を段階的なレベルで保証する、業界標準のフレームワークです。aqua backend 経由のインストールでは、この検証が追加設定なしに自動で効くため、リリースバイナリのすり替えや改ざんを検知できます。`github:` backend でも `github.slsa` を設定すれば、同様の検証を有効にできます。

この地味な検証機構が、LLM Agent 時代にはこれまで以上に効いてきます。

コーディングエージェントは人間のレビューを挟まずにパッケージのインストールやコマンド実行までを自律的に行います。悪意あるパッケージを掴んでしまっても、「実行される前に人が気づく」機会が構造的に減っているということです。さらに、LLM が実在しないパッケージ名をもっともらしく提案する現象を悪用して、その名前で悪意あるパッケージを先回り登録しておく slopsquatting と呼ばれる攻撃まで登場しました。2025 年には npm で人気パッケージの乗っ取りや、自己複製型ワーム（Shai-Hulud）による大規模なサプライチェーン攻撃も相次いでいます。「インストールした瞬間に開発マシンの認証情報が抜かれる」は、もう仮定の話ではありません。

開発ツールの取得経路を registry と SLSA 検証のような「宣言済みで検証済み」の枠に寄せておくことは、エージェントに開発環境を触らせる時代の基本的な防御線です。mise が新規プラグインの受け入れを止めて検証可能な backend に一本化しようとしているのも、この流れの中にあります。

---

## mise.lock：ツールバージョンのロックファイル

`mise.toml` に `node = "22"` と書いたとします。実際に入るパッチバージョンは、インストールする時期によって変わります。これを完全に固定するのが lockfile です。

```bash
mise settings lockfile=true
```

```toml
# mise.toml でも設定できる
[settings]
lockfile = true
```

有効にすると `mise.lock` が生成され、`package-lock.json` や `Cargo.lock` と同じ発想で、正確なバージョンに加えてプラットフォームごとのチェックサム（SHA256/Blake3）、ダウンロード URL、ファイルサイズまで記録されます。これを git にコミットしておけば、CI や他のメンバーのマシンで完全に同一のバイナリが検証付きで再現されます。`mise.lock` は `mise install` や `mise use` を実行したタイミングで生成され、更新されるので、`mise.toml` を変更したら一緒にコミットする運用になります。

ただし、どの backend でも同じだけの安心が買えるわけではありません。backend によって記録できる情報には差があります。フルサポート（バージョン、チェックサム、サイズ、URL まで）なのは aqua、github、gitlab、http で、この記事の例で使った `cargo:` や `npm:`、あるいは `asdf:` はバージョンのみの記録です。チームの再現性を本気で担保したいなら、対応の厚い backend を選ぶ動機にもなります。

---

## mise exec でワンショット実行

インストールせずに特定バージョンのツールでコマンドを一度だけ実行したいときは `mise exec` が使えます（`mise x` というエイリアスでも実行できます）。

```bash
mise exec node@20 -- node script.js   # node 20 の環境で一時的に実行
mise exec python@3.11 -- python -V

mise x node@20 -- node script.js      # エイリアスの mise x でも同じ
```

「古い Node でだけ再現するバグの確認」のような場面で、グローバル設定を汚さずに済みます。npx の任意バージョン版のような感覚で使えます。

---

## まとめ

第 1 弾のバージョン管理を「実行系」まで広げると、mise は次の 3 つの役割を担えるようになります。

1. **backends**：言語ランタイム以外の CLI ツールも宣言的に管理でき、チームのツールチェーン統一が `mise.toml` 1 ファイルで済む。registry と SLSA 検証により、LLM Agent 時代のサプライチェーンリスクへの防御線にもなる
2. **mise.lock**：バージョンをチェックサム付きで固定し、CI やチームメンバー間で完全に同一のバイナリを再現できる。再現性が必要なら早めに有効化しておくと後で効いてくる
3. **mise exec**：インストールせずに任意バージョンでワンショット実行。検証やデバッグでグローバル環境を汚さない

次回の[第 3 弾](/blog/mise-task-runner/)では、mise の中でも特におすすめのタスクランナーを扱います。Makefile と npm scripts を置き換え、`mise generate` でドキュメントや git フックまで自動生成する話です。
