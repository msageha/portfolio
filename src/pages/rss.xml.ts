import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );

  return rss({
    title: "Mizuki Sango - Blog",
    description: "技術記事やプロジェクトの記録",
    site: context.site ?? "https://msageha.net",
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.data.slug}/`,
    })),
    customData: "<language>ja</language>",
  });
}
