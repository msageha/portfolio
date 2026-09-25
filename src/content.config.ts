import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "*/index.md", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    slug: z.string().regex(/^[a-z0-9-]+$/),
    tags: z.array(z.string().regex(/^[^;,/?:@&=+$#%]+$/)).default([]),
    description: z.string(),
  }),
});

export const collections = { blog };
