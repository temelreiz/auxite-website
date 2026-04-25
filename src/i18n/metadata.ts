import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

const BASE_URL = 'https://auxite.io';

const ROUTES: Record<string, string> = {
  home: '',
  metals: 'metals',
  buySell: 'buy-sell',
  staking: 'yield',
  howItWorks: 'how-it-works',
  vaults: 'vaults',
  faq: 'faq',
  contact: 'contact',
  team: 'team',
  roadmap: 'roadmap',
  legal: 'legal',
  terms: 'legal/terms',
  privacy: 'legal/privacy',
  risk: 'legal/risk',
  whitepaper: 'whitepaper',
  trustCenter: 'trust-center',
  custodyArchitecture: 'trust-center/custody',
  institutionalFaq: 'trust-center/faq',
  legalStructure: 'trust-center/legal',
  reserveVerification: 'trust-center/reserves',
  riskFramework: 'trust-center/risk',
};

const stripHighlight = (s: string) => s.replace(/\s+/g, ' ').trim();

export async function pageMetadata(
  namespace: keyof typeof ROUTES,
  locale: string,
  overrides: Partial<Metadata> = {},
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const titleParts: string[] = [];

  try { titleParts.push(t('title')); } catch {}
  try {
    const h = t('titleHighlight');
    if (h) titleParts.push(h);
  } catch {}

  // Parent layout template `%s | Auxite` will append the suffix automatically.
  const pageTitle = stripHighlight(titleParts.join(' '));
  const fullTitle = pageTitle || 'Auxite | The Digital Form of Tradition';

  let description = '';
  try { description = t('subtitle'); } catch {}
  if (!description) {
    try { description = t('description' as any); } catch {}
  }
  description = (description || 'Allocated precious metals — gold, silver, platinum, palladium — fully on-chain with proof of reserves.').slice(0, 155);

  const path = ROUTES[namespace] ?? '';
  const url = path ? `${BASE_URL}/${locale}/${path}` : `${BASE_URL}/${locale}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: path ? `${BASE_URL}/en/${path}` : `${BASE_URL}/en`,
        tr: path ? `${BASE_URL}/tr/${path}` : `${BASE_URL}/tr`,
        de: path ? `${BASE_URL}/de/${path}` : `${BASE_URL}/de`,
        fr: path ? `${BASE_URL}/fr/${path}` : `${BASE_URL}/fr`,
        ar: path ? `${BASE_URL}/ar/${path}` : `${BASE_URL}/ar`,
        ru: path ? `${BASE_URL}/ru/${path}` : `${BASE_URL}/ru`,
        'x-default': path ? `${BASE_URL}/en/${path}` : `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      siteName: 'Auxite',
      title: fullTitle,
      description,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    ...overrides,
  };
}
