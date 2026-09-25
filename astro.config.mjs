import { satteri } from "@astrojs/markdown-satteri";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/data/site";
import { budouxHastPlugin } from "./src/lib/budoux-hast-plugin";

export default defineConfig({
  site: SITE_URL,
  integrations: [react()],
  markdown: {
    processor: satteri({ hastPlugins: [budouxHastPlugin] }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
