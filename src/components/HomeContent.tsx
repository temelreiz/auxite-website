'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HomeContentProps {
  t: {
    // New Hero - Institutional
    heroSlogan1: string;
    heroSloganHighlight: string;
    heroSlogan2: string;
    heroSubline1: string;
    heroSubline2: string;
    getStarted: string;
    viewTrustCenter: string;
    // Trust Bar
    trustBar?: {
      fullyAllocated: string;
      independentCustody: string;
      auditedFramework: string;
      redeemable: string;
      bankruptcyRemote: string;
    };
    longTermSignal?: string;
    // Legacy
    badge?: string;
    lbmaVaults: string;
    audited: string;
    stats: { onChain: string; backing: string; trading: string; metals: string };
    whyAuxite: string;
    whyAuxiteHighlight: string;
    whySubtitle: string;
    features: { onChain: string; onChainDesc: string; physical: string; physicalDesc: string; stake: string; stakeDesc: string; transparent: string; transparentDesc: string };
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
    ctaTitle: string;
    ctaTitleHighlight: string;
    ctaSubtitle: string;
    startTrading: string;
    readWhitepaper: string;
  };
  metals: { symbol: string; name: string; icon: string; href: string }[];
  isRTL?: boolean;
}

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
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
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomeContent({ t, metals, isRTL = false }: HomeContentProps) {
  const features = [
    { icon: '🏛️', title: t.features.physical, description: t.features.physicalDesc },
    { icon: '🔒', title: t.features.onChain, description: t.features.onChainDesc },
    { icon: '📈', title: t.features.stake, description: t.features.stakeDesc },
    { icon: '🔍', title: t.features.transparent, description: t.features.transparentDesc },
  ];

  const textAlign = isRTL ? 'right' : 'left';
  const flexDirection = isRTL ? 'row-reverse' : 'row';

  // Trust bar items
  const trustBarItems = t.trustBar ? [
    t.trustBar.fullyAllocated,
    t.trustBar.independentCustody,
    t.trustBar.auditedFramework,
    t.trustBar.redeemable,
    t.trustBar.bankruptcyRemote,
  ] : [
    'Fully Allocated',
    'Independent Custody',
    'Audited Framework',
    'Redeemable',
    'Bankruptcy Remote',
  ];

  // How it works diagram steps
  const diagramSteps = t.howItWorksDiagram ? [
    { title: t.howItWorksDiagram.step1, desc: t.howItWorksDiagram.step1Desc },
    { title: t.howItWorksDiagram.step2, desc: t.howItWorksDiagram.step2Desc },
    { title: t.howItWorksDiagram.step3, desc: t.howItWorksDiagram.step3Desc },
    { title: t.howItWorksDiagram.step4, desc: t.howItWorksDiagram.step4Desc },
    { title: t.howItWorksDiagram.step5, desc: t.howItWorksDiagram.step5Desc },
  ] : [
    { title: 'Acquire', desc: 'Purchase allocated metals' },
    { title: 'Allocated', desc: 'Metal secured in vault' },
    { title: 'Stored', desc: 'Independent custody' },
    { title: 'Accessible', desc: 'Digitally verifiable' },
    { title: 'Redeemable', desc: 'Physical delivery available' },
  ];

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }} dir={isRTL ? 'rtl' : 'ltr'}>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 1 — HERO (Institutional - Capital Protection Focus)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="mobile-pt" style={{ minHeight: '80vh', paddingTop: '140px', paddingBottom: '60px', position: 'relative', overflow: 'hidden' }}>

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

        {/* Dark overlay for text readability (35% opacity) */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(11,14,17,0.35) 0%, rgba(11,14,17,0.65) 100%)',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Gold gradient accent overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 30%, rgba(201,162,77,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* Hero Text Content */}
            <AnimatedSection style={{ textAlign, maxWidth: '680px' }}>

              {/* H1 - Main Slogan - INSTITUTIONAL */}
              <FadeInDiv delay={0.1}>
                <h1 className="hero-title" style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '58px',
                  fontWeight: 600,
                  lineHeight: 1.05,
                  margin: '0 0 28px 0',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}>
                  {t.heroSlogan1} <span className="text-gold-gradient">{t.heroSloganHighlight}</span> {t.heroSlogan2}
                </h1>
              </FadeInDiv>

              {/* Sub-headline - Institutional messaging */}
              <FadeInDiv delay={0.2}>
                <p className="hero-subtitle" style={{
                  fontSize: '20px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  margin: '0 0 36px 0',
                  maxWidth: '520px'
                }}>
                  {t.heroSubline1}<br />
                  {t.heroSubline2}
                </p>
              </FadeInDiv>

              {/* CTA Buttons - Institutional language */}
              <FadeInDiv delay={0.3}>
                <div className="cta-buttons" style={{
                  display: 'flex',
                  flexDirection: flexDirection as 'row' | 'row-reverse',
                  gap: '14px',
                  marginBottom: '40px'
                }}>
                  <motion.a
                    href="https://wallet.auxite.io"
                    className="btn-primary"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ textDecoration: 'none', padding: '16px 32px', fontSize: '15px', fontWeight: 600 }}
                  >
                    {t.getStarted}
                    <svg style={{ width: '16px', height: '16px', transform: isRTL ? 'rotate(180deg)' : 'none' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/trust-center" className="btn-secondary" style={{ textDecoration: 'none', padding: '16px 28px', fontSize: '15px' }}>
                      {t.viewTrustCenter}
                    </Link>
                  </motion.div>
                </div>
              </FadeInDiv>

              {/* Trust Indicators - Subtle */}
              <FadeInDiv delay={0.4}>
                <div className="hide-mobile" style={{ display: 'flex', flexDirection: flexDirection as 'row' | 'row-reverse', gap: '28px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg style={{ width: '16px', height: '16px', color: 'var(--state-success)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{t.lbmaVaults}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg style={{ width: '16px', height: '16px', color: 'var(--state-success)' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>{t.audited}</span>
                  </div>
                </div>
              </FadeInDiv>
            </AnimatedSection>

            {/* Metal Cards - GOLD FIRST (Gateway Asset) */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid-2"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}
            >
              {metals.map((metal, i) => (
                <motion.div
                  key={metal.symbol}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  style={i === 0 ? { gridColumn: 'span 2' } : {}} // Gold spans full width
                >
                  <Link href={metal.href} className="card" style={{
                    background: i === 0 ? 'linear-gradient(135deg, rgba(201,162,77,0.1) 0%, var(--bg-secondary) 100%)' : 'var(--bg-secondary)',
                    backdropFilter: 'blur(20px)',
                    border: i === 0 ? '1px solid rgba(201,162,77,0.3)' : '1px solid var(--line)',
                    padding: i === 0 ? '32px' : '24px',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: i === 0 ? 'row' : 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: i === 0 ? '20px' : '0',
                    justifyContent: i === 0 ? 'center' : 'flex-start',
                  }}>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}>
                      <Image src={metal.icon} alt={metal.name} width={i === 0 ? 72 : 56} height={i === 0 ? 72 : 56} style={{ marginBottom: i === 0 ? 0 : '12px' }} />
                    </motion.div>
                    <div>
                      <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: i === 0 ? '22px' : '18px', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 2px 0' }}>{metal.symbol}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>{metal.name}</p>
                      {i === 0 && (
                        <p style={{ color: 'var(--aux-gold)', fontSize: '12px', marginTop: '8px', fontWeight: 500 }}>Gateway Asset</p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 2 — TRUST BAR (Conversion Machine - Silent but deadly)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '28px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="trust-bar-scroll" style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
            {trustBarItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <svg style={{ width: '18px', height: '18px', color: 'var(--state-success)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 3 — HOW IT WORKS DIAGRAM (Whale Question: Metal gerçekten var mı?)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '60px' }}>
            <FadeInDiv>
              <h2 className="section-title" style={{ fontFamily: "'Inter', sans-serif", fontSize: '40px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t.howItWorks} <span className="text-gold-gradient">{t.howItWorksHighlight}</span>
              </h2>
            </FadeInDiv>
          </AnimatedSection>

          {/* Visual Flow Diagram */}
          <AnimatedSection>
            <FadeInDiv delay={0.2}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0',
                flexWrap: 'wrap',
                padding: '40px 0'
              }}>
                {diagramSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        textAlign: 'center',
                        padding: '24px 32px',
                        background: 'var(--bg-secondary)',
                        border: '1px solid var(--line)',
                        borderRadius: '12px',
                        minWidth: '140px'
                      }}
                    >
                      <p style={{
                        color: 'var(--aux-gold)',
                        fontSize: '16px',
                        fontWeight: 600,
                        margin: '0 0 4px 0'
                      }}>{step.title}</p>
                      <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '12px',
                        margin: 0
                      }}>{step.desc}</p>
                    </motion.div>
                    {i < diagramSteps.length - 1 && (
                      <svg style={{ width: '40px', height: '20px', color: 'var(--aux-gold)', opacity: 0.5, margin: '0 -8px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
          BLOCK 4 — STRUCTURAL TRUST (Institutional Architecture Diagram)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="mobile-padding" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '60px' }}>
            <FadeInDiv>
              <h2 className="section-title" style={{ fontFamily: "'Inter', sans-serif", fontSize: '40px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                {t.structureTitle || 'Institutional'} <span className="text-gold-gradient">{t.structureTitleHighlight || 'Architecture'}</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px' }}>{t.structureSubtitle || 'Designed for structural integrity and risk separation.'}</p>
            </FadeInDiv>
          </AnimatedSection>

          {/* Structure Diagram */}
          <AnimatedSection>
            <FadeInDiv delay={0.2}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0'
              }}>
                {[
                  { title: t.structure?.foundation || 'Auxite Foundation', desc: t.structure?.foundationDesc || 'Governance & Oversight' },
                  { title: t.structure?.operator || 'Aurum Ledger Ltd', desc: t.structure?.operatorDesc || 'Operator — Hong Kong' },
                  { title: t.structure?.metals || 'Precious Metals Entities', desc: t.structure?.metalsDesc || 'Asset Management' },
                  { title: t.structure?.vaults || 'Independent Vault Network', desc: t.structure?.vaultsDesc || 'Segregated Custody' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 }}
                      style={{
                        textAlign: 'center',
                        padding: '20px 48px',
                        background: i === 0 ? 'linear-gradient(135deg, rgba(201,162,77,0.15) 0%, var(--bg-secondary) 100%)' : 'var(--bg-secondary)',
                        border: i === 0 ? '1px solid rgba(201,162,77,0.4)' : '1px solid var(--line)',
                        borderRadius: '12px',
                        minWidth: '320px'
                      }}
                    >
                      <p style={{
                        color: 'var(--text-primary)',
                        fontSize: '16px',
                        fontWeight: 600,
                        margin: '0 0 2px 0'
                      }}>{item.title}</p>
                      <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '13px',
                        margin: 0
                      }}>{item.desc}</p>
                    </motion.div>
                    {i < 3 && (
                      <svg style={{ width: '20px', height: '32px', color: 'var(--aux-gold)', opacity: 0.4, margin: '-4px 0' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
          BLOCK 5 — FEATURES (Why Auxite - Trust focused)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '100px 0', background: 'var(--bg-primary)', position: 'relative' }}>
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <FadeInDiv>
              <h2 className="section-title" style={{ fontFamily: "'Inter', sans-serif", fontSize: '40px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                {t.whyAuxite} <span className="text-gold-gradient">{t.whyAuxiteHighlight}</span>?
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '17px', maxWidth: '500px', margin: '0 auto' }}>{t.whySubtitle}</p>
            </FadeInDiv>
          </AnimatedSection>

          <AnimatedSection className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {features.map((feature, i) => (
              <FadeInDiv key={feature.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, borderColor: 'rgba(201,162,77,0.3)' }}
                  className="card"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--line)', padding: '32px 24px', borderRadius: '16px', height: '100%', transition: 'border-color 0.2s ease' }}
                >
                  <div style={{ fontSize: '36px', marginBottom: '20px' }}>{feature.icon}</div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>{feature.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{feature.description}</p>
                </motion.div>
              </FadeInDiv>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 6 — LONG TERM SIGNAL (Whale Filter)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '60px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="mobile-padding" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '16px',
            fontStyle: 'italic',
            margin: 0
          }}>
            {t.longTermSignal || 'Designed for long-term holders — not short-term speculation.'}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BLOCK 7 — CTA Section (Institutional language)
      ═══════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(201,162,77,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none'
          }}
        />

        <AnimatedSection className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeInDiv>
            <h2 className="section-title" style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
              {t.ctaTitle} <span className="text-gold-gradient">{t.ctaTitleHighlight}</span>?
            </h2>
          </FadeInDiv>
          <FadeInDiv delay={0.1}>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '40px', lineHeight: 1.7 }}>{t.ctaSubtitle}</p>
          </FadeInDiv>
          <FadeInDiv delay={0.2}>
            <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
              <motion.a
                href="https://wallet.auxite.io"
                className="btn-primary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{ textDecoration: 'none', padding: '18px 36px', fontSize: '15px', fontWeight: 600 }}
              >
                {t.startTrading}
                <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/whitepaper" className="btn-secondary" style={{ textDecoration: 'none', padding: '18px 32px', fontSize: '15px' }}>{t.readWhitepaper}</Link>
              </motion.div>
            </div>
          </FadeInDiv>
        </AnimatedSection>
      </section>
    </div>
  );
}
