import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const metalData: Record<string, { 
  symbol: string; 
  name: string; 
  icon: string; 
  color: string;
  unit: string;
}> = {
  auxg: { symbol: 'AUXG', name: 'Gold', icon: '/metals/gold.png', color: 'var(--metal-gold)', unit: 'oz' },
  auxs: { symbol: 'AUXS', name: 'Silver', icon: '/metals/silver.png', color: 'var(--metal-silver)', unit: 'oz' },
  auxpt: { symbol: 'AUXPT', name: 'Platinum', icon: '/metals/platinum.png', color: 'var(--metal-platinum)', unit: 'oz' },
  auxpd: { symbol: 'AUXPD', name: 'Palladium', icon: '/metals/palladium.png', color: 'var(--metal-palladium)', unit: 'oz' },
};

export default async function MetalDetailPage({ params }: { params: Promise<{ metal: string }> }) {
  const { metal } = await params;
  const t = await getTranslations('metalDetail');
  
  const data = metalData[metal.toLowerCase()];
  if (!data) {
    notFound();
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '10%', right: '-10%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Back link */}
          <Link href="/metals" className="btn-tertiary" style={{ marginBottom: '32px', display: 'inline-flex' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToMetals')}
          </Link>

          {/* Hero */}
          <div className="card" style={{ padding: '40px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '20px', 
                background: `${data.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image src={data.icon} alt={data.name} width={64} height={64} />
              </div>
              
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <h1 style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '36px', 
                    fontWeight: 700, 
                    color: 'var(--text-primary)',
                    margin: 0
                  }}>
                    {data.symbol}
                  </h1>
                  <span className="badge badge-success">Live</span>
                </div>
                <p style={{ fontSize: '16px', color: 'var(--text-muted)', margin: 0 }}>
                  {t('tokenizedMetal', { metal: data.name })}
                </p>
              </div>
              
              <a 
                href="https://wallet.auxite.io"
                className="btn-primary"
                style={{ textDecoration: 'none' }}
              >
                {t('trade')} {data.symbol}
                <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }} className="grid-3">
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>{t('backing')}</p>
              <p className="font-mono text-gold-gradient" style={{ fontSize: '28px', fontWeight: 700, margin: 0 }}>1:1</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>{t('unit')}</p>
              <p className="font-mono" style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>1 {data.unit}</p>
            </div>
            <div className="card" style={{ padding: '24px', textAlign: 'center' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>{t('network')}</p>
              <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>Polygon</p>
            </div>
          </div>

          {/* About */}
          <div className="card" style={{ padding: '32px', marginBottom: '24px' }}>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '16px' 
            }}>
              {t('aboutTitle', { symbol: data.symbol })}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7, margin: 0 }}>
              {t('aboutContent', { symbol: data.symbol, metal: data.name })}
            </p>
          </div>

          {/* Features */}
          <div className="card" style={{ padding: '32px' }}>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '20px' 
            }}>
              {t('featuresTitle')}
            </h2>
            
            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                { icon: '🔐', title: t('feature1Title'), desc: t('feature1Desc') },
                { icon: '📊', title: t('feature2Title'), desc: t('feature2Desc') },
                { icon: '🏛️', title: t('feature3Title'), desc: t('feature3Desc') },
                { icon: '⚡', title: t('feature4Title'), desc: t('feature4Desc') },
              ].map((feature) => (
                <div 
                  key={feature.title}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '16px',
                    padding: '16px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px'
                  }}
                >
                  <span style={{ fontSize: '24px' }}>{feature.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
