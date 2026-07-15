import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import MyPhoto from './imgs/my_photo.jpg';

const ProjectVisual = ({ variant, title }) => {
  const accent = variant === 'blue' ? '#2563eb' : variant === 'green' ? '#10b981' : '#7c3aed';

  return (
    <svg viewBox="0 0 336 210" className="project-svg" role="img" aria-label={title}>
      <rect width="336" height="210" rx="10" fill="#f3f4f6" />
      <path d="M0 160 C64 122 120 190 178 142 C228 100 270 120 336 72 L336 210 L0 210 Z" fill="#e5e7eb" />
      <circle cx="76" cy="78" r="34" fill={accent} opacity="0.16" />
      <circle cx="260" cy="58" r="22" fill={accent} opacity="0.14" />

      {variant === 'blue' && (
        <>
          <circle cx="82" cy="104" r="28" fill="none" stroke={accent} strokeWidth="5" />
          <circle cx="82" cy="104" r="10" fill={accent} />
          <circle cx="246" cy="104" r="12" fill="#111827" />
          <path d="M108 104 C148 70 196 70 234 104" fill="none" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
          <path d="M108 104 C148 138 196 138 234 104" fill="none" stroke="#111827" strokeWidth="5" strokeLinecap="round" opacity="0.5" />
          {[145, 168, 191].map((x) => <circle key={x} cx={x} cy="104" r="6" fill={accent} />)}
        </>
      )}

      {variant === 'green' && (
        <>
          <rect x="118" y="132" width="100" height="14" rx="5" fill="#111827" />
          <circle cx="168" cy="132" r="16" fill={accent} />
          <path d="M168 132 L168 90 L214 66" stroke="#111827" strokeWidth="13" strokeLinecap="round" fill="none" />
          <circle cx="168" cy="90" r="13" fill="#2563eb" />
          <circle cx="214" cy="66" r="12" fill={accent} />
          <rect x="236" y="36" width="24" height="38" rx="5" fill="none" stroke={accent} strokeWidth="3" />
        </>
      )}

      {variant === 'purple' && (
        <>
          <rect x="116" y="74" width="104" height="74" rx="12" fill="#111827" />
          <circle cx="138" cy="74" r="15" fill={accent} />
          <circle cx="198" cy="74" r="15" fill={accent} />
          <circle cx="138" cy="148" r="15" fill="#10b981" />
          <circle cx="198" cy="148" r="15" fill="#10b981" />
          <circle cx="168" cy="112" r="18" fill={accent} />
          <path d="M168 74 L168 38" stroke="#111827" strokeWidth="5" strokeDasharray="7 6" />
          <path d="M156 46 L168 32 L180 46" fill="none" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
        </>
      )}

      <text x="168" y="184" textAnchor="middle" fill="#111827" fontSize="15" fontFamily="system-ui, sans-serif" fontWeight="700">
        {title}
      </text>
    </svg>
  );
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], aside[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'timeline', label: 'Timeline' },
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
      variant: 'blue',
      tags: ['Sensor Fusion', 'Deep Learning', 'ROS 1'],
      body: 'Research workflow for robust mobile robot navigation in dynamic environments with LiDAR and Radar fusion.',
    },
    {
      id: 'bartender',
      title: 'Bartender Robot Arm',
      shortTitle: 'Robot Arm',
      period: '2025.08 - 2025.11',
      venue: 'SKKU Robotics Club Project, 2025',
      authors: ['Choi Taewoong', 'SKKU Robotics Club Team'],
      variant: 'green',
      tags: ['3D Modeling', 'ROS2 MoveIt!', 'Dynamixel'],
      github: 'https://github.com/SWE3022-42-team9',
      videoUrl: 'https://www.youtube.com/shorts/IX1vHyPMZBo',
      body: 'A 4-DOF robot arm using Dynamixel actuators, 3D-printed parts, and ROS2 MoveIt for motion planning.',
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
      body: 'Extended a 4-wheel steering mobile robot with left and right turn modes, URDF modeling, and Gazebo tests.',
    },
  ];

  const timelineItems = [
    {
      title: 'Undergraduate Researcher',
      organization: 'SKKU Robotics Innovatory',
      period: 'Jan 2025 - Mar 2026',
      tags: ['Sensor Fusion', 'Mobile Robotics', 'Deep Learning'],
    },
    {
      title: 'B.S. in Mechanical Engineering',
      organization: 'Sungkyunkwan University',
      period: 'Feb 2021 - Present',
      tags: ['Robotics', 'Control Systems'],
    },
    {
      title: '3D Printing & Laser Cutting Manager',
      organization: 'SKKU Learning Factory',
      period: 'Dec 2025 - Present',
      tags: ['3D Printing', 'Laser Cutting'],
    },
    {
      title: 'Team Leader',
      organization: 'SKKU Robotics Club',
      period: 'Aug 2025 - Nov 2025',
      tags: ['ROS2', 'MoveIt', 'Robot Arm'],
    },
  ];

  const skills = [
    'Python',
    'C++',
    'MATLAB',
    'ROS',
    'ROS2',
    'MoveIt!',
    'Gazebo',
    'PyTorch',
    'LiDAR',
    'Radar',
    'Fusion 360',
    'SolidWorks',
  ];

  return (
    <div className="portfolio-site">
      <nav className="top-nav" aria-label="Main navigation">
        <div className="nav-inner">
          {navLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main className="page-shell">
        <div className="content-column">
          <section id="about" className="section about-section">
            <div className="about-header">
              <img src={MyPhoto} alt="Choi Taewoong" />
              <div>
                <h1>Choi Taewoong</h1>
                <div className="subtitle">Undergraduate Researcher - SKKU Mechanical Engineering</div>
              </div>
            </div>

            <p className="bio">
              Hello! I am a 4th-year undergraduate student in Mechanical Engineering at Sungkyunkwan University,
              conducting research at SKKU Robotics Innovatory. I am interested in autonomous navigation, sensor fusion,
              and robot learning for reliable mobile robots in dynamic environments.
            </p>

            <div className="tags">
              <span className="tag">Robotics</span>
              <span className="tag">Sensor Fusion</span>
              <span className="tag">Autonomous Navigation</span>
              <span className="tag">Robot Learning</span>
            </div>

            <div className="links">
              <a href="mailto:taewoong1377@g.skku.edu">Email</a>
              <a href="https://github.com/untiwin21" target="_blank" rel="noreferrer">GitHub</a>
              <a href="#timeline">Timeline</a>
            </div>
          </section>

          <section id="publications" className="section">
            <h2>Publications</h2>
            {projects.slice(0, 1).map((project) => (
              <article className="entry" key={project.id}>
                <div className="thumb">
                  <ProjectVisual variant={project.variant} title={project.shortTitle} />
                </div>
                <div>
                  <div className="entry-title">{project.title}</div>
                  <div className="entry-meta">
                    <strong>Choi Taewoong</strong>, SKKU Robotics Innovatory
                    <br />
                    {project.venue}
                  </div>
                  <div className="entry-body">{project.body}</div>
                  <div className="entry-links">
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section id="projects" className="section">
            <h2>Projects</h2>
            {projects.map((project) => (
              <article className="entry" key={project.id}>
                <div className="thumb">
                  <ProjectVisual variant={project.variant} title={project.shortTitle} />
                </div>
                <div>
                  <div className="entry-title">{project.title}</div>
                  <div className="entry-meta">
                    {project.period} - {project.venue}
                  </div>
                  <div className="entry-body">{project.body}</div>
                  <div className="entry-links">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
                    {project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noreferrer">YouTube</a>}
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="tags skill-list">
              {skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </section>

          <section id="contact" className="section">
            <h2>Contact</h2>
            <p className="bio">
              I am open to research collaborations, internship opportunities, and robotics projects.
            </p>
            <div className="links">
              <a href="mailto:taewoong1377@g.skku.edu">taewoong1377@g.skku.edu</a>
              <a href="mailto:twws137702@gmail.com">twws137702@gmail.com</a>
              <a href="https://github.com/untiwin21" target="_blank" rel="noreferrer">github.com/untiwin21</a>
            </div>
          </section>
        </div>

        <aside id="timeline" className="timeline-aside" aria-label="Timeline">
          <div className="timeline-sticky">
            <h2>Timeline</h2>
            <div className="timeline-list">
              {timelineItems.map((item) => (
                <article className="timeline-item" key={`${item.title}-${item.period}`}>
                  <div className="timeline-dot" />
                  <div>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-org">{item.organization}</div>
                    <div className="timeline-period">{item.period}</div>
                    <div className="timeline-tags">
                      {item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </main>

      <footer>
        Last updated July 2026.
      </footer>
    </div>
  );
};

export default Portfolio;
