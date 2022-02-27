import { IGenerateMultiple } from './types';
import { buildSitemap } from './buildSitemap';
import { Log } from './log';
import { getDate, saveFile } from './utils';

export async function generateMultipleSitemaps({
  outputDir,
  sections,
  domain,
}: IGenerateMultiple) {
  let sitemaps = '';

  for await (const section of sections) {
    const loc = new URL(section.name, domain);
    const lastmod = section.lastmod ? getDate(section.lastmod) : getDate();

    const sitemap = `
  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`;

    const sectionSitemap = buildSitemap({ pages: section.pages, domain });
    const path = `${outputDir}/sitemap-${section.name}.xml`;

    await saveFile(path, sectionSitemap);

    sitemaps += sitemap;

    Log.info(`Generated ${path}`);
  }

  const sitemapIndex = `
<?xml version="1.0" encoding="UTF-8"?> 
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps}
</sitemapindex>`;

  const path = `${outputDir}/sitemap.xml`;

  await saveFile(path, sitemapIndex);

  Log.info(`Generated ${path}`);
}
