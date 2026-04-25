import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/i18n/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata('riskFramework', locale);
}

export default async function RiskFrameworkPage() {
  const t = await getTranslations('riskFramework');

  const risks = [
    {
      title: t('marketRiskTitle'),
      desc: t('marketRiskDesc'),
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    },
    {
      title: t('counterpartyRiskTitle'),
      desc: t('counterpartyRiskDesc'),
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: t('operationalRiskTitle'),
      desc: t('operationalRiskDesc'),
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.645 3.256a.75.75 0 01-1.1-.666V5.39a.75.75 0 01.379-.65l5.645-3.256a.75.75 0 01.741 0l5.645 3.256a.75.75 0 01.379.65v12.41a.75.75 0 01-1.1.666l-5.645-3.256a.75.75 0 00-.741 0z" />
        </svg>
      )
    },
    {
      title: t('liquidityRiskTitle'),
      desc: t('liquidityRiskDesc'),
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      )
    },
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

          {/* Risk Categories */}
          <div style={{ display: 'grid', gap: '24px', marginBottom: '80px' }}>
            {risks.map((risk, i) => (
              <div key={i} className="card" style={{ padding: '40px', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <div style={{ color: 'var(--aux-gold)', flexShrink: 0, marginTop: '2px' }}>
                  {risk.icon}
                </div>
                <div>
                  <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 12px 0' }}>
                    {risk.title}
                  </h2>
                  <p style={{ fontSize: '16px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.8 }}>
                    {risk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Execution Venues */}
          <div style={{
            textAlign: 'center',
            padding: '48px 32px',
            borderTop: '1px solid var(--line-soft)',
            borderBottom: '1px solid var(--line-soft)',
            marginBottom: '64px'
          }}>
            <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '16px' }}>
              {t('executionTitle')}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
              {t('executionDesc')}
            </p>
          </div>

          {/* CTAs */}
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
                {t('ctaPrimary')}
              </Link>
              <Link href="/trust-center/legal" className="btn-secondary" style={{ textDecoration: 'none' }}>
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
