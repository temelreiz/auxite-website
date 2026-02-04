'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HomeContentProps {
  t: {
    // Hero - Institutional
    heroSlogan1: string;
    heroSloganHighlight: string;
    heroSlogan2: string;
    heroSubline1: string;
    heroSubline2: string;
    getStarted: string;
    viewTrustCenter: string;
    // Trust Section
    trustBar?: {
      fullyAllocated: string;
      independentCustody: string;
      auditedFramework: string;
      redeemable: string;
      bankruptcyRemote: string;
    };
    longTermSignal?: string;
    // Metals Section
    metalsTitle?: string;
    metalsTitleHighlight?: string;
    metalsSubtitle?: string;
    // Stats (post-launch)
    stats: { onChain: string; backing: string; trading: string; metals: string };
    // Features
    whyAuxite: string;
    whyAuxiteHighlight: string;
    whySubtitle: string;
    features: { onChain: string; onChainDesc: string; physical: string; physicalDesc: string; stake: string; stakeDesc: string; transparent: string; transparentDesc: string };
    // Capital Protection Lifecycle
    howItWorks: string;
    howItWorksHighlight: string;
    howItWorksDiagram?: {
      step1: string; step1Desc: string;
      step2: string; step2Desc: string;
      step3: string; step3Desc: string;
      step4: string; step4Desc: string;
      step5: string; step5Desc: string;
    };
    steps: { buy: string; buyDesc: string; verify: string; verifyDesc: string; stake: string; stakeDesc: string };
    // Structure Section
    structureTitle?: string;
    structureTitleHighlight?: string;
    structureSubtitle?: string;
    structure?: {
      foundation: string; foundationDesc: string;
      operator: string; operatorDesc: string;
      metals: string; metalsDesc: string;
      vaults: string; vaultsDesc: string;
    };
    // Private Client
    privateClientTitle?: string;
    privateClientSubtitle?: string;
    // CTA
    ctaTitle: string;
    ctaTitleHighlight: string;
    ctaSubtitle: string;
    startTrading: string;
    readWhitepaper: string;
    // Legacy
    badge?: string;
    lbmaVaults: string;
    audited: string;
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

export default function HomeContent({ t, metals, isRTL = false }: HomeContentProps) {
  const textAlign = isRTL ? 'right' : 'left';
  const flexDirection = isRTL ? 'row-reverse' : 'row';

  // Trust items - Institutional Grade Infrastructure
  const trustItems = [
    { label: t.trustBar?.fullyAllocated || 'Fully Allocated', icon: '◆' },
    { label: t.trustBar?.independentCustody || 'Independent Custody', icon: '◆' },
    { label: t.trustBar?.bankruptcyRemote || 'Bankruptcy Remote', icon: '◆' },
    { label: t.trustBar?.auditedFramework || 'Audited Framework', icon: '◆' },
  ];

  // Capital Protection Lifecycle steps
  const lifecycleSteps = t.howItWorksDiagram ? [
    { title: t.howItWorksDiagram.step1, desc: t.howItWorksDiagram.step1Desc },
    { title: t.howItWorksDiagram.step2, desc: t.howItWorksDiagram.step2Desc },
    { title: t.howItWorksDiagram.step3, desc: t.howItWorksDiagram.step3Desc },
    { title: t.howItWorksDiagram.step4, desc: t.howItWorksDiagram.step4Desc },
    { title: t.howItWorksDiagram.step5, desc: t.howItWorksDiagram.step5Desc },
  ] : [
    { title: 'Acquire', desc: 'Purchase allocated metals' },
    { title: 'Allocate', desc: 'Secured to your vault' },
    { title: 'Store', desc: 'Independent custody' },
    { title: 'Verify', desc: 'On-chain attestation' },
    { title: 'Redeem', desc: 'Physical delivery' },
  ];

  // Structure diagram
  const structureItems = [
    { title: t.structure?.foundation || 'Auxite Foundation', desc: t.structure?.foundationDesc || 'Governance & Oversight' },
    { title: t.structure?.operator || 'Aurum Ledger Ltd', desc: t.structure?.operatorDesc || 'Operator — Hong Kong' },
    { title: t.structure?.vaults || 'Independent Vault Network', desc: t.structure?.vaultsDesc || 'Segregated Custody' },
    { title: 'Allocated Metals', desc: 'Your Assets' },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 1 — HERO (Minimal - Video + Headline + CTA + Space)
          Complexity ↓ = Trust ↑
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="mobile-pt" style={{ minHeight: '85vh', paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>

        {/* Cinematic Vault Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/vault-poster.jpg"
          className="hero-video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        >
          <source src="/vault-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay - institutional darkness */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(11,14,17,0.5) 0%, rgba(11,14,17,0.75) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Subtle gold accent */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 40%, rgba(201,162,77,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        {/* Hero Content - LEFT ALIGNED, MINIMAL */}
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10, height: '100%' }}>
          <AnimatedSection style={{ textAlign, maxWidth: '720px', paddingTop: '60px' }}>

            {/* H1 - Main Slogan */}
            <FadeInDiv delay={0.1}>
              <h1 className="hero-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '64px',
                fontWeight: 600,
                lineHeight: 1.02,
                margin: '0 0 32px 0',
                letterSpacing: '-0.025em',
                color: 'var(--text-primary)'
              }}>
                {t.heroSlogan1} <span className="text-gold-gradient">{t.heroSloganHighlight}</span> {t.heroSlogan2}
              </h1>
            </FadeInDiv>

            {/* Sub-headline */}
            <FadeInDiv delay={0.25}>
              <p className="hero-subtitle" style={{
                fontSize: '19px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: '0 0 48px 0',
                maxWidth: '480px',
                fontWeight: 400
              }}>
                {t.heroSubline1}<br />
                {t.heroSubline2}
              </p>
            </FadeInDiv>

            {/* CTA Buttons - Institutional Language */}
            <FadeInDiv delay={0.4}>
              <div className="cta-buttons" style={{
                display: 'flex',
                flexDirection: flexDirection as 'row' | 'row-reverse',
                gap: '16px',
              }}>
                <motion.a
                  href="https://wallet.auxite.io"
                  className="btn-primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ textDecoration: 'none', padding: '18px 36px', fontSize: '15px', fontWeight: 600 }}
                >
                  {t.getStarted}
                  <svg style={{ width: '16px', height: '16px', marginLeft: '8px', transform: isRTL ? 'rotate(180deg)' : 'none' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/trust-center" className="btn-secondary" style={{ textDecoration: 'none', padding: '18px 32px', fontSize: '15px' }}>
                    {t.viewTrustCenter}
                  </Link>
                </motion.div>
              </div>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 2 — STRUCTURAL TRUST (Institutional-Grade Infrastructure)
          Whale trigger: Bankruptcy Remote
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: 'var(--bg-primary)' }}>
        <div className="mobile-padding" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '72px' }}>
            <FadeInDiv>
              <p style={{
                color: 'var(--aux-gold)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                Structural Trust
              </p>
              <h2 className="section-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '42px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                Institutional-Grade Infrastructure
              </h2>
            </FadeInDiv>
          </AnimatedSection>

          {/* Trust Grid - 4 pillars */}
          <AnimatedSection className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {trustItems.map((item, i) => (
              <FadeInDiv key={item.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ borderColor: 'rgba(201,162,77,0.4)' }}
                  style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--line)',
                    borderRadius: '16px',
                    padding: '40px 24px',
                    textAlign: 'center',
                    transition: 'border-color 0.3s ease',
                    height: '100%'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'rgba(201,162,77,0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    color: 'var(--aux-gold)',
                    fontSize: '20px'
                  }}>
                    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: 1.4
                  }}>
                    {item.label}
                  </h3>
                </motion.div>
              </FadeInDiv>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 3 — STRUCTURE DIAGRAM (Game Changer - Counterparty Risk ↓)
          Foundation → Operator → Vault → Metals
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '140px 0', background: 'var(--bg-secondary)' }}>
        <div className="mobile-padding" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '80px' }}>
            <FadeInDiv>
              <p style={{
                color: 'var(--aux-gold)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                Corporate Structure
              </p>
              <h2 className="section-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '42px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}>
                {t.structureTitle || 'Institutional'} <span className="text-gold-gradient">{t.structureTitleHighlight || 'Architecture'}</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '500px', margin: '0 auto' }}>
                {t.structureSubtitle || 'Designed for structural integrity and risk separation.'}
              </p>
            </FadeInDiv>
          </AnimatedSection>

          {/* Vertical Structure Diagram */}
          <AnimatedSection>
            <FadeInDiv delay={0.2}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>
                {structureItems.map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      style={{
                        textAlign: 'center',
                        padding: '28px 56px',
                        background: i === 0
                          ? 'linear-gradient(135deg, rgba(201,162,77,0.12) 0%, var(--bg-tertiary) 100%)'
                          : 'var(--bg-tertiary)',
                        border: i === 0
                          ? '1px solid rgba(201,162,77,0.35)'
                          : '1px solid var(--line)',
                        borderRadius: '14px',
                        minWidth: '340px',
                        maxWidth: '400px'
                      }}
                    >
                      <p style={{
                        color: 'var(--text-primary)',
                        fontSize: '17px',
                        fontWeight: 600,
                        margin: '0 0 4px 0'
                      }}>{item.title}</p>
                      <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '13px',
                        margin: 0
                      }}>{item.desc}</p>
                    </motion.div>
                    {i < structureItems.length - 1 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.1 }}
                      >
                        <svg style={{ width: '20px', height: '40px', color: 'var(--aux-gold)', opacity: 0.5, margin: '4px 0' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 4 — CAPITAL PROTECTION LIFECYCLE
          Acquire → Allocate → Store → Verify → Redeem
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '140px 0', background: 'var(--bg-primary)' }}>
        <div className="mobile-padding" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '80px' }}>
            <FadeInDiv>
              <p style={{
                color: 'var(--aux-gold)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                How It Works
              </p>
              <h2 className="section-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '42px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em'
              }}>
                Capital Protection <span className="text-gold-gradient">Lifecycle</span>
              </h2>
            </FadeInDiv>
          </AnimatedSection>

          {/* Horizontal Flow */}
          <AnimatedSection>
            <FadeInDiv delay={0.2}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0',
                flexWrap: 'wrap',
                padding: '20px 0'
              }}>
                {lifecycleSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      style={{
                        textAlign: 'center',
                        padding: '32px 28px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--line)',
                        borderRadius: '14px',
                        minWidth: '160px'
                      }}
                    >
                      <p style={{
                        color: 'var(--aux-gold)',
                        fontSize: '18px',
                        fontWeight: 600,
                        margin: '0 0 6px 0'
                      }}>{step.title}</p>
                      <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '13px',
                        margin: 0
                      }}>{step.desc}</p>
                    </motion.div>
                    {i < lifecycleSteps.length - 1 && (
                      <svg className="hide-mobile" style={{ width: '48px', height: '20px', color: 'var(--aux-gold)', opacity: 0.4, margin: '0 -12px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 5 — INVESTMENT-GRADE METALS
          Not fintech product cards - institutional assets
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '140px 0', background: 'var(--bg-secondary)' }}>
        <div className="mobile-padding" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '72px' }}>
            <FadeInDiv>
              <p style={{
                color: 'var(--aux-gold)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                Available Assets
              </p>
              <h2 className="section-title" style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '42px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}>
                {t.metalsTitle || 'Investment-Grade'} <span className="text-gold-gradient">{t.metalsTitleHighlight || 'Metals'}</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '450px', margin: '0 auto' }}>
                {t.metalsSubtitle || 'LBMA-aligned sourcing. Fully allocated. Redeemable.'}
              </p>
            </FadeInDiv>
          </AnimatedSection>

          {/* Metal Cards - Institutional Style */}
          <AnimatedSection className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {metals.map((metal, i) => (
              <FadeInDiv key={metal.symbol} delay={i * 0.1}>
                <Link href={metal.href} style={{ textDecoration: 'none' }}>
                  <motion.div
                    whileHover={{ y: -8, borderColor: 'rgba(201,162,77,0.4)' }}
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--line)',
                      borderRadius: '16px',
                      padding: '40px 24px',
                      textAlign: 'center',
                      transition: 'border-color 0.3s ease',
                      height: '100%'
                    }}
                  >
                    <Image
                      src={metal.icon}
                      alt={metal.name}
                      width={64}
                      height={64}
                      style={{ marginBottom: '20px' }}
                    />
                    <h3 style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '20px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      margin: '0 0 4px 0'
                    }}>
                      {metal.symbol}
                    </h3>
                    <p style={{
                      color: 'var(--text-muted)',
                      fontSize: '14px',
                      margin: '0 0 16px 0'
                    }}>
                      {metal.name}
                    </p>
                    {/* Institutional badges */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      alignItems: 'center',
                      borderTop: '1px solid var(--line)',
                      paddingTop: '16px',
                      marginTop: '8px'
                    }}>
                      <span style={{
                        color: 'var(--text-muted)',
                        fontSize: '11px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        Fully Allocated
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </FadeInDiv>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 6 — PRIVATE CLIENT SERVICES
          Instant Prestige Signal
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: 'var(--bg-primary)', borderTop: '1px solid var(--line)' }}>
        <div className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <AnimatedSection>
            <FadeInDiv>
              <p style={{
                color: 'var(--aux-gold)',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '16px'
              }}>
                {t.privateClientTitle || 'Private Client Services'}
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '18px',
                margin: 0,
                lineHeight: 1.7
              }}>
                {t.privateClientSubtitle || 'For allocations above $100,000.'}
              </p>
            </FadeInDiv>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 7 — LONG TERM SIGNAL (Whale Filter)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--line)' }}>
        <div className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '17px',
            fontStyle: 'italic',
            margin: 0,
            lineHeight: 1.8
          }}>
            {t.longTermSignal || 'Designed for long-term holders — not short-term speculation.'}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 8 — CTA Section (Institutional - No sales pressure)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '160px 0', position: 'relative', overflow: 'hidden', background: 'var(--bg-primary)' }}>
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            background: 'radial-gradient(circle, rgba(201,162,77,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />

        <AnimatedSection className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeInDiv>
            <h2 className="section-title" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '44px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginBottom: '20px',
              letterSpacing: '-0.02em'
            }}>
              {t.ctaTitle} <span className="text-gold-gradient">{t.ctaTitleHighlight}</span>?
            </h2>
          </FadeInDiv>
          <FadeInDiv delay={0.15}>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '48px', lineHeight: 1.7 }}>
              {t.ctaSubtitle}
            </p>
          </FadeInDiv>
          <FadeInDiv delay={0.3}>
            <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <motion.a
                href="https://wallet.auxite.io"
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{ textDecoration: 'none', padding: '20px 40px', fontSize: '15px', fontWeight: 600 }}
              >
                {t.startTrading}
                <svg style={{ width: '18px', height: '18px', marginLeft: '8px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/whitepaper" className="btn-secondary" style={{ textDecoration: 'none', padding: '20px 36px', fontSize: '15px' }}>
                  {t.readWhitepaper}
                </Link>
              </motion.div>
            </div>
          </FadeInDiv>
        </AnimatedSection>
      </section>
    </div>
  );
}
