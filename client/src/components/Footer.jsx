import React from 'react';
import { Twitter, Facebook, Instagram, Mail, Phone, MapPin, ChevronRight, GraduationCap } from 'lucide-react';

const footerLinks = {
  'Explore': ['Top Colleges', 'Popular Courses', 'Entrance Exams', 'Scholarships', 'Admission 2026'],
  'Company': ['About Us', 'Our Team', 'Press & Media', 'Careers', 'Contact Us'],
};

const Footer = () => (
  <footer style={{ background: '#0f172a', color: '#fff', padding: '80px 32px 32px' }}>
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '60px', marginBottom: '64px' }} className="footer-grid">

        {/* Brand Col */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <GraduationCap size={34} strokeWidth={2.5} style={{ color: '#3b4eba' }} />
            <span style={{ fontSize: '22px', fontWeight: 900, letterSpacing: '-0.5px' }}>CollegeReviewz</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontSize: '14px', fontWeight: 500, maxWidth: '280px', marginBottom: '28px' }}>
            India's most trusted platform for college reviews, counselling, and entrance exam guidance. Empowering students to make informed decisions.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[Twitter, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                style={{
                  width: '42px', height: '42px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.6)', cursor: 'pointer',
                  transition: 'all 0.2s ease', textDecoration: 'none'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#5b51d8'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Icon size={17} strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Link Cols */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '10px', position: 'relative', paddingBottom: '16px' }}>
              {heading}
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', background: 'linear-gradient(135deg, #5b51d8, #38bdf8)', borderRadius: '2px' }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {links.map(link => (
                <li key={link}>
                  <a
                    href="#"
                    style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s ease' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.paddingLeft = '4px'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.paddingLeft = '0'; }}
                  >
                    <ChevronRight size={13} strokeWidth={3} style={{ opacity: 0.5 }} /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter + Contact */}
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: 800, marginBottom: '10px', position: 'relative', paddingBottom: '16px' }}>
            Newsletter
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '28px', height: '2px', background: 'linear-gradient(135deg, #5b51d8, #38bdf8)', borderRadius: '2px' }} />
          </h4>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: 500, lineHeight: 1.7, marginBottom: '20px' }}>
            Join 50,000+ students & get the weekly news digest.
          </p>
          <div style={{ position: 'relative', marginBottom: '32px' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                width: '100%', padding: '14px 56px 14px 16px',
                background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: '14px', color: '#fff', fontSize: '13px', fontWeight: 500,
                outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit', transition: 'border-color 0.2s ease'
              }}
              onFocus={e => e.target.style.borderColor = '#5b51d8'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button style={{
              position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)',
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #5b51d8, #38bdf8)',
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff'
            }}>
              <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: MapPin, text: 'Noida, Uttar Pradesh, India' },
              { icon: Phone, text: '+91 91191 19119' },
              { icon: Mail, text: 'info@collegereviewz.com' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'rgba(255,255,255,0.45)', fontSize: '13px', fontWeight: 600 }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(91,81,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} style={{ color: '#818cf8' }} strokeWidth={2.5} />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.02em' }}>
          © 2026 CollegeReviewz — India's Most Trusted Education Portal.
        </p>
        <div style={{ display: 'flex', gap: '28px' }}>
          {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(item => (
            <a
              key={item}
              href="#"
              style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px', fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', transition: 'color 0.2s ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
      @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; } }
    `}</style>
  </footer>
);

export default Footer;
