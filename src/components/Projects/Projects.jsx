import React, { useState } from 'react';
import { websiteProjects, appProjects, uiUxProjects, logoProjects } from '../../data/projectsData';
import UiUxModal from '../UiUxModal/UiUxModal';
import { ExternalLink, Eye, FolderKanban, Globe, Smartphone, Layout, Palette, Star, ArrowUpRight } from 'lucide-react';
import './Projects.css';
 
const Projects = () => {
  const [activeTab, setActiveTab] = useState('websites');
  const [selectedUiUxProject, setSelectedUiUxProject] = useState(null);

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <FolderKanban size={14} /> Featured Portfolio
          </div>
          <h2>
            Our Latest <span className="highlight-text">Crafted Projects</span>
          </h2>
          <p>
            Explore real-world applications, high-converting websites, scrollable UI/UX designs, 
            and iconic logo identities created by FourBytes.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="project-tabs">
          <button 
            className={`tab-btn ${activeTab === 'websites' ? 'active' : ''}`}
            onClick={() => setActiveTab('websites')}
          >
            <Globe size={16} /> Websites (4 Featured)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => setActiveTab('applications')}
          >
            <Smartphone size={16} /> Applications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'uiux' ? 'active' : ''}`}
            onClick={() => setActiveTab('uiux')}
          >
            <Layout size={16} /> UI/UX Designs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'logos' ? 'active' : ''}`}
            onClick={() => setActiveTab('logos')}
          >
            <Palette size={16} /> Logo & Graphics
          </button>
        </div>

        {/* 1. WEBSITES SUB-SECTION */}
        {activeTab === 'websites' && (
          <div className="portfolio-subgroup">
            <div className="subgroup-title">
              <Globe size={22} color="#84486c" />
              <h3>Website Engineering</h3>
            </div>

            <div className="websites-grid">
              {websiteProjects.map((project) => (
                <div key={project.id} className="web-project-card">
                  <div className="web-img-wrapper">
                    <img src={project.heroImage} alt={project.title} className="web-hero-img" />
                    <div className="web-overlay">
                      <a 
                        href={project.visitUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="visit-link-btn"
                      >
                        Visit Live Site <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="web-card-content">
                    <div className="web-header">
                      <h4>{project.title}</h4>
                      <span className="category-badge">{project.category}</span>
                    </div>

                    <p className="web-desc">{project.description}</p>


                    <div className="web-footer-action">
                      <a 
                        href={project.visitUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="web-visit-text-link"
                      >
                        <span>Visit Site</span>
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. APPLICATIONS SUB-SECTION */}
        {activeTab === 'applications' && (
          <div className="portfolio-subgroup">
            <div className="subgroup-title">
              <Smartphone size={22} color="#84486c" />
              <h3>Mobile Applications</h3>
            </div>

            <div className="apps-grid">
              {appProjects.map((app) => (
                <div key={app.id} className="app-card">
                  <div className="app-mockup-col">
                    <div className="phone-frame">
                      <img src={app.mockupImage} alt={app.title} className="app-screen-img" />
                    </div>
                  </div>

                  <div className="app-details-col">
                  
                    
                    <h4>{app.title}</h4>
                    <span className="platform-tag">{app.platform}</span>

                    <p className="app-desc">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. UI/UX LANDING PAGES SUB-SECTION (WITH POPUP MODAL) */}
        {activeTab === 'uiux' && (
          <div className="portfolio-subgroup">
            <div className="subgroup-title">
              <Layout size={22} color="#84486c" />
              <h3>UI/UX Landing Pages</h3>
            </div>

            <div className="uiux-grid">
              {uiUxProjects.map((item) => (
                <div 
                  key={item.id} 
                  className="uiux-card"
                  onClick={() => setSelectedUiUxProject(item)}
                >
                  <div className="uiux-thumb-container">
                    <img src={item.thumbnail} alt={item.title} className="uiux-thumb-img" />
                    <div className="uiux-hover-badge">
                      <Eye size={20} />
                      <span>Click to Scroll Full Landing Page</span>
                    </div>
                  </div>

                  <div className="uiux-card-info">
                    <h4>{item.title}</h4>
                    <p>{item.tagline}</p>
                    <button className="open-modal-trigger">
                      Preview Full Landing Page <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. LOGO & GRAPHICS DESIGN SUB-SECTION */}
        {activeTab === 'logos' && (
          <div className="portfolio-subgroup">
            <div className="subgroup-title">
              <Palette size={22} color="#84486c" />
              <h3>Logo Designing & Brand Graphics</h3>
            </div> 

            <div className="logos-grid">
              {logoProjects.map((logo) => (
                <div key={logo.id} className="logo-card">
                  <div className="logo-img-wrapper">
                    <img src={logo.image} alt={logo.title} className="logo-img" />
                  </div>
                  <div className="logo-info">
                    <h4>{logo.title}</h4>
                    <span className="logo-cat">{logo.category}</span>
                    <p>{logo.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Render UI/UX Scroll Modal when selected */}
      {selectedUiUxProject && (
        <UiUxModal 
          project={selectedUiUxProject} 
          onClose={() => setSelectedUiUxProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
