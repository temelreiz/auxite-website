import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auxite – On-Chain Tokenized Precious Metals",
  description: "Buy, sell, stake, and verify physically allocated gold, silver, platinum, and palladium — fully on-chain.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0B1121" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif", margin: 0, padding: 0, background: '#0B1121', color: '#E8E8E8' }}>
        {children}
      </body>
    </html>
  );
}
