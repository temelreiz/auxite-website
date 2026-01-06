import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a2e 0%, #0a0a0a 50%)',
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #D4AF37, #F4E4BC, #D4AF37)',
          }}
        />
        
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            style={{ marginRight: '20px' }}
          >
            <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="3" />
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fill="#D4AF37"
              fontSize="32"
              fontWeight="bold"
              fontFamily="system-ui"
            >
              A
            </text>
          </svg>
          <span
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            AUXITE
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '32px',
            color: '#D4AF37',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '30px',
          }}
        >
          The Digital Form of Tradition
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#a0a0a0',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Tokenized Precious Metals • Fully On-Chain • Physically Backed
        </div>

        {/* Metal icons */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '50px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '40px' }}>🥇</span>
            <span style={{ color: '#D4AF37', fontSize: '18px', marginTop: '8px' }}>AUXG</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '40px' }}>🥈</span>
            <span style={{ color: '#C0C0C0', fontSize: '18px', marginTop: '8px' }}>AUXS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '40px' }}>⬜</span>
            <span style={{ color: '#E5E4E2', fontSize: '18px', marginTop: '8px' }}>AUXPT</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ fontSize: '40px' }}>⬛</span>
            <span style={{ color: '#B4B4B4', fontSize: '18px', marginTop: '8px' }}>AUXPD</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
