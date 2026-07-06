import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import { renderOgImage } from "../../lib/og";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: { title: post.data.title },
  }));
};

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props.title, "msageha.net/blog");
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
