import { Log } from './log';
import { IBuildSitemap } from './types';
import { getDate } from './utils';
import { validatePage } from './validatePage';

export function buildSitemap({ pages, domain }: IBuildSitemap) {
  if (pages.length > 50000) {
    Log.error(
      'List of pages is too big, you should split them to multiple sitemaps',
    );
  }

  let urls = '';

  pages.forEach(page => {
    validatePage(page);

    const loc = new URL(page.path, domain).href;
    const priority = page.priority || 0.5;
    const changefreq = page.changefreq || 'daily';
    const lastmod = page.lastmod ? getDate(page.lastmod) : getDate();

    const url = `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

    urls += url;
  });

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return sitemap;
}
