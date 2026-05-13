import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// EDIT ME when you have a custom domain or know your GH Pages URL.
// For username.github.io repo: site = 'https://USERNAME.github.io', base = '/'
// For project repo (e.g. /blog): site = 'https://USERNAME.github.io', base = '/blog'
export default defineConfig({
  site: 'https://example.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },
});
