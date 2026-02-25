import React, { useState } from 'react';
import { Share2, ChevronRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    tag: 'LIVE',
    title: 'GATE 2026 Geology and Geophysics (GG) Question Paper Available — Download with Solution PDF',
    author: 'Rahul Roy',
    date: '8 Jan 2026',
    image: 'https://img.freepik.com/free-vector/digital-world-news-map-background-design_1017-26801.jpg',
    category: 'Exam Alert',
  },
  {
    id: 2,
    tag: 'LIVE',
    title: 'GATE 2026 Statistics (ST) Question Paper Available — Download with Solution PDF',
    author: 'Sujay Das',
    date: '8 Jan 2026',
    image: 'https://img.freepik.com/free-vector/news-concept-landing-page_23-2148118029.jpg',
    category: 'Exam Alert',
  },
  {
    id: 3,
    tag: 'NEW',
    title: 'GATE 2026 Electrical Engineering (EE) Question Paper Available — Download with Solution PDF',
    author: 'Akash Das',
    date: '8 Jan 2026',
    image: 'https://img.freepik.com/free-vector/global-breaking-news-background-world-map_1017-27464.jpg',
    category: 'Admission Alert',
  },
  {
    id: 4,
    tag: 'NEW',
    title: 'GATE 2026 Mathematics (MA) Question Paper Available — Download with Solution PDF',
    author: 'Sk Sofik',
    date: '8 Jan 2026',
    image: 'https://img.freepik.com/free-vector/digital-global-news-template-with-world-map_1017-23112.jpg',
    category: 'College Alert',
  },
];

const categories = ['MBBS', 'BE/B.Tech', 'Law', 'Science', 'Commerce', 'Pharmacy', 'ME/M.Tech', 'B.Sc Nursing'];
const alertTabs = ['Exam Alerts', 'Admission Alerts', 'College Alerts'];

const NewsSection = () => {
  const [activeCat, setActiveCat] = useState('MBBS');
  const [activeAlert, setActiveAlert] = useState('Exam Alerts');

  return (
    <section style={{ padding: '96px 32px', background: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#5b51d8', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: '#5b51d8', opacity: 0.4 }} />
            Newsroom
            <div style={{ width: '32px', height: '1px', background: '#5b51d8', opacity: 0.4 }} />
          </div>
          <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#111827', marginBottom: '16px', letterSpacing: '-0.5px' }}>
            Latest <span style={{ background: 'linear-gradient(135deg, #5b51d8, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>News & Updates</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '17px', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontWeight: 500 }}>
            Stay ahead with the most recent admission breakthroughs, exam declarations, and college news.
          </p>
        </div>

        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '48px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '10px 22px', borderRadius: '50px', fontWeight: 700, fontSize: '13px',
                border: 'none', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s ease',
                background: activeCat === cat ? '#111827' : '#f8fafc',
                color: activeCat === cat ? '#fff' : '#64748b',
                boxShadow: activeCat === cat ? '0 4px 16px rgba(17,24,39,0.2)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Alert Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '56px', borderBottom: '1.5px solid #f1f5f9' }}>
          {alertTabs.map(alert => (
            <button
              key={alert}
              onClick={() => setActiveAlert(alert)}
              style={{
                padding: '14px 32px', fontWeight: 700, fontSize: '15px',
                border: 'none', cursor: 'pointer', background: 'transparent', fontFamily: 'inherit',
                color: activeAlert === alert ? '#5b51d8' : '#94a3b8',
                borderBottom: activeAlert === alert ? '2.5px solid #5b51d8' : '2.5px solid transparent',
                marginBottom: '-1.5px', transition: 'all 0.2s ease',
              }}
            >
              {alert}
            </button>
          ))}
        </div>

        {/* News Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="news-grid">
          {newsItems.map(item => (
            <div
              key={item.id}
              style={{
                display: 'flex', gap: '24px',
                background: '#fff', borderRadius: '28px', padding: '24px',
                border: '1.5px solid #f1f5f9', cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'all 0.3s ease', alignItems: 'flex-start'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 24px 60px rgba(91,81,216,0.12)';
                e.currentTarget.style.borderColor = '#e0e7ff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#f1f5f9';
              }}
            >
              {/* Image */}
              <div style={{ width: '160px', height: '120px', borderRadius: '18px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect fill="%23eef2ff"/><text x="50%" y="50%" text-anchor="middle" fill="%235b51d8" font-size="12" dy=".3em">News</text></svg>'; }}
                />
              </div>

              {/* Content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minWidth: 0 }}>
                <div>
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      background: item.tag === 'LIVE' ? '#fff1f2' : '#f0fdf4',
                      color: item.tag === 'LIVE' ? '#e11d48' : '#16a34a',
                      fontSize: '10px', fontWeight: 800, padding: '4px 10px',
                      borderRadius: '50px', letterSpacing: '0.1em',
                      border: `1px solid ${item.tag === 'LIVE' ? '#fecdd3' : '#bbf7d0'}`
                    }}>
                      <span style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: item.tag === 'LIVE' ? '#e11d48' : '#16a34a',
                        display: 'inline-block',
                        animation: item.tag === 'LIVE' ? 'ping 1s cubic-bezier(0,0,0.2,1) infinite' : 'none'
                      }} />
                      {item.tag}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8', fontSize: '11px', fontWeight: 700 }}>
                      <Calendar size={12} style={{ color: '#5b51d8' }} strokeWidth={2.5} />
                      {item.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '15px', fontWeight: 800, color: '#111827', lineHeight: 1.5, marginBottom: '12px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {item.title}
                  </h3>
                </div>

                {/* Footer */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900, color: '#5b51d8', border: '1.5px solid #c7d2fe' }}>
                      {item.author[0]}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>{item.author}</span>
                  </div>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', padding: '6px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#5b51d8'; e.currentTarget.style.background = '#eef2ff'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'none'; }}
                  >
                    <Share2 size={15} strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ marginTop: '56px', textAlign: 'center' }}>
          <button style={{
            background: '#111827', color: '#fff', padding: '16px 40px', borderRadius: '50px',
            fontWeight: 800, fontSize: '14px', border: 'none', cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            boxShadow: '0 8px 24px rgba(17,24,39,0.2)', transition: 'all 0.2s ease', fontFamily: 'inherit',
            textTransform: 'uppercase', letterSpacing: '0.08em'
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#5b51d8'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            View All News &amp; Updates
            <ChevronRight size={18} strokeWidth={3} />
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .news-grid { grid-template-columns: 1fr !important; } }
        @keyframes ping { 75%, 100% { transform: scale(1.8); opacity: 0; } }
      `}</style>
    </section>
  );
};

export default NewsSection;
