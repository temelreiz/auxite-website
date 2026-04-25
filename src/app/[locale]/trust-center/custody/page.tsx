import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/i18n/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata('custodyArchitecture', locale);
}

export default async function CustodyArchitecturePage() {
  const t = await getTranslations('custodyArchitecture');

  const jurisdictions = [
    { name: t('london'), flag: '🇬🇧' },
    { name: t('zurich'), flag: '🇨🇭' },
    { name: t('dubai'), flag: '🇦🇪' },
    { name: t('singapore'), flag: '🇸🇬' },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

          {/* Back */}
          <Link
            href="/trust-center"
            className="btn-tertiary"
            style={{ marginBottom: '32px', display: 'inline-flex' }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToTrustCenter')}
          </Link>

          {/* Hero */}
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px auto' }}>
            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Custody Flow Diagram */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0',
            marginBottom: '80px',
            padding: '48px 32px',
            background: 'var(--bg-secondary)',
            borderRadius: '16px',
            border: '1px solid var(--line)'
          }}>
            {[t('diagramClient'), t('diagramPlatform'), t('diagramCustody'), t('diagramVault')].map((label, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  padding: '16px 40px',
                  background: i === 0 ? 'rgba(201,162,77,0.08)' : 'var(--bg-tertiary)',
                  border: `1px solid ${i === 0 ? 'var(--aux-gold)' : 'var(--line)'}`,
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <p style={{
                    fontSize: i === 0 ? '17px' : '15px',
                    fontWeight: i === 0 ? 600 : 500,
                    color: i === 0 ? 'var(--aux-gold)' : 'var(--text-primary)',
                    margin: 0
                  }}>
                    {label}
                  </p>
                </div>
                {i < 3 && (
                  <svg style={{ width: '20px', height: '32px', color: 'var(--text-muted)', margin: '4px 0' }} fill="none" viewBox="0 0 24 32">
                    <path d="M12 4v24M8 24l4 4 4-4" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '24px', textAlign: 'center', fontStyle: 'italic', lineHeight: 1.7 }}>
              {t('diagramCaption')}
            </p>
          </div>

          {/* Protection Blocks */}
          <div style={{ display: 'grid', gap: '24px', marginBottom: '80px' }}>
            {/* Fully Allocated */}
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                {t('allocatedTitle')}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                {t('allocatedDesc')}
              </p>
            </div>

            {/* Bankruptcy Remote */}
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
                {t('bankruptcyTitle')}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                {t('bankruptcyDesc')}
              </p>
            </div>

            {/* No Rehypothecation */}
            <div className="card" style={{ padding: '40px', borderLeft: '3px solid var(--aux-gold)' }}>
              <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--aux-gold)', marginBottom: '16px' }}>
                {t('noRehypTitle')}
              </h2>
              <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
                {t('noRehypDesc')}
              </p>
            </div>
          </div>

          {/* Multi-Jurisdiction Vaulting */}
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px', textAlign: 'center' }}>
              {t('multiJurisdictionTitle')}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '32px', textAlign: 'center', lineHeight: 1.7 }}>
              {t('multiJurisdictionDesc')}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }} className="grid-4">
              {jurisdictions.map((j) => (
                <div key={j.name} className="card" style={{ padding: '28px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{j.flag}</div>
                  <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{j.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ textAlign: 'center', padding: '48px 0' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                {t('ctaPrimary')}
              </Link>
              <Link href="/trust-center/reserves" className="btn-secondary" style={{ textDecoration: 'none' }}>
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
