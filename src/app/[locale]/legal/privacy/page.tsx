import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function PrivacyPage() {
  const t = await getTranslations('privacy');

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

          <div style={{ marginBottom: '48px' }}>
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
