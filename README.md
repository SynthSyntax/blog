# blog

A small, hand-built personal blog. Plain Markdown posts, warm dark mode by
default, light mode on toggle, no trackers.

## run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static files in ./dist
```

## write a post

Drop a Markdown file in [`src/content/posts/`](src/content/posts/). The
filename becomes the URL slug.

```yaml
---
title: "your post title"
date: 2026-05-14
description: "(optional) one-line summary, shows in RSS"
tags: [research, thoughts]
draft: false
---

write here.
```

Images and videos go in [`public/`](public/) and you reference them with
absolute paths (`![](/diagram.png)` or `<video src="/clip.mp4" controls />`).
Rename a post from `.md` to `.mdx` if you want to import interactive
components inside it.

## personalize

- Site title, tagline, author, socials, footer note —
  [`src/site.config.ts`](src/site.config.ts).
- Colors and type — top of [`src/styles/global.css`](src/styles/global.css)
  (`:root` for light, `:root[data-theme='dark']` for dark).

## deploy (GitHub Pages)

1. Push to GitHub.
2. Edit [`astro.config.mjs`](astro.config.mjs) — set `site` (and `base` if it's a project repo).
3. Repo Settings → Pages → Source: **GitHub Actions**.
4. Push to `main`. The workflow at
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and ships.

Custom domain later: drop a `public/CNAME` file with your domain, update
`site` in `astro.config.mjs`, point DNS at GitHub Pages.

## stack

[Astro](https://astro.build) + MDX + RSS + sitemap. JetBrains Mono for
headings, system serif for body. ~zero JavaScript shipped (just a tiny theme
toggle and the tag filter).
