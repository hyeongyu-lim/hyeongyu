import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// GitHub Pages: set site to https://<username>.github.io and base to /<repo-name>/
// Example: site: "https://hyeongyu.github.io", base: "/academic-portfolio"
export default defineConfig({
  site: "https://your-username.github.io",
  base: "/academic-portfolio/",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
