import { readFileSync, readdirSync } from "node:fs";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const SITE = "https://msageha.net";

// 設定ファイルは Astro のコンテンツ API より先に評価されるため、
// frontmatter を直接読んで sitemap の lastmod (URL -> 最終更新日) を組み立てる
function loadSitemapLastmods() {
  const lastmods = new Map();
  const tagLatest = new Map();
  let blogLatest;

  const entries = readdirSync("content/blog", { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const raw = readFileSync(`content/blog/${entry.name}/index.md`, "utf8");
      const frontmatter = raw.match(/^---\n([\s\S]*?)\n---/)?.[1];
      if (!frontmatter) {
        throw new Error(`frontmatter が見つかりません: content/blog/${entry.name}/index.md`);
      }
      const field = (key) =>
        frontmatter.match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?\\s*$`, "m"))?.[1];
      const slug = field("slug");
      const date = field("updated") ?? field("date");
      if (!slug || !date) {
        throw new Error(`slug または date が不正です: content/blog/${entry.name}/index.md`);
      }
      const tags = (frontmatter.match(/^tags:\s*\[(.*)\]\s*$/m)?.[1] ?? "")
        .split(",")
        .map((tag) => tag.trim().replace(/^"|"$/g, ""))
        .filter(Boolean);
      return { slug, lastmod: new Date(date), tags };
    });

  const newer = (current, candidate) =>
    !current || candidate.getTime() > current.getTime() ? candidate : current;

  for (const { slug, lastmod, tags } of entries) {
    lastmods.set(`${SITE}/blog/${slug}/`, lastmod);
    blogLatest = newer(blogLatest, lastmod);
    for (const tag of tags) {
      tagLatest.set(tag, newer(tagLatest.get(tag), lastmod));
    }
  }

  if (blogLatest) {
    lastmods.set(`${SITE}/blog/`, blogLatest);
  }
  for (const [tag, latest] of tagLatest) {
    lastmods.set(`${SITE}/blog/tags/${encodeURIComponent(tag)}/`, latest);
  }
  return lastmods;
}

const sitemapLastmods = loadSitemapLastmods();

export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        const lastmod = sitemapLastmods.get(item.url);
        if (lastmod) {
          item.lastmod = lastmod.toISOString();
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
