import type { APIRoute, GetStaticPaths } from "astro";
import { SITE_URL } from "../../data/site";
import { ogImageResponse } from "../../lib/og";
import { getSortedPosts } from "../../lib/posts";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getSortedPosts();
  return posts.map((post) => ({ params: { slug: post.data.slug }, props: { title: post.data.title } }));
};

export const GET: APIRoute<{ title: string }> = ({ props }) =>
  ogImageResponse(props.title, `${new URL(SITE_URL).host}/blog`);
