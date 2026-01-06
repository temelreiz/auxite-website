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
    { href: '/staking', label: tNav('staking') },
  ];

  const trustLinks = [
    { href: '/trust-center', label: tNav('trustCenter') },
    { href: '/trust-center/on-chain-supply', label: t('onChainSupply') },
    { href: '/vaults', label: tNav('vaults') },
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

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid var(--line)',
          paddingTop: '32px',
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
    </footer>
  );
}
