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

## GitHub Pages (GitHub Actions)

Deployment is automated via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Pull requests are built (without deploy) by [`.github/workflows/ci.yml`](.github/workflows/ci.yml).

### One-time setup

1. Push this repository to GitHub (e.g. `your-username/academic-portfolio`).
2. Open **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. Push to `main` (or run the workflow manually under **Actions → Deploy to GitHub Pages → Run workflow**).

Your site will be published at:

- **Project repository:** `https://<username>.github.io/<repository-name>/`
- **User site** (repo named `<username>.github.io`): `https://<username>.github.io/`

`astro.config.mjs` reads `GITHUB_REPOSITORY` in Actions and sets `site` and `base` automatically. For local overrides, copy [`.env.example`](.env.example) to `.env` and set `ASTRO_SITE` / `ASTRO_BASE`.

### Workflows

| File | Trigger | Purpose |
|------|---------|---------|
| `.github/workflows/deploy.yml` | Push to `main`, manual | Build `dist/` and deploy to GitHub Pages |
| `.github/workflows/ci.yml` | PR and push to `main` | `astro check` + build (no deploy) |

### Local preview (production paths)

```bash
GITHUB_REPOSITORY=your-username/academic-portfolio npm run build
npm run preview
```

Then open the URL shown in the terminal (includes the `/academic-portfolio/` base path).

### CV download

Place `public/cv.pdf` for the link on `/cv`.

## Customization

- Update `src/consts.ts` with your name, email, and links.
- Replace placeholder Markdown in `src/content/`.
- Set `draft: true` on entries you are not ready to publish.
- LaTeX in Markdown: use `$...$` or `$$...$$` (KaTeX via `remark-math` / `rehype-katex`).

## License

MIT (template); your content is your own.
