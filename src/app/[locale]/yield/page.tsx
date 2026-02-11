import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

// Lease rates API'den veri çek
async function getLeaseRates() {
  try {
    const res = await fetch('https://wallet.auxite.io/api/lease-rates', {
      next: { revalidate: 300 }, // 5 dakikada bir yenile
    });

    if (!res.ok) throw new Error('API error');

    const data = await res.json();
    return data.rates;
  } catch (error) {
    console.error('Lease rates fetch error:', error);
    // Fallback rates
    return {
      gold: { "3m": 2.5, "6m": 3.0, "12m": 3.5 },
      silver: { "3m": 2.0, "6m": 2.5, "12m": 3.0 },
      platinum: { "3m": 3.0, "6m": 3.5, "12m": 4.0 },
      palladium: { "3m": 2.8, "6m": 3.3, "12m": 3.8 },
    };
  }
}

export default async function StakingPage() {
  const t = await getTranslations('staking');
  const leaseRates = await getLeaseRates();

  // 12 aylık yield'leri kullan (en yüksek)
  const tiers = [
    {
      metal: 'AUXG',
      icon: '/auxg_icon.png',
      minAllocation: '1',
      projectedYield: `${leaseRates?.gold?.["12m"] || 3.5}%`,
      color: '#C6A15B',
      bgColor: 'rgba(198, 161, 91, 0.12)'
    },
    {
      metal: 'AUXS',
      icon: '/auxs_icon.png',
      minAllocation: '10',
      projectedYield: `${leaseRates?.silver?.["12m"] || 3.0}%`,
      color: '#A6B0BF',
      bgColor: 'rgba(166, 176, 191, 0.12)'
    },
    {
      metal: 'AUXPT',
      icon: '/auxpt_icon.png',
      minAllocation: '100',
      projectedYield: `${leaseRates?.platinum?.["12m"] || 4.0}%`,
      color: '#8FA3B8',
      bgColor: 'rgba(143, 163, 184, 0.12)'
    },
    {
      metal: 'AUXPD',
      icon: '/auxpd_icon.png',
      minAllocation: '1000',
      projectedYield: `${leaseRates?.palladium?.["12m"] || 3.8}%`,
      color: '#6E7C8A',
      bgColor: 'rgba(110, 124, 138, 0.12)'
    },
  ];

  const protections = [
    { icon: '🏦', title: t('benefit1Title'), desc: t('benefit1Desc') },
    { icon: '🔐', title: t('benefit2Title'), desc: t('benefit2Desc') },
    { icon: '🛡️', title: t('benefit3Title'), desc: t('benefit3Desc') },
    { icon: '📊', title: t('benefit4Title'), desc: t('benefit4Desc') },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        {/* Background Elements */}
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '10%', right: '-10%' }}></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>
              <svg style={{ width: '14px', height: '14px' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '640px', margin: '0 auto 12px', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7, opacity: 0.8 }}>
              {t('subtitleDetail')}
            </p>
          </div>

          {/* Tier Cards */}
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '48px' }}>
            {tiers.map((tier) => (
              <div
                key={tier.metal}
                className="card"
                style={{
                  padding: '24px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Tier highlight */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: tier.color
                }}></div>

                {/* Metal Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: tier.bgColor,
                  border: `1px solid ${tier.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  position: 'relative'
                }}>
                  <Image
                    src={tier.icon}
                    alt={tier.metal}
                    width={44}
                    height={44}
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                {/* Metal Symbol */}
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '20px',
                  fontWeight: 700,
                  color: tier.color,
                  marginBottom: '8px'
                }}>
                  {tier.metal}
                </h3>

                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  {t('minAllocation')}: {tier.minAllocation} {tier.metal}
                </p>

                <div className="font-mono text-gold-gradient" style={{ fontSize: '28px', fontWeight: 700 }}>
                  {tier.projectedYield}
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>{t('projectedYield')}</p>
              </div>
            ))}
          </div>

          {/* All Metals Info */}
          <div className="card" style={{ padding: '24px', marginBottom: '32px' }}>
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              {t('supportedMetals')}
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '24px',
              flexWrap: 'wrap'
            }}>
              {[
                { symbol: 'AUXG', nameKey: 'gold', color: '#C6A15B', icon: '/auxg_icon.png' },
                { symbol: 'AUXS', nameKey: 'silver', color: '#A6B0BF', icon: '/auxs_icon.png' },
                { symbol: 'AUXPT', nameKey: 'platinum', color: '#8FA3B8', icon: '/auxpt_icon.png' },
                { symbol: 'AUXPD', nameKey: 'palladium', color: '#6E7C8A', icon: '/auxpd_icon.png' }
              ].map((metal) => (
                <div
                  key={metal.symbol}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 18px',
                    background: 'var(--bg-tertiary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${metal.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Image
                      src={metal.icon}
                      alt={metal.symbol}
                      width={28}
                      height={28}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: metal.color,
                      margin: 0,
                      fontFamily: "'Inter', sans-serif"
                    }}>
                      {metal.symbol}
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      margin: 0
                    }}>
                      {t(metal.nameKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Protections */}
          <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {t('benefitsTitle')}
            </h2>

            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {protections.map((item) => (
                <div key={item.title} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '6px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How Yield Programs Work */}
          <div className="card" style={{ padding: '32px', marginBottom: '32px' }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              {t('howTitle')}
            </h2>

            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { num: '01', title: t('steps.allocate'), desc: t('steps.allocateDesc') },
                { num: '02', title: t('steps.deploy'), desc: t('steps.deployDesc') },
                { num: '03', title: t('steps.yield'), desc: t('steps.yieldDesc') },
                { num: '04', title: t('steps.remain'), desc: t('steps.remainDesc') },
              ].map((step) => (
                <div key={step.num} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--aux-gold)',
                    marginBottom: '8px',
                    fontFamily: "'Inter', sans-serif"
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '6px'
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Info Callout */}
          <div className="trust-callout trust-callout-info" style={{ marginBottom: '32px' }}>
            <svg style={{ width: '20px', height: '20px', color: 'var(--state-info)', flexShrink: 0 }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <p style={{ color: 'var(--text-primary)', fontSize: '14px', fontWeight: 500, marginBottom: '4px' }}>
                {t('infoTitle')}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: 1.6 }}>
                {t('infoDesc')}
              </p>
            </div>
          </div>

          {/* Regulatory Disclaimer */}
          <div style={{
            textAlign: 'center',
            padding: '24px',
            marginBottom: '32px',
            background: 'var(--bg-secondary)',
            borderRadius: '12px',
            border: '1px solid var(--line)'
          }}>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '12px',
              margin: 0,
              lineHeight: 1.7,
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontStyle: 'italic'
            }}>
              {t('disclaimer')}
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <a
              href="https://vault.auxite.io"
              className="btn-primary"
              style={{ textDecoration: 'none' }}
            >
              {t('cta')}
              <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Operator Info */}
          <div style={{
            textAlign: 'center',
            padding: '32px',
            borderTop: '1px solid var(--line)',
          }}>
            <p style={{
              color: 'var(--text-primary)',
              fontSize: '16px',
              fontWeight: 500,
              margin: '0 0 8px 0',
            }}>
              Operated by <span style={{ color: 'var(--aux-gold)' }}>Aurum Ledger Ltd</span>
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '14px',
              margin: '0 0 12px 0',
            }}>
              Hong Kong
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '11px',
              margin: 0,
              lineHeight: 1.6,
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              {t('regulatoryNote')}
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
