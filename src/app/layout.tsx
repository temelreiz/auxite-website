import type { Metadata } from "next";
import "./globals.css";
import RadioWidget from "@/components/RadioWidget";

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
        'https://x.com/AuxiteGlobal',
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TPJ95Z2C');`,
          }}
        />
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
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '938812332212962');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=938812332212962&ev=PageView&noscript=1"
          />
        </noscript>
        {/* X (Twitter) Pixel — same pixel id as the wallet at vault.auxite.io.
            One pixel across both domains is deliberate: X ads land here, the
            signup and purchase conversions fire in the wallet, and they only
            reconcile into one funnel if both sides report to the same pixel.
            Conversion events themselves live in the wallet — this side just
            records the visit and feeds the retargeting audience. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){
              s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
              u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
              }(window,document,'script');
              twq('config','rb03a');
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", margin: 0, padding: 0, background: '#0B1121', color: '#E8E8E8' }}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPJ95Z2C"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <RadioWidget />
      </body>
    </html>
  );
}
