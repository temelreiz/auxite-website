import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function WhitepaperPage() {
  const t = await getTranslations('whitepaper');

  const tableOfContents = [
    { num: '01', key: 'executiveSummary' },
    { num: '02', key: 'introduction' },
    { num: '03', key: 'solution' },
    { num: '04', key: 'tokenArchitecture' },
    { num: '05', key: 'physicalBacking' },
    { num: '06', key: 'vaultNetwork' },
    { num: '07', key: 'smartContracts' },
    { num: '08', key: 'tierSystem' },
    { num: '09', key: 'stakingRewards' },
    { num: '10', key: 'governance' },
    { num: '11', key: 'roadmap' },
    { num: '12', key: 'team' },
    { num: '13', key: 'legal' },
    { num: '14', key: 'risks' },
    { num: '15', key: 'conclusion' },
    { num: '16', key: 'references' },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background Elements */}
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '10%', right: '-10%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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

          {/* Download Card */}
          <div className="card" style={{ padding: '48px', textAlign: 'center', marginBottom: '32px' }}>
            {/* PDF Icon */}
            <div style={{ 
              width: '80px', 
              height: '100px', 
              background: 'var(--aux-gold)',
              borderRadius: '8px',
              margin: '0 auto 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <span style={{ color: 'var(--bg-primary)', fontWeight: 700, fontSize: '14px' }}>PDF</span>
              <div style={{ 
                position: 'absolute', 
                top: '-8px', 
                right: '-8px', 
                background: 'var(--state-success)', 
                borderRadius: '50%', 
                width: '24px', 
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg style={{ width: '14px', height: '14px', color: 'white' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '24px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '8px'
            }}>
              {t('documentTitle')}
            </h2>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '32px' }}>
              18 {t('pages')} • PDF • 2.1 MB
            </p>

            <a 
              href="/documents/Auxite_Whitepaper_v1.0.pdf"
              target="_blank"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              <svg style={{ width: '20px', height: '20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t('download')}
            </a>
          </div>

          {/* Table of Contents */}
          <div className="card" style={{ padding: '32px' }}>
            <h3 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '24px'
            }}>
              {t('contents')}
            </h3>

            <div style={{ display: 'grid', gap: '8px' }}>
              {tableOfContents.map((item) => (
                <div 
                  key={item.num}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '16px',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'var(--bg-tertiary)'
                  }}
                >
                  <span className="font-mono" style={{ 
                    color: 'var(--aux-gold)', 
                    fontWeight: 600,
                    fontSize: '13px',
                    opacity: 0.7
                  }}>
                    {item.num}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    {t(`toc.${item.key}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '20px' }}>
              {t('cta')}
            </p>
            <Link 
              href="/"
              className="btn-tertiary"
              style={{ fontSize: '15px' }}
            >
              {t('getStarted')}
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
