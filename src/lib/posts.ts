import { type CollectionEntry, getCollection } from "astro:content";

export type Post = CollectionEntry<"blog">;

export async function getSortedPosts(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function collectTags(posts: Post[]): string[] {
  return [...new Set(posts.flatMap((post) => post.data.tags))].sort();
}

export const postPath = (post: Post) => `/blog/${post.data.slug}/`;

export const tagPath = (tag: string) => `/blog/tags/${encodeURIComponent(tag)}/`;

export const lastModified = (post: Post) => post.data.updated ?? post.data.date;

// frontmatter の date は日付のみ (UTC 0 時) なので、ビルド環境のタイムゾーンで日付がずれないよう UTC で整形する
const dateFormat = new Intl.DateTimeFormat("ja-JP", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export const formatDate = (date: Date) => dateFormat.format(date);

export const toIsoDate = (date: Date) => date.toISOString().slice(0, 10);
