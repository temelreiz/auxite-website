import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/i18n/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata('trustCenter', locale);
}

export default async function TrustCenterPage() {
  const t = await getTranslations('trustCenter');

  const trustPages = [
    {
      title: t('custodyArchitecture'),
      desc: t('custodyArchitectureDesc'),
      href: '/trust-center/custody',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
        </svg>
      )
    },
    {
      title: t('reserveVerification'),
      desc: t('reserveVerificationDesc'),
      href: '/trust-center/reserves',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      title: t('riskFramework'),
      desc: t('riskFrameworkDesc'),
      href: '/trust-center/risk',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    },
    {
      title: t('legalStructure'),
      desc: t('legalStructureDesc'),
      href: '/trust-center/legal',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
      )
    },
    {
      title: t('institutionalFaq'),
      desc: t('institutionalFaqDesc'),
      href: '/trust-center/faq',
      icon: (
        <svg style={{ width: '28px', height: '28px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      )
    },
  ];

  const safeguards = [
    t('safeguard1'),
    t('safeguard2'),
    t('safeguard3'),
    t('safeguard4'),
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px auto' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t('badge')}
            </div>

            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '0' }}>
              {t('subtitle')}
            </p>
          </div>

          {/* NOT A BANK. NOT A BROKER. */}
          <div style={{
            textAlign: 'center',
            padding: '40px 32px',
            borderTop: '1px solid var(--line-soft)',
            borderBottom: '1px solid var(--line-soft)',
            marginBottom: '64px'
          }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--aux-gold)',
              marginBottom: '16px',
              letterSpacing: '0.02em'
            }}>
              {t('notBankTitle')}
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
              {t('notBankDesc')}
            </p>
          </div>

          {/* Trust Pages Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '64px' }}>
            {trustPages.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '24px 28px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  borderLeft: '3px solid transparent'
                }}
              >
                <div style={{
                  color: 'var(--aux-gold)',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '17px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: '0 0 6px 0'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
                <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          {/* Structural Safeguards */}
          <div className="card" style={{ padding: '40px' }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '28px'
            }}>
              {t('safeguardsTitle')}
            </h2>

            <div style={{ display: 'grid', gap: '16px' }}>
              {safeguards.map((safeguard, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '10px'
                  }}
                >
                  <svg style={{ width: '18px', height: '18px', color: 'var(--aux-gold)', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', margin: 0 }}>
                    {safeguard}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DNA Statement */}
          <div style={{
            textAlign: 'center',
            padding: '48px 24px',
            marginTop: '64px'
          }}>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.8,
              maxWidth: '560px',
              margin: '0 auto 40px auto'
            }}>
              {t('dnaStatement')}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/contact"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                {t('ctaPrimary')}
              </Link>
              <Link
                href="/trust-center/custody"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                {t('ctaSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
