import * as path from 'path';
import * as fs from 'fs-extra';
import { JSDOM } from 'jsdom';
// import { render } from '@/entry-server';
const { render } = require('./dist/server/entry-server.js');
import manifest from './dist/static/ssr-manifest.json';
import { generateSitemap, IPage } from '@/utils/sitemap';
import { pageInfoGateway } from '@/database/pageInfo.gateway';
import { ILang } from '@/database/pageInfo.interface';

const domain = 'https://stopwarukraine.com/';

const toAbsolute = (p: string) => path.resolve(__dirname, p);

const insertAfter = (newNode: any, existingNode: any) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

const replaceHead = (template: string) => {
  const dom = new JSDOM(template);
  document = dom.window.document;

  const vendorJs = document.querySelector<HTMLLinkElement>(
    'head link[rel="modulepreload"]',
  );
  const meta = document.querySelector<HTMLMetaElement>(
    'head meta[name="viewport"]',
  );
  const scripts = document.querySelectorAll<HTMLScriptElement>('head script');
  const linkCss = document.querySelector<HTMLLinkElement>(
    'head link[rel="stylesheet"]',
  );

  insertAfter(vendorJs, meta);

  Array.from(scripts)
    .reverse()
    .forEach(script => insertAfter(script, linkCss));

  return dom.serialize();
};

let template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');
let routesToPrerender = fs.readdirSync(toAbsolute('src/pages')).map(file => {
  const name = file.replace(/\.vue$/, '').toLowerCase();
  return name === 'index' ? `/` : `/${name}`;
});

(async () => {
  // pre-render each route...

  // put requests for pages here
  const allLanguages = await pageInfoGateway.getLanguages();
  const allLanguagesUrls = allLanguages.map((language: ILang) => {
    return language.path;
  }) as string[];

  const allUrls = [...routesToPrerender, ...allLanguagesUrls];

  const sitemapRoutes = [] as IPage[];
  console.log(allUrls);
  for await (const url of allUrls) {
    if (url.includes('[')) continue;

    sitemapRoutes.push({
      path: domain + url,
      lastmod: new Date(),
      changefreq: 'daily',
      priority: 1.0,
    });
    console.log('URL: ', url);
    const { html, preloadLinks } = await render(url, manifest);

    const newTemplate = replaceHead(template);

    const htmlTemplate = newTemplate
      .replace(`<!--preload-links-meta-->`, preloadLinks.meta)
      .replace(`<!--preload-links-js-->`, preloadLinks.js)
      .replace(`<!--preload-links-css-->`, preloadLinks.css)
      .replace(`<!--app-html-->`, html);

    const filePath = `dist/static${url}/`;

    await Promise.all([
      fs.outputFile(toAbsolute(filePath + 'index.html'), htmlTemplate),
    ]);
    console.log('pre-rendered:', filePath + 'index.html');
  }

  await generateSitemap({
    outputDir: './dist/static',
    pages: sitemapRoutes,
    domain,
  });

  // done, delete ssr manifest
  fs.unlinkSync(toAbsolute('dist/static/ssr-manifest.json'));
})();
