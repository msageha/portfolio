# Portfolio

[![CI](https://github.com/msageha/portfolio/actions/workflows/ci.yaml/badge.svg?event=pull_request)](https://github.com/msageha/portfolio/actions/workflows/ci.yaml)
[![gitleaks](https://github.com/msageha/portfolio/actions/workflows/gitleaks.yaml/badge.svg)](https://github.com/msageha/portfolio/actions/workflows/gitleaks.yaml)

[https://msageha.net](https://msageha.net) のソースコード。
[Astro](https://astro.build/) 製のポートフォリオ + ブログサイト。

## 技術スタック

- **フレームワーク**: Astro 7 (静的サイト生成)
- **UI**: Astro + React 19 (TSX はビルド時に静的な HTML として出力し、ブラウザでの処理は素の TypeScript で書く) + Tailwind CSS 4
- **コンテンツ**: Markdown (Astro Content Collections, `content/blog/`)
- **検索**: [Pagefind](https://pagefind.app/) (ビルド時に静的インデックスを生成)
- **日本語改行**: [BudouX](https://github.com/google/budoux) (ビルド時に Markdown の文節境界へ `<wbr>` を挿入する Sätteri plugin。`src/lib/budouxHastPlugin.ts`)
- **OG 画像**: [satori](https://github.com/vercel/satori) + [sharp](https://sharp.pixelplumbing.com/) でビルド時に生成 (`src/pages/og/`)
- **RSS / sitemap**: `@astrojs/rss` と自前の `src/pages/sitemap.xml.ts` (記事の `updated` / `date` を lastmod に使う)
- **デプロイ**: Cloudflare (Git 連携ビルド、custom domain: msageha.net)

## 開発

このリポジトリは [mise](https://mise.jdx.dev/) の利用を前提としている。
Node.js 26 が必要で、バージョンは `.node-version` (メジャーのみ指定) を単一の情報源としており
(`mise.toml` の設定経由で `.node-version` が読まれる、Cloudflare Build も同様)、
`prek` (pre-commit hook 管理)・`actionlint`・`shellcheck` (actionlint が workflow の `run:` 検査に使う)・`dprint` (md/json/yaml/toml フォーマッタ)・`typos`・`zizmor`・`gitleaks`・`wrangler` (Cloudflare CLI) は mise 管理のツールとしてインストールされる。

```shell
mise trust    # 初回のみ: このディレクトリの mise.toml を信頼する
mise install  # tools (node, prek, actionlint, shellcheck, dprint, typos, zizmor, gitleaks, wrangler) をインストールし、Git hook をセットアップする
npm ci
```

```shell
npm run dev        # 開発サーバー (http://localhost:4321)
npm run build      # 本番ビルド (dist/) + Pagefind インデックス生成
npm run preview    # ビルド結果のプレビュー
mise run check     # 型検査 (astro check・tsc) と lint・整形の検査 (Biome)
mise run format    # Biome で整形し、import と CSS のプロパティを並べ替える
```

TypeScript・JavaScript・Astro・CSS は [Biome](https://biomejs.dev/) が lint と整形を受け持つ。lint は安定版のルールをグループごとにすべて有効にし、このリポジトリに合わないルールだけを理由付きで `biome.jsonc` から外している。重大度が info の診断 (マジックナンバーなど) も検査を失敗させる (Biome は info では失敗しないので、`mise run check` が件数を数える)。型検査は `astro/tsconfigs/strictest` に従い、astro check は hint も失敗として扱う。

リポジトリ固有の補助タスクは `mise run <task>` で実行する。詳細は [タスク](#タスク) を参照。

検索機能 (Pagefind) は静的インデックスに依存するため、`npm run dev` では動作しない。
`npm run build && npm run preview` で確認する。

## Pre-commit フック

Git hook は [prek](https://github.com/j178/prek) (`.pre-commit-config.yaml`) で一元管理する。
`mise install` 実行時に自動で `prek install` が走り、`pre-commit` / `commit-msg` / `pre-push` の hook が有効になる。

- pre-commit: 汎用チェック (trailing-whitespace 等・`main` への直接の commit の拒否)、typos (つづり)、actionlint と zizmor (GitHub Actions の workflow)、[dprint](https://dprint.dev/) (`.md` / `.json` / `.yaml` / `.toml`)、`mise run format` と `mise run check`、gitleaks (シークレット)、`mise.toml` 変更時の README タスク一覧の同期
- pre-push: rebase などで pre-commit を経ない commit も検査できるよう、ファイルを書き換えない pre-commit の hook (typos・actionlint・zizmor・`mise run check` など) をもう一度実行する。加えて `npm run build` を実行し、Markdown 変換・OG 画像・Pagefind を含むビルドが通ることを確かめる
- commit-msg: [commitlint](https://commitlint.js.org/) ([Conventional Commits](https://www.conventionalcommits.org/) 準拠チェック)

CI (`.github/workflows/prek.yaml`) でも pull request 時に `prek run --all-files` を実行し、pre-commit の hook を全ファイルに対して実行する。gitleaks の hook は staged の変更だけを見るので CI では skip し、履歴は `gitleaks.yaml` が走査する。build は `verify.yaml`、PR の題は `.github/workflows/pr-title.yaml` が commitlint で検査する。

## 依存パッケージの install script ポリシー

npm の `allowScripts` 機構 ([RFC 868](https://github.com/npm/rfcs/pull/868)、npm >= 11.16) を使い、依存パッケージの install script (preinstall / install / postinstall) は `package.json` の `allowScripts` に列挙したパッケージだけに許可する。さらに `.npmrc` の `strict-allow-scripts=true` により、未承認の install script を持つ依存が入ると install は警告ではなく hard fail する (ローカル・CI・Cloudflare ビルドとも)。

install script が必要な依存を新たに追加して install が `ESTRICTALLOWSCRIPTS` で失敗した場合は、script の内容を確認したうえで次のコマンドで承認する。

```shell
npm approve-scripts <pkg> --no-allow-scripts-pin
```

エントリはバージョン pin なし (name-only) で登録する。pin 付きにすると Renovate がエントリを追従できず、依存更新のたびに install が壊れるためである。バージョンの固定と更新猶予は lockfile と Renovate の `minimumReleaseAge` (7 日) が担う。

## タスク

タスクは `mise run <task>` で実行する。

<!-- dprint-ignore-start -->
<!-- mise-tasks -->
## `check`

- **Usage:** `check`

Type-check, lint and check formatting (astro check / tsc / biome)

## `clean`

- **Usage:** `clean`

Remove build artifacts (dist/, .astro/)

## `cleanup-previews`

- **Usage:** `cleanup-previews`

Delete all Cloudflare Pages preview deployments

## `docs`

- **Usage:** `docs`

Sync the task list embedded in README.md with mise.toml

## `format`

- **Usage:** `format`

Format sources and sort imports and CSS properties with biome

## `install`

- **Usage:** `install`

Install npm dependencies
<!-- /mise-tasks -->
<!-- dprint-ignore-end -->

## ブログ記事の追加

`content/blog/<dir>/index.md` を作成する。frontmatter (`updated` と `tags` 以外は必須。schema は `src/content.config.ts`):

```yaml
---
title: "記事タイトル"
date: "2026-01-01"
updated: "2026-01-02" # 任意。sitemap の lastmod と dateModified に使われる
slug: "url-slug"
tags: ["タグ1", "タグ2"]
description: "記事の説明"
---
```

`slug` (英小文字・数字・ハイフン) が公開 URL (`/blog/<slug>/`) になる。`tags` は `/blog/tags/<tag>/` の URL にもなるため `; , / ? : @ & = + $ # %` は使えず、`.` / `..` だけのタグも使えない。`description` は一覧・OGP・RSS の説明文に使われる。本文にはタイトルの h1 を書かない (ページ側が出力する)。

## CI

- `.github/workflows/ci.yaml`: pull request 時に以下の reusable workflow を並列実行し、1 つでも失敗したら run 全体をキャンセルする。
  - `verify.yaml`: `npm ci` → `npm audit --audit-level=high` → `npm run build`。
  - `prek.yaml`: `mise.toml` 通りのツールで `.pre-commit-config.yaml` の全フックを `prek run --all-files` で実行する。
  - `gitleaks.yaml`: コミット履歴全体を対象に [gitleaks](https://github.com/gitleaks/gitleaks) でシークレットスキャンを行う (毎週の schedule でも main を再スキャンする)。
- `.github/workflows/pr-title.yaml`: PR の題を commitlint で検査する (複数の commit がある PR を squash merge するときの件名になるため)。

依存関係の更新は [Renovate](https://docs.renovatebot.com/) (`renovate.json`) が担う。`mise.toml` の tool バージョン (prek / actionlint / shellcheck / dprint / typos / zizmor / gitleaks / wrangler) も Renovate の mise manager が bump し、同じ PR で `mise.lock` も更新する。`.node-version` (メジャーのみ) に対応する node のパッチ版は、週次の lock file maintenance が `mise.lock` 上で最新にする。

## デプロイ

main ブランチへの push で Cloudflare の Git 連携ビルドが走り、自動デプロイされる。
Cloudflare 側のビルド設定:

- Build command: `npm run build`
- Build output directory: `dist`
- Node バージョン: `.node-version` (メジャーのみ指定、現在 26) を自動検出
