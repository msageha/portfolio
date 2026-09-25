# Portfolio

[![CI](https://github.com/msageha/portfolio/actions/workflows/ci.yaml/badge.svg?event=pull_request)](https://github.com/msageha/portfolio/actions/workflows/ci.yaml)
[![gitleaks](https://github.com/msageha/portfolio/actions/workflows/gitleaks.yaml/badge.svg)](https://github.com/msageha/portfolio/actions/workflows/gitleaks.yaml)
[![mise-lock](https://github.com/msageha/portfolio/actions/workflows/mise-lock.yaml/badge.svg)](https://github.com/msageha/portfolio/actions/workflows/mise-lock.yaml)

[https://msageha.net](https://msageha.net) のソースコード。
[Astro](https://astro.build/) 製のポートフォリオ + ブログサイト。

## 技術スタック

- **フレームワーク**: Astro 7 (静的サイト生成)
- **UI**: React 19 (islands) + Tailwind CSS 4
- **コンテンツ**: Markdown (Astro Content Collections, `content/blog/`)
- **検索**: [Pagefind](https://pagefind.app/) (ビルド時に静的インデックスを生成)
- **日本語改行**: [BudouX](https://github.com/google/budoux) (ビルド時に Markdown の文節境界へ `<wbr>` を挿入する Sätteri plugin。`src/lib/budoux-hast-plugin.ts`)
- **OG 画像**: [satori](https://github.com/vercel/satori) + [sharp](https://sharp.pixelplumbing.com/) でビルド時に生成 (`src/pages/og/`)
- **RSS / sitemap**: `@astrojs/rss` と自前の `src/pages/sitemap.xml.ts` (記事の `updated` / `date` を lastmod に使う)
- **デプロイ**: Cloudflare (Git 連携ビルド、custom domain: msageha.net)

## 開発

このリポジトリは [mise](https://mise.jdx.dev/) の利用を前提としている。
Node.js 26 が必要で、バージョンは `.node-version` (メジャーのみ指定) を単一の情報源としており
(`mise.toml` の設定経由で `.node-version` が読まれる、Cloudflare Build も同様)、
`prek` (pre-commit hook 管理)・`actionlint`・`dprint` (ts/tsx/astro/css/js/mjs/md/json/yaml/toml/svg フォーマッタ)・`wrangler` (Cloudflare CLI) は mise 管理のツールとしてインストールされる。

```shell
mise trust    # 初回のみ: このディレクトリの mise.toml を信頼する
mise install  # tools (node, prek, actionlint, dprint, wrangler) をインストールし、pre-commit hook をセットアップする
npm ci
```

```shell
npm run dev        # 開発サーバー (http://localhost:4321)
npm run build      # 本番ビルド (dist/) + Pagefind インデックス生成
npm run preview    # ビルド結果のプレビュー
npm run typecheck  # astro check + tsc
npm run lint       # eslint (src/ と設定ファイル)
npm run fmt:check  # dprint によるフォーマットチェック (npm run fmt で修正)
```

リポジトリ固有の補助タスクは `mise run <task>` で実行する。詳細は [タスク](#タスク) を参照。

検索機能 (Pagefind) は静的インデックスに依存するため、`npm run dev` では動作しない。
`npm run build && npm run preview` で確認する。

## Pre-commit フック

Git hook は [prek](https://github.com/j178/prek) (`.pre-commit-config.yaml`) で一元管理する。
`mise install` 実行時に自動で `prek install` が走り、`pre-commit` / `commit-msg` / `pre-push` の hook が有効になる。

- pre-commit: 汎用チェック (trailing-whitespace 等)、actionlint、ESLint、[dprint](https://dprint.dev/) (`.ts` / `.tsx` / `.astro` / `.css` / `.js` / `.mjs` / `.md` / `.json` / `.yaml` / `.toml` / `.svg`)、typecheck (`astro check` + `tsc`)、`mise.toml` 変更時の README タスク一覧の同期
- commit-msg: [commitlint](https://commitlint.js.org/) ([Conventional Commits](https://www.conventionalcommits.org/) 準拠チェック)
- pre-push: `npm run build` (Markdown 変換・OG 画像・Pagefind を含むビルドが通ることを push 前に確認する)

CI (`.github/workflows/prek.yaml`) でも pull request 時に `prek run --all-files` を実行し、全ファイルに対して同じチェックを強制する。

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
## `clean`

- **Usage:** `clean`

Remove build artifacts (dist/, .astro/)

## `cleanup-previews`

- **Usage:** `cleanup-previews`

Delete Cloudflare Pages preview deployments (latest per branch cannot be deleted and is skipped)

## `docs`

- **Usage:** `docs`

Sync the task list embedded in README.md with mise.toml

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

`slug` (英小文字・数字・ハイフン) が公開 URL (`/blog/<slug>/`) になる。`tags` は `/blog/tags/<tag>/` の URL にもなるため `; , / ? : @ & = + $ # %` は使えない。`description` は一覧・OGP・RSS の説明文に使われる。本文にはタイトルの h1 を書かない (ページ側が出力する)。

## CI

- `.github/workflows/ci.yaml`: pull request 時に以下の reusable workflow を並列実行し、1 つでも失敗したら run 全体をキャンセルする。
  - `verify.yaml`: `npm ci` → `npm audit --audit-level=high` → `npm run build`。
  - `prek.yaml`: `mise.toml` 通りのツールで `.pre-commit-config.yaml` の全フックを `prek run --all-files` で実行する。
  - `gitleaks.yaml`: コミット履歴全体を対象に [gitleaks](https://github.com/gitleaks/gitleaks) でシークレットスキャンを行う (毎週の schedule でも main を再スキャンする)。
- `.github/workflows/mise-lock.yaml`: `mise.toml` に pin されたバージョンのまま `mise lock` を実行し、
  `mise.lock` の checksum/URL を最新化する。`mise.toml` のバージョン自体の更新は Renovate に任せる。
  - `pull_request` (`mise.toml` を変更する PR、主に Renovate が対象): 同じ PR のブランチに直接 commit して追従させる。
  - 毎週月曜 (`schedule`) / `workflow_dispatch`: 差分があれば `chore/mise-lock` ブランチで PR を作成する。
    `GITHUB_TOKEN` で作成した PR の CI は承認待ち状態になるため、write 権限者が Actions タブから
    承認して実行する必要がある。

依存関係の更新は [Renovate](https://docs.renovatebot.com/) (`renovate.json`) が担う。`mise.toml` の tool バージョン (prek / actionlint / dprint / wrangler) も Renovate の mise manager が bump する。

## デプロイ

main ブランチへの push で Cloudflare の Git 連携ビルドが走り、自動デプロイされる。
Cloudflare 側のビルド設定:

- Build command: `npm run build`
- Build output directory: `dist`
- Node バージョン: `.node-version` (メジャーのみ指定、現在 26) を自動検出
