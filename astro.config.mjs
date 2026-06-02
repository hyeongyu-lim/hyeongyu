import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/**
 * GitHub Pages URL layout:
 * - Project site (owner/repo): https://owner.github.io/repo/
 * - User/org site (owner.github.io repo): https://owner.github.io/
 *
 * Override locally in .env or when not using Actions:
 *   ASTRO_SITE=https://you.github.io
 *   ASTRO_BASE=/your-repo/
 */
function githubPagesConfig() {
  const siteOverride = process.env.ASTRO_SITE;
  const baseOverride = process.env.ASTRO_BASE;

  const repository = process.env.GITHUB_REPOSITORY ?? "";
  const [owner, repo] = repository.split("/");

  const isUserSite = Boolean(owner && repo === `${owner}.github.io`);

  const site =
    siteOverride ??
    (owner ? `https://${owner}.github.io` : "https://your-username.github.io");

  const base =
    baseOverride ?? (isUserSite ? "/" : repo ? `/${repo}/` : "/academic-portfolio/");

  return { site, base: base.endsWith("/") || base === "/" ? base : `${base}/` };
}

const { site, base } = githubPagesConfig();

export default defineConfig({
  site,
  base,
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
