import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

export default async function HowItWorksPage() {
  const t = await getTranslations('howItWorks');

  const steps = [
    {
      num: '01',
      title: t('step1Title'),
      desc: t('step1Desc'),
      details: [t('step1Detail1'), t('step1Detail2'), t('step1Detail3')],
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    {
      num: '02',
      title: t('step2Title'),
      desc: t('step2Desc'),
      details: [t('step2Detail1'), t('step2Detail2'), t('step2Detail3')],
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    },
    {
      num: '03',
      title: t('step3Title'),
      desc: t('step3Desc'),
      details: [t('step3Detail1'), t('step3Detail2'), t('step3Detail3')],
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      )
    },
    {
      num: '04',
      title: t('step4Title'),
      desc: t('step4Desc'),
      details: [t('step4Detail1'), t('step4Detail2'), t('step4Detail3')],
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    },
    {
      num: '05',
      title: t('step5Title'),
      desc: t('step5Desc'),
      details: [t('step5Detail1'), t('step5Detail2'), t('step5Detail3')],
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      )
    },
    {
      num: '06',
      title: t('step6Title'),
      desc: t('step6Desc'),
      details: [t('step6Detail1'), t('step6Detail2'), t('step6Detail3')],
      icon: (
        <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
        </svg>
      )
    },
  ];

  const diagramSteps = [
    t('diagramClient'),
    t('diagramExecution'),
    t('diagramAllocation'),
    t('diagramCustody'),
    t('diagramVerification'),
  ];

  const blocks = [
    { title: t('ownershipTitle'), desc: t('ownershipDesc'), icon: (
      <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    )},
    { title: t('pricingTitle'), desc: t('pricingDesc'), icon: (
      <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { title: t('riskTitle'), desc: t('riskDesc'), icon: (
      <svg style={{ width: '24px', height: '24px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )},
  ];

  const comparisonRows = [
    { feature: t('comparisonOwnership'), auxite: true, etf: false, unallocated: false },
    { feature: t('comparisonBacking'), auxite: true, etf: 'partial', unallocated: false },
    { feature: t('comparisonRedemption'), auxite: true, etf: false, unallocated: false },
    { feature: t('comparisonSegregated'), auxite: true, etf: false, unallocated: false },
    { feature: t('comparisonTransparency'), auxite: true, etf: 'partial', unallocated: false },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>

      {/* HERO */}
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              {t('badge')}
            </div>

            <h1 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '48px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '640px', margin: '0 auto 16px' }}>
              {t('subtitle')}
            </p>

            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto', fontStyle: 'italic' }}>
              {t('heroLine')}
            </p>
          </div>
        </div>
      </section>

      {/* 6-STEP FLOW */}
      <section style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="card"
                style={{ padding: '36px 40px', position: 'relative', overflow: 'hidden' }}
              >
                {/* Step number watermark */}
                <div className="font-mono" style={{
                  position: 'absolute',
                  top: '16px',
                  right: '24px',
                  fontSize: '72px',
                  fontWeight: 700,
                  color: 'rgba(201,162,77,0.06)',
                  lineHeight: 1
                }}>
                  {step.num}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(201,162,77,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--aux-gold)',
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
                        marginBottom: '10px'
                      }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.7 }}>
                        {step.desc}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {step.details.map((detail, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <svg style={{ width: '16px', height: '16px', color: 'var(--aux-gold)', marginTop: '2px', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
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
                    bottom: '-10px',
                    left: '49px',
                    width: '2px',
                    height: '20px',
                    background: 'rgba(201,162,77,0.2)',
                    zIndex: 2
                  }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW DIAGRAM */}
      <section style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0',
            padding: '48px 32px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--line)',
            borderRadius: '16px'
          }}>
            {diagramSteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  padding: '14px 24px',
                  background: i === 0 ? 'rgba(201,162,77,0.12)' : 'var(--bg-tertiary)',
                  border: i === 0 ? '1px solid rgba(201,162,77,0.3)' : '1px solid var(--line)',
                  borderRadius: '10px',
                  color: i === 0 ? 'var(--aux-gold)' : 'var(--text-secondary)',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: 'nowrap'
                }}>
                  {step}
                </div>
                {i < diagramSteps.length - 1 && (
                  <svg style={{ width: '24px', height: '24px', color: 'rgba(201,162,77,0.4)', margin: '0 4px', flexShrink: 0 }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <p style={{
            textAlign: 'center',
            fontSize: '14px',
            color: 'var(--text-muted)',
            marginTop: '20px',
            fontStyle: 'italic'
          }}>
            {t('diagramCaption')}
          </p>
        </div>
      </section>

      {/* TRUST BOOSTER */}
      <section style={{ background: 'var(--bg-secondary)', padding: '80px 0' }}>
        <div className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <div style={{
            padding: '48px 40px',
            background: 'var(--bg-tertiary)',
            border: '1px solid rgba(201,162,77,0.2)',
            borderRadius: '16px'
          }}>
            <svg style={{ width: '32px', height: '32px', color: 'var(--aux-gold)', margin: '0 auto 20px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '26px',
              fontWeight: 600,
              color: 'var(--aux-gold)',
              marginBottom: '12px',
              letterSpacing: '-0.01em'
            }}>
              {t('trustBoosterTitle')}
            </h2>
            <p style={{ fontSize: '17px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>
              {t('trustBoosterDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* 3 BLOCKS — Ownership, Pricing, Risk */}
      <section style={{ background: 'var(--bg-primary)', padding: '100px 0' }}>
        <div className="mobile-padding" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {blocks.map((block, i) => (
              <div key={i} className="card" style={{
                padding: '40px 32px',
                textAlign: 'center',
                borderTop: i === 0 ? '3px solid var(--aux-gold)' : 'none'
              }}>
                <div style={{ color: 'var(--aux-gold)', margin: '0 auto 20px', display: 'flex', justifyContent: 'center' }}>
                  {block.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '12px'
                }}>
                  {block.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.7 }}>
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
        <div className="mobile-padding" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '48px',
            letterSpacing: '-0.02em'
          }}>
            {t('comparisonTitle')}
          </h2>

          <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--line)' }}>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    {t('comparisonFeature')}
                  </th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--aux-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    {t('comparisonAuxite')}
                  </th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    {t('comparisonETF')}
                  </th>
                  <th style={{
                    padding: '20px 24px',
                    textAlign: 'center',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>
                    {t('comparisonUnallocated')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < comparisonRows.length - 1 ? '1px solid var(--line-soft)' : 'none' }}>
                    <td style={{ padding: '18px 24px', fontSize: '15px', color: 'var(--text-secondary)' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'center' }}>
                      <svg style={{ width: '20px', height: '20px', color: 'var(--state-success)', margin: '0 auto' }} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'center' }}>
                      {row.etf === 'partial' ? (
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {t('comparisonPartial')}
                        </span>
                      ) : (
                        <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)', opacity: 0.4, margin: '0 auto' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </td>
                    <td style={{ padding: '18px 24px', textAlign: 'center' }}>
                      <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)', opacity: 0.4, margin: '0 auto' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--bg-primary)', padding: '120px 0', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(201,162,77,0.04) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            lineHeight: 1.2
          }}>
            {t('ctaTitle')}
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.7 }}>
            {t('ctaDesc')}
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://vault.auxite.io"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              {t('ctaPrimary')}
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="btn-secondary"
              style={{ textDecoration: 'none' }}
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
