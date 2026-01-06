import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function VaultsPage() {
  const t = await getTranslations('vaults');

  const vaults = [
    { 
      city: 'Zurich', 
      country: 'Switzerland', 
      flag: '🇨🇭',
      operator: 'Loomis International',
      certification: 'LBMA Good Delivery',
      metals: ['AUXG', 'AUXS', 'AUXPT', 'AUXPD'],
      status: 'active'
    },
    { 
      city: 'Singapore', 
      country: 'Singapore', 
      flag: '🇸🇬',
      operator: 'Brink\'s Singapore',
      certification: 'LBMA Good Delivery',
      metals: ['AUXG', 'AUXS'],
      status: 'active'
    },
    { 
      city: 'London', 
      country: 'United Kingdom', 
      flag: '🇬🇧',
      operator: 'Malca-Amit',
      certification: 'LBMA Good Delivery',
      metals: ['AUXG', 'AUXPT'],
      status: 'active'
    },
    { 
      city: 'Dubai', 
      country: 'UAE', 
      flag: '🇦🇪',
      operator: 'Brink\'s Dubai',
      certification: 'DMCC Approved',
      metals: ['AUXG'],
      status: 'coming'
    },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background Elements */}
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '10%', right: '-10%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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
              marginBottom: '16px',
              lineHeight: 1.1
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Vault Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            {vaults.map((vault) => (
              <div 
                key={vault.city}
                className="card"
                style={{ padding: '24px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                  {/* Location */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '200px' }}>
                    <span style={{ fontSize: '32px' }}>{vault.flag}</span>
                    <div>
                      <h3 style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '18px', 
                        fontWeight: 600, 
                        color: 'var(--text-primary)', 
                        margin: 0 
                      }}>
                        {vault.city}
                      </h3>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>{vault.country}</p>
                    </div>
                  </div>

                  {/* Operator */}
                  <div style={{ flex: 1, minWidth: '150px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>Operator</p>
                    <p style={{ fontSize: '14px', color: 'var(--text-primary)', margin: 0, fontWeight: 500 }}>{vault.operator}</p>
                  </div>

                  {/* Certification */}
                  <div style={{ minWidth: '140px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>Certification</p>
                    <span className="badge badge-success" style={{ fontSize: '11px' }}>{vault.certification}</span>
                  </div>

                  {/* Metals */}
                  <div style={{ minWidth: '120px' }}>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Metals</p>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {vault.metals.map((metal) => (
                        <span 
                          key={metal}
                          style={{ 
                            fontSize: '11px', 
                            padding: '2px 6px', 
                            background: 'var(--bg-tertiary)',
                            borderRadius: '4px',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {metal}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    {vault.status === 'active' ? (
                      <span className="badge badge-success">
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }}></span>
                        Active
                      </span>
                    ) : (
                      <span className="badge badge-info">Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Features */}
          <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '24px'
            }}>
              {t('securityTitle')}
            </h2>
            
            <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {[
                { icon: '🔐', title: t('security1Title'), desc: t('security1Desc') },
                { icon: '📋', title: t('security2Title'), desc: t('security2Desc') },
                { icon: '🛡️', title: t('security3Title'), desc: t('security3Desc') },
              ].map((item) => (
                <div key={item.title}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <Link 
              href="/trust-center"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              {t('cta')}
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
