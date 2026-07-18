---
title: "Renovate で依存関係の更新を自動化する"
date: "2026-07-18"
slug: "renovate-dependency-management"
tags: [
  "Renovate",
  "セキュリティ",
  "GitHub Actions",
  "mise",
  "開発環境",
]
description: "依存関係の更新を Renovate で自動化する設定を、実際に運用している renovate.json とともに解説します。config:recommended をベースに、GitHub Actions のダイジェスト固定、独自ファイルへの追従、LLM Coding Agent 時代のサプライチェーン対策としての minimumReleaseAge、mise.toml をそのまま読める mise マネージャーとの相性まで扱います。"
---

# Renovate で依存関係の更新を自動化する

つい先日、2026 年 7 月 14 日に、GitHub は Dependabot のバージョン更新へ 3 日間の cooldown（新しいバージョンが公開されてから一定期間、更新 PR を出さずに待つ機能）をデフォルトで導入した。設定不要で全エコシステムに効くようになったというアナウンスで、後追いで知った人も多いはずだ。

この発想自体は目新しいものではない。[Renovate](https://github.com/renovatebot/renovate) はずっと前から `minimumReleaseAge` という名前で同じことをやっている。GitHub がデフォルト機能にまで格上げしたということは、更新のタイミングを遅らせること自体、もう標準的な防御手段になったということでもある。

---

## Renovate とは

Renovate は、依存関係の更新 PR を自動で作成するボットである。対応するエコシステムは npm、pip、Go modules、Docker、Terraform、GitHub Actions など数十種類に及び、ホスト版の GitHub App として使うことも、CI 上でセルフホストすることもできる。

Dependabot との一番の違いは、設定の組み方にある。Renovate の設定は `extends` でプリセットを積み重ねる形式で、`config:recommended` のような公式プリセットも、コミュニティ製のプリセットも、自分で書いた `packageRules` も同じ書式で扱える。後半で扱う `customManagers` を使えば、Renovate がもともと知らないファイル形式にまで追従の対象を広げられる。この自由度が、独自ファイルへの追従を可能にしている。

導入の手順自体は難しくない。GitHub App 版の Renovate をリポジトリにインストールする（セルフホストする場合は CI 上で Renovate 自体を定期実行する）と、依存関係にはまだ一切手を付けない onboarding PR が 1 本だけ立つ。ここで提案される renovate.json の叩き台をレビューしてマージして、初めて通常の更新 PR が動き出す。すでに依存関係の更新が長期間放置されているリポジトリにいきなり導入すると、大量の更新 PR に埋もれることになるので、公式のベストプラクティスも、まず手動である程度まで追いつかせてから有効化することを勧めている。

---

## ベースになる設定

renovate.json の冒頭はこうなっている。

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "config:recommended",
    "helpers:pinGitHubActionDigests"
  ],
  "lockFileMaintenance": {
    "enabled": true
  },
  "pre-commit": {
    "enabled": true
  }
}
```

`config:recommended` は公式が用意している、言語を問わないおすすめ設定である。中身は複数のプリセットの組み合わせで、更新待ちを一覧にまとめる Dependency Dashboard の issue、モノレポ内の関連パッケージを 1 本の PR にまとめるグルーピング、コミットメッセージの prefix 統一などが含まれる。個別に積み上げる前に、まずこれを土台にするのが公式の推奨する入り方になっている。

Dependency Dashboard は、単なる一覧以上の働きをする。一度却下したりクローズしたりした更新でも、issue 内のチェックボックスにチェックを入れるだけで PR を出し直させられる。`dependencyDashboardApproval` を設定すれば、特定の更新（major だけ、特定パッケージだけ、など）を Renovate が PR を自動で立てる前に、この issue 上での承認待ちにすることもできる。

`helpers:pinGitHubActionDigests` は、ワークフローの `uses: actions/checkout@v7` のようなタグ参照を、コミットの digest（`uses: actions/checkout@9c091bb...` の形）に固定する PR を出すプリセットである。タグは同じ名前のまま中身を差し替えられるが digest はできないため、これは単なる整形ではなく、Actions 自体が改ざんされた場合の防御になる。

`lockFileMaintenance` は、`package.json` 側の指定を一切変えずに `package-lock.json` だけを再解決する PR を定期的に出す機能である。直接指定していない推移的依存にパッチが出ても、通常の更新 PR はそこまで拾わない。ロックファイルの再解決を別枠で定期的に回しておくことで、その取りこぼしを防いでいる。

`pre-commit` の `enabled: true` は、実は一手間かけている行である。Renovate の pre-commit マネージャー（`.pre-commit-config.yaml` の `rev:` を追従させる機能）はデフォルトで無効になっており、何もしなければ pre-commit hooks のバージョンだけがひっそりと古いまま取り残される。

---

## LLM Coding Agent 時代のサプライチェーン対策としての minimumReleaseAge

以前 [mise backends の記事](/blog/mise-backends/)で、コーディングエージェントが人のレビューを挟まずにパッケージを取得し実行してしまう時代のリスクとして、slopsquatting や自己複製ワーム Shai-Hulud のような攻撃を取り上げた。あの記事で扱ったのは、パッケージの出どころをどう検証するか（SLSA、registry の Tier）という防御線だった。Renovate が担うのは、それとは別の防御線になる。出どころが正しいパッケージであっても、公開直後のバージョンをどれだけ待ってから取り込むか、という更新タイミングの制御である。

renovate.json にはこう書いてある。

```json
{
  "minimumReleaseAge": "7 days",
  "packageRules": [
    {
      "matchUpdateTypes": ["patch", "minor"],
      "automerge": true,
      "automergeType": "pr"
    }
  ]
}
```

`minimumReleaseAge` は、パッケージが公開されてから指定した期間が経過するまで、Renovate に更新 PR を出させない設定である。乗っ取られたメンテナのアカウントから悪意あるバージョンが公開されても、多くの場合は数日のうちに registry 側や研究者が気づいて取り下げる。取り込みを 7 日遅らせるということは、その発見までの時間を、更新を受け取る側がまるごと無料で得られるということだ。Renovate 公式の Upgrade Best Practices でも、automerge と組み合わせる場合は（14 日を目安に）この値を長めに取ることを推奨している。

patch/minor の更新は、`minimumReleaseAge` を満たし、かつ CI が green であれば自動でマージされる。 `automergeType: "pr"` は Renovate のデフォルト値でもあるが、 PR を作成し、CI が通ってから PR をマージする。何がマージされたのかは、あとから PR の履歴で誰でも追える。

また、 `minimumReleaseAge` は、すべての更新に等しく効くわけではない。依存関係に既知の脆弱性が見つかると、Renovate は `vulnerabilityAlerts` という別経路で更新 PR を出すが、公式ドキュメントはこの経路では `minimumReleaseAge` のチェックをすべてバイパスすると明記している。検知した瞬間、猶予なしで PR が立つ。`minimumReleaseAge` が守ろうとしているのは「まだ誰も気づいていない悪意あるバージョン」を踏まないことで、脆弱性アラートはすでに問題が特定された後の話である。そこで律儀に 7 日待てば、既知の穴を塞ぐまでの時間を自分から延ばすだけになる。

この `vulnerabilityAlerts` を補強する選択肢もある。Renovate は `osvVulnerabilityAlerts` という機能を持っており、有効にすると OSV（Open Source Vulnerabilities、Google が中心になって運営する脆弱性データベース）を直接参照し、直接依存に脆弱性が見つかった時点で更新 PR を出す。`vulnerabilityAlerts` が参照する GitHub Advisory Database とは別の情報源であり、公式のベストプラクティスも、GitHub 側のアラートに加えてこちらも有効にすることを勧めている。ただし、本記事執筆のタイミングでは、まだ実験的機能となっている。

---

## customManagers で独自ファイルまで追従させる

Renovate が標準で解釈できるのは、`package.json` や `go.mod` のような、エコシステムごとに決まったマニフェスト形式だけである。CDN の URL 文字列にバージョンを埋め込む独自の書き方には、標準のマネージャーは反応しない。この隙間を埋めるのが `customManagers` で、正規表現でファイル中からバージョン情報を抜き出し、既存の datasource に照合させる仕組みである。

GitHub Actions のワークフロー内で、コンテナジョブの `image:` に digest 固定とバージョンコメントを書いている箇所を追従させる設定はこうなっている。

```json
{
  "customType": "regex",
  "managerFilePatterns": ["/^\\.github/workflows/.+\\.ya?ml$/"],
  "matchStrings": [
    "image:\\s+(?<depName>[a-z0-9./_-]+)@(?<currentDigest>sha256:[a-f0-9]{64})\\s+#\\s+(?<currentValue>v?\\d+\\.\\d+\\.\\d+)"
  ],
  "datasourceTemplate": "docker"
}
```

`depName` / `currentDigest` / `currentValue` は Renovate が解釈できる名前付きキャプチャグループで、`image: ghcr.io/foo/bar@sha256:xxxx # v1.2.3` のような行からこの 3 つを抜き出す。`datasourceTemplate` に `docker` を渡しているので、あとは通常の Docker イメージの更新と同じ経路で、新しいタグが出れば digest ごと更新 PR が作られる。`uses:` の Actions 参照は前述の `helpers:pinGitHubActionDigests` が別途カバーしているので、ここで拾っているのは同じワークフロー内でもコンテナジョブの `image:` だけである。

Dependabot には、この `customManagers` に相当する仕組みが存在しない。

---

## mise との相性

Renovate には `mise` マネージャーがネイティブに存在し、`mise.toml` の `[tools]` をそのまま読む。対応する backend も幅広く、[以前の記事](/blog/mise-backends/)で紹介した aqua、github、cargo、npm、pipx といった主要な backend はひととおり含まれている。

```toml
[tools]
prek = "0.4.9"
actionlint = "1.7.12"
```

この 2 行に対しては、customManagers の類は一切書いていない。`config:recommended` を extends しているだけで、prek と actionlint の新しいバージョンが出れば普通に更新 PR が来る。

`mise.lock` にはプラットフォームごとのチェックサムまで記録される。Renovate はその値を書き換える PR を出すだけで、実際にどのバイナリを使うかは常に diff と CI を経由する。以前の記事で見た registry の Tier や SLSA 検証が「どこから取ってくるか」を保証する仕組みだとすれば、Renovate はその上に「いつ取り込むか」を制御する仕組みを重ねる。両方揃って、更新の自動化とサプライチェーンの安全性が両立する。

---

## まとめ

Renovate が優れているのは「更新のタイミングを遅らせる」という猶予期間の長さ、automerge の対象、脆弱性アラートの扱いまで、自分の判断で層を積み重ねられる自由度にある。
