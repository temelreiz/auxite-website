import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, rtlLocales } from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SupportChat from '@/components/SupportChat';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  
  const baseUrl = 'https://auxite.io';
  const currentUrl = `${baseUrl}/${locale}`;
  
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t('title'),
      template: `%s | Auxite`,
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Auxite' }],
    creator: 'Auxite',
    publisher: 'Auxite',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: currentUrl,
      siteName: 'Auxite',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: `${baseUrl}/api/og`,
          width: 1200,
          height: 630,
          alt: 'Auxite - The Digital Form of Tradition',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${baseUrl}/api/og`],
      creator: '@auxite',
    },
    alternates: {
      languages: {
        'en': `${baseUrl}/en`,
        'tr': `${baseUrl}/tr`,
        'de': `${baseUrl}/de`,
        'fr': `${baseUrl}/fr`,
        'ar': `${baseUrl}/ar`,
        'ru': `${baseUrl}/ru`,
        'x-default': `${baseUrl}/en`,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// JSON-LD Structured Data — Organization + WebSite + SiteNavigationElement
//
// Brand-entity model: this site is the Auxite *platform* (the product),
// operated by Aurum Ledger Limited. The corporate site is auxiteglobal.com.
// `parentOrganization` expresses the corporate hierarchy as two SEPARATE but
// related entities — this is the correct, honest relationship and does NOT
// cede the "auxite" brand term.
//
// IMPORTANT: do NOT list auxiteglobal.com in `sameAs`. schema.org `sameAs`
// means "the SAME entity", so it would tell Google the Auxite org and
// auxiteglobal.com are one entity → Google consolidates them and ranks the
// more authoritative domain (auxiteglobal.com) for "auxite", which is exactly
// the bug we're fixing. sameAs holds only Auxite's own profiles (social, etc.).
function buildJsonLd(locale: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://auxite.io/#organization',
        name: 'Auxite',
        alternateName: ['Auxite Vault', 'Auxite Platform'],
        url: 'https://auxite.io',
        logo: {
          '@type': 'ImageObject',
          url: 'https://auxite.io/auxite-wallet-logo.png',
          width: 512,
          height: 512,
        },
        description: 'Auxite is a digital-asset custody platform for tokenized precious metals (AUXG gold, AUXS silver, AUXPT platinum, AUXPD palladium). Buy, sell, and deploy physically allocated metals into institutional yield programs — fully on-chain with real-time proof of reserves.',
        parentOrganization: {
          '@type': 'Organization',
          '@id': 'https://auxiteglobal.com/#organization',
          name: 'Aurum Ledger Limited',
          alternateName: ['Auxite Global'],
          url: 'https://auxiteglobal.com',
        },
        sameAs: [
          'https://x.com/AuxiteGlobal',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          url: 'https://auxite.io/contact',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://auxite.io/#website',
        url: 'https://auxite.io',
        name: 'Auxite',
        description: 'The Digital Form of Tradition — tokenized precious metals on-chain.',
        publisher: { '@id': 'https://auxite.io/#organization' },
        inLanguage: locale,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://auxite.io/' + locale + '/metals?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = rtlLocales.includes(locale);
  const jsonLd = buildJsonLd(locale);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NextIntlClientProvider messages={messages}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <SupportChat />
      </NextIntlClientProvider>
    </div>
  );
}
