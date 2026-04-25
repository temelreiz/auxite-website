import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/i18n/metadata';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata('institutionalFaq', locale);
}

export default async function InstitutionalFaqPage() {
  const t = await getTranslations('institutionalFaq');

  const faqs = [
    { q: t('q1'), a: t('a1') },
    { q: t('q2'), a: t('a2') },
    { q: t('q3'), a: t('a3') },
    { q: t('q4'), a: t('a4') },
    { q: t('q5'), a: t('a5') },
    { q: t('q6'), a: t('a6') },
    { q: t('q7'), a: t('a7') },
    { q: t('q8'), a: t('a8') },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <section className="mobile-pt" style={{ paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid-overlay"></div>
        <div className="vignette"></div>

        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

          {/* Back */}
          <Link href="/trust-center" className="btn-tertiary" style={{ marginBottom: '32px', display: 'inline-flex' }}>
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToTrustCenter')}
          </Link>

          {/* Hero */}
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 80px auto' }}>
            <h1 style={{ fontFamily: "'Inter', sans-serif", fontSize: '48px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              {t('title')} <span className="text-gold-gradient">{t('titleHighlight')}</span>
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: 1.8 }}>
              {t('subtitle')}
            </p>
          </div>

          {/* FAQ Items */}
          <div style={{ display: 'grid', gap: '16px', marginBottom: '80px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="card" style={{ padding: '36px 40px' }}>
                <h3 style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '14px'
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'var(--text-muted)',
                  margin: 0,
                  lineHeight: 1.8
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              {t('ctaPrimary')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
