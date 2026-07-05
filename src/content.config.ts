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
