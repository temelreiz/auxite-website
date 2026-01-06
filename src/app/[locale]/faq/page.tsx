import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function FAQPage() {
  const t = await getTranslations('faq');

  const categories = [
    {
      title: t('generalTitle'),
      items: [
        { q: t('q1'), a: t('a1') },
        { q: t('q2'), a: t('a2') },
        { q: t('q3'), a: t('a3') },
      ]
    },
    {
      title: t('tradingTitle'),
      items: [
        { q: t('q4'), a: t('a4') },
        { q: t('q5'), a: t('a5') },
        { q: t('q6'), a: t('a6') },
      ]
    },
    {
      title: t('securityTitle'),
      items: [
        { q: t('q7'), a: t('a7') },
        { q: t('q8'), a: t('a8') },
        { q: t('q9'), a: t('a9') },
      ]
    },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background Elements */}
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* FAQ Categories */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {categories.map((category) => (
              <div key={category.title}>
                <h2 style={{ 
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px', 
                  fontWeight: 600, 
                  color: 'var(--text-primary)', 
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid var(--line)'
                }}>
                  {category.title}
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {category.items.map((item, i) => (
                    <details 
                      key={i}
                      className="card"
                      style={{ padding: '20px 24px' }}
                    >
                      <summary style={{ 
                        cursor: 'pointer',
                        fontSize: '15px',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        listStyle: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px'
                      }}>
                        {item.q}
                        <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p style={{ 
                        marginTop: '16px',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--line-soft)',
                        fontSize: '14px', 
                        color: 'var(--text-muted)', 
                        lineHeight: 1.7,
                        margin: '16px 0 0 0'
                      }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="card" style={{ padding: '32px', marginTop: '48px', textAlign: 'center' }}>
            <h3 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '8px'
            }}>
              {t('contactTitle')}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>
              {t('contactDesc')}
            </p>
            <Link 
              href="/contact"
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              {t('contactCta')}
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
