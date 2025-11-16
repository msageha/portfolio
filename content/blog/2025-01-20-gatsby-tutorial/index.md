---
title: "GatsbyでブログをMDXで構築する方法"
date: "2025-01-20"
slug: "gatsby-mdx-blog-tutorial"
tags: ["Gatsby", "MDX", "React", "TypeScript"]
description: "Gatsby v5とMDXを使ってブログを構築する手順を解説します。検索機能やタグ機能の実装方法も紹介。"
---

# GatsbyでブログをMDXで構築する方法

Gatsby v5とMDXを使って、モダンなブログシステムを構築する方法を解説します。

## なぜMDXを使うのか

MDXは、Markdownの中でReactコンポーネントを使えるフォーマットです。

### メリット

1. **コンポーネントの埋め込み**: インタラクティブな要素を記事に追加可能
2. **型安全**: TypeScriptとの統合が優れている
3. **柔軟性**: Markdownの簡潔さとReactの強力さを両立

## 必要なパッケージ

```bash
npm install gatsby-plugin-mdx @mdx-js/react gatsby-remark-images
```

## 設定ファイル

`gatsby-config.js`に以下を追加します：

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
}
```

## ディレクトリ構造

```
content/
  blog/
    2025-01-15-post/
      index.md
    2025-01-20-post/
      index.md
```

## フロントマター

各記事の先頭に以下のようなメタデータを記述します：

```markdown
---
title: "記事タイトル"
date: "2025-01-20"
slug: "article-slug"
tags: ["tag1", "tag2"]
description: "記事の説明"
---
```

## 検索機能の実装

FlexSearchを使った高速な全文検索を実装できます。

`gatsby-plugin-local-search`を使うことで、ビルド時にインデックスを生成し、クライアントサイドで高速に検索できます。

## まとめ

GatsbyとMDXを組み合わせることで、柔軟で強力なブログシステムを構築できます。

次回は、タグページやカテゴリーページの実装について解説します！
