import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function MetalsPage() {
  const t = await getTranslations('metals');

  const metals = [
    { 
      symbol: 'AUXG', 
      name: t('gold'), 
      icon: '/metals/gold.png',
      href: '/metals/auxg',
      color: 'var(--metal-gold)',
      description: t('goldDesc')
    },
    { 
      symbol: 'AUXS', 
      name: t('silver'), 
      icon: '/metals/silver.png',
      href: '/metals/auxs',
      color: 'var(--metal-silver)',
      description: t('silverDesc')
    },
    { 
      symbol: 'AUXPT', 
      name: t('platinum'), 
      icon: '/metals/platinum.png',
      href: '/metals/auxpt',
      color: 'var(--metal-platinum)',
      description: t('platinumDesc')
    },
    { 
      symbol: 'AUXPD', 
      name: t('palladium'), 
      icon: '/metals/palladium.png',
      href: '/metals/auxpd',
      color: 'var(--metal-palladium)',
      description: t('palladiumDesc')
    },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background Elements */}
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '5%', right: '-15%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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

          {/* Metal Cards */}
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '48px' }}>
            {metals.map((metal) => (
              <Link 
                key={metal.symbol}
                href={metal.href}
                className="card"
                style={{ 
                  padding: '32px',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  <div style={{ 
                    width: '72px', 
                    height: '72px', 
                    borderRadius: '16px', 
                    background: `${metal.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Image src={metal.icon} alt={metal.name} width={48} height={48} />
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <h2 style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '22px', 
                        fontWeight: 600, 
                        color: 'var(--text-primary)', 
                        margin: 0 
                      }}>
                        {metal.symbol}
                      </h2>
                      <span className="badge badge-success" style={{ padding: '4px 8px', fontSize: '11px' }}>
                        Live
                      </span>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0 0 4px 0' }}>
                      {metal.name}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                      {metal.description}
                    </p>
                  </div>
                  
                  <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Info Callout */}
          <div className="trust-callout trust-callout-info">
            <svg style={{ width: '20px', height: '20px', color: 'var(--state-info)', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>
                {t('infoTitle')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                {t('infoDesc')}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a 
              href="https://wallet.auxite.io"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              {t('cta')}
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
