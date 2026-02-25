import React from 'react';
import { Search, CheckCircle, MessageSquare, ChevronRight, Star, Shield } from 'lucide-react';

const stats = [
  { num: '12,000+', label: 'Verified Reviews' },
  { num: '3,200+', label: 'Colleges Listed' },
  { num: '1.5M+', label: 'Students Helped' },
  { num: '87%', label: 'Satisfaction Rate' },
];

const checks = [
  '10,000+ Verified Student Reviews',
  'AI-powered College Matching',
  'Neutral, Unbiased Expert Guidance',
];

/* ── Inline SVG Robot with CRZ branding ────────────────────────────────── */
const RobotIllustration = () => (
  <svg viewBox="0 0 420 480" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
    <defs>
      <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#5b51d8" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#312e81" />
        <stop offset="100%" stopColor="#1e1b4b" />
      </linearGradient>
      <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4338ca" />
        <stop offset="100%" stopColor="#1e1b4b" />
      </linearGradient>
      <linearGradient id="glowLine" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <ellipse cx="210" cy="260" rx="180" ry="200" fill="url(#bgGlow)" />
    <g stroke="#38bdf8" strokeWidth="1" opacity="0.3" fill="none">
      <line x1="210" y1="80" x2="210" y2="20" /><line x1="210" y1="20" x2="260" y2="20" />
      <circle cx="260" cy="20" r="3" fill="#38bdf8" opacity="0.7" />
      <line x1="210" y1="20" x2="150" y2="20" />
      <circle cx="150" cy="20" r="3" fill="#38bdf8" opacity="0.7" />
      <line x1="320" y1="180" x2="390" y2="180" /><line x1="390" y1="180" x2="390" y2="140" />
      <circle cx="390" cy="140" r="3" fill="#38bdf8" opacity="0.7" />
      <line x1="390" y1="180" x2="390" y2="220" />
      <circle cx="390" cy="220" r="3" fill="#38bdf8" opacity="0.7" />
      <line x1="100" y1="180" x2="30" y2="180" /><line x1="30" y1="180" x2="30" y2="140" />
      <circle cx="30" cy="140" r="3" fill="#38bdf8" opacity="0.7" />
      <line x1="30" y1="180" x2="30" y2="220" />
      <circle cx="30" cy="220" r="3" fill="#38bdf8" opacity="0.7" />
    </g>
    <rect x="207" y="30" width="6" height="50" rx="3" fill="url(#glowLine)" opacity="0.8" />
    {[[340,100],[360,200],[70,100],[50,200],[300,50],[120,50]].map(([cx,cy],i) => (
      <circle key={i} cx={cx} cy={cy} r="3" fill="#818cf8" opacity="0.5" />
    ))}
    {[[350,300],[60,300],[370,380],[60,380]].map(([cx,cy],i) => (
      <circle key={i+6} cx={cx} cy={cy} r="2" fill="#38bdf8" opacity="0.4" />
    ))}
    {/* Head */}
    <rect x="130" y="80" width="160" height="130" rx="28" fill="url(#headGrad)" stroke="#4f46e5" strokeWidth="1.5" />
    <rect x="140" y="88" width="60" height="4" rx="2" fill="white" opacity="0.08" />
    <rect x="152" y="118" width="36" height="22" rx="8" fill="#0f172a" />
    <rect x="232" y="118" width="36" height="22" rx="8" fill="#0f172a" />
    <ellipse className="robot-eye-l" cx="170" cy="129" rx="10" ry="7" fill="#38bdf8" opacity="0.9" filter="url(#glow)" />
    <ellipse className="robot-eye-r" cx="250" cy="129" rx="10" ry="7" fill="#38bdf8" opacity="0.9" filter="url(#glow)" />
    <circle className="robot-eye-l" cx="170" cy="129" r="4" fill="white" opacity="0.9" />
    <circle className="robot-eye-r" cx="250" cy="129" r="4" fill="white" opacity="0.9" />
    <rect x="162" y="160" width="96" height="18" rx="9" fill="#0f172a" opacity="0.7" />
    <rect x="170" y="165" width="14" height="8" rx="3" fill="#38bdf8" opacity="0.7" />
    <rect x="190" y="165" width="14" height="8" rx="3" fill="#818cf8" opacity="0.5" />
    <rect x="210" y="165" width="14" height="8" rx="3" fill="#38bdf8" opacity="0.7" />
    <rect x="230" y="165" width="14" height="8" rx="3" fill="#818cf8" opacity="0.5" />
    {/* Neck */}
    <rect x="193" y="210" width="34" height="30" rx="6" fill="#312e81" stroke="#4f46e5" strokeWidth="1" />
    <line x1="200" y1="215" x2="200" y2="235" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
    <line x1="210" y1="215" x2="210" y2="235" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
    <line x1="220" y1="215" x2="220" y2="235" stroke="#38bdf8" strokeWidth="1" opacity="0.5" />
    {/* Body */}
    <rect x="100" y="240" width="220" height="175" rx="28" fill="url(#bodyGrad)" stroke="#4f46e5" strokeWidth="1.5" />
    <rect x="112" y="250" width="80" height="4" rx="2" fill="white" opacity="0.06" />
    <rect x="140" y="268" width="140" height="90" rx="18" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" opacity="0.95" />
    <rect x="140" y="268" width="140" height="90" rx="18" fill="none" stroke="#38bdf8" strokeWidth="2" opacity="0.4" />
    <text x="210" y="320" textAnchor="middle" fontSize="44" fontWeight="900" letterSpacing="-2" fill="white" fontFamily="sans-serif" opacity="0.95">CRZ</text>
    <ellipse cx="210" cy="330" rx="50" ry="10" fill="#38bdf8" opacity="0.12" />
    <rect x="120" y="390" width="180" height="10" rx="5" fill="#4f46e5" opacity="0.4" />
    <rect x="62" y="250" width="46" height="90" rx="18" fill="url(#bodyGrad)" stroke="#4f46e5" strokeWidth="1.5" />
    <rect x="312" y="250" width="46" height="90" rx="18" fill="url(#bodyGrad)" stroke="#4f46e5" strokeWidth="1.5" />
    <circle cx="85" cy="295" r="8" fill="#38bdf8" opacity="0.2" />
    <circle cx="85" cy="295" r="4" fill="#38bdf8" opacity="0.6" />
    <circle cx="335" cy="295" r="8" fill="#38bdf8" opacity="0.2" />
    <circle cx="335" cy="295" r="4" fill="#38bdf8" opacity="0.6" />
    <rect x="145" y="415" width="50" height="55" rx="14" fill="url(#bodyGrad)" stroke="#4f46e5" strokeWidth="1.5" />
    <rect x="225" y="415" width="50" height="55" rx="14" fill="url(#bodyGrad)" stroke="#4f46e5" strokeWidth="1.5" />
    <rect x="138" y="458" width="64" height="18" rx="9" fill="#312e81" stroke="#4f46e5" strokeWidth="1" />
    <rect x="218" y="458" width="64" height="18" rx="9" fill="#312e81" stroke="#4f46e5" strokeWidth="1" />
    {/* CollegeReviewZ label */}
    <rect x="290" y="280" width="115" height="28" rx="8" fill="rgba(15,23,42,0.85)" />
    <text x="347" y="299" textAnchor="middle" fontSize="11" fontWeight="700" fill="#38bdf8" fontFamily="sans-serif" letterSpacing="0.5">CollegeReviewZ</text>
    <line x1="280" y1="298" x2="290" y2="294" stroke="#38bdf8" strokeWidth="1" opacity="0.5" strokeDasharray="3,2" />
  </svg>
);

const Hero = () => (
  <>
    {/* ── Responsive CSS ───────────────────────────────────────────────── */}
    <style>{`
      .hero-section {
        background: linear-gradient(160deg, #0f172a 0%, #1e293b 60%, #0c1a3a 100%);
        padding-top: 140px;
        padding-bottom: 24px;
        position: relative;
        overflow: hidden;
        min-height: 85vh;
        box-sizing: border-box;
        display: flex;
        align-items: flex-start;
      }

      /* ── Two-column grid ── */
      .hero-grid {
        display: grid;
        grid-template-columns: 1.25fr 0.75fr;
        gap: 56px;
        align-items: center;
        padding-top: 40px;
      }

      /* ── Badge ── */
      .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        background: rgba(91,81,216,0.2);
        border: 1px solid rgba(91,81,216,0.4);
        color: #a5b4fc;
        border-radius: 50px;
        padding: 5px 12px;
        font-size: 10.5px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      /* ── Headline ── */
      .hero-h1 {
        font-size: clamp(30px, 4.2vw, 58px);
        font-weight: 900;
        color: #fff;
        line-height: 1.1;
        margin-bottom: 18px;
        letter-spacing: -1.5px;
      }

      /* ── Subtext ── */
      .hero-sub {
        color: rgba(255,255,255,0.65);
        font-size: clamp(14px, 1.5vw, 16px);
        line-height: 1.8;
        margin-bottom: 18px;
        max-width: 500px;
        font-weight: 400;
      }

      /* ── Checklist ── */
      .hero-checks {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        gap: 22px;
        margin-bottom: 24px;
        align-items: center;
        white-space: nowrap;
      }

      /* ── Search bar ── */
      .hero-search-wrap {
        position: relative;
        margin-bottom: 6px;
        max-width: 520px;
      }

      /* ── CTA buttons ── */
      .hero-ctas {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 22px;
      }

      /* ── Stats bar ── */
      .hero-stats {
        display: flex;
        gap: 14px;
        flex-wrap: nowrap;
        padding-top: 18px;
        border-top: 1px solid rgba(255,255,255,0.08);
        overflow: hidden;
      }

      /* ── Inner container ── */
      .hero-inner {
        max-width: 1280px;
        margin: 0 auto;
        width: 100%;
        padding: 0 60px 0 10px;
        position: relative;
        z-index: 10;
        box-sizing: border-box;
      }

      /* ── Right illustration ── */
      .hero-right {
        position: relative;
        padding-left: 40px;
      }

      /* ── Eye blink animation ── */
      @keyframes eyeBlink {
        0%, 93%          { transform: scaleY(1);    }
        95%              { transform: scaleY(0.04);  }
        96.5%            { transform: scaleY(0.04);  }
        99%, 100%        { transform: scaleY(1);    }
      }
      @keyframes eyeBlinkR {
        0%, 93.5%        { transform: scaleY(1);    }
        95.5%            { transform: scaleY(0.04);  }
        97%              { transform: scaleY(0.04);  }
        99.5%, 100%      { transform: scaleY(1);    }
      }
      .robot-eye-l {
        animation: eyeBlink 2s ease-in-out infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .robot-eye-r {
        animation: eyeBlinkR 2s ease-in-out infinite;
        transform-origin: center;
        transform-box: fill-box;
      }

      /* ══════════════════════════════════
         TABLET  768px – 1024px
      ══════════════════════════════════ */
      @media (max-width: 1024px) and (min-width: 769px) {
        .hero-section {
          height: auto;
          min-height: 100vh;
          padding-top: 108px;
          padding-bottom: 40px;
          align-items: flex-start;
        }
        .hero-inner { padding: 0 32px; }
        .hero-grid {
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        .hero-h1 {
          font-size: clamp(24px, 3.5vw, 36px);
        }
        .hero-sub { font-size: 13px; }
        .hero-right { display: block; }
        .hero-stats { flex-wrap: wrap; gap: 10px; }
      }

      /* ══════════════════════════════════
         MOBILE  ≤ 768px
      ══════════════════════════════════ */
      @media (max-width: 768px) {
        .hero-section {
          height: auto;
          min-height: 100vh;
          padding-top: 145px;
          padding-bottom: 60px;
          align-items: flex-start;
        }
        .hero-inner { padding: 0 22px; }
        .hero-grid {
          grid-template-columns: 1fr;
          gap: 0;
        }
        .hero-right { display: none; }
        .hero-h1 { font-size: clamp(26px, 7vw, 38px); letter-spacing: -0.5px; margin-bottom: 22px; }
        .hero-sub { font-size: 14px; max-width: 100%; margin-bottom: 26px; line-height: 2; }
        .hero-badge { font-size: 10px; padding: 7px 16px; margin-bottom: 26px; }
        .hero-checks { 
          flex-wrap: wrap; 
          gap: 12px; 
          margin-bottom: 26px;
          white-space: normal;
        }
        .hero-search-wrap { max-width: 100%; margin-bottom: 14px; }
        .hero-ctas { gap: 14px; margin-bottom: 30px; flex-direction: column; }
        .hero-ctas button { font-size: 14px !important; padding: 16px 20px !important; width: 100% !important; justify-content: center; }
        .hero-stats {
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 22px;
        }
        .hero-stat-item { min-width: 42%; }
      }

      /* ══════════════════════════════════
         SMALL MOBILE  ≤ 420px
      ══════════════════════════════════ */
      @media (max-width: 420px) {
        .hero-h1 { font-size: 24px; }
        .hero-sub { font-size: 13px; }
        .hero-ctas { flex-direction: column; }
        .hero-ctas button { width: 100% !important; justify-content: center; }
      }
    `}</style>

    <section className="hero-section">

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(91,81,216,0.25) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(56,189,248,0.28) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-40px', right: '10%', width: '500px', height: '400px', background: 'radial-gradient(circle, rgba(91,81,216,0.2) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="hero-inner">

        <div className="hero-grid">

          {/* ── LEFT ──────────────────────────────── */}
          <div>
            <div className="hero-badge">
              <Shield size={12} strokeWidth={2.5} />
              India's #1 Trusted Platform
            </div>

            <h1 className="hero-h1">
              India's Most Trusted<br />
              <span style={{ background: 'linear-gradient(135deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                College Reviewz
              </span><br />
              &amp; Counselling Platform
            </h1>

            <p className="hero-sub">
              Discover top colleges, real student reviews, placements, fees, and rankings — everything you need to make the right decision.
            </p>

            <div className="hero-checks">
              {checks.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '9px', color: '#e2e8f0', fontSize: '13px', fontWeight: 600 }}>
                  <CheckCircle size={15} style={{ color: '#38bdf8', flexShrink: 0 }} strokeWidth={2.5} />
                  {c}
                </div>
              ))}
            </div>

            <div className="hero-search-wrap">
              <input
                type="text"
                placeholder="Search colleges, courses, exams or reviews..."
                style={{
                  width: '100%', padding: '14px 62px 14px 22px',
                  background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)',
                  borderRadius: '50px', color: '#fff', fontSize: '13px',
                  outline: 'none', backdropFilter: 'blur(10px)',
                  boxSizing: 'border-box', fontFamily: 'inherit', fontWeight: 400
                }}
                onFocus={e => e.target.style.borderColor = '#38bdf8'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.15)'}
              />
              <button style={{
                position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #5b51d8, #38bdf8)',
                border: 'none', borderRadius: '50px', padding: '9px 18px',
                color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center'
              }}>
                <Search size={17} strokeWidth={2.5} />
              </button>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.28)', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', paddingLeft: '22px', marginBottom: '18px' }}>
              Every review is manually verified for authenticity.
            </p>

            <div className="hero-ctas">
              <button style={{ background: 'linear-gradient(135deg, #5b51d8, #38bdf8)', color: '#fff', padding: '13px 28px', borderRadius: '50px', fontWeight: 800, fontSize: '13px', border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(91,81,216,0.25)', fontFamily: 'inherit', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(91,81,216,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(91,81,216,0.25)'; }}>
                Find College
              </button>
              <button style={{ background: 'transparent', color: '#fff', padding: '13px 24px', borderRadius: '50px', fontWeight: 800, fontSize: '13px', border: '2px solid rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'transparent'; }}>
                Get Expert Counselling
              </button>
              <button style={{ background: '#fff', color: '#1e293b', padding: '13px 24px', borderRadius: '50px', fontWeight: 800, fontSize: '13px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 6px 20px rgba(0,0,0,0.2)', fontFamily: 'inherit', transition: 'all 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Write A Review &amp; Earn <ChevronRight size={15} strokeWidth={3} style={{ color: '#5b51d8' }} />
              </button>
            </div>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginBottom: '24px' }}>
              {[
                { label: 'Verified\nStudent Reviews' },
                { label: 'Trusted By\n1.5M+ Students' },
                { label: 'AI + Human\nValidation System' },
                { label: 'ISO Certified\nData Handling' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={16} style={{ color: '#38bdf8', flexShrink: 0 }} strokeWidth={2} />
                  <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '12px', fontWeight: 600, lineHeight: 1.4, whiteSpace: 'pre-line' }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {stats.map((s, i) => (
                <div key={i} className="hero-stat-item" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckCircle size={15} style={{ color: '#38bdf8' }} strokeWidth={2} />
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 900, fontSize: '15px', letterSpacing: '-0.5px', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT ─────────────────────────────── */}
          <div className="hero-right">
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(91,81,216,0.3) 0%, transparent 70%)', zIndex: 0, borderRadius: '50%' }} />

            {/* Platform Rating card */}
            <div style={{ position: 'absolute', top: '10px', left: '-10px', zIndex: 20, background: 'rgba(15,23,42,0.88)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px', padding: '12px 18px', color: '#fff', boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
                <Star size={13} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px' }}>4.8</span>
              </div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Platform Rating</div>
            </div>

            {/* Students Helped card */}
            <div style={{ position: 'absolute', bottom: '20px', right: '-10px', zIndex: 20, background: 'rgba(15,23,42,0.88)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '18px', padding: '12px 18px', color: '#fff', boxShadow: '0 16px 40px rgba(0,0,0,0.3)' }}>
              <div style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px', color: '#38bdf8', lineHeight: 1 }}>1.5M+</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '4px' }}>Students Helped</div>
            </div>

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '400px', margin: '0 auto' }}>
              <RobotIllustration />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Expert Button */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 999, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff', boxShadow: '0 8px 24px rgba(91,81,216,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
          <MessageSquare size={22} style={{ color: '#5b51d8' }} strokeWidth={2} />
        </div>
        <button style={{ background: 'linear-gradient(135deg, #5b51d8, #38bdf8)', color: '#fff', padding: '10px 18px', borderRadius: '50px', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 8px 24px rgba(91,81,216,0.25)', fontSize: '12px', whiteSpace: 'nowrap', fontFamily: 'inherit', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(91,81,216,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(91,81,216,0.25)'; }}>
          Ask Experts
        </button>
      </div>
    </section>
  </>
);

export default Hero;
