import React, { useEffect, useState } from 'react';
import { teamMembers } from '../../data/teamData';
import {
  CheckCircle2,
  Users,
  Target,
  Rocket,
} from 'lucide-react';

import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DribbbleIcon,
  InstagramIcon,
} from '../SocialIcons';

import './About.css';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getSocialIcon = (key) => {
    switch (key) {
      case 'github':
        return <GithubIcon size={17} />;

      case 'linkedin':
        return <LinkedinIcon size={17} />;

      case 'twitter':
        return <TwitterIcon size={17} />;

      case 'dribbble':
        return <DribbbleIcon size={17} />;

      case 'instagram':
        return <InstagramIcon size={17} />;

      default:
        return null;
    }
  };

  /* ================= AUTO SLIDER ================= */

  useEffect(() => {
    if (!teamMembers.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === teamMembers.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!teamMembers.length) return null;

  const currentMember = teamMembers[currentIndex];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">

        <div className="about-grid">

          {/* ================= LEFT SIDE ================= */}

          <div className="about-details">

            <div className="badge-tag">
              <Users size={13} />
              About FourBytes
            </div>

            <h2 className="about-title">
              Your Ideas, Our{' '}
              <span className="highlight-text">
                Digital Expertise
              </span>
            </h2>

            <p className="about-lead">
              <strong>FourBytes</strong> is a freelance digital team
              creating modern websites, web applications, mobile apps,
              and digital experiences for businesses and startups.
            </p>

            <p className="about-text">
              From concept to deployment, we provide practical,
              scalable, and custom-built solutions based on your
              business requirements.
            </p>

            {/* ================= FEATURES ================= */}

            <div className="about-features">

              <div className="feature-item">
                <CheckCircle2
                  size={19}
                  className="feature-icon"
                />

                <div>
                  <h4>Requirement Focused</h4>

                  <p>
                    Solutions designed around your goals and project needs.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <CheckCircle2
                  size={19}
                  className="feature-icon"
                />

                <div>
                  <h4>Modern Technology</h4>

                  <p>
                    React, Node.js, MongoDB, Flutter and modern tools.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <CheckCircle2
                  size={19}
                  className="feature-icon"
                />

                <div>
                  <h4>Complete Project Support</h4>

                  <p>
                    Design, development, deployment and future support.
                  </p>
                </div>
              </div>

            </div>

            {/* ================= VALUES ================= */}

            <div className="about-values">

              <div className="value-chip">
                <Target size={15} />
                <span>Client Focused</span>
              </div>

              <div className="value-chip">
                <Rocket size={15} />
                <span>Fast Delivery</span>
              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="about-team">

            {/* HEADER */}

            <div className="team-header-box">

              <span className="freelance-small-title">
                MEET OUR FREELANCERS
              </span>

              <h3>
                Experts Behind Your
                <span> Digital Project</span>
              </h3>

              <p>
                Skilled professionals ready to bring your ideas to life.
              </p>

            </div>


            {/* ================= SLIDER ================= */}

            <div className="freelancer-slider">

              {/* PORTRAIT IMAGE */}

              <div className="freelancer-image-wrapper">

                <img
                  key={currentMember.id}
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="freelancer-img"
                />

                {/* SOCIAL LINKS */}

                <div className="team-social-overlay">

                  {Object.entries(
                    currentMember.social || {}
                  ).map(([key, url]) => (

                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      title={key}
                    >
                      {getSocialIcon(key)}
                    </a>

                  ))}

                </div>

              </div>


              {/* ================= MEMBER INFO ================= */}

              <div className="freelancer-info">

                <h4 className="member-name">
                  {currentMember.name}
                </h4>

                <span className="member-designation">
                  {currentMember.designation}
                </span>

                <p className="member-bio">
                  {currentMember.bio}
                </p>

                <div className="member-skills">

                  {currentMember.skills
                    ?.slice(0, 4)
                    .map((skill, index) => (

                      <span
                        key={index}
                        className="skill-pill"
                      >
                        {skill}
                      </span>

                    ))}

                </div>

              </div>


              {/* ================= SLIDER DOTS ================= */}

              <div className="slider-dots">

                {teamMembers.map((member, index) => (

                  <button
                    type="button"
                    key={member.id}
                    className={`slider-dot ${
                      index === currentIndex ? 'active' : ''
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Show ${member.name}`}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;