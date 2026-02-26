import React, { useState, useEffect } from 'react';
import { Menu, X, Edit3, GraduationCap, Twitter, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore Colleges', path: '#' },
    { name: 'Courses', path: '#' },
    { name: 'Exams', path: '#' },
    { name: 'Scholarship', path: '#' },
    { name: 'Study Abroad', path: '#' },
    { name: 'Contact Us', path: '#' }
  ];

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}>

      {/* Top announcement bar */}
      {!scrolled && (
        <div style={{ backgroundColor: '#5196cd', color: '#fff', padding: '10px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', fontWeight: 600 }}>
          <span style={{ opacity: 0.95 }}>Helping students choose better — Write a review &amp; earn points!</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.95 }}>Support</a>
              <span style={{ opacity: 0.4 }}>/</span>
              <a href="#" style={{ color: '#fff', textDecoration: 'none', opacity: 0.95 }}>Login</a>
            </div>
            <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(255,255,255,0.3)' }}></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Twitter size={14} strokeWidth={3} style={{ cursor: 'pointer', opacity: 0.9 }} />
              <Facebook size={14} strokeWidth={3} style={{ cursor: 'pointer', opacity: 0.9 }} />
              <Instagram size={14} strokeWidth={3} style={{ cursor: 'pointer', opacity: 0.9 }} />
            </div>
          </div>
        </div>
      )}

      {/* Main nav */}
      <nav style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f1f5f9',
        padding: scrolled ? '12px 32px' : '18px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease'
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textDecoration: 'none' }} className="nav-logo-wrap">
          <GraduationCap size={30} strokeWidth={2.5} style={{ color: '#3b4eba' }} className="nav-logo-icon" />
          <span style={{ fontWeight: 900, color: '#111827', letterSpacing: '-0.5px' }} className="nav-logo-text">CollegeReviewz</span>
        </Link>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px', fontSize: '14px', fontWeight: 700 }} className="hidden-mobile">
          {navLinks.map((link) => (
            link.path.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.path}
                style={{ color: link.name === 'Home' ? '#5b51d8' : '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#5b51d8'}
                onMouseLeave={e => e.target.style.color = link.name === 'Home' ? '#5b51d8' : '#64748b'}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                style={{ color: link.name === 'Home' ? '#5b51d8' : '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#5b51d8'}
                onMouseLeave={e => e.target.style.color = link.name === 'Home' ? '#5b51d8' : '#64748b'}
              >
                {link.name}
              </a>
            )
          ))}
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-right-wrap">
          <Link
            to="/review"
            className="nav-cta"
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(91,81,216,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(91,81,216,0.25)'; }}
          >
            <span>Write A Review</span> <Edit3 size={15} strokeWidth={2.5} />
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#111827', display: 'none' }}
            className="show-mobile"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: '#fff', borderTop: '1px solid #f1f5f9', padding: '20px 24px 32px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
          {navLinks.map((link) => (
            link.path.startsWith('/') ? (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid #f8fafc', color: '#111827', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid #f8fafc', color: '#111827', fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}
              >
                {link.name}
              </a>
            )
          ))}
          <Link
            to="/review"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', background: 'linear-gradient(135deg, #5b51d8, #38bdf8)', color: '#fff', padding: '16px', marginTop: '20px', borderRadius: '16px', fontWeight: 800, textDecoration: 'none' }}
          >
            Write A Review <Edit3 size={18} />
          </Link>
        </div>
      )}

      <style>{`
        .nav-logo-text { font-size: 22px; }
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #5b51d8, #38bdf8);
          color: #fff;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 800;
          font-size: 13.5px;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(91,81,216,0.25);
          transition: all 0.2s ease;
          border: none;
          white-space: nowrap;
        }

        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          nav { padding: 10px 16px !important; }
          .nav-logo-text { font-size: 18px; }
          .nav-logo-icon { width: 26px; height: 26px; }
          .nav-cta { 
            padding: 8px 16px; 
            font-size: 11px;
            gap: 5px;
          }
          .nav-cta span { display: inline; }
        }

        @media (max-width: 400px) {
          .nav-logo-text { font-size: 16px; }
          .nav-cta { padding: 7px 12px; font-size: 10px; }
        }

        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
