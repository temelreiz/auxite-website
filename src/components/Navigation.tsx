'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { routing, localeNames } from '@/i18n/routing';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${currentPath || '/'}`);
  };

  const navLinks = [
    { href: '/metals', label: t('metals') },
    { href: '/how-it-works', label: t('howItWorks') },
    { href: '/staking', label: t('staking') },
    { href: '/trust-center', label: t('trustCenter') },
    { href: '/whitepaper', label: 'Whitepaper' },
  ];

  const isActive = (href: string) => {
    const currentPath = pathname.replace(`/${locale}`, '');
    return currentPath === href || currentPath.startsWith(href + '/');
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '16px 0',
        background: isScrolled ? 'rgba(11, 14, 17, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--line)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div className="mobile-padding" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Image 
                src="/auxite-wallet-logo.png" 
                alt="Auxite" 
                width={120} 
                height={40}
                style={{ objectFit: 'contain' }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive(link.href) ? 'var(--aux-gold)' : 'var(--text-secondary)',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              {/* Language Selector */}
              <div className="hide-mobile" style={{ position: 'relative' }}>
                <select
                  value={locale}
                  onChange={(e) => handleLocaleChange(e.target.value)}
                  style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--line)',
                    borderRadius: '8px',
                    padding: '8px 12px',
                    color: 'var(--text-primary)',
                    fontSize: '13px',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  {routing.locales.map((loc) => (
                    <option key={loc} value={loc} style={{ background: 'var(--bg-primary)' }}>
                      {localeNames[loc]}
                    </option>
                  ))}
                </select>
              </div>

              {/* CTA Button */}
              <a
                href="https://wallet.auxite.io"
                className="hide-mobile"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--aux-gold)',
                  color: 'var(--bg-primary)',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  fontWeight: 600,
                  fontSize: '13px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(201,162,77,0.25)'
                }}
              >
                {t('launchApp')}
                <svg style={{ width: '14px', height: '14px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="show-mobile"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  display: 'none',
                  background: 'transparent',
                  border: 'none',
                  padding: '8px',
                  cursor: 'pointer'
                }}
              >
                <svg style={{ width: '24px', height: '24px', color: 'var(--text-primary)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                color: isActive(link.href) ? 'var(--aux-gold)' : 'var(--text-primary)',
                fontSize: '20px',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Mobile Language Selector */}
          <select
            value={locale}
            onChange={(e) => {
              handleLocaleChange(e.target.value);
              setIsMobileMenuOpen(false);
            }}
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--line)',
              borderRadius: '8px',
              padding: '12px 16px',
              color: 'var(--text-primary)',
              fontSize: '14px',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            {routing.locales.map((loc) => (
              <option key={loc} value={loc} style={{ background: 'var(--bg-primary)' }}>
                {localeNames[loc]}
              </option>
            ))}
          </select>

          {/* Mobile CTA */}
          <a
            href="https://wallet.auxite.io"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'var(--aux-gold)',
              color: 'var(--bg-primary)',
              padding: '14px 24px',
              borderRadius: '10px',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none'
            }}
          >
            {t('launchApp')}
            <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
