# Portfolio

[https://msageha.net](https://msageha.net) のソースコード。
[Astro](https://astro.build/) 製のポートフォリオ + ブログサイト。

## 技術スタック

- **フレームワーク**: Astro 7 (静的サイト生成)
- **UI**: React 19 (islands) + Tailwind CSS 4
- **コンテンツ**: Markdown (Astro Content Collections, `content/blog/`)
- **検索**: [Pagefind](https://pagefind.app/) (ビルド時に静的インデックスを生成)
- **日本語改行**: [BudouX](https://github.com/google/budoux)
- **デプロイ**: Cloudflare (Git 連携ビルド、custom domain: msageha.net)

## 開発

このリポジトリは [mise](https://mise.jdx.dev/) の利用を前提としている。
Node.js 26 が必要で、バージョンは `.nvmrc` を単一の情報源としており
(`.mise.toml` の設定経由で `.nvmrc` が読まれる、Cloudflare Build も同様)、
`prek` (pre-commit hook 管理) と `actionlint` は mise 管理のツールとしてインストールされる。

```shell
mise trust    # 初回のみ: このディレクトリの mise.toml を信頼する
mise install  # tools (node, prek, actionlint) をインストールし、pre-commit hook をセットアップする
npm install
```

```shell
npm run dev        # 開発サーバー (http://localhost:4321)
npm run build      # 本番ビルド (dist/) + Pagefind インデックス生成
npm run preview    # ビルド結果のプレビュー
npm run typecheck  # astro check + tsc
npm run format     # prettier チェック
```

上記の npm scripts は `mise run <task>` (例: `mise run dev`) でも実行できる。詳細は [タスク](#タスク) を参照。

検索機能 (Pagefind) は静的インデックスに依存するため、`npm run dev` では動作しない。
`npm run build && npm run preview` で確認する。

## Pre-commit フック

Git hook は [prek](https://github.com/j178/prek) (`.pre-commit-config.yaml`) で一元管理する。
`mise install` 実行時に自動で `prek install` が走り、`pre-commit` / `commit-msg` 両方の hook が有効になる。

- pre-commit: 汎用チェック (trailing-whitespace 等)、actionlint、prettier、typecheck (`astro check` + `tsc`)
- commit-msg: [commitlint](https://commitlint.js.org/) ([Conventional Commits](https://www.conventionalcommits.org/) 準拠チェック)

CI (`.github/workflows/prek.yaml`) でも push / pull request 時に `prek run --all-files` を実行し、全ファイルに対して同じチェックを強制する。

## タスク

タスクは `mise run <task>` で実行する。

<!-- mise-tasks -->

## `build`

- **Usage**: `build`

Build the site for production

## `dev`

- **Usage**: `dev`

Start the Astro dev server

## `docs`

- **Usage**: `docs`

Sync the task list embedded in README.md with mise.toml

## `format`

- **Usage**: `format`

Check formatting with prettier

## `format:fix`

- **Usage**: `format:fix`

Fix formatting with prettier

## `preview`

- **Usage**: `preview`

Preview the production build

## `typecheck`

- **Usage**: `typecheck`

Run astro check and tsc
<!-- /mise-tasks -->

## ブログ記事の追加

`content/blog/<dir>/index.md` を作成する。frontmatter:

```yaml
---
title: "記事タイトル"
date: "2026-01-01"
slug: "url-slug"
tags: ["タグ1", "タグ2"]
description: "記事の説明"
---
```

## CI

- `.github/workflows/prek.yaml`: push / pull request 時に、`.mise.toml` 通りのツールで `.pre-commit-config.yaml` の全フックを `prek run --all-files` で実行する。
- `.github/workflows/gitleaks.yaml`: push / pull request 時に、コミット履歴全体を対象に [gitleaks](https://github.com/gitleaks/gitleaks) でシークレットスキャンを行う。

依存関係の更新は [Renovate](https://docs.renovatebot.com/) (`renovate.json`) が担う。`.mise.toml` の tool バージョン (prek / actionlint) も Renovate の mise manager が bump する。

## デプロイ

main ブランチへの push で Cloudflare の Git 連携ビルドが走り、自動デプロイされる。
Cloudflare 側のビルド設定:

- Build command: `npm run build`
- Build output directory: `dist`
- Node バージョン: `.nvmrc` (26.4.0) を自動検出
