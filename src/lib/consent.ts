// ════════════════════════════════════════════════════════════════════════════
// COOKIE CONSENT — single source of truth
// ════════════════════════════════════════════════════════════════════════════
//
// Mirrors src/lib/consent.ts in the wallet (auxite-wallet) so both properties
// behave the same way and one mental model covers both. The stored record
// shape and the storage key are intentionally identical; the key is per-origin
// in localStorage, so the two sites still ask independently.
//
// Trackers on this site split into two groups:
//   - GTM + Google Ads use Google consent mode: they load either way and
//     degrade to cookieless pings until analytics is granted
//   - Meta and X pixels have no such mode, so they simply don't load until
//     the user opts in
// ════════════════════════════════════════════════════════════════════════════

export const CONSENT_STORAGE_KEY = 'auxite_cookie_consent';

/** Fired on window when the user accepts or rejects from the banner. */
export const CONSENT_CHANGED_EVENT = 'auxite:consent-changed';

export interface ConsentRecord {
  essential: boolean;
  analytics: boolean;
  timestamp: string;
  version: string;
}

/**
 * Read the stored consent record. Returns null when the user hasn't chosen
 * yet — callers must treat null as "no consent", never as "assume yes".
 */
export function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics !== 'boolean') return null;
    return parsed as ConsentRecord;
  } catch {
    // Corrupt record — treat as no decision rather than crashing the page.
    return null;
  }
}

/** True only when the user has explicitly opted in to analytics cookies. */
export function hasAnalyticsConsent(): boolean {
  return readConsent()?.analytics === true;
}

/**
 * Tell Google consent mode about the current decision. The denied defaults are
 * set by an inline script in the document head — this only ever upgrades them,
 * so it's safe to call whenever the decision changes.
 */
export function syncGoogleConsent(): void {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { dataLayer?: unknown[] };
  if (!Array.isArray(w.dataLayer)) return;
  const granted = hasAnalyticsConsent() ? 'granted' : 'denied';
  w.dataLayer.push([
    'consent',
    'update',
    {
      analytics_storage: granted,
      ad_storage: granted,
      ad_user_data: granted,
      ad_personalization: granted,
    },
  ]);
}

/** Notify listeners (pixels, Google consent mode) that the decision changed. */
export function notifyConsentChanged(): void {
  if (typeof window === 'undefined') return;
  syncGoogleConsent();
  try {
    window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
  } catch {}
}
