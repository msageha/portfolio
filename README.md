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

Node.js 26 が必要 ([mise](https://mise.jdx.dev/) を使う場合は `.mise.toml` で自動選択)。

```shell
npm install
npm run dev        # 開発サーバー (http://localhost:4321)
npm run build      # 本番ビルド (dist/) + Pagefind インデックス生成
npm run preview    # ビルド結果のプレビュー
npm run typecheck  # astro check + tsc
npm run format     # prettier チェック
```

検索機能 (Pagefind) は静的インデックスに依存するため、`npm run dev` では動作しない。
`npm run build && npm run preview` で確認する。

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

## デプロイ

main ブランチへの push で Cloudflare の Git 連携ビルドが走り、自動デプロイされる。
Cloudflare 側のビルド設定:

- Build command: `npm run build`
- Build output directory: `dist`
- Node バージョン: `.nvmrc` (26.4.0) を自動検出
