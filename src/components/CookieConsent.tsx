'use client';

// CookieConsent — the banner this site never had.
//
// GTM, Google Ads, the Meta pixel and the X pixel all ran unconditionally on
// every page load. Copy is ported from the wallet's banner so both properties
// say the same thing in all six languages.
//
// The locale comes from the first path segment rather than next-intl, because
// this mounts in the root layout: /app and the API routes live outside the
// [locale] segment and still need to ask.

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  CONSENT_STORAGE_KEY,
  notifyConsentChanged,
  readConsent,
} from '@/lib/consent';

interface Copy {
  banner: string;
  accept: string;
  decline: string;
  privacy: string;
}

const COPY: Record<string, Copy> = {
  en: {
    banner:
      'We use cookies to improve your experience. Essential cookies are required for the site to function. Analytics cookies help us understand usage.',
    accept: 'Accept All',
    decline: 'Essential Only',
    privacy: 'Privacy Policy',
  },
  tr: {
    banner:
      'Deneyiminizi geliştirmek için çerezler kullanıyoruz. Temel çerezler sitenin çalışması için gereklidir. Analiz çerezleri kullanımı anlamamıza yardımcı olur.',
    accept: 'Tümünü Kabul Et',
    decline: 'Yalnızca Gerekli',
    privacy: 'Gizlilik Politikası',
  },
  de: {
    banner:
      'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Essentielle Cookies sind für die Funktion der Website erforderlich. Analyse-Cookies helfen uns, die Nutzung zu verstehen.',
    accept: 'Alle akzeptieren',
    decline: 'Nur erforderliche',
    privacy: 'Datenschutz',
  },
  fr: {
    banner:
      "Nous utilisons des cookies pour améliorer votre expérience. Les cookies essentiels sont nécessaires au fonctionnement du site. Les cookies analytiques nous aident à comprendre l'utilisation.",
    accept: 'Tout accepter',
    decline: 'Essentiels uniquement',
    privacy: 'Politique de confidentialité',
  },
  ar: {
    banner:
      'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. ملفات تعريف الارتباط الأساسية مطلوبة لعمل الموقع. تساعدنا ملفات تعريف الارتباط التحليلية على فهم الاستخدام.',
    accept: 'قبول الكل',
    decline: 'الأساسية فقط',
    privacy: 'سياسة الخصوصية',
  },
  ru: {
    banner:
      'Мы используем файлы cookie для улучшения вашего опыта. Основные файлы cookie необходимы для работы сайта. Аналитические файлы cookie помогают нам понять использование.',
    accept: 'Принять все',
    decline: 'Только необходимые',
    privacy: 'Политика конфиденциальности',
  },
};

export default function CookieConsent() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  const locale = (pathname?.split('/')[1] || 'en').toLowerCase();
  const t = COPY[locale] || COPY.en;
  const isRtl = locale === 'ar';

  useEffect(() => {
    if (readConsent() !== null) return;
    // Small delay so it doesn't flash on first paint.
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const save = (analytics: boolean) => {
    try {
      localStorage.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({
          essential: true,
          analytics,
          timestamp: new Date().toISOString(),
          version: '1.0',
        }),
      );
    } catch {}
    // Publishes the decision: upgrades Google consent mode and wakes the Meta
    // and X pixels, so accepting starts tracking without a page reload.
    notifyConsentChanged();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: '16px',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          background: '#0F172A',
          border: '1px solid rgba(148,163,184,0.25)',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          padding: '20px',
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '14px',
            lineHeight: 1.6,
            color: '#CBD5E1',
          }}
        >
          {t.banner}
        </p>
        <div
          style={{
            marginTop: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <button
            onClick={() => save(true)}
            style={{
              padding: '10px 18px',
              background: '#2F6F62',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {t.accept}
          </button>
          <button
            onClick={() => save(false)}
            style={{
              padding: '10px 18px',
              background: 'transparent',
              color: '#CBD5E1',
              fontSize: '14px',
              fontWeight: 500,
              border: '1px solid rgba(148,163,184,0.3)',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {t.decline}
          </button>
          <a
            href={`/${locale}/legal/privacy`}
            style={{
              marginInlineStart: 'auto',
              fontSize: '13px',
              color: '#94A3B8',
              textDecoration: 'underline',
            }}
          >
            {t.privacy}
          </a>
        </div>
      </div>
    </div>
  );
}
