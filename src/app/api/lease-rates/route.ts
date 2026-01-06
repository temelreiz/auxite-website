import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://wallet.auxite.io/api/lease-rates', {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`API returned ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Lease rates fetch error:', error);
    
    // Return fallback rates
    return NextResponse.json({
      success: true,
      rates: {
        gold: { "3m": 2.5, "6m": 3.0, "12m": 3.5 },
        silver: { "3m": 2.0, "6m": 2.5, "12m": 3.0 },
        platinum: { "3m": 3.0, "6m": 3.5, "12m": 4.0 },
        palladium: { "3m": 2.8, "6m": 3.3, "12m": 3.8 },
        sofr: 4.33,
        gofo: 1.5,
        source: "Fallback",
        lastUpdated: new Date().toISOString(),
      }
    });
  }
}
