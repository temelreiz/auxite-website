'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HomeContentProps {
  t: {
    hero: {
      headline: string;
      line1: string;
      line2: string;
      line3: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    trustBadges: {
      fullyAllocated: string;
      segregated: string;
      bankruptcyRemote: string;
      independentlyCustodied: string;
    };
    whatIsAuxite: {
      headline: string;
      text: string;
    };
    howItWorks: {
      headline: string;
      fund: string;
      fundDesc: string;
      allocate: string;
      allocateDesc: string;
      store: string;
      storeDesc: string;
      redeem: string;
      redeemDesc: string;
    };
    metals: {
      headline: string;
      subtitle: string;
      lbma: string;
      allocated: string;
      execution: string;
    };
    custody: {
      headline: string;
      bullet1: string;
      bullet2: string;
      bullet3: string;
      bullet4: string;
      cta: string;
    };
    execution: {
      headline: string;
      text: string;
    };
    yield: {
      headline: string;
      text: string;
    };
    whoWeServe: {
      headline: string;
      familyOffices: string;
      familyOfficesDesc: string;
      assetManagers: string;
      assetManagersDesc: string;
      corporates: string;
      corporatesDesc: string;
      professionalInvestors: string;
      professionalInvestorsDesc: string;
    };
    trustPreview: {
      headline: string;
      audit: string;
      reserves: string;
      custodyItem: string;
      legal: string;
      cta: string;
    };
    cta: {
      headline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      disclaimer: string;
    };
  };
  metals: { symbol: string; name: string; icon: string; href: string }[];
  isRTL?: boolean;
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

function AnimatedSection({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function FadeInDiv({ children, delay = 0, style, className }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties; className?: string }) {
  return (
    <motion.div
      variants={fadeIn}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Gold label used across sections
function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase' as const,
      color: 'var(--aux-gold)',
      marginBottom: 16,
    }}>
      {text}
    </div>
  );
}

export default function HomeContent({ t, metals, isRTL = false }: HomeContentProps) {
  const textAlign = isRTL ? 'right' as const : 'left' as const;
  const flexDir = isRTL ? 'row-reverse' as const : 'row' as const;

  const trustBadges = [
    t.trustBadges.fullyAllocated,
    t.trustBadges.segregated,
    t.trustBadges.bankruptcyRemote,
    t.trustBadges.independentlyCustodied,
  ];

  const howItWorksSteps = [
    { num: '01', title: t.howItWorks.fund, desc: t.howItWorks.fundDesc },
    { num: '02', title: t.howItWorks.allocate, desc: t.howItWorks.allocateDesc },
    { num: '03', title: t.howItWorks.store, desc: t.howItWorks.storeDesc },
    { num: '04', title: t.howItWorks.redeem, desc: t.howItWorks.redeemDesc },
  ];

  const custodyBullets = [
    t.custody.bullet1,
    t.custody.bullet2,
    t.custody.bullet3,
    t.custody.bullet4,
  ];

  const clientTypes = [
    {
      title: t.whoWeServe.familyOffices,
      desc: t.whoWeServe.familyOfficesDesc,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      title: t.whoWeServe.assetManagers,
      desc: t.whoWeServe.assetManagersDesc,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      ),
    },
    {
      title: t.whoWeServe.corporates,
      desc: t.whoWeServe.corporatesDesc,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
    {
      title: t.whoWeServe.professionalInvestors,
      desc: t.whoWeServe.professionalInvestorsDesc,
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
  ];

  const trustItems = [
    {
      label: t.trustPreview.audit,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 14l2 2 4-4" />
        </svg>
      ),
    },
    {
      label: t.trustPreview.reserves,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      label: t.trustPreview.custodyItem,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
    {
      label: t.trustPreview.legal,
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l9 4.5v4.5c0 5.25-3.83 10.15-9 11.25C6.83 22.15 3 17.25 3 12V7.5L12 3z" />
        </svg>
      ),
    },
  ];

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'}>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO (Trust First)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--bg-primary)' }}>
        {/* Video Background */}
        <video
          autoPlay muted loop playsInline
          poster="/vault-poster.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
        >
          <source src="/vault-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,10,13,0.6) 0%, rgba(8,10,13,0.85) 100%)' }} />
        <div className="hero-grid-overlay" style={{ position: 'absolute', inset: 0 }} />
        <div className="vignette" style={{ position: 'absolute', inset: 0 }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '160px 40px 100px' }}>
          <AnimatedSection>
            <FadeInDiv delay={0.1}>
              <h1 className="hero-title" style={{
                fontSize: 52,
                fontWeight: 600,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                maxWidth: 720,
                letterSpacing: '-0.02em',
                textAlign,
                margin: 0,
              }}>
                {t.hero.headline}
              </h1>
            </FadeInDiv>

            <FadeInDiv delay={0.25}>
              <div style={{ maxWidth: 600, marginTop: 28, textAlign }}>
                <p style={{ fontSize: 19, color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 4px 0' }}>{t.hero.line1}</p>
                <p style={{ fontSize: 19, color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 4px 0' }}>{t.hero.line2}</p>
                <p style={{ fontSize: 19, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{t.hero.line3}</p>
              </div>
            </FadeInDiv>

            {/* Trust Badges Bar */}
            <FadeInDiv delay={0.4}>
              <div className="hide-mobile" style={{
                display: 'flex',
                flexDirection: flexDir,
                alignItems: 'center',
                gap: 0,
                marginTop: 36,
                flexWrap: 'wrap',
              }}>
                {trustBadges.map((badge, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                    {i > 0 && (
                      <span style={{ margin: '0 16px', color: 'var(--line)', fontSize: 14 }}>|</span>
                    )}
                    <span style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--aux-gold)',
                    }}>
                      <span style={{ marginRight: isRTL ? 0 : 6, marginLeft: isRTL ? 6 : 0, fontSize: 8, opacity: 0.7 }}>&#9670;</span>
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInDiv>

            {/* CTAs */}
            <FadeInDiv delay={0.55}>
              <div className="cta-buttons" style={{ display: 'flex', flexDirection: flexDir, gap: 16, marginTop: 44, flexWrap: 'wrap' }}>
                <motion.a
                  href="https://vault.auxite.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}
                >
                  {t.hero.ctaPrimary}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </motion.a>
                <Link href="/contact">
                  <motion.span
                    className="btn-secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
                  >
                    {t.hero.ctaSecondary}
                  </motion.span>
                </Link>
              </div>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — WHAT IS AUXITE
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-secondary)', padding: '120px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <FadeInDiv>
              <SectionLabel text="ABOUT" />
            </FadeInDiv>
            <FadeInDiv delay={0.1}>
              <h2 className="section-title" style={{
                fontSize: 38,
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                margin: '0 0 24px 0',
              }}>
                {t.whatIsAuxite.headline}
              </h2>
            </FadeInDiv>
            <FadeInDiv delay={0.2}>
              <p style={{
                fontSize: 18,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: 640,
                margin: '0 auto',
              }}>
                {t.whatIsAuxite.text}
              </p>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — HOW THE PLATFORM WORKS
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-primary)', padding: '140px 40px' }} className="mobile-padding">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <AnimatedSection>
            <FadeInDiv>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <SectionLabel text="PROCESS" />
                <h2 className="section-title" style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}>
                  {t.howItWorks.headline}
                </h2>
              </div>
            </FadeInDiv>

            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {howItWorksSteps.map((step, i) => (
                <FadeInDiv key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ borderColor: 'rgba(201,162,77,0.4)', y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--line)',
                      borderRadius: 16,
                      padding: 28,
                      height: '100%',
                      textAlign,
                    }}
                  >
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--aux-gold)', letterSpacing: '0.05em', marginBottom: 16, fontFamily: 'var(--font-mono, monospace)' }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                      {step.desc}
                    </p>
                  </motion.div>
                </FadeInDiv>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — AVAILABLE METALS
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-secondary)', padding: '140px 40px' }} className="mobile-padding">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <AnimatedSection>
            <FadeInDiv>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <SectionLabel text="METALS" />
                <h2 className="section-title" style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  margin: '0 0 12px 0',
                }}>
                  {t.metals.headline}
                </h2>
                <p style={{ fontSize: 17, color: 'var(--text-secondary)', margin: 0 }}>
                  {t.metals.subtitle}
                </p>
              </div>
            </FadeInDiv>

            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {metals.map((metal, i) => (
                <FadeInDiv key={metal.symbol} delay={i * 0.1}>
                  <Link href={metal.href} style={{ textDecoration: 'none' }}>
                    <motion.div
                      whileHover={{ y: -8, borderColor: 'rgba(201,162,77,0.5)' }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: 'var(--bg-primary)',
                        border: '1px solid var(--line)',
                        borderRadius: 16,
                        padding: 28,
                        textAlign: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ width: 56, height: 56, margin: '0 auto 16px', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-tertiary)', border: '1px solid var(--line-soft)' }}>
                        <Image src={metal.icon} alt={metal.name} width={32} height={32} />
                      </div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--aux-gold)', letterSpacing: '0.05em', marginBottom: 4, fontFamily: 'var(--font-mono, monospace)' }}>
                        {metal.symbol}
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 16 }}>
                        {metal.name}
                      </div>
                      {/* Micro-badges */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {[t.metals.lbma, t.metals.allocated, t.metals.execution].map((badge, bi) => (
                          <div key={bi} style={{
                            fontSize: 11,
                            color: 'var(--text-muted)',
                            letterSpacing: '0.04em',
                            padding: '4px 0',
                            borderTop: bi === 0 ? '1px solid var(--line-soft)' : 'none',
                            paddingTop: bi === 0 ? 12 : 0,
                          }}>
                            <span style={{ color: 'var(--aux-gold)', marginRight: isRTL ? 0 : 6, marginLeft: isRTL ? 6 : 0, fontSize: 8 }}>&#9670;</span>
                            {badge}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </Link>
                </FadeInDiv>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — CUSTODY
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-primary)', padding: '140px 40px' }} className="mobile-padding">
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <AnimatedSection>
            <FadeInDiv>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <SectionLabel text="CUSTODY" />
                <h2 className="section-title" style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}>
                  {t.custody.headline}
                </h2>
              </div>
            </FadeInDiv>

            <div style={{ maxWidth: 600, margin: '0 auto' }}>
              {custodyBullets.map((bullet, i) => (
                <FadeInDiv key={i} delay={i * 0.1}>
                  <div style={{
                    display: 'flex',
                    flexDirection: flexDir,
                    alignItems: 'flex-start',
                    gap: 14,
                    padding: '14px 0',
                    borderBottom: i < custodyBullets.length - 1 ? '1px solid var(--line-soft)' : 'none',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--aux-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {bullet}
                    </span>
                  </div>
                </FadeInDiv>
              ))}
            </div>

            <FadeInDiv delay={0.5}>
              <div style={{ textAlign: 'center', marginTop: 44 }}>
                <Link href="/trust-center" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  color: 'var(--aux-gold)',
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                }}>
                  {t.custody.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — EXECUTION
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-secondary)', padding: '100px 40px', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <FadeInDiv>
              <SectionLabel text="EXECUTION" />
            </FadeInDiv>
            <FadeInDiv delay={0.1}>
              <h2 className="section-title" style={{
                fontSize: 38,
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                margin: '0 0 24px 0',
              }}>
                {t.execution.headline}
              </h2>
            </FadeInDiv>
            <FadeInDiv delay={0.2}>
              <p style={{
                fontSize: 18,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: 640,
                margin: '0 auto',
              }}>
                {t.execution.text}
              </p>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — YIELD (Optional Enhancement)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-primary)', padding: '100px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <AnimatedSection>
            <FadeInDiv>
              <SectionLabel text="YIELD" />
            </FadeInDiv>
            <FadeInDiv delay={0.1}>
              <h2 className="section-title" style={{
                fontSize: 38,
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                margin: '0 0 24px 0',
              }}>
                {t.yield.headline}
              </h2>
            </FadeInDiv>
            <FadeInDiv delay={0.2}>
              <p style={{
                fontSize: 18,
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: 640,
                margin: '0 auto',
              }}>
                {t.yield.text}
              </p>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — WHO WE SERVE
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-secondary)', padding: '140px 40px' }} className="mobile-padding">
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <AnimatedSection>
            <FadeInDiv>
              <div style={{ textAlign: 'center', marginBottom: 56 }}>
                <SectionLabel text="CLIENTS" />
                <h2 className="section-title" style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}>
                  {t.whoWeServe.headline}
                </h2>
              </div>
            </FadeInDiv>

            <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
              {clientTypes.map((client, i) => (
                <FadeInDiv key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ borderColor: 'rgba(201,162,77,0.4)', y: -4 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--line)',
                      borderRadius: 16,
                      padding: 28,
                      height: '100%',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ color: 'var(--aux-gold)', marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
                      {client.icon}
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 10px 0' }}>
                      {client.title}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                      {client.desc}
                    </p>
                  </motion.div>
                </FadeInDiv>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9 — TRUST CENTER PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-primary)', padding: '100px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <AnimatedSection>
            <FadeInDiv>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <SectionLabel text="TRUST" />
                <h2 className="section-title" style={{
                  fontSize: 38,
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}>
                  {t.trustPreview.headline}
                </h2>
              </div>
            </FadeInDiv>

            <FadeInDiv delay={0.15}>
              <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
                {trustItems.map((item, i) => (
                  <div key={i} style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--line)',
                    borderRadius: 12,
                    padding: '20px 16px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                    <div style={{ color: 'var(--aux-gold)' }}>{item.icon}</div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.02em' }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeInDiv>

            <FadeInDiv delay={0.3}>
              <div style={{ textAlign: 'center' }}>
                <Link href="/trust-center">
                  <motion.span
                    className="btn-secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
                  >
                    {t.trustPreview.cta}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </motion.span>
                </Link>
              </div>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--bg-primary)', padding: '160px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle gold radial glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,162,77,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <FadeInDiv>
              <h2 style={{
                fontSize: 42,
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                margin: '0 0 40px 0',
              }}>
                {t.cta.headline}
              </h2>
            </FadeInDiv>

            <FadeInDiv delay={0.15}>
              <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
                <motion.a
                  href="https://vault.auxite.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}
                >
                  {t.cta.ctaPrimary}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </motion.a>
                <Link href="/contact">
                  <motion.span
                    className="btn-secondary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}
                  >
                    {t.cta.ctaSecondary}
                  </motion.span>
                </Link>
              </div>
            </FadeInDiv>

            <FadeInDiv delay={0.3}>
              <p style={{
                fontSize: 14,
                color: 'var(--text-muted)',
                fontStyle: 'italic',
                lineHeight: 1.7,
                maxWidth: 520,
                margin: '0 auto',
                opacity: 0.8,
              }}>
                {t.cta.disclaimer}
              </p>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
