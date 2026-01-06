import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function LegalPage() {
  const t = await getTranslations('legal');

  const legalDocs = [
    { 
      icon: '📄', 
      title: t('termsTitle'), 
      desc: t('termsDesc'),
      href: '/legal/terms',
      updated: '2024-01-15'
    },
    { 
      icon: '🔒', 
      title: t('privacyTitle'), 
      desc: t('privacyDesc'),
      href: '/legal/privacy',
      updated: '2024-01-15'
    },
    { 
      icon: '⚠️', 
      title: t('riskTitle'), 
      desc: t('riskDesc'),
      href: '/legal/risk',
      updated: '2024-01-15'
    },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '42px', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              {t('title')}
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Legal Documents */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {legalDocs.map((doc) => (
              <Link 
                key={doc.href}
                href={doc.href}
                className="card"
                style={{ 
                  padding: '24px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '28px' }}>{doc.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px', 
                    fontWeight: 600, 
                    color: 'var(--text-primary)', 
                    marginBottom: '4px' 
                  }}>
                    {doc.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
                    {doc.desc}
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {t('lastUpdated')}
                  </p>
                  <p className="font-mono" style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>
                    {doc.updated}
                  </p>
                </div>
                <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
