import { NextResponse } from 'next/server';

const baseUrl = 'https://auxite.io';

const locales = ['en', 'tr', 'de', 'fr', 'ar', 'ru'];

const pages = [
  '',
  '/metals',
  '/metals/auxg',
  '/metals/auxs',
  '/metals/auxpt',
  '/metals/auxpd',
  '/buy-sell',
  '/staking',
  '/trust-center',
  '/how-it-works',
  '/faq',
  '/contact',
  '/whitepaper',
  '/vaults',
  '/roadmap',
  '/team',
  '/legal',
  '/legal/terms',
  '/legal/privacy',
  '/legal/risk',
];

export async function GET() {
  const urls = locales.flatMap(locale =>
    pages.map(page => ({
      loc: `${baseUrl}/${locale}${page}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? '1.0' : page.includes('/metals/') ? '0.9' : '0.8',
    }))
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
    ${locales.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}${url.loc.replace(`${baseUrl}/${locales.find(loc => url.loc.includes(`/${loc}`)) || 'en'}`, '')}"/>`).join('\n    ')}
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
