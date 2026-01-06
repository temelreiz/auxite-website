import { getTranslations } from 'next-intl/server';

export default async function TeamPage() {
  const t = await getTranslations('team');

  const team = [
    { name: 'Alex Chen', role: t('ceo'), image: '/team/placeholder.png' },
    { name: 'Sarah Miller', role: t('cto'), image: '/team/placeholder.png' },
    { name: 'Michael Torres', role: t('cfo'), image: '/team/placeholder.png' },
    { name: 'Elena Kozlov', role: t('coo'), image: '/team/placeholder.png' },
  ];

  const advisors = [
    { name: 'Dr. James Wilson', role: t('advisorFinance'), image: '/team/placeholder.png' },
    { name: 'Maria Santos', role: t('advisorBlockchain'), image: '/team/placeholder.png' },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '10%', right: '-10%' }}></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

          {/* Leadership */}
          <div style={{ marginBottom: '64px' }}>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {t('leadershipTitle')}
            </h2>
            
            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {team.map((member) => (
                <div key={member.name} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    background: 'var(--bg-tertiary)',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px'
                  }}>
                    👤
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--aux-gold)', margin: 0 }}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Advisors */}
          <div>
            <h2 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {t('advisorsTitle')}
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '500px', margin: '0 auto' }}>
              {advisors.map((advisor) => (
                <div key={advisor.name} className="card" style={{ padding: '24px', textAlign: 'center' }}>
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'var(--bg-tertiary)',
                    margin: '0 auto 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px'
                  }}>
                    👤
                  </div>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {advisor.name}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
                    {advisor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
