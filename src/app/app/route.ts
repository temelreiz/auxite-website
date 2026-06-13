// src/app/app/route.ts
// Smart store/app redirect for marketing links (Instagram bio/story, ads, etc.).
//
//   auxite.io/app  →  device-aware:
//     • Android → Google Play (install)
//     • iOS     → App Store when IOS_LIVE, else the web radio (app not live yet)
//     • desktop / other → web radio
//
// The link itself is PERMANENT: post it once in the IG bio / story / ads. When
// the iOS App Store listing goes live, flip IOS_LIVE to true here — nothing
// posted anywhere needs to change. UTM params are forwarded so organic vs paid
// traffic stays attributable (Android via the Play install referrer; web via the
// query string).
//
// NOTE: the next-intl middleware matcher is ['/', '/(en|tr|de|fr|ar|ru)/:path*'],
// so /app is NOT locale-rewritten — this handler is reached directly.

import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=io.auxite.vault';
const APP_STORE = 'https://apps.apple.com/app/id6779338404';
const WEB = 'https://auxite.io/?radio=1';

// Flip to true once the iOS app is live on the App Store (then iOS → App Store).
const IOS_LIVE = false;

export function GET(req: NextRequest) {
  const ua = (req.headers.get('user-agent') || '').toLowerCase();
  const isAndroid = ua.includes('android');
  const isIOS = /iphone|ipad|ipod/.test(ua);

  // Collect incoming UTM params to forward.
  const utm = new URLSearchParams();
  req.nextUrl.searchParams.forEach((v, k) => {
    if (k.startsWith('utm_')) utm.append(k, v);
  });

  if (isAndroid) {
    // Play carries attribution via the install referrer.
    const ref = utm.toString();
    const target = ref ? `${PLAY_STORE}&referrer=${encodeURIComponent(ref)}` : PLAY_STORE;
    return NextResponse.redirect(target, 302);
  }

  if (isIOS && IOS_LIVE) {
    return NextResponse.redirect(APP_STORE, 302);
  }

  // iOS (app not live) + desktop/other → web radio, keeping UTM (+ radio=1).
  const web = new URL(WEB);
  utm.forEach((v, k) => web.searchParams.set(k, v));
  return NextResponse.redirect(web.toString(), 302);
}
