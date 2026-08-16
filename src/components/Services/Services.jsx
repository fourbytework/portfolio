import React from 'react';
import { servicesData } from '../../data/servicesData';
import {
  Globe,
  Smartphone,
  Layout,
  Palette,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Wrench
} from 'lucide-react';
import './Services.css';

const Services = () => {

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Globe':
        return <Globe size={26} />;
      case 'Smartphone':
        return <Smartphone size={26} />;
      case 'Layout': 
        return <Layout size={26} />;
      case 'Palette':
        return <Palette size={26} />;
      case 'TrendingUp':
        return <TrendingUp size={26} />;
      default:
        return <Wrench size={26} />;
    }
  };

  const handleSelectService = (serviceTitle) => {
    const contactSection = document.getElementById('contact');

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
      });

      window.dispatchEvent(
        new CustomEvent('select-service', {
          detail: serviceTitle,
        })
      );
    }
  };

  return (
    <section id="services" className="services-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="badge-tag">
            <Wrench size={14} />
            Our Specializations
          </div>

          <h2>
            End-To-End{' '}
            <span className="highlight-text">
              Digital Services
            </span>
          </h2>

          <p>
            Modern digital solutions designed to help your business grow.
          </p>
        </div> 

        {/* Services Grid */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div
              className="service-card"
              key={service.id}
            >

              {/* Icon */}
              <div className="service-icon-box">
                {getServiceIcon(service.icon)}
              </div>

              {/* Title */}
              <h3 className="service-title">
                {service.title}
              </h3>

              {/* Subtitle */}
              <span className="service-subtitle">
                {service.subtitle}
              </span>

              {/* Description */}
              <p className="service-desc">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="service-deliverables">
                <h5>What's Included:</h5>

                <ul>
                  {service.deliverables.slice(0, 4).map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={14} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className="service-action-btn"
                onClick={() =>
                  handleSelectService(service.title)
                }
              >
                Inquire For {service.title}
                <ArrowRight size={15} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;