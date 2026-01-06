import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

// Coverage Ratio Logic
function getCoverageStatus(ratio: number | null, t: any) {
  if (ratio === null) {
    return { 
      class: 'coverage-initializing', 
      badge: 'badge-info',
      text: t('statusInitializing'),
      message: t('messageInitializing')
    };
  }
  if (ratio >= 1.00) {
    return { 
      class: 'coverage-success', 
      badge: 'badge-success',
      text: t('statusFullyBacked'),
      message: t('messageFullyBacked')
    };
  }
  if (ratio >= 0.995) {
    return { 
      class: 'coverage-warning', 
      badge: 'badge-warning',
      text: t('statusSettlementPending'),
      message: t('messageSettlementPending')
    };
  }
  return { 
    class: 'coverage-danger', 
    badge: 'badge-danger',
    text: t('statusCoverageAlert'),
    message: t('messageCoverageAlert')
  };
}

export default async function OnChainSupplyPage() {
  const t = await getTranslations('onChainSupply');

  // Example data - In production, fetch from API/blockchain
  const metals = [
    { 
      symbol: 'AUXG', 
      name: t('gold'), 
      supply: '1,000.00', 
      allocated: '1,000.00', 
      ratio: 1.00,
      unit: 'oz',
      color: 'var(--metal-gold)'
    },
    { 
      symbol: 'AUXS', 
      name: t('silver'), 
      supply: '50,000.00', 
      allocated: '50,000.00', 
      ratio: 1.00,
      unit: 'oz',
      color: 'var(--metal-silver)'
    },
    { 
      symbol: 'AUXPT', 
      name: t('platinum'), 
      supply: '100.00', 
      allocated: '100.00', 
      ratio: 1.00,
      unit: 'oz',
      color: 'var(--metal-platinum)'
    },
    { 
      symbol: 'AUXPD', 
      name: t('palladium'), 
      supply: '50.00', 
      allocated: '50.00', 
      ratio: 1.00,
      unit: 'oz',
      color: 'var(--metal-palladium)'
    },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background */}
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ marginBottom: '48px' }}>
            <Link 
              href="/trust-center" 
              className="btn-tertiary"
              style={{ marginBottom: '24px', display: 'inline-flex' }}
            >
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t('backToTrustCenter')}
            </Link>
            
            <h1 style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '42px', 
              fontWeight: 700, 
              color: 'var(--text-primary)', 
              marginBottom: '16px', 
              letterSpacing: '-0.02em' 
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Overall Status */}
          <div className="card" style={{ padding: '24px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: 'rgba(59, 229, 140, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg style={{ width: '24px', height: '24px', color: 'var(--state-success)' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>{t('systemStatus')}</p>
                  <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--state-success)', margin: 0 }}>{t('allAssetsFullyBacked')}</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge badge-success">
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }}></span>
                  {t('live')}
                </span>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {t('updated')}: {t('justNow')}
                </span>
              </div>
            </div>
          </div>

          {/* Metal Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }} className="grid-2">
            {metals.map((metal) => {
              const status = getCoverageStatus(metal.ratio, t);
              return (
                <div key={metal.symbol} className="card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '10px', 
                        background: `${metal.color}20`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '20px'
                      }}>
                        {metal.symbol === 'AUXG' ? '🥇' : metal.symbol === 'AUXS' ? '🥈' : metal.symbol === 'AUXPT' ? '⬜' : '⬛'}
                      </div>
                      <div>
                        <h3 style={{ 
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '16px', 
                          fontWeight: 600, 
                          color: 'var(--text-primary)', 
                          margin: 0 
                        }}>
                          {metal.symbol}
                        </h3>
                        <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>{metal.name}</p>
                      </div>
                    </div>
                    <span className={`badge ${status.badge}`}>{status.text}</span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>{t('tokenSupply')}</p>
                      <p className="font-mono" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                        {metal.supply} <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{metal.unit}</span>
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>{t('allocated')}</p>
                      <p className="font-mono" style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
                        {metal.allocated} <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{metal.unit}</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Coverage Bar */}
                  <div style={{ marginTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t('coverageRatio')}</span>
                      <span className={`font-mono ${status.class}`} style={{ fontSize: '14px', fontWeight: 600 }}>
                        {(metal.ratio * 100).toFixed(2)}%
                      </span>
                    </div>
                    <div style={{ 
                      height: '6px', 
                      background: 'var(--bg-elevated)', 
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        height: '100%', 
                        width: `${Math.min(metal.ratio * 100, 100)}%`,
                        background: metal.ratio >= 1 ? 'var(--state-success)' : metal.ratio >= 0.995 ? 'var(--state-warning)' : 'var(--state-danger)',
                        borderRadius: '3px',
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Verification Info */}
          <div className="trust-callout trust-callout-info">
            <svg style={{ width: '20px', height: '20px', color: 'var(--state-info)', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>
                {t('howVerificationWorksTitle')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                {t('howVerificationWorksDesc')}
              </p>
            </div>
          </div>

          {/* Contract Links */}
          <div className="card" style={{ padding: '24px', marginTop: '24px' }}>
            <h3 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '16px' 
            }}>
              {t('smartContracts')}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {metals.map((metal) => (
                <div 
                  key={metal.symbol}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '10px'
                  }}
                >
                  <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>{metal.symbol}</span>
                  <a 
                    href="#" 
                    className="btn-tertiary"
                    style={{ fontSize: '13px' }}
                  >
                    {t('viewOnPolygonScan')}
                    <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
