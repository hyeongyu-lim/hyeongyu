# Academic Portfolio

A minimal, research-oriented academic website built with [Astro Nano](https://github.com/markhorn-dev/astro-nano). Designed for long-term maintenance across undergraduate study, graduate school, and PhD applications.

## Structure

| Path | Purpose |
|------|---------|
| `src/consts.ts` | Site name, email, featured interests, social links |
| `src/content/notes/` | Research notes (Markdown knowledge base) |
| `src/content/research/` | Research interest topics by category |
| `src/content/projects/` | Engineering / hardware / software / capstone projects |
| `src/content/publications/` | Papers, posters, presentations |
| `src/pages/` | Static pages: about, resources, cv |
| `public/` | Static assets; add `cv.pdf` for download |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). If you set a `base` path in `astro.config.mjs` for GitHub Pages, use `http://localhost:4321<base>/` (e.g. `http://localhost:4321/academic-portfolio/`).

```bash
npm run build    # production build → dist/
npm run preview  # preview the build locally
```

## GitHub Pages

1. Edit `astro.config.mjs`:
   - `site`: `https://<your-username>.github.io`
   - `base`: `/<repository-name>/` (use `'/'` for a user/org site repo named `<username>.github.io`)

2. Push to GitHub. Enable **Settings → Pages → Build and deployment → GitHub Actions**.

3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on pushes to `main`.

4. Place your CV at `public/cv.pdf` for the download link on `/cv`.

## Customization

- Update `src/consts.ts` with your name, email, and links.
- Replace placeholder Markdown in `src/content/`.
- Set `draft: true` on entries you are not ready to publish.
- LaTeX in Markdown: use `$...$` or `$$...$$` (KaTeX via `remark-math` / `rehype-katex`).

## License

MIT (template); your content is your own.
