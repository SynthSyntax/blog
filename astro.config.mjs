import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Deploying as a project site under synthsyntax.github.io/blog/.
// If/when you move to a custom domain or to a user site, update site + base.
export default defineConfig({
  site: 'https://synthsyntax.github.io',
  base: '/blog',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },
});
