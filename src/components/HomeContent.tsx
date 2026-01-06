'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface HomeContentProps {
  t: {
    // New Hero
    heroSlogan1: string;
    heroSloganHighlight: string;
    heroSlogan2: string;
    heroSubline1: string;
    heroSubline2: string;
    getStarted: string;
    viewTrustCenter: string;
    // Legacy (keep for compatibility)
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
    steps: { buy: string; buyDesc: string; verify: string; verifyDesc: string; stake: string; stakeDesc: string };
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
    { icon: '🔗', title: t.features.onChain, description: t.features.onChainDesc },
    { icon: '🏛️', title: t.features.physical, description: t.features.physicalDesc },
    { icon: '📈', title: t.features.stake, description: t.features.stakeDesc },
    { icon: '🔍', title: t.features.transparent, description: t.features.transparentDesc },
  ];

  const textAlign = isRTL ? 'right' : 'left';
  const flexDirection = isRTL ? 'row-reverse' : 'row';

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="mobile-pt" style={{ minHeight: '85vh', paddingTop: '160px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        
        {/* === HERO VISUAL ELEMENTS === */}
        <div className="hero-grid-overlay"></div>
        
        <motion.div 
          className="metal-glint"
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: '5%', right: isRTL ? 'auto' : '-10%', left: isRTL ? '-10%' : 'auto', width: '600px', height: '600px' }}
        />
        <motion.div 
          className="metal-glint"
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ bottom: '10%', left: isRTL ? 'auto' : '-15%', right: isRTL ? '-15%' : 'auto', width: '500px', height: '500px' }}
        />
        
        <div className="node-overlay"></div>
        <div className="vignette"></div>
        
        {/* Dark gradient for text readability */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(11,14,17,0.4) 0%, rgba(11,14,17,0.7) 100%)',
          pointerEvents: 'none'
        }}></div>
        {/* === END HERO VISUAL ELEMENTS === */}
        
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            
            {/* Hero Text Content */}
            <AnimatedSection style={{ textAlign, maxWidth: '640px' }}>
              
              {/* H1 - Main Slogan */}
              <FadeInDiv delay={0.1}>
                <h1 className="hero-title" style={{ 
                  fontFamily: "'Inter', sans-serif", 
                  fontSize: '52px', 
                  fontWeight: 600, 
                  lineHeight: 1.1, 
                  margin: '0 0 24px 0', 
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)'
                }}>
                  {t.heroSlogan1} <span className="text-gold-gradient">{t.heroSloganHighlight}</span> {t.heroSlogan2}
                </h1>
              </FadeInDiv>
              
              {/* Sub-headline - 2 lines */}
              <FadeInDiv delay={0.2}>
                <p className="hero-subtitle" style={{ 
                  fontSize: '19px', 
                  color: 'var(--text-secondary)', 
                  lineHeight: isRTL ? 1.8 : 1.6, 
                  margin: '0 0 32px 0',
                  maxWidth: '500px'
                }}>
                  {t.heroSubline1}<br />
                  {t.heroSubline2}
                </p>
              </FadeInDiv>
              
              {/* CTA Buttons */}
              <FadeInDiv delay={0.3}>
                <div className="cta-buttons" style={{ 
                  display: 'flex', 
                  flexDirection: flexDirection as 'row' | 'row-reverse',
                  gap: '12px', 
                  marginBottom: '32px' 
                }}>
                  <motion.a 
                    href="https://wallet.auxite.io" 
                    className="btn-primary"
                    whileHover={{ scale: 1.02, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                    style={{ textDecoration: 'none', padding: '14px 28px', fontSize: '15px' }}
                  >
                    {t.getStarted}
                    <svg style={{ width: '16px', height: '16px', transform: isRTL ? 'rotate(180deg)' : 'none' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/trust-center" className="btn-secondary" style={{ textDecoration: 'none', padding: '14px 24px', fontSize: '15px' }}>
                      {t.viewTrustCenter}
                    </Link>
                  </motion.div>
                </div>
              </FadeInDiv>

              {/* Trust Indicators */}
              <FadeInDiv delay={0.4}>
                <div className="hide-mobile" style={{ display: 'flex', flexDirection: flexDirection as 'row' | 'row-reverse', gap: '24px', flexWrap: 'wrap' }}>
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

            {/* Metal Cards */}
            <motion.div 
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid-2" 
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
            >
              {metals.map((metal, i) => (
                <motion.div
                  key={metal.symbol}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Link href={metal.href} className="card" style={{ background: 'var(--bg-secondary)', backdropFilter: 'blur(20px)', border: '1px solid var(--line)', padding: '24px', borderRadius: '16px', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}>
                      <Image src={metal.icon} alt={metal.name} width={56} height={56} style={{ marginBottom: '12px' }} />
                    </motion.div>
                    <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', margin: '0 0 2px 0' }}>{metal.symbol}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>{metal.name}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { value: '100%', label: t.stats.onChain },
              { value: '1:1', label: t.stats.backing },
              { value: '24/7', label: t.stats.trading },
              { value: '4', label: t.stats.metals },
            ].map((stat, i) => (
              <FadeInDiv key={stat.label} delay={i * 0.1} style={{ textAlign: 'center' }}>
                <div className="text-gold-gradient stat-value font-mono" style={{ fontFamily: "'Inter', sans-serif", fontSize: '48px', fontWeight: 700, marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{stat.label}</div>
              </FadeInDiv>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-primary)', position: 'relative' }}>
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <FadeInDiv>
              <h2 className="section-title" style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
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

      {/* How It Works Section */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: '64px' }}>
            <FadeInDiv>
              <h2 className="section-title" style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px', fontWeight: 700, color: 'var(--text-primary)' }}>
                {t.howItWorks} <span className="text-gold-gradient">{t.howItWorksHighlight}</span>
              </h2>
            </FadeInDiv>
          </AnimatedSection>

          <AnimatedSection className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { step: '01', title: t.steps.buy, description: t.steps.buyDesc },
              { step: '02', title: t.steps.verify, description: t.steps.verifyDesc },
              { step: '03', title: t.steps.stake, description: t.steps.stakeDesc },
            ].map((item, i) => (
              <FadeInDiv key={item.step} delay={i * 0.15}>
                <motion.div 
                  whileHover={{ y: -4 }}
                  className="card"
                  style={{ background: 'var(--bg-secondary)', border: '1px solid var(--line)', padding: '36px', borderRadius: '16px' }}
                >
                  <div className="font-mono" style={{ fontSize: '56px', fontWeight: 700, color: 'rgba(201,162,77,0.15)', marginBottom: '12px' }}>{item.step}</div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                </motion.div>
              </FadeInDiv>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="metal-glint"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px' }}
        />
        
        <AnimatedSection className="mobile-padding" style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <FadeInDiv>
            <h2 className="section-title" style={{ fontFamily: "'Inter', sans-serif", fontSize: '42px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
              {t.ctaTitle} <span className="text-gold-gradient">{t.ctaTitleHighlight}</span>?
            </h2>
          </FadeInDiv>
          <FadeInDiv delay={0.1}>
            <p style={{ color: 'var(--text-muted)', fontSize: '17px', marginBottom: '36px', lineHeight: 1.7 }}>{t.ctaSubtitle}</p>
          </FadeInDiv>
          <FadeInDiv delay={0.2}>
            <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <motion.a 
                href="https://wallet.auxite.io" 
                className="btn-primary"
                whileHover={{ scale: 1.02, y: -2 }} 
                whileTap={{ scale: 0.98 }}
                style={{ textDecoration: 'none', padding: '16px 32px', fontSize: '15px' }}
              >
                {t.startTrading}
                <svg style={{ width: '18px', height: '18px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href="/whitepaper" className="btn-secondary" style={{ textDecoration: 'none', padding: '16px 28px', fontSize: '15px' }}>{t.readWhitepaper}</Link>
              </motion.div>
            </div>
          </FadeInDiv>
        </AnimatedSection>
      </section>
    </div>
  );
}
