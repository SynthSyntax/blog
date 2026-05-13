import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../site.config';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function GET(context) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );
  return rss({
    title: site.title,
    description: site.tagline,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description ?? '',
      link: `${BASE}/posts/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}
