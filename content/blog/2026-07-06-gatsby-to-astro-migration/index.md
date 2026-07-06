---
title: "Gatsby から Astro へブログを移行した手順と注意点"
date: "2026-07-06"
slug: "gatsby-to-astro-migration"
tags: ["Astro", "Gatsby", "React", "TypeScript", "移行"]
description: "メンテナンスが事実上停止した Gatsby から Astro 7 へ、このサイトを実際に移行した手順を解説。Content Collections への移行、React コンポーネントの island 化、Pagefind・BudouX の移植、ハマったポイントまで実体験ベースでまとめます。"
---

# Gatsby から Astro へブログを移行した手順と注意点

このサイトはもともと [Gatsby v5 で構築していました](/blog/gatsby-mdx-blog-tutorial/)が、先日 Astro 7 へ全面移行しました。

きっかけは Gatsby の開発が事実上止まっていることです。2023 年の Netlify による買収後、コアチームはほぼ解散し、リリースは散発的な fix のみ。React 19 への対応予定もなく、公式リポジトリには「Is GatsbyJS Officially Dead?」という Discussion が立っている状態です。プラグインエコシステムの崩壊も進んでおり、放置するほど依存関係が壊れやすくなると判断して移行に踏み切りました。

この記事では、実際に行った移行の手順と、ハマったポイントをまとめます。

---

## なぜ Astro にしたのか

移行先の候補は Astro と Next.js でした。

|                      | Astro                          | Next.js                      |
| -------------------- | ------------------------------ | ---------------------------- |
| 得意分野             | コンテンツ中心の静的サイト     | 認証・DB ありのアプリ        |
| デフォルトの JS 出力 | ゼロ                           | ルーター + hydration (~40KB) |
| Markdown ブログ      | Content Collections が組み込み | 自前で構築が必要             |
| React 資産の再利用   | islands として部分的に利用可   | そのまま                     |

このサイトはポートフォリオ + Markdown ブログという純粋な静的サイトで、認証もリアルタイム機能もありません。この用途なら Astro が適任です。デフォルトで JavaScript ゼロの HTML を出力し、インタラクティブな部分だけを「island」として hydrate する設計なので、コンテンツサイトとの相性が抜群です。

決め手はもう一つあって、既存の React コンポーネント資産を捨てなくてよい点です。`@astrojs/react` を使えば、Gatsby 時代の `.tsx` コンポーネントをほぼそのまま island として動かせます。一括書き換えのリスクを避けつつ、あとから徐々に `.astro` へ置き換えていく戦略が取れます。

---

## 移行前後の構成

|                | 移行前                      | 移行後              |
| -------------- | --------------------------- | ------------------- |
| フレームワーク | Gatsby 5                    | Astro 7             |
| UI             | React 18 (全体 hydrate)     | React 19 (islands)  |
| CSS            | Tailwind CSS 3              | Tailwind CSS 4      |
| コンテンツ     | gatsby-plugin-mdx + GraphQL | Content Collections |
| 画像最適化     | gatsby-plugin-image         | astro:assets        |
| 検索           | Pagefind                    | Pagefind (そのまま) |
| Node.js        | 22                          | 26                  |

検索の [Pagefind](https://pagefind.app/) と日本語改行の [BudouX](https://github.com/google/budoux) は、どちらもフレームワーク非依存なのでそのまま持ち越せました。この「周辺ツールがロックインされていなかった」ことが移行コストを大きく下げてくれました。

---

## 手順 1: 依存関係の入れ替え

まず package.json から Gatsby 系の依存をすべて削除し、Astro 系に入れ替えます。

```bash
npm install astro @astrojs/react @astrojs/sitemap \
  react react-dom tailwindcss @tailwindcss/vite sharp
npm install -D @astrojs/check typescript
```

astro.config.mjs は驚くほど短くなります。Gatsby で 70 行あった gatsby-config は、これだけになりました。

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://msageha.net",
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

Tailwind 4 は Vite プラグイン化されたので、tailwind.config.js と postcss.config.js は削除できます。CSS 側も `@tailwind` ディレクティブ 3 行が `@import "tailwindcss";` の 1 行になります。

注意点として、Astro を入れると package.json に `"type": "module"` が付くため、`module.exports` を使っている設定ファイル (commitlint など) は ESM の `export default` に書き換える必要があります。

---

## 手順 2: GraphQL から Content Collections へ

Gatsby で一番の負債だった GraphQL データ層は、Content Collections に置き換わります。`content/blog/*/index.md` という既存のディレクトリ構造は一切変えずに移行できました。

```ts
// src/content.config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    slug: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
  }),
});

export const collections = { blog };
```

zod でスキーマを定義するので、frontmatter の型チェックがビルド時に走ります。Gatsby では実行時まで気づけなかった frontmatter の不備が、ビルドエラーとして即座に検出されるようになったのは地味に嬉しい改善です。

記事一覧の取得は、GraphQL クエリからただの関数呼び出しになります。

```astro
---
// src/pages/blog/index.astro
import { getCollection } from "astro:content";

const posts = (await getCollection("blog")).sort(
  (a, b) => b.data.date.getTime() - a.data.date.getTime(),
);
---
```

記事ページの生成も `getStaticPaths` で素直に書けます。URL を変えないよう、ディレクトリ名ではなく frontmatter の `slug` を使う点だけ注意しました。

```astro
---
// src/pages/blog/[slug].astro
import { getCollection, render } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
```

Markdown 内のテーブル (GFM) は Astro がデフォルトで対応しているので、remark-gfm の明示的な設定も不要になりました。見出しへの id 付与も自動で、日本語見出しもそのまま id になるため、目次コンポーネントは無修正で動きました。

---

## 手順 3: React コンポーネントの island 化

Gatsby 固有の API を使っている箇所だけ書き換えます。対応表はこの通りです。

| Gatsby                                   | Astro (React island)               |
| ---------------------------------------- | ---------------------------------- |
| `<Link to="/blog">`                      | `<a href="/blog">`                 |
| `navigate(url)`                          | `window.location.assign(url)`      |
| `useStaticQuery` + `GatsbyImage`         | `getImage()` の結果を props で渡す |
| `Head` エクスポート                      | レイアウト `.astro` の `<head>`    |
| `gatsby-browser.js` の `wrapRootElement` | island のルートで ErrorBoundary    |

ページ側は `.astro` ファイルにして、インタラクティブな React コンポーネントに `client:load` を付けるだけです。

```astro
<App client:load profileImage={profileImage} />
```

画像最適化は gatsby-plugin-image の代わりに `astro:assets` の `getImage()` を使い、最適化済み画像の URL を island に props として渡す形にしました。

```astro
---
import { getImage } from "astro:assets";
import profileSource from "../images/profile.jpg";

const profile = await getImage({ src: profileSource, width: 800, format: "webp" });
---
```

逆に、`client:*` ディレクティブを付けなければ React コンポーネントは**ビルド時に静的 HTML として出力され、クライアントに JS が一切送られません**。フッターのような静的なコンポーネントはこの扱いにするだけで JS が減ります。この「同じコンポーネントを島にするか静的にするかをページ側で選べる」のが Astro の React 統合の良いところです。

---

## 手順 4: Pagefind と BudouX の移植

### Pagefind

検索の Pagefind はビルド後の HTML を対象に静的インデックスを作る仕組みなので、フレームワークが変わっても影響を受けません。ビルドコマンドの出力先を変えるだけです。

```json
{
  "scripts": {
    "build": "astro build && pagefind --site dist"
  }
}
```

Gatsby の出力先は `public/` でしたが、Astro は `dist/` です。後述しますが、この違いはデプロイ設定にも影響します。

### BudouX

日本語の読みやすい位置での改行を実現する BudouX は、Gatsby 時代は MDX のコンポーネントマッピングで `<p>` や見出しをラップして実現していました。Astro では Markdown がサーバー側で純粋な HTML になるため、レンダリング後の DOM を処理する小さなクライアントスクリプトに置き換えました。

```astro
<script>
  import { applyBudouX } from "../../lib/budoux-content";

  const content = document.querySelector(".mdx-content");
  if (content) {
    applyBudouX(content);
  }
</script>
```

`applyBudouX` は TreeWalker でテキストノードを走査し、BudouX のパース結果に従って `<wbr>` を挿入するだけの 40 行ほどの関数です。MDX 用の React コンポーネント 2 ファイル (約 160 行) がこれで置き換わったので、コードはむしろ減りました。

---

## ハマったポイント

### `@vite-ignore` が dev サーバーで効かない

一番ハマったのはここです。Pagefind の JS はビルド後にしか存在しないため、ランタイムで動的 import します。Vite にバンドルさせないよう `/* @vite-ignore */` を付けるのが定石ですが、`.tsx` ファイル内ではこれが**効きません**。

```ts
// これは dev サーバーでエラーになる
const pagefind = await import(/* @vite-ignore */ "/pagefind/pagefind.js");
```

Vite は `.tsx` の変換に esbuild を使い、その過程でコメントが除去されるためです。`astro build` は通るのに `astro dev` だけ `Failed to resolve import` で落ちるという分かりにくい壊れ方をします。

回避策は、パスをいったん変数に入れて静的解析の対象外にすることです。

```ts
// パスを変数経由にすると Vite は解決を試みない
const pagefindPath = "/pagefind/pagefind.js";
const pagefind = await import(/* @vite-ignore */ pagefindPath);
```

### `astro dev` がデーモンとして起動する

Astro 7 の dev サーバーはバックグラウンドのデーモンとして起動します。Ctrl+C で止める従来の感覚でいると「ポートが使用中」で混乱するので、専用コマンドを覚えておく必要があります。

```bash
astro dev status  # 稼働状況の確認
astro dev logs    # ログの表示
astro dev stop    # 停止
```

### verbatimModuleSyntax による型 import エラー

Astro 推奨の tsconfig (`astro/tsconfigs/strict`) は `verbatimModuleSyntax` が有効なため、型だけの import は `import type` にしないとエラーになります。

```ts
// Before: エラーになる
import React, { Component, ReactNode } from "react";

// After
import React, { Component, type ReactNode } from "react";
```

機械的に直せる範囲ですが、Gatsby 時代の tsconfig では通っていたコードなので移行時に一括で洗い出されます。`astro check` を先に通しておくと安心です。

### CSS フレームワークのバージョンアップは「ついで」にやる

Tailwind 3 → 4 は本来それなりの変更ですが、フレームワーク移行でどのみち全ページの表示確認をするので、同じタイミングでやってしまうのが効率的でした。設定ファイル 2 つの削除と CSS の import 書き換えだけで済み、クラス名の互換性の問題は今回の規模では出ませんでした。

---

## デプロイ設定の変更

このサイトは Cloudflare の Git 連携ビルドでデプロイしています。リポジトリを push すれば自動でビルド・公開される構成です。

フレームワークの変更で必須だったのは実質 1 点、**ビルド出力ディレクトリを `public` から `dist` に変える**ことだけでした。ビルドコマンドを `npm run build` にしていれば、コマンド自体は変更不要です。

| 設定                   | Gatsby            | Astro                        |
| ---------------------- | ----------------- | ---------------------------- |
| Build command          | `npm run build`   | `npm run build` (変更なし)   |
| Build output directory | `public`          | `dist`                       |
| Node バージョン        | .nvmrc を自動検出 | .nvmrc を自動検出 (変更なし) |

なお、完全静的なサイトであれば `@astrojs/cloudflare` アダプタは不要です。アダプタは SSR を Cloudflare Workers 上で動かすためのもので、全ページ事前生成なら静的ファイルを配信するだけで済みます。

ちなみに URL 構造は Gatsby と同じディレクトリ形式 (`/blog/slug/index.html`) で出力されるため、既存 URL やサイトマップのパスはそのまま維持されます。リダイレクト設定は不要でした。

---

## まとめ

移行作業全体を通して、コード量は大きく減りました。GraphQL のクエリとその型定義、gatsby-config のプラグイン設定、MDX のコンポーネントマッピングが消え、Content Collections のスキーマ定義とシンプルな `.astro` ページに置き換わっています。

やってみて分かったのは、移行コストの大半は「フレームワーク固有の API に依存していた箇所」で決まるということです。このサイトの場合、Pagefind・BudouX・Tailwind といった周辺ツールがフレームワーク非依存だったため、書き換えは Gatsby API を使っていたページとデータ取得層に集中し、コンポーネントの見た目やロジックはほぼ手つかずで済みました。

Gatsby でサイトを運用している方は、依存関係が壊れて修復不能になる前の、まだ普通にビルドが通るうちの移行をおすすめします。移行先として Astro は、コンテンツ中心のサイトなら現時点で最有力の選択肢だと思います。
