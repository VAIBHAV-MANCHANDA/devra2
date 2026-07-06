import { Link } from '../router'
import devraLogo from '../assets/devraLogo.png'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img 
                src={devraLogo} 
                alt="Devra" 
                style={{ 
                  height: '48px', 
                  objectFit: 'contain', 
                  display: 'block', 
                  filter: 'brightness(0) invert(1)', 
                  marginBottom: '16px' 
                }} 
              />
            </Link>
            <p>Devera is a construction and architecture studio designing and building private residences, interiors, and commercial spaces from first sketch to final handover.</p>
            <div className="social-row">
              <a href="https://instagram.com/devra.architects" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://x.com/devra_architects" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about-us">About us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p className="line">Studio 4, Millbrook Yard<br />Ludhiana, Punjab</p>
            <p className="line">+91 9779662286</p>
            <p className="line">info@devra.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {currentYear} Devera Construction &amp; Architecture. All rights reserved.</span>
          <span>Designed with care.</span>
        </div>
      </div>
    </footer>
  )
}
