import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function LegalStructurePage() {
  const t = await getTranslations('legalStructure');

  const structures = [
    { title: t('offBalanceTitle'), desc: t('offBalanceDesc') },
    { title: t('segregatedTitle'), desc: t('segregatedDesc') },
    { title: t('ringFencingTitle'), desc: t('ringFencingDesc') },
    { title: t('legalSeparationTitle'), desc: t('legalSeparationDesc') },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

          {/* Back */}
          <Link href="/trust-center" className="btn-tertiary" style={{ marginBottom: '32px', display: 'inline-flex' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToTrustCenter')}
          </Link>

          {/* Hero */}
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px auto' }}>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: '48px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Legal Structure Blocks */}
          <div style={{ display: 'grid', gap: '24px', marginBottom: '80px' }}>
            {structures.map((item, i) => (
              <div key={i} className="card" style={{
                padding: '48px 40px',
                borderLeft: i === 0 ? '3px solid var(--aux-gold)' : 'none'
              }}>
                <h2 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '22px',
                  fontWeight: 600,
                  color: i === 0 ? 'var(--aux-gold)' : 'var(--text-primary)',
                  marginBottom: '16px'
                }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: '17px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.9 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                {t('ctaPrimary')}
              </Link>
              <Link href="/trust-center/risk" className="btn-secondary" style={{ textDecoration: 'none' }}>
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
