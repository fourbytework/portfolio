import React from 'react';
import { Code2, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon, InstagramIcon } from '../SocialIcons';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col brand-col">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="footer-logo">
              <div className="footer-logo-icon">
                <Code2 size={20} color="#ffffff" />
              </div>
              <span>Four<span className="logo-accent">Bytes</span></span>
            </a>

            <p className="footer-tagline">
              We Byte The Complex. You Byte The Success. Empowering businesses with high-converting websites, 
              native mobile applications, and brand identities.
            </p>

            <div className="footer-socials">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><TwitterIcon size={18} /></a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble"><DribbbleIcon size={18} /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={18} /></a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => scrollTo('home')}>Home</button></li>
              <li><button onClick={() => scrollTo('about')}>About & Team</button></li>
              <li><button onClick={() => scrollTo('services')}>Our Services</button></li>
              <li><button onClick={() => scrollTo('projects')}>Portfolio Projects</button></li>
              <li><button onClick={() => scrollTo('contact')}>Contact Us</button></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><button onClick={() => scrollTo('services')}>Website Development</button></li>
              <li><button onClick={() => scrollTo('services')}>Application Development</button></li>
              <li><button onClick={() => scrollTo('services')}>UI/UX Design Studio</button></li>
              <li><button onClick={() => scrollTo('services')}>Graphics & Logo Design</button></li>
              <li><button onClick={() => scrollTo('services')}>Digital Marketing & SEO</button></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-col">
            <h4>Contact Info</h4>
            <div className="footer-contact-details">
              <p>📍 Ahmedabad, Gujarat, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ contact@fourbytes.agency</p>
              <p>⚡ Response Time: &lt; 15 mins</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>FourBytes Studio</strong>. All Rights Reserved. Built with <Heart size={14} color="#84486c" fill="#84486c" /> React & Vite.</p>
          
          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to top">
            <span>Back To Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
