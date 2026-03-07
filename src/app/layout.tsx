import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auxite – On-Chain Tokenized Precious Metals",
  description: "Buy, sell, and deploy physically allocated gold, silver, platinum, and palladium into institutional yield programs — fully on-chain.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://auxite.io'),
};

// JSON-LD Structured Data — Organization + WebSite + Product
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://auxite.io/#organization',
      name: 'Auxite',
      url: 'https://auxite.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://auxite.io/auxite-main-logo.png',
        width: 512,
        height: 512,
      },
      description: 'Auxite is a digital precious metals platform offering tokenized, physically allocated gold, silver, platinum, and palladium with institutional custody and on-chain settlement.',
      sameAs: [
        'https://x.com/auxite',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://auxite.io/en/contact',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://auxite.io/#website',
      url: 'https://auxite.io',
      name: 'Auxite',
      description: 'On-Chain Tokenized Precious Metals — Buy, sell, and deploy physically allocated gold, silver, platinum, and palladium into institutional yield programs.',
      publisher: { '@id': 'https://auxite.io/#organization' },
      inLanguage: ['en', 'tr', 'de', 'fr', 'ar', 'ru'],
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://auxite.io/en?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://auxite.io/#auxg',
      name: 'Auxite Gold (AUXG)',
      description: 'Tokenized, physically allocated gold backed by LBMA Good Delivery bars. Each AUXG token represents 1 gram of segregated, fully allocated gold held in institutional custody.',
      provider: { '@id': 'https://auxite.io/#organization' },
      url: 'https://auxite.io/en/metals/auxg',
      category: 'Tokenized Precious Metals',
      additionalType: 'https://schema.org/InvestmentOrDeposit',
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://auxite.io/#auxs',
      name: 'Auxite Silver (AUXS)',
      description: 'Tokenized, physically allocated silver backed by LBMA Good Delivery bars. Each AUXS token represents 1 gram of segregated, fully allocated silver held in institutional custody.',
      provider: { '@id': 'https://auxite.io/#organization' },
      url: 'https://auxite.io/en/metals/auxs',
      category: 'Tokenized Precious Metals',
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://auxite.io/#auxpt',
      name: 'Auxite Platinum (AUXPT)',
      description: 'Tokenized, physically allocated platinum backed by LPPM Approved bars. Each AUXPT token represents 1 gram of segregated, fully allocated platinum.',
      provider: { '@id': 'https://auxite.io/#organization' },
      url: 'https://auxite.io/en/metals/auxpt',
      category: 'Tokenized Precious Metals',
    },
    {
      '@type': 'FinancialProduct',
      '@id': 'https://auxite.io/#auxpd',
      name: 'Auxite Palladium (AUXPD)',
      description: 'Tokenized, physically allocated palladium backed by LPPM Approved bars. Each AUXPD token represents 1 gram of segregated, fully allocated palladium.',
      provider: { '@id': 'https://auxite.io/#organization' },
      url: 'https://auxite.io/en/metals/auxpd',
      category: 'Tokenized Precious Metals',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0B1121" />
        {/* Google Ads (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17999284951" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17999284951');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", margin: 0, padding: 0, background: '#0B1121', color: '#E8E8E8' }}>
        {children}
      </body>
    </html>
  );
}
