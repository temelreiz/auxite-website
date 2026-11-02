// /precious-metals-basket — why hold gold, silver, platinum and palladium
// together, with the basket valued live at spot.
//
// Landing page for the Google Search "precious metals basket" campaign. Google
// does not allow ads (or their destinations) to promote buying or trading
// crypto without certification, so this page talks about metals only: no
// token names, no exchange links, no crypto vocabulary. The call to action is
// opening an Auxite account.

import RiskNotice from '@/components/RiskNotice';
import BasketCta from '@/components/BasketCta';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/i18n/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata('basket', locale);
}

type Metal = 'gold' | 'silver' | 'platinum' | 'palladium';
const METALS: Metal[] = ['gold', 'silver', 'platinum', 'palladium'];
const COLORS: Record<Metal, string> = {
  gold: 'var(--metal-gold)',
  silver: 'var(--metal-silver)',
  platinum: 'var(--metal-platinum)',
  palladium: 'var(--metal-palladium)',
};

type Row = { gramsPerUnit: number; spotUSDPerGram: number; valueUSD: number; weightPct: number };

/** Fixed grams per basket valued at live spot (the same feed the app uses). */
async function getBasket(): Promise<{ rows: Record<Metal, Row>; total: number; at: number } | null> {
  try {
    const r = await fetch('https://vault.auxite.io/api/auxr/price', { next: { revalidate: 300 } });
    const j = await r.json();
    const rows = j?.components as Record<Metal, Row> | undefined;
    if (!rows || METALS.some((m) => !rows[m])) return null;
    const total = METALS.reduce((s, m) => s + Number(rows[m].valueUSD || 0), 0);
    return { rows, total, at: Number(j.timestamp) || Date.now() };
  } catch {
    return null;
  }
}

const usd = (n: number, d = 2) => `$${n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d })}`;

export default async function BasketPage() {
  const t = await getTranslations('basket');
  const basket = await getBasket();

  const cell = { padding: '12px 14px', borderBottom: '1px solid var(--border, rgba(127,127,127,0.2))', fontSize: '14px' } as const;
  const head = { ...cell, color: 'var(--text-muted)', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.04em' };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '140px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="metal-glint" style={{ top: '5%', right: '-15%' }}></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="badge badge-gold" style={{ marginBottom: '24px' }}>{t('badge')}</div>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: '48px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.1 }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* Live basket */}
          <div className="card" style={{ padding: '28px', marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{t('liveTitle')}</h2>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '6px 0 0' }}>{t('liveDesc')}</p>
              </div>
              {basket && (
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)' }}>{usd(basket.total)}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t('perBasket')}</div>
                </div>
              )}
            </div>
            {basket ? (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px' }}>
                  <thead>
                    <tr>
                      <th style={{ ...head, textAlign: 'left' }}>{t('colMetal')}</th>
                      <th style={{ ...head, textAlign: 'right' }}>{t('colGrams')}</th>
                      <th style={{ ...head, textAlign: 'right' }}>{t('colSpot')}</th>
                      <th style={{ ...head, textAlign: 'right' }}>{t('colValue')}</th>
                      <th style={{ ...head, textAlign: 'right' }}>{t('colWeight')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {METALS.map((m) => {
                      const r = basket.rows[m];
                      return (
                        <tr key={m}>
                          <td style={{ ...cell, color: 'var(--text-primary)', fontWeight: 500 }}>
                            <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 5, background: COLORS[m], marginRight: 10 }} />
                            {t(`metal_${m}`)}
                          </td>
                          <td style={{ ...cell, textAlign: 'right', color: 'var(--text-muted)' }}>{r.gramsPerUnit.toFixed(4)} g</td>
                          <td style={{ ...cell, textAlign: 'right', color: 'var(--text-muted)' }}>{usd(r.spotUSDPerGram)}</td>
                          <td style={{ ...cell, textAlign: 'right', color: 'var(--text-primary)' }}>{usd(r.valueUSD)}</td>
                          <td style={{ ...cell, textAlign: 'right', color: 'var(--text-primary)' }}>{r.weightPct.toFixed(1)}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '12px 0 0' }}>{t('liveNote')}</p>
              </div>
            ) : (
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>{t('liveUnavailable')}</p>
            )}
          </div>

          {/* Why four metals */}
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', textAlign: 'center', marginBottom: '28px' }}>{t('whyTitle')}</h2>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '48px' }}>
            {METALS.map((m) => (
              <div key={m} className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <span style={{ width: 12, height: 12, borderRadius: 6, background: COLORS[m] }} />
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>{t(`why_${m}_title`)}</h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>{t(`why_${m}`)}</p>
              </div>
            ))}
          </div>

          {/* What a basket changes / does not */}
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '56px' }}>
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginTop: 0 }}>{t('changesTitle')}</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.8 }}>
                <li>{t('changes1')}</li>
                <li>{t('changes2')}</li>
                <li>{t('changes3')}</li>
              </ul>
            </div>
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginTop: 0 }}>{t('limitsTitle')}</h3>
              <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.8 }}>
                <li>{t('limits1')}</li>
                <li>{t('limits2')}</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>{t('ctaTitle')}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '560px', margin: '0 auto 24px', lineHeight: 1.7 }}>{t('ctaDesc')}</p>
            <BasketCta label={t('cta')} />
            <RiskNotice />
          </div>
        </div>
      </section>
    </div>
  );
}
