import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function RiskPage() {
  const t = await getTranslations('risk');

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px' }}>
        <div className="mobile-padding" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          
          <Link href="/legal" className="btn-tertiary" style={{ marginBottom: '32px', display: 'inline-flex' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToLegal')}
          </Link>

          <div style={{ marginBottom: '32px' }}>
            <h1 style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '36px', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginBottom: '12px'
            }}>
              {t('title')}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
              {t('lastUpdated')}: January 15, 2024
            </p>
          </div>

          {/* Warning Callout */}
          <div className="trust-callout trust-callout-warning" style={{ marginBottom: '32px' }}>
            <svg style={{ width: '24px', height: '24px', color: 'var(--state-warning)', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 600, marginBottom: '4px' }}>
                {t('warningTitle')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                {t('warningContent')}
              </p>
            </div>
          </div>

          <div className="card" style={{ padding: '40px' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.8 }}>
              <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px', marginTop: 0 }}>
                1. {t('section1Title')}
              </h2>
              <p style={{ marginBottom: '24px' }}>{t('section1Content')}</p>

              <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                2. {t('section2Title')}
              </h2>
              <p style={{ marginBottom: '24px' }}>{t('section2Content')}</p>

              <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                3. {t('section3Title')}
              </h2>
              <p style={{ marginBottom: '24px' }}>{t('section3Content')}</p>

              <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                4. {t('section4Title')}
              </h2>
              <p style={{ marginBottom: '0' }}>{t('section4Content')}</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
