import React, { useState, useEffect } from 'react';
import { Menu, X, Edit3, GraduationCap, Twitter, Facebook, Instagram, LogOut, BookOpen, Clock, User as UserIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import whiteLogo from '../assets/vite.svg';

const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) { console.error(e) }
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setProfileOpen(false);
    navigate('/');
  };

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
              {!user && (
                <>
                  <span style={{ opacity: 0.4 }}>/</span>
                  <Link to="/login" style={{ color: '#fff', textDecoration: 'none', opacity: 0.95 }}>Login</Link>
                </>
              )}
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
          <img src={whiteLogo} alt="Logo" style={{ width: '32px', height: '32px' }} className="nav-logo-icon" />
          <span style={{ fontWeight: 900, color: '#111827', letterSpacing: '-0.5px', marginTop: '2px' }} className="nav-logo-text">CollegeReviewz</span>
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

          {!user ? (
            <Link
              to="/signup"
              style={{
                padding: '10px 20px',
                borderRadius: '50px',
                background: 'rgba(91,81,216,0.1)',
                color: '#5b51d8',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '13.5px',
                border: '1px solid #5b51d8',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#5b51d8'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(91,81,216,0.1)'; e.currentTarget.style.color = '#5b51d8'; }}
            >
              Join Now
            </Link>
          ) : (
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #5b51d8, #38bdf8)',
                  color: '#fff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(91,81,216,0.3)',
                  marginLeft: '8px',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <>
                  <div
                    onClick={() => setProfileOpen(false)}
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 90 }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'calc(100% + 15px)',
                    right: 0,
                    width: '280px',
                    background: '#fff',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    border: '1px solid #e2e8f0',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    {/* Pointer */}
                    <div style={{
                      position: 'absolute',
                      top: '-8px',
                      right: '20px',
                      width: 0,
                      height: 0,
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderBottom: '8px solid #fff',
                    }} />

                    <div style={{ textAlign: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                      <div style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #5b51d8, #38bdf8)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '24px',
                        margin: '0 auto 12px',
                        boxShadow: '0 8px 16px rgba(91,81,216,0.2)'
                      }}>
                        {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                      </div>
                      <h3 style={{ margin: '0 0 6px 0', fontSize: '18px', fontWeight: 800, color: '#0f172a' }}>{user.fullName || 'User'}</h3>
                      <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{user.email}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '8px 0' }}>
                      {user.stream && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#334155', fontWeight: 600 }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <BookOpen size={16} color="#5b51d8" />
                          </div>
                          {user.stream} Student
                        </div>
                      )}
                      {user.age && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#334155', fontWeight: 600 }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Clock size={16} color="#5b51d8" />
                          </div>
                          {user.age} Years Old
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                      <Link
                        to="/profile"
                        onClick={() => setProfileOpen(false)}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '12px',
                          background: '#f8fafc',
                          color: '#334155',
                          border: '1px solid #e2e8f0',
                          fontWeight: 700,
                          fontSize: '14px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          textDecoration: 'none',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#5b51d8'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.color = '#334155'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                      >
                        <UserIcon size={16} strokeWidth={2.5} /> Student Profile
                      </Link>

                      <button
                        onClick={handleLogout}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '12px',
                          background: '#fee2e2',
                          color: '#ef4444',
                          border: '1px solid #fecaca',
                          fontWeight: 700,
                          fontSize: '14px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          marginTop: '8px',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#fecaca'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#fee2e2'; e.currentTarget.style.transform = 'translateY(0)' }}
                      >
                        <LogOut size={16} strokeWidth={2.5} /> Log Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

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
