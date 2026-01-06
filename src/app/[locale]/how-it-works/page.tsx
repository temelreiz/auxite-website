import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function HowItWorksPage() {
  const t = await getTranslations('howItWorks');

  const steps = [
    { 
      num: '01', 
      icon: '👤',
      title: t('step1Title'), 
      desc: t('step1Desc'),
      details: [t('step1Detail1'), t('step1Detail2'), t('step1Detail3')]
    },
    { 
      num: '02', 
      icon: '💳',
      title: t('step2Title'), 
      desc: t('step2Desc'),
      details: [t('step2Detail1'), t('step2Detail2'), t('step2Detail3')]
    },
    { 
      num: '03', 
      icon: '🔗',
      title: t('step3Title'), 
      desc: t('step3Desc'),
      details: [t('step3Detail1'), t('step3Detail2'), t('step3Detail3')]
    },
    { 
      num: '04', 
      icon: '📈',
      title: t('step4Title'), 
      desc: t('step4Desc'),
      details: [t('step4Detail1'), t('step4Detail2'), t('step4Detail3')]
    },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background Elements */}
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '20%', right: '-10%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

          {/* Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
            {steps.map((step, i) => (
              <div 
                key={step.num}
                className="card"
                style={{ padding: '32px', position: 'relative', overflow: 'hidden' }}
              >
                {/* Step number watermark */}
                <div className="font-mono" style={{ 
                  position: 'absolute',
                  top: '20px',
                  right: '24px',
                  fontSize: '64px',
                  fontWeight: 700,
                  color: 'rgba(201,162,77,0.08)'
                }}>
                  {step.num}
                </div>
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '14px', 
                      background: 'rgba(201,162,77,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0
                    }}>
                      {step.icon}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '20px', 
                        fontWeight: 600, 
                        color: 'var(--text-primary)', 
                        marginBottom: '8px'
                      }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
                        {step.desc}
                      </p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {step.details.map((detail, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <svg style={{ width: '16px', height: '16px', color: 'var(--state-success)', marginTop: '2px', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div style={{ 
                    position: 'absolute',
                    bottom: '-12px',
                    left: '51px',
                    width: '2px',
                    height: '24px',
                    background: 'var(--line)',
                    zIndex: 2
                  }}></div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '24px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '12px'
            }}>
              {t('ctaTitle')}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px' }}>
              {t('ctaDesc')}
            </p>
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
