import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '../../assets/images/Logo Dark.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => scrollToSection('home')}
          aria-label="Go to home"
        >
          <img
            src={Logo}
            alt="FourBytes"
            className="logo-img"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <button
            onClick={() => scrollToSection('home')}
            className="nav-link"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            About & Team
          </button>

          <button
            onClick={() => scrollToSection('services')}
            className="nav-link"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection('projects')}
            className="nav-link"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="navbar-actions">

          <button
            onClick={() => scrollToSection('contact')}
            className="cta-button"
          >
            <span>Get A Quote</span>
            <ArrowUpRight size={17} />
          </button>

          {/* Mobile Menu */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>

        <button
          onClick={() => scrollToSection('home')}
          className="mobile-link"
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection('about')}
          className="mobile-link"
        >
          About & Team
        </button>

        <button
          onClick={() => scrollToSection('services')}
          className="mobile-link"
        >
          Services
        </button>

        <button
          onClick={() => scrollToSection('projects')}
          className="mobile-link"
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className="mobile-link"
        >
          Contact
        </button>

        <button
          onClick={() => scrollToSection('contact')}
          className="mobile-cta-button"
        >
          Get A Quote
          <ArrowUpRight size={18} />
        </button>

      </div>
    </header>
  );
};

export default Navbar;