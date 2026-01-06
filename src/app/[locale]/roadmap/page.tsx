import { getTranslations } from 'next-intl/server';

export default async function RoadmapPage() {
  const t = await getTranslations('roadmap');

  const phases = [
    { 
      phase: 'Q1 2024', 
      status: 'completed',
      title: t('phase1Title'),
      items: [t('phase1Item1'), t('phase1Item2'), t('phase1Item3')]
    },
    { 
      phase: 'Q2 2024', 
      status: 'completed',
      title: t('phase2Title'),
      items: [t('phase2Item1'), t('phase2Item2'), t('phase2Item3')]
    },
    { 
      phase: 'Q3 2024', 
      status: 'active',
      title: t('phase3Title'),
      items: [t('phase3Item1'), t('phase3Item2'), t('phase3Item3')]
    },
    { 
      phase: 'Q4 2024', 
      status: 'upcoming',
      title: t('phase4Title'),
      items: [t('phase4Item1'), t('phase4Item2'), t('phase4Item3')]
    },
    { 
      phase: '2025', 
      status: 'upcoming',
      title: t('phase5Title'),
      items: [t('phase5Item1'), t('phase5Item2'), t('phase5Item3')]
    },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'completed': return { class: 'badge-success', text: t('completed') };
      case 'active': return { class: 'badge-gold', text: t('inProgress') };
      default: return { class: 'badge-info', text: t('upcoming') };
    }
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '20%', right: '-15%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              {t('badge')}
            </div>
            
            <h1 style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '48px', 
              fontWeight: 700, 
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ 
              position: 'absolute',
              left: '24px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'var(--line)'
            }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {phases.map((phase, i) => {
                const badge = getStatusBadge(phase.status);
                return (
                  <div key={phase.phase} style={{ display: 'flex', gap: '24px', position: 'relative' }}>
                    {/* Timeline dot */}
                    <div style={{ 
                      width: '50px',
                      flexShrink: 0,
                      display: 'flex',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        borderRadius: '50%', 
                        background: phase.status === 'completed' ? 'var(--state-success)' : 
                                   phase.status === 'active' ? 'var(--aux-gold)' : 'var(--bg-tertiary)',
                        border: '3px solid var(--bg-primary)'
                      }}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="card" style={{ padding: '24px', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                        <span className="font-mono" style={{ 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          color: 'var(--aux-gold)' 
                        }}>
                          {phase.phase}
                        </span>
                        <span className={`badge ${badge.class}`} style={{ fontSize: '11px', padding: '4px 8px' }}>
                          {badge.text}
                        </span>
                      </div>
                      
                      <h3 style={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '18px', 
                        fontWeight: 600, 
                        color: 'var(--text-primary)', 
                        marginBottom: '12px' 
                      }}>
                        {phase.title}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {phase.items.map((item, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <svg style={{ 
                              width: '16px', 
                              height: '16px', 
                              color: phase.status === 'completed' ? 'var(--state-success)' : 'var(--text-muted)',
                              marginTop: '2px',
                              flexShrink: 0
                            }} fill="currentColor" viewBox="0 0 20 20">
                              {phase.status === 'completed' ? (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              ) : (
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                              )}
                            </svg>
                            <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
