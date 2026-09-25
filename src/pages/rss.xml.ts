import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { BLOG, SITE_URL } from "../data/site";
import { getSortedPosts, postPath } from "../lib/posts";

export const GET: APIRoute = async () => {
  const posts = await getSortedPosts();
  return rss({
    title: BLOG.title,
    description: BLOG.description,
    site: SITE_URL,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: postPath(post),
    })),
    customData: "<language>ja</language>",
  });
};
