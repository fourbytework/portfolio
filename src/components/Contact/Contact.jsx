import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, MessageSquare, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', 
    service: 'Website Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Listen to custom event from Services section button
  useEffect(() => {
    const handleServiceSelect = (e) => {
      if (e.detail) {
        setFormData((prev) => ({ ...prev, service: e.detail }));
      }
    };
    window.addEventListener('select-service', handleServiceSelect);
    return () => window.removeEventListener('select-service', handleServiceSelect);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Agency WhatsApp phone number (Default format: 919876543210)
    const whatsappNumber = '8758592615';

    // Format neat WhatsApp Message string
    const messageText = ` *New Inquiry For FourBytes Studio*
━━━━━━━━━━━━━━━━━━━━
 *Name:* ${formData.name}
 *Phone:* ${formData.phone}
 *Email:* ${formData.email}
 *Service Required:* ${formData.service}
 *Message:* ${formData.message || 'Looking forward to discussing our project details!'}
━━━━━━━━━━━━━━━━━━━━`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Show temporary success feedback & open WhatsApp
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
    }, 800);
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag">
            <MessageSquare size={14} /> Let's Connect
          </div>
          <h2>
            Got A Project? <span className="highlight-text">Let's Talk Business</span>
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Agency Contact Info & Perks */}
          <div className="contact-info-card">
            <h3>Get In Touch With FourBytes</h3>
            <p className="info-intro">
              We respond within 15 minutes. Feel free to contact us directly or drop a message!
            </p>

            <div className="contact-info-list">
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} color="#ffffff" />
                </div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p>+91 87585 92615</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} color="#ffffff" />
                </div>
                <div>
                  <strong>Email Inquiry</strong>
                  <p>fourbyte.work@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} color="#ffffff" />
                </div>
                <div>
                  <strong>Office Studio</strong>
                  <p>Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Clock size={20} color="#ffffff" />
                </div>
                <div>
                  <strong>Working Hours</strong>
                  <p>Mon - Fri: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Trust Banner */}
            <div className="contact-trust-box">
              <ShieldCheck size={24} color="#84486c" />
              <div>
                <strong>Non-Disclosure & Privacy Protected</strong>
                <p>Your project idea and data are 100% confidential with us.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3>Send An Inquiry</h3>
            <p className="form-subtext">Submitting opens WhatsApp with your project brief.</p>

            {submitted ? (
              <div className="success-banner">
                <CheckCircle2 size={32} color="#22c55e" />
                <h4>Opening WhatsApp...</h4>
                <p>Redirecting you to chat with FourBytes team on WhatsApp!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Select Required Service *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Application Development">Application Development</option>
                    <option value="Graphics & Logo Design">Graphics & Logo Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Description / Message</label>
                  <textarea
                    id="message"
                    name="message" 
                    placeholder="Tell us a little about your project goals, features, or budget..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message via WhatsApp
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
