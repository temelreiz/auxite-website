import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, rtlLocales } from '@/i18n/routing';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  
  const baseUrl = 'https://auxite.io';
  
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
      url: baseUrl,
      siteName: 'Auxite',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Auxite - Tokenized Precious Metals',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/og-image.png'],
      creator: '@auxite',
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        'en': '/en',
        'tr': '/tr',
        'de': '/de',
        'fr': '/fr',
        'ar': '/ar',
        'ru': '/ru',
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>
      <NextIntlClientProvider messages={messages}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}
