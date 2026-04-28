// Prerender-script voor Waardewerk (Vite + React 19 + React Router).
//
// Wat doet dit bestand:
//   1. Leest de client-build (dist/client/index.html) als HTML-template
//   2. Importeert de server-build (dist/server/entry-server.js) dynamisch
//   3. Rendert elke route naar statische HTML met React's renderToString
//   4. Hoist <title>, <meta> en <link> vanuit de body naar <head>
//      (React 19 doet dit zelf alleen bij streaming SSR — renderToString niet,
//       dus regelen we dat hier met een simpele extract-pass)
//   5. Schrijft dist/<route>/index.html per route
//   6. Genereert dist/sitemap.xml en dist/robots.txt
//
// Uitvoer: statische site in dist/ die overal kan draaien (Vercel, Netlify, ...)

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CLIENT_DIR = path.join(ROOT, 'dist', 'client');
const SERVER_DIR = path.join(ROOT, 'dist', 'server');

const SITE_URL = 'https://waardewerk.org';

// ── Routes ────────────────────────────────────────────────────────────────
// Statische routes zijn hardcoded. Nieuws-slugs laden we dynamisch uit
// src/data/news.ts via de SSR-bundle (daarin is NEWS geëxporteerd).
const STATIC_ROUTES = ['/', '/diensten', '/sroi-monitor', '/nieuws', '/over-ons'];

async function main() {
  // 1. Lees HTML-template uit de client-build
  const templatePath = path.join(CLIENT_DIR, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client-build niet gevonden op ${templatePath}. Draai eerst \`vite build --outDir dist/client\`.`);
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // 2. Importeer SSR-bundle
  const entryPath = path.join(SERVER_DIR, 'entry-server.js');
  if (!fs.existsSync(entryPath)) {
    throw new Error(`SSR-bundle niet gevonden op ${entryPath}. Draai eerst \`vite build --ssr src/entry-server.tsx --outDir dist/server\`.`);
  }
  const serverMod = await import(url.pathToFileURL(entryPath).href);
  const { render, getAllNews } = serverMod;

  // Nieuws-slugs ophalen via de ge-her-exporteerde helper in entry-server
  const newsItems = typeof getAllNews === 'function' ? getAllNews() : [];
  const newsRoutes = newsItems.map(n => `/nieuws/${n.slug}`);

  const routes = [...STATIC_ROUTES, ...newsRoutes];
  console.log(`Prerender: ${routes.length} routes`);

  // 3. Render en schrijf elke route
  for (const route of routes) {
    const appHtml = render(route);
    const { head, body } = extractHeadTags(appHtml);

    const html = template
      .replace('<!--app-head-->', head)
      .replace('<!--app-html-->', body);

    const outPath = routeToFilePath(route);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html, 'utf-8');
    console.log(`  ✓ ${route}  →  ${path.relative(ROOT, outPath)}`);
  }

  // 4. Sitemap en robots.txt
  writeSitemap(routes, newsItems);
  writeRobots();

  // 5. Opruimen: dist/server heeft Vercel niet nodig (outputDirectory=dist/client).
  // Best effort — sommige sandboxes weigeren delete; geen ramp als het faalt.
  try {
    fs.rmSync(SERVER_DIR, { recursive: true, force: true });
  } catch (err) {
    console.warn(`  (Kon dist/server niet opruimen: ${err.code ?? err.message}. Harmless.)`);
  }

  console.log('\n✓ Prerender klaar.');
}

// Zet alle <title>, <meta>, <link> in de gerenderde app-HTML om naar head-tags.
// React 19's native head-hoisting werkt bij renderToString niet automatisch —
// de tags komen op de plek in de body waar ze gerenderd zijn. Wij tillen ze
// alsnog naar head met een simpele extract-pass.
function extractHeadTags(appHtml) {
  const HOIST_REGEX = /<(title|meta|link)(\s[^>]*)?(\/?)>(?:([^<]*)<\/\1>)?/gi;
  const head = [];
  const body = appHtml.replace(HOIST_REGEX, (match, tag, attrs, selfClose, inner) => {
    // Title met inhoud rebuilden voor consistent resultaat
    if (tag.toLowerCase() === 'title' && inner !== undefined) {
      head.push(`<title>${inner}</title>`);
    } else {
      head.push(match);
    }
    return '';
  });
  // Dedupliceer (canonical, og:title e.d. mogen maar één keer voorkomen per key)
  const seen = new Set();
  const dedup = [];
  for (const tag of head) {
    const key = tagKey(tag);
    if (seen.has(key)) continue;
    seen.add(key);
    dedup.push(tag);
  }
  return { head: dedup.join('\n    '), body };
}

function tagKey(tag) {
  const lowered = tag.toLowerCase();
  if (lowered.startsWith('<title')) return 'title';
  const nameMatch = lowered.match(/\bname=["']([^"']+)["']/);
  if (nameMatch) return `meta:name:${nameMatch[1]}`;
  const propMatch = lowered.match(/\bproperty=["']([^"']+)["']/);
  if (propMatch) return `meta:property:${propMatch[1]}`;
  const relMatch = lowered.match(/\brel=["']([^"']+)["']/);
  if (relMatch) return `link:rel:${relMatch[1]}`;
  return tag;
}

function routeToFilePath(route) {
  if (route === '/') return path.join(CLIENT_DIR, 'index.html');
  return path.join(CLIENT_DIR, route.replace(/^\//, ''), 'index.html');
}

function writeSitemap(routes, newsItems) {
  const today = new Date().toISOString().slice(0, 10);
  const newsByRoute = new Map(newsItems.map(n => [`/nieuws/${n.slug}`, n.date ?? today]));

  const urls = routes.map(route => {
    const loc = SITE_URL + (route === '/' ? '' : route);
    const lastmod = newsByRoute.get(route) ?? today;
    const priority = route === '/' ? '1.0' : route.startsWith('/nieuws/') ? '0.6' : '0.8';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(CLIENT_DIR, 'sitemap.xml'), xml, 'utf-8');
  console.log(`  ✓ sitemap.xml (${routes.length} urls)`);
}

function writeRobots() {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(CLIENT_DIR, 'robots.txt'), robots, 'utf-8');
  console.log('  ✓ robots.txt');
}

// Verplaats alles uit dist/client/ naar dist/ en verwijder dist/client.
// Vercel verwacht de static output in dist/ (zoals de huidige setup doet).
main().catch(err => {
  console.error(err);
  process.exit(1);
});
