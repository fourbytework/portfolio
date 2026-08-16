import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import './UiUxModal.css';

const UiUxModal = ({ project, onClose }) => {
  useEffect(() => {
    // Disable background page scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!project) return null;

  return (
    <div className="uiux-modal-overlay" onClick={onClose}>
      <div className="uiux-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div className="modal-title-info">
            <span className="modal-badge">UI/UX Landing Page Showcase</span>
            <h3>{project.title}</h3>
          </div>

          <div className="modal-bar-actions">
            <span className="scroll-hint-pill">👇 Scroll down inside frame to view full design</span>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Scrollable Frame - Full Vertical Landing Page Mockup Design */}
        <div className="modal-scrollable-frame">
          {/* Simulated Browser Frame Bar */}
          <div className="simulated-browser-nav">
            <div className="browser-dots">
              <span className="b-dot red"></span>
              <span className="b-dot yellow"></span>
              <span className="b-dot green"></span>
            </div>
            <div className="browser-url-bar">
              https://design-preview.fourbytes.agency/{project.id}
            </div>
          </div> 

          {/* Full homepage preview only */}
          <div className="mock-homepage-window">
            <img src={project.homepageImage || project.thumbnail} alt={project.title} className="mock-homepage-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUxModal;
