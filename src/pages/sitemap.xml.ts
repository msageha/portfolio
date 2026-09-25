import type { APIRoute } from "astro";
import { SITE_URL } from "../data/site";
import { collectTags, getSortedPosts, lastModified, type Post, postPath, tagPath } from "../lib/posts";

const newest = (posts: Post[]) => new Date(Math.max(...posts.map((post) => lastModified(post).getTime())));

export const GET: APIRoute = async () => {
  const posts = await getSortedPosts();

  const entries: { path: string; lastmod?: Date }[] = [
    // コレクションから導出できない固定ページはここに手で追加する
    { path: "/" },
    { path: "/blog/", lastmod: newest(posts) },
    ...posts.map((post) => ({ path: postPath(post), lastmod: lastModified(post) })),
    ...collectTags(posts).map((tag) => ({
      path: tagPath(tag),
      lastmod: newest(posts.filter((post) => post.data.tags.includes(tag))),
    })),
  ];

  const urls = entries.map(({ path, lastmod }) =>
    `<url><loc>${new URL(path, SITE_URL).href}</loc>${
      lastmod ? `<lastmod>${lastmod.toISOString()}</lastmod>` : ""
    }</url>`
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    urls.join("\n")
  }\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
