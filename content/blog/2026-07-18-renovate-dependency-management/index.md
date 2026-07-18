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

この発想自体は目新しいものではない。[Renovate](https://github.com/renovatebot/renovate) はずっと前から `minimumReleaseAge` という名前で同じことをやっている。GitHub がデフォルト機能にまで格上げしたということは、更新のタイミングを遅らせること自体が、標準的な防御手段だということでもある。

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

`pre-commit` の `enabled: true` は、Renovate の pre-commit マネージャー`.pre-commit-config.yaml` の `rev:` を追従させる機能である。何もしなければ、pre-commit hooks のバージョンだけがひっそりと古いまま取り残される。

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

`minimumReleaseAge` は、パッケージが公開されてから指定した期間が経過するまで、Renovate に更新 PR を出させない設定である。乗っ取られたメンテナのアカウントから悪意あるバージョンが公開されても、多くの場合は数日のうちに registry 側や研究者が気づいて取り下げる。取り込みを 7 日遅らせるということは、その発見までの時間を、更新を受け取る側がまるごと無料で得られるということだ。Renovate 公式の Upgrade Best Practices でも、automerge と組み合わせる場合はこの値を長めに（14 日を目安に）取ることを推奨している。7 日はその目安より短いが、automerge の対象を patch/minor に絞り、major を完全に除外することで猶予の短さを補っていると読める。

patch/minor の更新は、`minimumReleaseAge` を満たし、かつ CI が green であれば自動でマージされる。ここで効いているのが `automergeType: "pr"` で、これは Renovate のデフォルト値でもある。ブランチに直接 push する `branch` モードと違い、`pr` モードは通常どおり PR を作成し、CI が通ってから PR をマージする。automerge は人の確認を飛ばす設定ではなく、diff と CI 結果を残したまま、マージボタンを押す作業だけを自動化する設定になる。何が自動でマージされたのかは、あとから PR の履歴で誰でも追える。major の更新はこの automerge から外れており、7 日の猶予だけでは防ぎきれないリスクを、人の目というもう一段の防御に委ねている。

一つ補足しておきたいのは、`automergeType: "pr"` を選んでいても、実際にマージボタンを押しているのが必ずしも Renovate 自身とは限らない点である。`platformAutomerge` というオプションがデフォルトで有効になっており、GitHub 上で automerge が使える状態なら、Renovate は自分でポーリングして CI の完了を待つ代わりに、GitHub 自身の automerge 機能にマージ実行そのものを委譲する。効率は良くなるが、これが「CI が green になるまで待つ」という前提を実際に成立させるのは、リポジトリ側でブランチ保護ルールにより必須ステータスチェックを設定している場合に限られる。必須チェックが設定されていなければ、GitHub の automerge はチェック待ちの対象が一つもない状態としてすぐにマージしてしまいかねない。renovate.json だけを真似ても、GitHub 側の設定が伴っていなければ、想定した「猶予期間 + CI green」の防御は成立しない。

ただし `minimumReleaseAge` は、すべての更新に等しく効くわけではない。依存関係に既知の脆弱性が見つかると、Renovate は `vulnerabilityAlerts` という別経路で更新 PR を出すが、公式ドキュメントはこの経路では `minimumReleaseAge` のチェックをすべてバイパスすると明記している。検知した瞬間、猶予なしで PR が立つ。この renovate.json は `vulnerabilityAlerts` を上書きしていないので、デフォルトのこの挙動がそのまま効いている。7 日という設定が骨抜きになったように見えるが、筋は通っている。`minimumReleaseAge` が守ろうとしているのは「まだ誰も気づいていない悪意あるバージョン」を踏まないことで、脆弱性アラートはすでに問題が特定された後の話である。そこで律儀に 7 日待てば、既知の穴を塞ぐまでの時間を自分から延ばすだけになる。

この `vulnerabilityAlerts` を補強する選択肢もある。Renovate は `osvVulnerabilityAlerts` という実験的機能を持っており、有効にすると OSV（Open Source Vulnerabilities、Google が中心になって運営する脆弱性データベース）を直接参照し、直接依存に脆弱性が見つかった時点で更新 PR を出す。`vulnerabilityAlerts` が参照する GitHub Advisory Database とは別の情報源であり、公式のベストプラクティスも、GitHub 側のアラートに加えてこちらも有効にすることを勧めている。まだ experimental 扱いの機能で、この renovate.json ではまだ有効にしていない。

もう一つ、正直に書いておきたい限界がある。`minimumReleaseAge` も、Dependabot の cooldown も、守っているのは「Renovate や Dependabot が自分で出す更新 PR」の経路だけである。コーディングエージェントがそのリポジトリの外で `npm install some-new-package` や `pip install foo` を直接叩けば、この猶予はまるごと素通りされる。この経路まで塞ぐには、npm 自身が持つ min-release-age の設定や、Yarn 4.12 で導入された `npmMinimalAgeGate`（デフォルトで 1 日）のような、パッケージマネージャー側の設定を別途入れる必要があるという報告もある([参考記事](https://www.techi.com/github-dependabot-cooldown-install-layer-gap/))。Renovate の設定は、依存関係の更新という一つの経路を守るものであって、それだけで全てが守られるわけではない。

---

## config:best-practices というもう一段の選択肢

ここまでの設定は `config:recommended` を土台にしたものだが、Renovate のメンテナ自身は、実はさらに一歩踏み込んだ `config:best-practices` という preset を勧めている。中身は `config:recommended` に、次の preset を extends したものである。

```json
{
  "extends": [
    "config:recommended",
    "docker:pinDigests",
    "helpers:pinGitHubActionDigests",
    ":configMigration",
    ":pinDevDependencies",
    "abandonments:recommended",
    "security:minimumReleaseAgeNpm",
    ":maintainLockFilesWeekly"
  ]
}
```

`helpers:pinGitHubActionDigests` はすでに導入済みのものと同じである。残りは、このリポジトリの事情に照らして一つずつ検討する価値がある。

`:configMigration` は、Renovate 自身の設定オプションが非推奨や改名になったとき、renovate.json 側をそれに追従させる PR を自動で出す。ほぼノーコストで、外す理由が見当たらない追加である。

`abandonments:recommended` は、上流が長期間更新されていないパッケージを検知する。メンテナが離脱したパッケージは、アカウントの乗っ取りやパッケージ名の再登録によって攻撃者に狙われやすい対象でもあるので、更新が来ないこと自体を一つの兆候として扱うのは、ここまで見てきたサプライチェーンの話の延長線上にある。

`docker:pinDigests` は、Docker イメージの参照をタグから digest に固定する preset である。このリポジトリには Dockerfile も docker-compose.yml もないので、この preset 自体は何もしない。実際にこのリポジトリが唯一持っているコンテナ参照は `gitleaks.yaml` の `container.image` だが、これは GitHub Actions のジョブ内の container フィールドで、Renovate の GitHub Actions マネージャーが素で追従できる対象ではない。`customManagers` の節で見た正規表現マネージャーが必要だったのはこの理由からで、`docker:pinDigests` を足しても代わりにはならない。

`:pinDevDependencies` は devDependencies を厳密なバージョンに固定する preset である。いまの package.json は `dprint` を `^0.55.1` のようにキャレット付きで指定しているので、これを取り込むと運用が変わる。devDependencies まで固定したい場合の選択肢として覚えておくとよい。

`security:minimumReleaseAgeNpm` は、npm パッケージに限って `minimumReleaseAge: "3 days"` を設定する preset である。ここで注意したいのは、このリポジトリはすでにトップレベルで `minimumReleaseAge: "7 days"` を設定していることで、両方が効く状態で extends すると、より具体的な条件（npm datasource を名指しする packageRule）の方が優先され、npm パッケージだけ猶予が 3 日に短くなりうる。`config:best-practices` に乗り換える場合は、この重複を見越して自前の packageRule を書き直す必要がある。

`:maintainLockFilesWeekly` は、すでに有効にしている `lockFileMaintenance` の実行タイミングを週次に固定する preset である。

---

## customManagers で独自ファイルまで追従させる

Renovate が標準で解釈できるのは、`package.json` や `go.mod` のような、エコシステムごとに決まったマニフェスト形式だけである。dprint のプラグイン読み込みのように、CDN の URL 文字列にバージョンを埋め込む独自の書き方には、標準のマネージャーは反応しない。この隙間を埋めるのが `customManagers` で、正規表現でファイル中からバージョン情報を抜き出し、既存の datasource に照合させる仕組みである。

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

dprint のプラグインを追従させる設定は、もう一段手が込んでいる。

```json
{
  "customType": "regex",
  "managerFilePatterns": ["/(^|/)dprint\\.json$/"],
  "matchStrings": [
    "https://plugins\\.dprint\\.dev/(?<depName>[a-z0-9-]+)-(?<currentValue>\\d+\\.\\d+\\.\\d+)\\.wasm(?:@(?<currentDigest>[a-f0-9]{64}))?"
  ],
  "datasourceTemplate": "github-release-attachments",
  "packageNameTemplate": "dprint/dprint-plugin-{{depName}}",
  "versioningTemplate": "semver"
}
```

`dprint.json` はプラグイン本体を `https://plugins.dprint.dev/typescript-0.96.1.wasm@9c52244...` のような URL で読み込む。バージョンとチェックサムが URL 文字列そのものに埋め込まれている形式で、Renovate にとってはただの JSON 内の文字列でしかない。この正規表現でプラグイン名、バージョン、チェックサムを抜き出し、`github-release-attachments` datasource で `dprint/dprint-plugin-{{depName}}` という実際の GitHub リポジトリのリリースアセットと突き合わせる。更新 PR に貼られる新しいチェックサムは、CDN が返す値をそのまま信用したものではなく、リリースアセットの実ハッシュから算出し直したものになる。g-plane 系のプラグインだけタグに `v` が付くため、同じ発想のマネージャーがもう一枠、別パターンとして並んでいる。

最後の一つは、`.pre-commit-config.yaml` の `additional_dependencies` に書かれた `"dprint@0.55.2"` という pin を、npm datasource で追従させるマネージャーである。これがないと、この pin はただの文字列としてリポジトリに固定されたまま、誰かが手で気づいて直すまでずっと古くなり続ける。実際、いまの `package.json` は `dprint` を `^0.55.1` で指定していて、`.pre-commit-config.yaml` 側は `0.55.2` に固定されている。この差は、両者が別々の PR で独立に更新されるために生まれる自然なズレで、Renovate が両方に追従用の PR を上げ続ける限り、ズレは一時的なものにとどまる。

Dependabot には、この `customManagers` に相当する仕組みが存在しない。標準のエコシステムしか追従できないという制約は、対応エコシステムの数では埋め合わせられない種類の差になる。

---

## mise との相性

ここまでは、Renovate に独自ファイルを教え込む話だった。mise に関しては、事情が逆になる。

Renovate には `mise` マネージャーがネイティブに存在し、`mise.toml` の `[tools]` をそのまま読む。対応する backend も core、asdf、aqua、cargo、gem、github、go、npm、pipx、spm、ubi、vfox と幅広く、[以前の記事](/blog/mise-backends/)で紹介した aqua、github、cargo、npm、pipx といった主要な backend はひととおり含まれている。このリポジトリの mise.toml はこうなっている。

```toml
[tools]
prek = "0.4.9"
actionlint = "1.7.12"
```

この 2 行に対しては、customManagers の類は一切書いていない。`config:recommended` を extends しているだけで、prek と actionlint の新しいバージョンが出れば普通に更新 PR が来る。dprint のプラグイン URL には正規表現を書く必要があったのに対し、mise.toml はそのままで通じる。この非対称さが、mise との相性の良さの実体である。

ただし、Node だけは事情が違う。mise.toml の `[tools]` に `node = "..."` とは書かれていない。代わりに、mise の `idiomatic_version_file_enable_tools` という設定を通じて `.node-version` を読む形にしてある。`.node-version` は mise 固有のファイルではなく、もともと nodenv というツールが使っていた慣用ファイル形式で、mise はこの形式を「読める」設定を用意しているだけである。Renovate 側にも、この形式専用の `nodenv` マネージャーが別に存在し、renovate.json ではこれを明示的に有効にしている。

```json
{
  "nodenv": {
    "enabled": true
  }
}
```

`.node-version` にはメジャーバージョンの数字だけを書く運用にしていて、パッチバージョンの追従とチェックサムの再計算は、Renovate ではなく [mise backends の記事](/blog/mise-backends/#miselockツールバージョンのロックファイル)で紹介した `mise.lock` を週次で再生成するワークフローに任せている。Renovate はメジャー更新の提案だけを担当し、`mise.toml` や `.node-version` を書き換える PR を出したときは、そのブランチに対して同じワークフローが `mise.lock` の更新まで追従 commit する。1 つのバージョンアップが、提案は Renovate、固定は週次ジョブという 2 段構えで着地する形になっている。

`mise.lock` にはプラットフォームごとのチェックサムまで記録される。Renovate はその値を書き換える PR を出すだけで、実際にどのバイナリを使うかは常に diff と CI を経由する。以前の記事で見た registry の Tier や SLSA 検証が「どこから取ってくるか」を保証する仕組みだとすれば、Renovate はその上に「いつ取り込むか」を制御する仕組みを重ねる。両方揃って、更新の自動化とサプライチェーンの安全性が両立する。

---

## まとめ

Renovate を選ぶ理由は、機能の数ではなく設定の自由度にある。

1. **config:recommended + helpers:pinGitHubActionDigests + lockFileMaintenance**: extends するだけで、Dependency Dashboard、Actions の digest 固定、ロックファイルの定期再解決が揃う。導入自体も、依存関係にはまだ手を付けない onboarding PR をレビューしてマージするだけで始められる
2. **minimumReleaseAge + automerge の使い分け**: patch/minor は猶予期間と CI green を条件に自動マージし、major は人の目に回す。ただし脆弱性アラート経由の更新はこの猶予自体をバイパスし、コーディングエージェントが直接叩く install コマンドまでは塞がない。automerge の実行自体も `platformAutomerge` により GitHub 側に委譲されるので、ブランチ保護ルールとセットで考える必要がある
3. **customManagers**: Dependabot が追従できない独自ファイル形式（dprint のプラグイン URL や pre-commit の pin）にも、正規表現と既存の datasource を組み合わせて対応できる
4. **mise マネージャー**: mise.toml はそのままで追従対象になり、customManagers を書く必要すらない。慣用ファイルに逃がした Node のバージョンだけは nodenv マネージャーが拾い、mise.lock の再生成は別ジョブに委ねる
5. **config:best-practices という次の一歩**: `abandonments:recommended` による放棄パッケージの検知や `:configMigration` など、`config:recommended` だけでは拾えない項目がまとまっている。ただし `security:minimumReleaseAgeNpm` のように、自前で設定した値と競合しうる preset も含まれるので、中身を確認してから乗り換える

自分のリポジトリの renovate.json は、[dope-corp/template](https://github.com/dope-corp/template) の設定に、この mise 連携の部分を足しただけのものである。まずは `config:recommended` を extends した上で `minimumReleaseAge` を足しておくだけでも、あとから automerge や customManagers、そして `config:best-practices` を積み上げていくときの土台になる。
