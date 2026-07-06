import { useState, useEffect } from 'react'
import { Link } from '../router'
import devraBlack from '../assets/devraBlack.png'
import './Header.css'

export default function Header({ variant = 'overlay' }) {
  const [headerSolid, setHeaderSolid] = useState(variant === 'solid' || variant === 'static')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (variant === 'solid' || variant === 'static') {
      setHeaderSolid(true)
      return
    }

    const handleScroll = () => {
      setHeaderSolid(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    // Run once at mount
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [variant])

  return (
    <>
      <header id="siteHeader" className={headerSolid ? 'solid' : ''}>
        <Link to="/" className="brand" onClick={() => setIsMenuOpen(false)}>
          <img 
            src={devraBlack} 
            alt="Devra" 
            style={{ 
              height: '48px', 
              objectFit: 'contain', 
              display: 'block'
            }} 
          />
        </Link>
        <nav className="primary">
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/residential-architects-chandigarh">Residential</Link>
          <Link to="/housing-architects-chandigarh">Housing</Link>
          <Link to="/commercial-architects-chandigarh">Commercial</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="header-right">
          <Link to="/contact" className="cta-btn">Get a Quote →</Link>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span style={{ backgroundColor: headerSolid ? 'var(--ink)' : '#fff' }}></span>
          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--charcoal)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px'
        }}>
          <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', fontSize: '24px', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>Home</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', fontSize: '24px', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>About us</Link>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', fontSize: '24px', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>Blog</Link>
          <Link to="/residential-architects-chandigarh" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', fontSize: '24px', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>Residential</Link>
          <Link to="/housing-architects-chandigarh" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', fontSize: '24px', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>Housing</Link>
          <Link to="/commercial-architects-chandigarh" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', fontSize: '24px', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>Commercial</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: '#fff', fontSize: '24px', letterSpacing: '0.1em', fontFamily: 'var(--serif)' }}>Contact</Link>
          <div 
            onClick={() => setIsMenuOpen(false)}
            style={{
              marginTop: '40px',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#fff',
              fontSize: '20px'
            }}
          >
            ✕
          </div>
        </div>
      )}
    </>
  )
}
