'use client';

// "Open an account" for the precious-metals basket page. Carries the ad's
// utm_* tags (or a site default) to sign-up, so an account opened from a
// Google ad is recorded with its source.

import { useEffect, useState } from 'react';

const REGISTER = 'https://vault.auxite.io/auth/register';
const KEEP = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export default function BasketCta({ label }: { label: string }) {
  const [href, setHref] = useState(`${REGISTER}?utm_source=auxite.io&utm_medium=web&utm_campaign=basket`);

  useEffect(() => {
    const from = new URLSearchParams(window.location.search);
    const keep = new URLSearchParams();
    for (const k of KEEP) {
      const v = from.get(k);
      if (v) keep.set(k, v);
    }
    if (keep.get('utm_source')) setHref(`${REGISTER}?${keep.toString()}`);
  }, []);

  return (
    <a href={href} className="btn-primary" style={{ textDecoration: 'none' }}>
      {label}
      <svg style={{ width: '16px', height: '16px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}
