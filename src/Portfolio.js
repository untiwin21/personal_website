import React, { useState, useEffect, useRef } from 'react';
import './Portfolio.css';
import MyPhoto from './imgs/my_photo.jpg';

/* ──────────────────── SVG ILLUSTRATIONS ──────────────────── */

const SensorFusionSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
    {/* Background */}
    <rect width="400" height="220" fill="#08183d" rx="8"/>
    {/* Radar waves */}
    <circle cx="80" cy="110" r="30" fill="none" stroke="#4488ff" strokeWidth="1.5" opacity="0.3"/>
    <circle cx="80" cy="110" r="55" fill="none" stroke="#4488ff" strokeWidth="1.5" opacity="0.2"/>
    <circle cx="80" cy="110" r="80" fill="none" stroke="#4488ff" strokeWidth="1" opacity="0.1"/>
    {/* Radar center */}
    <circle cx="80" cy="110" r="8" fill="#4488ff"/>
    <text x="80" y="145" textAnchor="middle" fill="#6ea8ff" fontSize="9" fontFamily="Inter">Radar</text>
    {/* LiDAR device */}
    <circle cx="320" cy="110" r="10" fill="#00c9a7"/>
    <text x="320" y="145" textAnchor="middle" fill="#00c9a7" fontSize="9" fontFamily="Inter">LiDAR</text>
    {/* LiDAR point cloud */}
    {[
      [200,60],[220,72],[240,65],[255,80],[260,95],[255,110],
      [245,125],[230,138],[210,145],[190,140],[175,130],[170,115],
      [175,98],[185,82],[198,70]
    ].map(([x,y], i) => (
      <circle key={i} cx={x} cy={y} r="2.5" fill="#00c9a7" opacity="0.8"/>
    ))}
    {/* Graph nodes (GAT) */}
    {[
      [200,100],[215,85],[230,100],[215,115],[195,118],[182,105]
    ].map(([x,y], i) => (
      <circle key={i} cx={x} cy={y} r="5" fill="#ff6b6b" opacity="0.9"/>
    ))}
    {/* Graph edges */}
    {[
      [200,100,215,85],[200,100,230,100],[200,100,215,115],
      [200,100,195,118],[200,100,182,105],[215,85,230,100],
      [215,115,195,118],[182,105,195,118]
    ].map(([x1,y1,x2,y2], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="#ff6b6b" strokeWidth="1" opacity="0.4"/>
    ))}
    {/* Arrow from radar to center */}
    <line x1="88" y1="110" x2="168" y2="110" stroke="#4488ff" strokeWidth="1.5"
      strokeDasharray="4,3" opacity="0.6"/>
    <polygon points="165,107 170,110 165,113" fill="#4488ff" opacity="0.6"/>
    {/* Arrow from LiDAR to center */}
    <line x1="310" y1="110" x2="238" y2="110" stroke="#00c9a7" strokeWidth="1.5"
      strokeDasharray="4,3" opacity="0.6"/>
    <polygon points="241,107 236,110 241,113" fill="#00c9a7" opacity="0.6"/>
    {/* Labels */}
    <text x="128" y="106" fill="#4488ff" fontSize="8" fontFamily="Inter">velocity</text>
    <text x="255" y="106" fill="#00c9a7" fontSize="8" fontFamily="Inter">position</text>
    <text x="200" y="175" textAnchor="middle" fill="#8a9fc4" fontSize="10" fontFamily="Inter">
      LiDAR + Radar Fusion (DOGM)
    </text>
  </svg>
);

const BartenderArmSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
    <rect width="400" height="220" fill="#08183d" rx="8"/>
    {/* Base platform */}
    <rect x="160" y="185" width="80" height="14" fill="#1a3a6e" rx="4"/>
    <rect x="175" y="175" width="50" height="12" fill="#1a4db0" rx="3"/>
    {/* Joint 1 (base) */}
    <circle cx="200" cy="175" r="12" fill="#4488ff"/>
    <circle cx="200" cy="175" r="7" fill="#1a3a6e"/>
    {/* Link 1 */}
    <rect x="192" y="135" width="16" height="42" fill="#1a4db0" rx="5"/>
    {/* Joint 2 */}
    <circle cx="200" cy="135" r="10" fill="#4488ff"/>
    <circle cx="200" cy="135" r="6" fill="#1a3a6e"/>
    {/* Link 2 - angled */}
    <line x1="200" y1="135" x2="245" y2="100" stroke="#1a4db0" strokeWidth="14" strokeLinecap="round"/>
    {/* Joint 3 */}
    <circle cx="245" cy="100" r="9" fill="#4488ff"/>
    <circle cx="245" cy="100" r="5" fill="#1a3a6e"/>
    {/* Link 3 */}
    <line x1="245" y1="100" x2="265" y2="65" stroke="#1a4db0" strokeWidth="12" strokeLinecap="round"/>
    {/* Joint 4 */}
    <circle cx="265" cy="65" r="8" fill="#6ea8ff"/>
    <circle cx="265" cy="65" r="4" fill="#1a3a6e"/>
    {/* End effector (gripper) */}
    <line x1="265" y1="65" x2="275" y2="45" stroke="#8ab8ff" strokeWidth="5" strokeLinecap="round"/>
    <line x1="265" y1="65" x2="280" y2="48" stroke="#8ab8ff" strokeWidth="4" strokeLinecap="round"/>
    {/* Glass being held */}
    <rect x="278" y="38" width="12" height="20" fill="none" stroke="#00c9a7" strokeWidth="1.5" rx="2"/>
    <line x1="278" y1="48" x2="290" y2="48" stroke="#00c9a7" strokeWidth="1" opacity="0.5"/>
    {/* Dynamixel labels */}
    <text x="218" y="173" fill="#8a9fc4" fontSize="8" fontFamily="Roboto Mono">XL430</text>
    <text x="218" y="134" fill="#8a9fc4" fontSize="8" fontFamily="Roboto Mono">XL430</text>
    <text x="250" y="110" fill="#8a9fc4" fontSize="8" fontFamily="Roboto Mono">XL430</text>
    <text x="268" y="80" fill="#8a9fc4" fontSize="8" fontFamily="Roboto Mono">XL430</text>
    {/* 3D print texture lines */}
    {[138,144,150,156,162].map((y, i) => (
      <line key={i} x1="193" y1={y} x2="207" y2={y} stroke="#4488ff" strokeWidth="0.5" opacity="0.3"/>
    ))}
    {/* Label */}
    <text x="120" y="30" fill="#6ea8ff" fontSize="11" fontFamily="Inter" fontWeight="600">4-DOF Robot Arm</text>
    <text x="200" y="208" textAnchor="middle" fill="#8a9fc4" fontSize="10" fontFamily="Inter">
      Dynamixel XL430 × 4 | ROS2 MoveIt!
    </text>
  </svg>
);

const AllWheelRobotSVG = () => (
  <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" className="project-svg">
    <rect width="400" height="220" fill="#08183d" rx="8"/>
    {/* Grid (floor) */}
    {[0,40,80,120,160,200,240,280,320,360,400].map((x,i) => (
      <line key={`v${i}`} x1={x} y1="0" x2={x} y2="220" stroke="#0d2b73" strokeWidth="0.5" opacity="0.5"/>
    ))}
    {[0,44,88,132,176,220].map((y,i) => (
      <line key={`h${i}`} x1="0" y1={y} x2="400" y2={y} stroke="#0d2b73" strokeWidth="0.5" opacity="0.5"/>
    ))}
    {/* Robot body (top view) */}
    <rect x="148" y="68" width="104" height="84" fill="#1a3a6e" rx="10" stroke="#4488ff" strokeWidth="1.5"/>
    {/* 4 wheels */}
    <rect x="126" y="72" width="26" height="38" fill="#4488ff" rx="5"/>
    <rect x="248" y="72" width="26" height="38" fill="#4488ff" rx="5"/>
    <rect x="126" y="110" width="26" height="38" fill="#4488ff" rx="5"/>
    <rect x="248" y="110" width="26" height="38" fill="#4488ff" rx="5"/>
    {/* Wheel details */}
    {[[126,72],[248,72],[126,110],[248,110]].map(([wx,wy],i) => (
      <rect key={i} x={wx+8} y={wy+14} width="10" height="10" fill="#1a4db0" rx="2"/>
    ))}
    {/* Steering angle arrows */}
    <line x1="145" y1="78" x2="130" y2="68" stroke="#6ea8ff" strokeWidth="1.5"
      strokeDasharray="3,2" markerEnd="url(#arrow)"/>
    <line x1="265" y1="78" x2="275" y2="68" stroke="#6ea8ff" strokeWidth="1.5"
      strokeDasharray="3,2"/>
    {/* LiDAR sensor on top */}
    <circle cx="200" cy="110" r="14" fill="#00c9a7" opacity="0.9"/>
    <circle cx="200" cy="110" r="8" fill="#08183d"/>
    <circle cx="200" cy="110" r="3" fill="#00c9a7"/>
    {/* LiDAR sweep */}
    <circle cx="200" cy="110" r="20" fill="none" stroke="#00c9a7" strokeWidth="1" opacity="0.3"/>
    <circle cx="200" cy="110" r="35" fill="none" stroke="#00c9a7" strokeWidth="0.8" opacity="0.2"/>
    <circle cx="200" cy="110" r="50" fill="none" stroke="#00c9a7" strokeWidth="0.5" opacity="0.1"/>
    {/* Direction arrow */}
    <line x1="200" y1="68" x2="200" y2="30" stroke="#4488ff" strokeWidth="2.5"
      strokeDasharray="6,3"/>
    <polygon points="195,33 200,22 205,33" fill="#4488ff"/>
    {/* Ackermann label */}
    <text x="310" y="90" fill="#8a9fc4" fontSize="8" fontFamily="Roboto Mono">Ackermann</text>
    <text x="315" y="102" fill="#8a9fc4" fontSize="8" fontFamily="Roboto Mono">Steering</text>
    {/* Label */}
    <text x="30" y="185" fill="#6ea8ff" fontSize="10" fontFamily="Inter">8 Independent Motors</text>
    <text x="30" y="200" fill="#6ea8ff" fontSize="10" fontFamily="Inter">(4 steering + 4 rolling)</text>
    <text x="200" y="208" textAnchor="middle" fill="#8a9fc4" fontSize="10" fontFamily="Inter">
      All-Wheel Steering | ROS + Gazebo
    </text>
  </svg>
);

/* ──────────────────── TYPING ANIMATION ──────────────────── */

const TypingText = ({ texts }) => {
  const [displayed, setDisplayed] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIdx];
    let timeout;
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(i => i + 1), 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(i => i - 1), 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setTextIdx(i => (i + 1) % texts.length);
    }
    setDisplayed(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, textIdx, texts]);

  return <span className="typing-text">{displayed}<span className="cursor">|</span></span>;
};

/* ──────────────────── MAIN PORTFOLIO COMPONENT ──────────────────── */

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── active section tracking ── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  /* ── scroll animation ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'about',      label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects',   label: 'Projects' },
    { id: 'skills',     label: 'Skills' },
    { id: 'education',  label: 'Education' },
    { id: 'contact',    label: 'Contact' },
  ];

  /* ── DATA ── */

  const projects = [
    {
      id: 'sensor-fusion',
      title: 'Uncertainty-Aware Sensor Fusion for Navigation',
      subtitle: 'SKKU Robotics Innovatory Research',
      period: '2024 - Present',
      svg: <SensorFusionSVG />,
      summary: 'Developed a robust navigation system for mobile robots in indoor environments by fusing LiDAR and Radar data through a Dynamic Occupancy Grid Map (DOGM).',
      notionLink: 'https://power-botany-f0c.notion.site/GAT-DOGM-312a18da85eb80db92bae66c8818ab61',
      tools: ['Python', 'PyTorch', 'PyTorch Geometric', 'ROS2', 'LiDAR (Hokuyo UST10)', 'Radar (TI IWR6843)'],
    },
    {
      id: 'bartender',
      title: 'Bartender Robot Arm',
      subtitle: 'Personal Project',
      period: '2024',
      svg: <BartenderArmSVG />,
      summary: 'Designed and built a 4-axis robot arm from scratch for automated bartending tasks, integrating 3D-printed structural components with ROS2 MoveIt! motion planning.',
      notionLink: 'https://power-botany-f0c.notion.site/1a4a18da85eb8030ab86fdb175ac5f58',
      tools: ['Python', 'ROS2', 'MoveIt!', 'Dynamixel XL430', 'SolidWorks', '3D Printing (FDM)'],
    },
    {
      id: 'aws-robot',
      title: 'Autonomous All-Wheel Steering Robot',
      subtitle: 'SKKU URP (Summer 2025)',
      period: 'Summer 2025',
      svg: <AllWheelRobotSVG />,
      summary: 'Established a full ROS-based autonomous driving pipeline for an all-wheel steering robot featuring 8 independent motors, from URDF modeling to Gazebo simulation and real-world deployment.',
      notionLink: 'https://power-botany-f0c.notion.site/Autonomous-All-Wheel-Steering-Robot-312a18da85eb8064b846ff48c9d10468',
      tools: ['Python', 'C++', 'ROS', 'Gazebo', 'RViz', 'SolidWorks', 'Ackermann Kinematics'],
    },
  ];

  const skills = [
    {
      category: 'Programming Languages',
      icon: '⌨',
      items: ['Python', 'C++', 'MATLAB'],
    },
    {
      category: 'Robotics',
      icon: '🤖',
      items: ['ROS', 'ROS2', 'MoveIt!', 'RViz', 'URDF', 'Gazebo'],
    },
    {
      category: 'Deep Learning',
      icon: '🧠',
      items: ['PyTorch', 'PyTorch Geometric', 'Graph Neural Networks', 'Graph Attention Network'],
    },
    {
      category: 'Sensors & Hardware',
      icon: '📡',
      items: ['LiDAR', 'Radar', 'Dynamixel', '3D Printing (FDM)', 'Encoder Motors'],
    },
    {
      category: 'CAD / Simulation',
      icon: '🔧',
      items: ['SolidWorks', 'Fusion 360', 'Gazebo', 'Adams'],
    },
    {
      category: 'Tools',
      icon: '🛠',
      items: ['Git', 'Linux', 'LaTeX', 'Arduino'],
    },
  ];

  return (
    <div className="portfolio-wrapper">

      {/* ── MOBILE TOGGLE ── */}
      <button className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}>
        <span/><span/><span/>
      </button>

      {/* ══════════ SIDEBAR ══════════ */}
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-profile">
          <div className="profile-img-wrap">
            <img src={MyPhoto} alt="Choi Taewoong" className="profile-img"/>
          </div>
          <h2 className="sidebar-name">Choi Taewoong</h2>
          <p className="sidebar-role">Robotics Engineer</p>
          <p className="sidebar-affil">SKKU Robotics Innovatory</p>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-dot"/>
              {label}
            </a>
          ))}
        </nav>

        <div className="sidebar-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:taewoong@skku.edu" className="social-btn" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              width="20" height="20">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <polyline points="2,4 12,14 22,4"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* ══════════ MAIN CONTENT ══════════ */}
      <main className="main-content">

        {/* ── HERO ── */}
        <section id="hero" className="section hero-section">
          <div className="hero-bg"/>
          <div className="hero-content">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Choi Taewoong<span className="accent-dot">.</span></h1>
            <h2 className="hero-typing">
              Interests in{' '}
              <TypingText texts={[
                'Autonomous Navigation',
                'Sensor Fusion',
                'Robot Learning',
                'Robotics Engineering',
                'ROS2 Development',
              ]}/>
            </h2>
            <p className="hero-sub">
              Undergraduate Researcher · SKKU Mechanical Engineering · Robotics Innovatory
            </p>
            <div className="hero-btns">
              <a href="#about" className="btn btn-primary">Learn More</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-scroll-hint">
            <span>Scroll</span>
            <div className="scroll-arrow"/>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="section">
          <div className="section-inner">
            <h2 className="section-title fade-in">About</h2>
            <div className="about-grid fade-in">
              <div className="about-photo-wrap">
                <img src={MyPhoto} alt="Choi Taewoong" className="about-photo"/>
                <div className="about-photo-deco"/>
              </div>
              <div className="about-text">
                <h3 className="about-name">Choi Taewoong <span className="kr-name">최태웅</span></h3>
                <div className="about-tags">
                  <span className="tag">SKKU ME '21</span>
                  <span className="tag">Robotics Innovatory</span>
                  <span className="tag">URP 2025</span>
                </div>
                <p>
                  I am a 4th-year undergraduate student in Mechanical Engineering at
                  Sungkyunkwan University (SKKU), conducting research at the{' '}
                  <strong>SKKU Robotics Innovatory</strong> lab.
                </p>
                <p>
                  My research focuses on <strong>mobile robot navigation</strong> in dynamic
                  environments through <strong>uncertainty-aware sensor fusion</strong> of
                  LiDAR and Radar data. I am passionate about bridging the gap between
                  classical robotics algorithms and modern deep learning approaches.
                </p>
                <p>
                  I enjoy designing and building robotic systems from the ground up —
                  from CAD modeling and 3D printing to ROS2 integration and autonomous
                  control. I believe hands-on experimentation is the best way to learn.
                </p>
                <ul className="about-info-list">
                  <li><span className="info-label">University</span> Sungkyunkwan University (SKKU)</li>
                  <li><span className="info-label">Major</span> Mechanical Engineering</li>
                  <li><span className="info-label">Lab</span> SKKU Robotics Innovatory</li>
                  <li><span className="info-label">Interests</span> Autonomous Navigation, Sensor Fusion, Robot Learning</li>
                  <li><span className="info-label">Languages</span> Korean (Native), English (Proficient)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section id="experience" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title fade-in">Experience</h2>
            <div className="timeline fade-in">
              <div className="timeline-item">
                <div className="timeline-logo">
                  <div className="logo-placeholder logo-ri">RI</div>
                </div>
                <div className="timeline-body">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-org">SKKU Robotics Innovatory</h3>
                      <p className="timeline-role">Undergraduate Researcher</p>
                    </div>
                    <span className="timeline-period">Sep 2023 – Present</span>
                  </div>
                  <p className="timeline-location">📍 Suwon, Republic of Korea</p>
                  <ul className="timeline-details">
                    <li>
                      Conducting research on <strong>Uncertainty-Aware Sensor Fusion</strong> for
                      reliable mobile robot navigation in indoor dynamic environments.
                    </li>
                    <li>
                      Developing a <strong>Dynamic Occupancy Grid Map (DOGM)</strong> framework
                      that fuses LiDAR position data and Radar velocity measurements via
                      a particle filter, enabling dynamic/static cell classification.
                    </li>
                    <li>
                      Extended DOGM to a <strong>Double-Likelihood framework</strong> using two
                      overlapping Radar sensors to overcome the 120° FoV limitation and
                      improve velocity estimation accuracy.
                    </li>
                    <li>
                      Designing a <strong>Spatiotemporal Graph Attention Network (GAT)</strong>
                      to learn adaptive, environment-aware noise models for Radar measurements,
                      addressing the lateral-motion misclassification problem.
                    </li>
                    <li>
                      Formulated a novel <strong>spatiotemporal loss function</strong> combining
                      spatial, intensity, and temporal terms to predict per-measurement uncertainty
                      values (σ) used as dynamic weights in the fusion pipeline.
                    </li>
                  </ul>
                  <div className="timeline-tools">
                    {['Python', 'PyTorch', 'PyTorch Geometric', 'ROS2', 'LiDAR', 'Radar', 'GAT'].map(t => (
                      <span key={t} className="tool-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section id="projects" className="section">
          <div className="section-inner">
            <h2 className="section-title fade-in">Projects</h2>
            <div className="projects-grid">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="project-card fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="project-illustration">
                    {proj.svg}
                  </div>
                  <div className="project-info">
                    <div className="project-header">
                      <div>
                        <h3 className="project-title">{proj.title}</h3>
                        <p className="project-subtitle">{proj.subtitle} · {proj.period}</p>
                      </div>
                    </div>
                    <p className="project-summary">{proj.summary}</p>
                    <div className="project-tools">
                      {proj.tools.map(t => <span key={t} className="tool-tag">{t}</span>)}
                    </div>

                    {proj.notionLink && (
                      <a
                        href={proj.notionLink}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-details"
                      >
                        View Details →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section id="skills" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title fade-in">Skills</h2>
            <div className="skills-grid">
              {skills.map((s, i) => (
                <div key={s.category} className="skill-card fade-in"
                  style={{ animationDelay: `${i * 0.08}s` }}>
                  <div className="skill-card-header">
                    <span className="skill-icon">{s.icon}</span>
                    <h3 className="skill-category">{s.category}</h3>
                  </div>
                  <div className="skill-tags">
                    {s.items.map(item => (
                      <span key={item} className="skill-tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EDUCATION ── */}
        <section id="education" className="section">
          <div className="section-inner">
            <h2 className="section-title fade-in">Education</h2>
            <div className="edu-grid fade-in">
              <div className="edu-card">
                <div className="edu-logo-wrap">
                  <div className="logo-placeholder logo-skku">SKKU</div>
                </div>
                <div className="edu-info">
                  <h3 className="edu-school">Sungkyunkwan University</h3>
                  <p className="edu-location">📍 Suwon, Republic of Korea</p>
                  <p className="edu-degree">
                    <strong>B.S. in Mechanical Engineering</strong>
                  </p>
                  <p className="edu-period">Mar 2021 – Present</p>
                  <div className="edu-courses">
                    <p className="courses-label">Relevant Coursework</p>
                    <div className="skill-tags">
                      {[
                        'Robotics Engineering', 'Control Systems', 'Machine Learning',
                        'Dynamics', 'Mechatronics', 'Computer Vision',
                        'Reinforcement Learning', 'System Analysis',
                      ].map(c => <span key={c} className="skill-tag">{c}</span>)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="edu-card">
                <div className="edu-logo-wrap">
                  <div className="logo-placeholder logo-ri">RI</div>
                </div>
                <div className="edu-info">
                  <h3 className="edu-school">SKKU Robotics Innovatory</h3>
                  <p className="edu-location">📍 Suwon, Republic of Korea</p>
                  <p className="edu-degree">
                    <strong>Undergraduate Researcher</strong>
                  </p>
                  <p className="edu-period">Sep 2023 – Present</p>
                  <div className="edu-courses">
                    <p className="courses-label">Focus Areas</p>
                    <div className="skill-tags">
                      {[
                        'Sensor Fusion', 'Dynamic Occupancy Grids',
                        'Graph Neural Networks', 'Mobile Robotics',
                        'LiDAR / Radar Fusion',
                      ].map(c => <span key={c} className="skill-tag">{c}</span>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="section section-alt">
          <div className="section-inner">
            <h2 className="section-title fade-in">Contact</h2>
            <div className="contact-wrap fade-in">
              <p className="contact-intro">
                I'm open to research collaborations, internship opportunities, and
                interesting projects in robotics and autonomous systems.
                Feel free to reach out!
              </p>
              <div className="contact-cards">
                <a href="mailto:taewoong@skku.edu" className="contact-card">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" width="28" height="28">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <polyline points="2,4 12,14 22,4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">taewoong@skku.edu</p>
                  </div>
                </a>

                <a href="https://github.com/" target="_blank" rel="noreferrer"
                  className="contact-card">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">GitHub</p>
                    <p className="contact-value">github.com/taewoong</p>
                  </div>
                </a>

                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"
                  className="contact-card">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-label">LinkedIn</p>
                    <p className="contact-value">linkedin.com/in/taewoong</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <p>© 2025 Choi Taewoong · SKKU Mechanical Engineering · Robotics Innovatory</p>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;
