'use client';

// MarketingPixels — the Meta and X pixels, gated behind analytics consent.
//
// Both are pure marketing trackers with no essential function and neither has
// a cookieless mode, so under GDPR they must not load until the user opts in.
// They used to sit inline in the document head and fired on every page load,
// which is a live exposure now that X campaigns target DE/NL/CH.
//
// GTM and Google Ads stay in the head: they run in Google consent mode with
// storage denied by default, so they degrade rather than disappear.
//
// Rendering nothing until consent means a visitor who declines never fetches
// uwt.js or fbevents.js at all.

import { useEffect, useState } from 'react';
import {
  CONSENT_CHANGED_EVENT,
  hasAnalyticsConsent,
  syncGoogleConsent,
} from '@/lib/consent';

const META_PIXEL_ID = '938812332212962';
/** Same pixel as the wallet — one funnel across auxite.io and vault.auxite.io. */
const X_PIXEL_ID = 'rb03a';

export default function MarketingPixels() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    // A returning visitor already decided; replay it so Google consent mode
    // isn't left on the denied defaults for someone who opted in.
    syncGoogleConsent();
    setConsented(hasAnalyticsConsent());

    const onChange = () => setConsented(hasAnalyticsConsent());
    window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
  }, []);

  useEffect(() => {
    if (!consented) return;

    // Injected rather than rendered as <script> tags: this component mounts
    // after hydration, and React does not execute script elements it inserts
    // into the tree that way.
    if (!(window as unknown as { fbq?: unknown }).fbq) {
      const meta = document.createElement('script');
      meta.id = 'meta-pixel';
      meta.text = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${META_PIXEL_ID}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(meta);
    }

    if (!(window as unknown as { twq?: unknown }).twq) {
      const x = document.createElement('script');
      x.id = 'x-pixel';
      x.text = `
        !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){
        s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
        u.src='https://static.ads-twitter.com/uwt.js',
        a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))
        }(window,document,'script');
        twq('config','${X_PIXEL_ID}');
      `;
      document.head.appendChild(x);
    }
  }, [consented]);

  return null;
}
