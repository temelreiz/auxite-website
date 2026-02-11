'use client';

import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');
  const year = new Date().getFullYear();

  const productLinks = [
    { href: '/metals/auxg', label: 'AUXG (Gold)' },
    { href: '/metals/auxs', label: 'AUXS (Silver)' },
    { href: '/metals/auxpt', label: 'AUXPT (Platinum)' },
    { href: '/metals/auxpd', label: 'AUXPD (Palladium)' },
  ];

  const resourceLinks = [
    { href: '/how-it-works', label: tNav('howItWorks') },
    { href: '/whitepaper', label: tNav('whitepaper') },
    { href: '/faq', label: tNav('faq') },
    { href: '/yield', label: tNav('staking') },
  ];

  const trustLinks = [
    { href: '/trust-center', label: tNav('trustCenter') },
    { href: '/trust-center/custody', label: t('custodyArchitecture') },
    { href: '/trust-center/reserves', label: t('reserveVerification') },
    { href: '/trust-center/faq', label: t('institutionalFaq') },
  ];

  const legalLinks = [
    { href: '/legal/terms', label: tNav('terms') },
    { href: '/legal/privacy', label: tNav('privacy') },
    { href: '/legal/risk', label: tNav('risk') },
  ];

  return (
    <footer style={{ 
      background: 'var(--bg-primary)', 
      borderTop: '1px solid var(--line)',
      padding: '80px 0 40px'
    }}>
      <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Main Footer Grid */}
        <div className="footer-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', 
          gap: '48px',
          marginBottom: '64px'
        }}>
          
          {/* Brand Column */}
          <div className="footer-brand">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <Image 
                src="/auxite-wallet-logo.png" 
                alt="Auxite" 
                width={140} 
                height={45}
                style={{ objectFit: 'contain' }}
              />
            </Link>
            
            <p style={{ 
              color: 'var(--aux-gold)', 
              fontSize: '12px', 
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '16px',
              opacity: 0.9
            }}>
              {tCommon('slogan')}
            </p>
            
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '14px', 
              lineHeight: 1.7,
              maxWidth: '280px',
              margin: 0
            }}>
              {t('description')}
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h4 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px'
            }}>
              {t('products')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {productLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '12px' }}>
                  <Link 
                    href={link.href}
                    style={{ 
                      color: 'var(--text-muted)', 
                      fontSize: '14px', 
                      textDecoration: 'none'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px'
            }}>
              {t('resources')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {resourceLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '12px' }}>
                  <Link 
                    href={link.href}
                    style={{ 
                      color: 'var(--text-muted)', 
                      fontSize: '14px', 
                      textDecoration: 'none'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Column */}
          <div>
            <h4 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px'
            }}>
              {t('trust')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {trustLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '12px' }}>
                  <Link 
                    href={link.href}
                    style={{ 
                      color: 'var(--text-muted)', 
                      fontSize: '14px', 
                      textDecoration: 'none'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '13px', 
              fontWeight: 600, 
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '20px'
            }}>
              {t('legal')}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {legalLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '12px' }}>
                  <Link 
                    href={link.href}
                    style={{ 
                      color: 'var(--text-muted)', 
                      fontSize: '14px', 
                      textDecoration: 'none'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Institutional */}
        <div style={{
          borderTop: '1px solid var(--line)',
          paddingTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {/* Operator Info - PROMINENT */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            padding: '32px 0',
            borderBottom: '1px solid var(--line)'
          }}>
            <p style={{
              color: 'var(--text-primary)',
              fontSize: '16px',
              fontWeight: 500,
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              Operated by <span style={{ color: 'var(--aux-gold)' }}>Aurum Ledger Ltd</span>
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '14px',
              margin: 0
            }}>
              Hong Kong
            </p>
            <a
              href="https://auxiteglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--aux-gold)',
                fontSize: '13px',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 20px',
                border: '1px solid rgba(201,162,77,0.3)',
                borderRadius: '8px',
                marginTop: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              Corporate Information
              <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Copyright & Backing */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0 }}>
              {t('copyright', { year })}
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg style={{ width: '14px', height: '14px', color: 'var(--state-success)' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {t('backed')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
