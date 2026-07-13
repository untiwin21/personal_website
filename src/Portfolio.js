import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import MyPhoto from './imgs/my_photo.jpg';

const ProjectVisual = ({ variant, title }) => {
  const accent = variant === 'teal' ? '#1ad2c7' : variant === 'pink' ? '#ff3377' : '#7486f9';

  return (
    <svg viewBox="0 0 420 250" className="project-svg" role="img" aria-label={title}>
      <rect width="420" height="250" rx="4" fill="#f4f7fb" />
      <rect x="0" y="0" width="420" height="250" fill="url(#grid)" opacity="0.55" />
      <defs>
        <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#dbe4f0" strokeWidth="1" />
        </pattern>
      </defs>

      {variant === 'teal' && (
        <>
          <circle cx="100" cy="126" r="52" fill="none" stroke="#1ad2c7" strokeWidth="4" opacity="0.45" />
          <circle cx="100" cy="126" r="22" fill="#1ad2c7" opacity="0.9" />
          <circle cx="300" cy="126" r="18" fill="#7486f9" />
          <path d="M125 126 C172 72 236 72 285 126" fill="none" stroke="#343a40" strokeWidth="5" strokeLinecap="round" />
          <path d="M125 126 C172 180 236 180 285 126" fill="none" stroke="#343a40" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
          {[178, 205, 232].map((x) => <circle key={x} cx={x} cy="126" r="8" fill={accent} />)}
        </>
      )}

      {variant === 'pink' && (
        <>
          <rect x="155" y="154" width="110" height="18" rx="6" fill="#343a40" />
          <circle cx="210" cy="154" r="18" fill="#7486f9" />
          <path d="M210 154 L210 104 L260 76" stroke="#343a40" strokeWidth="16" strokeLinecap="round" fill="none" />
          <circle cx="210" cy="104" r="16" fill={accent} />
          <circle cx="260" cy="76" r="14" fill="#1ad2c7" />
          <path d="M260 76 L288 52" stroke="#343a40" strokeWidth="10" strokeLinecap="round" />
          <rect x="286" y="38" width="28" height="42" rx="6" fill="none" stroke="#1ad2c7" strokeWidth="3" />
        </>
      )}

      {variant === 'purple' && (
        <>
          <rect x="142" y="82" width="136" height="92" rx="16" fill="#343a40" />
          <circle cx="172" cy="82" r="18" fill="#7486f9" />
          <circle cx="248" cy="82" r="18" fill="#7486f9" />
          <circle cx="172" cy="174" r="18" fill="#1ad2c7" />
          <circle cx="248" cy="174" r="18" fill="#1ad2c7" />
          <circle cx="210" cy="128" r="22" fill={accent} />
          <path d="M210 80 L210 38" stroke="#343a40" strokeWidth="5" strokeDasharray="8 6" />
          <path d="M196 48 L210 32 L224 48" fill="none" stroke="#343a40" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}

      <text x="210" y="218" textAnchor="middle" fill="#343a40" fontSize="15" fontFamily="Inter, sans-serif" fontWeight="700">
        {title}
      </text>
    </svg>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedProject]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const projects = [
    {
      id: 'sensor-fusion',
      title: 'Uncertainty-Aware Sensor Fusion for Reliable Navigation',
      shortTitle: 'Sensor Fusion',
      period: '2025.08 - 2026.03',
      venue: 'Research Project, 2025-2026',
      authors: ['Choi Taewoong', 'SKKU Robotics Innovatory'],
      variant: 'teal',
      tags: ['Sensor Fusion', 'Deep Learning', 'ROS 1'],
      github: '',
      sections: [
        {
          title: 'Project Summary',
          text: 'Designed a sensor-fusion research workflow for robust mobile robot navigation in dynamic environments.',
        },
        {
          title: 'My Contribution',
          text: 'Focused on LiDAR and Radar fusion, dynamic occupancy grid representation, and deep-learning based uncertainty handling.',
        },
      ],
    },
    {
      id: 'bartender',
      title: 'Bartender Robot Arm',
      shortTitle: 'Robot Arm',
      period: '2025.08 - 2025.11',
      venue: 'SKKU Robotics Club Project, 2025',
      authors: ['Choi Taewoong', 'SKKU Robotics Club Team'],
      variant: 'pink',
      tags: ['3D Modeling', 'ROS2 MoveIt!', 'Dynamixel'],
      github: 'https://github.com/SWE3022-42-team9',
      videoUrl: 'https://www.youtube.com/shorts/IX1vHyPMZBo',
      sections: [
        {
          title: 'Project Summary',
          text: 'Built a 4-DOF bartender robot arm using Dynamixel actuators, 3D-printed parts, and ROS2 MoveIt.',
        },
        {
          title: 'My Contribution',
          text: 'Led mechanical design, actuator integration, motion planning, and team-level project coordination.',
        },
      ],
    },
    {
      id: 'aws-robot',
      title: 'Development of Driving Mode of 4WS Mobile Robot',
      shortTitle: '4WS Robot',
      period: '2022.09 - 2023.02',
      venue: 'Undergraduate Research Project',
      authors: ['Choi Taewoong', 'URP Research Team'],
      variant: 'purple',
      tags: ['ROS 1', 'Gazebo', 'Ackermann Steering'],
      github: '',
      sections: [
        {
          title: 'Previous Work and Limitation',
          text: 'Extended a 4-wheel steering mobile robot that already supported manual joystick-based driving modes.',
        },
        {
          title: 'Project Goals',
          text: 'Implemented left and right turn driving modes, generated a URDF from the CAD model, and tested driving behavior in Gazebo.',
        },
      ],
    },
  ];

  const timelineItems = [
    {
      logo: 'RI',
      title: 'Undergraduate Researcher @ SKKU Robotics Innovatory',
      period: 'Jan 2025 - Mar 2026',
      tags: ['SensorFusion', 'MobileRobotics', 'DeepLearning', 'ROS'],
    },
    {
      logo: 'SKKU',
      title: 'B.S. in Mechanical Engineering @ Sungkyunkwan University',
      period: 'Feb 2021 - Present',
      tags: ['MechanicalEngineering', 'Robotics', 'ControlSystems'],
    },
    {
      logo: 'LF',
      title: '3D Printing & Laser Cutting Manager @ SKKU Learning Factory',
      period: 'Dec 2025 - Present',
      tags: ['3DPrinting', 'LaserCutting', 'Education'],
    },
    {
      logo: 'CLUB',
      title: 'Team Leader @ SKKU Robotics Club',
      period: 'Aug 2025 - Nov 2025',
      tags: ['ROS2', 'MoveIt', 'RobotArm', 'CAD'],
    },
  ];

  const skills = [
    { category: 'Programming Languages', icon: 'PL', items: ['Python', 'C++', 'MATLAB'] },
    { category: 'Robotics', icon: 'RB', items: ['ROS', 'ROS2', 'MoveIt!', 'RViz', 'URDF', 'Gazebo'] },
    { category: 'Deep Learning', icon: 'AI', items: ['PyTorch', 'PyTorch Geometric', 'Graph Neural Networks', 'Graph Attention Network'] },
    { category: 'Sensors & Hardware', icon: 'HW', items: ['LiDAR', 'Radar', 'Dynamixel', '3D Printing (FDM)', 'Encoder Motors'] },
    { category: 'CAD / Simulation', icon: 'CAD', items: ['SolidWorks', 'Fusion 360', 'Gazebo', 'Adams'] },
    { category: 'Tools', icon: 'TL', items: ['Git', 'Linux', 'LaTeX', 'Arduino'] },
  ];

  return (
    <div className="portfolio-wrapper">
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-profile">
          <div className="profile-img-wrap">
            <img src={MyPhoto} alt="Choi Taewoong" className="profile-img" />
          </div>
          <h2 className="sidebar-name">Choi Taewoong</h2>
          <p className="sidebar-role">Robotics Engineer</p>
          <p className="sidebar-affil">SKKU Robotics Innovatory</p>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-dot" />
              {label}
            </a>
          ))}
        </nav>

        <div className="sidebar-social">
          <a href="https://github.com/untiwin21" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
            GH
          </a>
          <a href="mailto:taewoong1377@g.skku.edu" className="social-btn" title="Email">
            @
          </a>
        </div>
      </aside>

      <main className="main-content">
        <section id="hero" className="section hero-section">
          <div className="hero-bg" />
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Choi Taewoong<span className="accent-dot">.</span></h1>
            <p className="hero-kicker">Robotics Engineering / Sensor Fusion / Autonomous Navigation</p>
            <p className="hero-sub">
              Undergraduate researcher in Mechanical Engineering at Sungkyunkwan University,
              building robotic systems from perception to physical prototypes.
            </p>
            <div className="hero-btns">
              <a href="#publications" className="btn btn-primary">Publications</a>
              <a href="#timeline" className="btn btn-outline">Timeline</a>
            </div>
          </div>
          <div className="hero-scroll-hint">
            <span>Scroll</span>
            <div className="scroll-arrow" />
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-inner">
            <h2 className="section-title fade-in">About</h2>
            <div className="about-grid fade-in">
              <div className="about-photo-wrap">
                <img src={MyPhoto} alt="Choi Taewoong" className="about-photo" />
                <div className="about-photo-deco" />
              </div>
              <div className="about-text">
                <h3 className="about-name">Choi Taewoong</h3>
                <div className="about-tags">
                  <span className="tag tag-teal">SKKU ME '21</span>
                  <span className="tag tag-purple">Robotics Innovatory</span>
                  <span className="tag tag-pink">URP 2025</span>
                </div>
                <p>
                  I am a 4th-year undergraduate student in Mechanical Engineering at
                  Sungkyunkwan University, conducting research at SKKU Robotics Innovatory.
                </p>
                <p>
                  My research focuses on mobile robot navigation in dynamic environments
                  through uncertainty-aware sensor fusion of LiDAR and Radar data.
                </p>
                <p>
                  I enjoy designing robotic systems from the ground up, from CAD modeling
                  and 3D printing to ROS2 integration and autonomous control.
                </p>
                <ul className="about-info-list">
                  <li><span className="info-label">University</span> Sungkyunkwan University</li>
                  <li><span className="info-label">Major</span> Mechanical Engineering</li>
                  <li><span className="info-label">Lab</span> SKKU Robotics Innovatory</li>
                  <li><span className="info-label">Interests</span> Autonomous Navigation, Sensor Fusion, Robot Learning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="publications" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title fade-in">Publications</h2>
            <div className="publications-grid">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className="publication-card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="publication-media">
                    <ProjectVisual variant={project.variant} title={project.shortTitle} />
                  </div>
                  <div className="publication-body">
                    <h3 className="publication-title">{project.title}</h3>
                    <div className="publication-row">
                      <span className="pub-badge">Authors</span>
                      <p>
                        {project.authors.map((author, authorIndex) => (
                          <React.Fragment key={author}>
                            {authorIndex > 0 && ', '}
                            <span className={author === 'Choi Taewoong' ? 'pub-me' : undefined}>{author}</span>
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <div className="publication-row">
                      <span className="pub-badge">Conference</span>
                      <p>{project.venue}</p>
                    </div>
                  </div>
                  <div className="publication-footer">
                    <button className="btn btn-primary btn-small" onClick={() => setSelectedProject(project)}>
                      Details
                    </button>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary btn-small">GitHub</a>
                    )}
                    {project.videoUrl && (
                      <a href={project.videoUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-small">YouTube</a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="timeline" className="section">
          <div className="section-inner">
            <h2 className="section-title fade-in">Timeline</h2>
            <ul className="timeline-center fade-in">
              {timelineItems.map((item, index) => (
                <li key={`${item.title}-${item.period}`} className={index % 2 === 1 ? 'timeline-inverted' : ''}>
                  <div className="timeline-badge">{item.logo}</div>
                  <div className="timeline-panel">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-period">{item.period}</p>
                    <div className="padded-title">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tag} className={`topic-tag topic-${tagIndex % 5}`}>#{tag}</span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
              <div className="modal-close">
                <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
                  x
                </button>
              </div>
              <div className="modal-header">
                <h2 className="modal-title">{selectedProject.title}</h2>
                <p className="modal-subtitle">{selectedProject.period} | {selectedProject.venue}</p>
                <div className="modal-tools">
                  {selectedProject.tags.map((tag) => <span key={tag} className="tool-tag">{tag}</span>)}
                </div>
              </div>
              {selectedProject.sections.map((section) => (
                <div key={section.title} className="modal-section">
                  <h3 className="modal-section-title">{section.title}</h3>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <section id="skills" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title fade-in">Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.category} className="skill-card fade-in" style={{ animationDelay: `${index * 0.08}s` }}>
                  <div className="skill-card-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <h3 className="skill-category">{skill.category}</h3>
                  </div>
                  <div className="skill-tags">
                    {skill.items.map((item) => <span key={item} className="skill-tag">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="section-inner">
            <h2 className="section-title fade-in">Contact</h2>
            <div className="contact-wrap fade-in">
              <p className="contact-intro">
                I am open to research collaborations, internship opportunities, and robotics projects.
              </p>
              <div className="contact-cards">
                <a href="mailto:taewoong1377@g.skku.edu" className="contact-card">
                  <div className="contact-icon">@</div>
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">taewoong1377@g.skku.edu</p>
                    <p className="contact-value muted">twws137702@gmail.com</p>
                  </div>
                </a>
                <a href="https://github.com/untiwin21" target="_blank" rel="noreferrer" className="contact-card">
                  <div className="contact-icon">GH</div>
                  <div>
                    <p className="contact-label">GitHub</p>
                    <p className="contact-value">github.com/untiwin21</p>
                  </div>
                </a>
                <div className="contact-card">
                  <div className="contact-icon">KR</div>
                  <div>
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">+82) 010-4830-3779</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>Copyright 2025 Choi Taewoong | SKKU Mechanical Engineering | Robotics Innovatory</p>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;
