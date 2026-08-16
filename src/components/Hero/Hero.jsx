import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Layers, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <section id="home" className="hero-section">
      {/* Background Graphic & Light Glows */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-grid"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">

          {/* Main Headline */}
          <h1 className="hero-title">
            We Byte The Complex. <br />
            You <span className="highlight-accent">Byte The Success.</span>
          </h1>

          {/* Subtext */}
          <p className="hero-description">
            FourBytes transforms ambitious ideas into high-converting websites, sleek mobile apps, 
            intuitive UI/UX interfaces, iconic logos, and growth-driven digital marketing campaigns.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions">
            <button onClick={() => scrollTo('projects')} className="hero-btn primary-btn">
              Explore Our Work
              <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('contact')} className="hero-btn secondary-btn">
              Book a Free Call
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="hero-trust">
            <div className="trust-item">
              <ShieldCheck size={20} className="trust-icon" />
              <span>100% Quality Code</span>
            </div>
            <div className="trust-item">
              <Zap size={20} className="trust-icon" />
              <span>Lightning Fast Speed</span>
            </div>
            <div className="trust-item">
              <Layers size={20} className="trust-icon" />
              <span>Pixel-Perfect UI</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Card / Dashboard Mockup */}
        <div className="hero-visual">
          <div className="hero-card-frame">
            <div className="frame-header">
              <div className="frame-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="frame-title">FourBytes Studio Dashboard</span>
            </div>

            <div className="frame-body">
              <div className="visual-graphic-container">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" 
                  alt="FourBytes Agency Workstation" 
                  className="hero-main-img"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
