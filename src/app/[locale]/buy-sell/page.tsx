import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function BuySellPage() {
  const t = await getTranslations('buySell');

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '10%', right: '-10%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '42px', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Redirect Card */}
          <div className="card" style={{ padding: '48px', textAlign: 'center' }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '20px', 
              background: 'rgba(201,162,77,0.1)',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg style={{ width: '40px', height: '40px', color: 'var(--aux-gold)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '22px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '12px'
            }}>
              {t('walletTitle')}
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '32px', lineHeight: 1.7 }}>
              {t('walletDesc')}
            </p>

            <a 
              href="https://wallet.auxite.io"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              {t('openWallet')}
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Features */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px' }}>
            {[
              { icon: '🔐', label: t('feature1') },
              { icon: '⚡', label: t('feature2') },
              { icon: '💎', label: t('feature3') },
            ].map((feature) => (
              <div key={feature.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{feature.icon}</div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>{feature.label}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
