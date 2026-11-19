// biome-ignore lint/correctness/noUnresolvedImports: astro:content は Astro が build 時に作る仮想モジュールで、Biome は解決できない。
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    slug: z.string().regex(/^[a-z0-9-]+$/u),
    // タグは URL の path segment になるため、予約文字と、URL 上で親や自身のディレクトリになる . / .. を拒否する
    tags: z.array(z.string().regex(/^(?!\.{1,2}$)[^;,/?:@&=+$#%]+$/u)).default([]),
    description: z.string(),
  }),
});

export const collections = { blog };
