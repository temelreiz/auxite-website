import { getTranslations } from 'next-intl/server';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>
        
        <div className="mobile-padding" style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('badge')}
            </div>
            
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

          {/* Contact Form Card */}
          <div className="card" style={{ padding: '32px' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {t('nameLabel')}
                </label>
                <input 
                  type="text" 
                  className="input"
                  placeholder={t('namePlaceholder')}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {t('emailLabel')}
                </label>
                <input 
                  type="email" 
                  className="input"
                  placeholder={t('emailPlaceholder')}
                />
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {t('subjectLabel')}
                </label>
                <select className="input" style={{ cursor: 'pointer' }}>
                  <option value="">{t('subjectPlaceholder')}</option>
                  <option value="general">{t('subjectGeneral')}</option>
                  <option value="support">{t('subjectSupport')}</option>
                  <option value="partnership">{t('subjectPartnership')}</option>
                  <option value="press">{t('subjectPress')}</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {t('messageLabel')}
                </label>
                <textarea 
                  className="input"
                  rows={5}
                  placeholder={t('messagePlaceholder')}
                  style={{ resize: 'vertical', minHeight: '120px' }}
                />
              </div>
              
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}>
                {t('submit')}
                <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Alternative Contact */}
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '8px' }}>
              {t('alternativeText')}
            </p>
            <a href="mailto:support@auxite.io" className="btn-tertiary" style={{ fontSize: '14px' }}>
              support@auxite.io
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
