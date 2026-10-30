'use client';

// Investment risk notice shown next to every "buy / open vault" call to action.
//
// UK CAP Code (rules 3.3, 14.4, 14.5) and the CAP Enforcement Notice on
// physical precious metals (Oct 2026) require that the purchase is stated to
// be unregulated and that the variable-value and past-performance warnings
// are shown prominently — not in footer small print.

import { useTranslations } from 'next-intl';

export default function RiskNotice({ align = 'center' }: { align?: 'center' | 'left' }) {
  const t = useTranslations('riskNotice');
  return (
    <p
      role="note"
      style={{
        maxWidth: 640,
        margin: align === 'center' ? '20px auto 0' : '20px 0 0',
        padding: '12px 16px',
        border: '1px solid var(--border, rgba(127,127,127,0.35))',
        borderRadius: 10,
        fontSize: 13,
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        textAlign: align,
      }}
    >
      {t('text')}
    </p>
  );
}
