import { MetadataRoute } from 'next';

const locales = ['en', 'tr', 'de', 'fr', 'ar', 'ru'];
const baseUrl = 'https://auxite.io';

// All static pages
const staticPages = [
  '',
  '/metals',
  '/metals/auxg',
  '/metals/auxs',
  '/metals/auxpt',
  '/metals/auxpd',
  '/how-it-works',
  '/yield',
  '/trust-center',
  '/trust-center/custody',
  '/trust-center/reserves',
  '/trust-center/risk',
  '/trust-center/legal',
  '/trust-center/faq',
  '/vaults',
  '/whitepaper',
  '/faq',
  '/contact',
  '/legal/terms',
  '/legal/privacy',
  '/legal/risk',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Generate entries for each locale and page
  for (const locale of locales) {
    for (const page of staticPages) {
      const url = `${baseUrl}/${locale}${page}`;
      
      // Create alternates for all languages
      const languages: Record<string, string> = {};
      for (const lang of locales) {
        languages[lang] = `${baseUrl}/${lang}${page}`;
      }
      languages['x-default'] = `${baseUrl}/en${page}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : page.includes('metals') ? 0.9 : 0.8,
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
