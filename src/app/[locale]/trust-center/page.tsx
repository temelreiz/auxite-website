import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function TrustCenterPage() {
  const t = await getTranslations('trustCenter');

  const trustItems = [
    { 
      icon: '🔐', 
      title: t('proofOfReserves'), 
      desc: t('proofOfReservesDesc'), 
      href: '/trust-center/on-chain-supply',
      status: 'live'
    },
    { 
      icon: '📊', 
      title: t('onChainSupply'), 
      desc: t('onChainSupplyDesc'), 
      href: '/trust-center/on-chain-supply',
      status: 'live'
    },
    { 
      icon: '📜', 
      title: t('smartContracts'), 
      desc: t('smartContractsDesc'), 
      href: '/trust-center/on-chain-supply',
      status: 'live'
    },
    { 
      icon: '🏛️', 
      title: t('custody'), 
      desc: t('custodyDesc'), 
      href: '/vaults',
      status: 'live'
    },
  ];

  const statements = [
    t('statements.1'),
    t('statements.2'),
    t('statements.3'),
    t('statements.4'),
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'live':
        return { class: 'badge-success', text: t('statusLive') };
      case 'initializing':
        return { class: 'badge-info', text: t('statusInitializing') };
      case 'warning':
        return { class: 'badge-warning', text: t('statusDelayed') };
      default:
        return { class: 'badge-info', text: t('statusLive') };
    }
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Grid Overlay */}
        <div className="hero-grid-overlay"></div>
        
        {/* Metal Glint */}
        <div className="metal-glint" style={{ top: '10%', right: '-5%' }}></div>
        
        {/* Vignette */}
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 64px auto' }}>
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
              marginBottom: '20px', 
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            
            <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Trust Commitment Callout */}
          <div className="trust-callout trust-callout-info" style={{ marginBottom: '48px' }}>
            <svg style={{ width: '20px', height: '20px', color: 'var(--state-info)', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>
                {t('realDataTitle')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>
                {t('realDataDesc')}
              </p>
            </div>
          </div>

          {/* Trust Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '48px' }}>
            {trustItems.map((item) => {
              const badge = getStatusBadge(item.status);
              return (
                <Link 
                  key={item.title}
                  href={item.href}
                  className="card"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px',
                    padding: '20px 24px', 
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '28px' }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <h3 style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '16px', 
                        fontWeight: 600, 
                        color: 'var(--text-primary)', 
                        margin: 0 
                      }}>
                        {item.title}
                      </h3>
                      <span className={`badge ${badge.class}`} style={{ padding: '4px 8px', fontSize: '11px' }}>
                        {badge.text}
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                  <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>

          {/* Trust Statements */}
          <div className="card" style={{ padding: '32px' }}>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span className="verified-badge">
                <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              {t('commitmentTitle')}
            </h2>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              {statements.map((statement, i) => (
                <div 
                  key={i}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '12px',
                    padding: '12px 16px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '10px'
                  }}
                >
                  <svg style={{ width: '18px', height: '18px', color: 'var(--state-success)', flexShrink: 0, marginTop: '2px' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {statement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a 
              href="https://wallet.auxite.io"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              {t('startTrading')}
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
