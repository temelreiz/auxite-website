import { MetadataRoute } from 'next';

const primaryLocales = ['en', 'tr'];
const secondaryLocales = ['de', 'fr', 'ar', 'ru'];
const allLocales = [...primaryLocales, ...secondaryLocales];
const baseUrl = 'https://auxite.io';

// Pages with priority tiers
const highPriorityPages = [
  '',
  '/metals',
  '/metals/auxg',
  '/metals/auxs',
  '/metals/auxpt',
  '/metals/auxpd',
];

const mediumPriorityPages = [
  '/how-it-works',
  '/yield',
  '/trust-center',
  '/vaults',
  '/whitepaper',
];

const lowPriorityPages = [
  '/trust-center/custody',
  '/trust-center/reserves',
  '/trust-center/risk',
  '/trust-center/legal',
  '/trust-center/faq',
  '/trust-center/on-chain-supply',
  '/faq',
  '/contact',
  '/roadmap',
  '/team',
  '/legal',
  '/legal/terms',
  '/legal/privacy',
  '/legal/risk',
];

const allPages = [...highPriorityPages, ...mediumPriorityPages, ...lowPriorityPages];

function getPagePriority(page: string, locale: string): number {
  const isPrimary = primaryLocales.includes(locale);
  if (highPriorityPages.includes(page)) return isPrimary ? 1.0 : 0.7;
  if (mediumPriorityPages.includes(page)) return isPrimary ? 0.8 : 0.5;
  return isPrimary ? 0.6 : 0.3;
}

function getChangeFrequency(page: string): 'daily' | 'weekly' | 'monthly' {
  if (page === '') return 'daily';
  if (highPriorityPages.includes(page)) return 'weekly';
  return 'monthly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Primary locales first, then secondary — Google crawls top-to-bottom
  for (const locale of [...primaryLocales, ...secondaryLocales]) {
    for (const page of allPages) {
      const url = `${baseUrl}/${locale}${page}`;

      const languages: Record<string, string> = {};
      for (const lang of allLocales) {
        languages[lang] = `${baseUrl}/${lang}${page}`;
      }
      languages['x-default'] = `${baseUrl}/en${page}`;

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: getChangeFrequency(page),
        priority: getPagePriority(page, locale),
        alternates: {
          languages,
        },
      });
    }
  }

  return sitemapEntries;
}
