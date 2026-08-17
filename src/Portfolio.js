import React, { useEffect, useState } from 'react';
import './Portfolio.css';
import MyPhoto from './imgs/my_photo.jpg';
import SensorFusionImage from './imgs/sensor_fusion.png';

const projectAccent = {
  fusion: '#2563eb',
  rover: '#ea580c',
  steering: '#7c3aed',
  underwater: '#0891b2',
  arm: '#16a34a',
  basketball: '#dc2626',
  vision: '#0f766e',
  quadruped: '#475569',
  car: '#ca8a04',
};

const ProjectVisual = ({ kind, title }) => {
  const accent = projectAccent[kind] || '#2563eb';

  return (
    <svg viewBox="0 0 336 210" className="project-svg" role="img" aria-label={title}>
      <rect width="336" height="210" rx="12" fill="#f3f4f6" />
      <circle cx="70" cy="54" r="34" fill={accent} opacity="0.13" />
      <circle cx="272" cy="74" r="26" fill={accent} opacity="0.1" />
      <path d="M0 168 C76 128 116 194 182 151 C232 118 278 124 336 92 L336 210 L0 210 Z" fill="#e5e7eb" />

      {kind === 'fusion' && (
        <>
          <circle cx="104" cy="103" r="42" fill="none" stroke={accent} strokeWidth="5" />
          <circle cx="104" cy="103" r="25" fill="none" stroke={accent} strokeWidth="4" opacity="0.55" />
          <circle cx="104" cy="103" r="7" fill={accent} />
          <path d="M104 103 L146 76" stroke="#111827" strokeWidth="5" strokeLinecap="round" />
          <circle cx="218" cy="82" r="8" fill="#111827" />
          <circle cx="250" cy="119" r="9" fill={accent} />
          <circle cx="205" cy="137" r="7" fill="#111827" />
          <path d="M151 99 C179 80 204 78 226 86 M151 112 C186 127 214 129 242 119" fill="none" stroke="#64748b" strokeWidth="3" strokeDasharray="6 6" />
        </>
      )}

      {kind === 'rover' && (
        <>
          <path d="M70 132 L118 88 L168 132 L218 88 L266 132" fill="none" stroke="#111827" strokeWidth="10" strokeLinejoin="round" />
          {[70, 118, 168, 218, 266].map((x, index) => (
            <circle key={x} cx={x} cy={132} r={index % 2 === 0 ? 18 : 14} fill="#111827" stroke={accent} strokeWidth="5" />
          ))}
          <rect x="119" y="63" width="98" height="42" rx="10" fill={accent} />
          <path d="M245 60 H292 V83 H268 V106 H245" fill="none" stroke="#64748b" strokeWidth="7" />
        </>
      )}

      {kind === 'steering' && (
        <>
          <rect x="104" y="72" width="128" height="72" rx="14" fill="#111827" />
          <rect x="120" y="87" width="96" height="42" rx="8" fill={accent} opacity="0.85" />
          {[
            [91, 75, -18], [245, 75, 18], [91, 141, 18], [245, 141, -18],
          ].map(([x, y, rotation]) => (
            <rect key={`${x}-${y}`} x={x - 8} y={y - 22} width="16" height="44" rx="6" fill="#111827" transform={`rotate(${rotation} ${x} ${y})`} />
          ))}
          <path d="M168 59 V40 M158 49 L168 39 L178 49" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
        </>
      )}

      {kind === 'underwater' && (
        <>
          <path d="M44 68 C80 53 107 83 140 68 C176 51 204 84 238 68 C263 57 282 62 299 70" fill="none" stroke={accent} strokeWidth="5" opacity="0.55" />
          <circle cx="144" cy="90" r="15" fill="#111827" />
          <path d="M144 90 L185 119 L226 91" fill="none" stroke="#111827" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="185" cy="119" r="13" fill={accent} />
          <path d="M226 91 L250 127" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
          <path d="M235 130 C248 141 265 143 281 137" fill="none" stroke={accent} strokeWidth="8" strokeLinecap="round" />
          <path d="M77 145 C106 133 126 157 155 145 C184 132 207 157 236 145" fill="none" stroke={accent} strokeWidth="4" opacity="0.45" />
        </>
      )}

      {kind === 'arm' && (
        <>
          <rect x="102" y="143" width="132" height="14" rx="6" fill="#111827" />
          <circle cx="154" cy="139" r="18" fill={accent} />
          <path d="M154 139 L154 94 L207 65" fill="none" stroke="#111827" strokeWidth="15" strokeLinecap="round" />
          <circle cx="154" cy="94" r="14" fill="#2563eb" />
          <circle cx="207" cy="65" r="13" fill={accent} />
          <path d="M218 65 L248 65 M248 65 L260 54 M248 65 L260 76" fill="none" stroke="#111827" strokeWidth="7" strokeLinecap="round" />
          <rect x="270" y="109" width="34" height="46" rx="5" fill="none" stroke={accent} strokeWidth="4" />
        </>
      )}

      {kind === 'basketball' && (
        <>
          <circle cx="112" cy="119" r="25" fill={accent} />
          <path d="M87 119 H137 M112 94 C99 106 99 132 112 144 M112 94 C125 106 125 132 112 144" fill="none" stroke="#fff" strokeWidth="3" />
          <path d="M138 106 Q183 56 231 81" fill="none" stroke="#111827" strokeWidth="5" strokeDasharray="7 6" />
          <rect x="239" y="52" width="8" height="105" fill="#111827" />
          <rect x="205" y="47" width="54" height="40" fill="none" stroke="#111827" strokeWidth="6" />
          <ellipse cx="232" cy="89" rx="27" ry="7" fill="none" stroke={accent} strokeWidth="5" />
        </>
      )}

      {kind === 'vision' && (
        <>
          <rect x="75" y="55" width="186" height="105" rx="12" fill="#111827" />
          <rect x="88" y="68" width="160" height="79" rx="7" fill="#dbeafe" />
          <path d="M119 139 L142 103 L159 119 L181 82 L205 111 L222 91" fill="none" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="134" y="96" width="62" height="38" fill="none" stroke="#dc2626" strokeWidth="3" strokeDasharray="6 4" />
          <circle cx="168" cy="55" r="8" fill={accent} />
        </>
      )}

      {kind === 'quadruped' && (
        <>
          <circle cx="141" cy="93" r="39" fill="none" stroke={accent} strokeWidth="12" strokeDasharray="10 7" />
          <circle cx="141" cy="93" r="13" fill="#111827" />
          <path d="M174 111 L215 132 L246 108" fill="none" stroke="#111827" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="215" cy="132" r="12" fill={accent} />
          <path d="M246 108 L264 145" stroke="#111827" strokeWidth="12" strokeLinecap="round" />
          <path d="M253 149 H283" stroke={accent} strokeWidth="8" strokeLinecap="round" />
        </>
      )}

      {kind === 'car' && (
        <>
          <path d="M83 123 L105 87 H213 L249 123 Z" fill={accent} />
          <rect x="73" y="116" width="190" height="38" rx="12" fill="#111827" />
          <circle cx="113" cy="154" r="19" fill="#111827" stroke={accent} strokeWidth="6" />
          <circle cx="224" cy="154" r="19" fill="#111827" stroke={accent} strokeWidth="6" />
          <path d="M135 87 L153 64 H194 L209 87" fill="#dbeafe" stroke="#111827" strokeWidth="5" />
          <circle cx="275" cy="93" r="7" fill={accent} />
          <path d="M263 93 H239" stroke={accent} strokeWidth="4" strokeDasharray="5 5" />
        </>
      )}

      <text x="168" y="190" textAnchor="middle" fill="#111827" fontSize="14" fontFamily="system-ui, sans-serif" fontWeight="700">
        {title}
      </text>
    </svg>
  );
};

const ProjectMedia = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (project.image && !imageFailed) {
    return (
      <img
        className="project-image"
        src={project.image}
        alt={`${project.shortTitle} preview`}
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
    );
  }

  return <ProjectVisual kind={project.kind} title={project.shortTitle} />;
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
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
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'awards', label: 'Awards' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const researchExperience = [
    {
      organization: 'POSTECH HERO Lab',
      role: 'Undergraduate Research Intern',
      period: 'Jul 2026 - Present',
      body: 'Conducting research on underwater robotic systems, with a focus on bio-inspired mechanism design, robot dynamics, and hydrodynamic analysis.',
      tags: ['Underwater Robotics', 'Mechanism Design', 'Dynamics', 'Hydrodynamics'],
    },
    {
      organization: 'SKKU Robotics Innovatory',
      role: 'Undergraduate Research Intern',
      period: 'Jan 2025 - May 2026',
      body: 'Conducted research on autonomous mobile robots, focusing on LiDAR-Radar sensor fusion and mobile robot control.',
      tags: ['Mobile Robotics', 'Sensor Fusion', 'Robot Control'],
    },
  ];

  const projects = [
    {
      id: 'sensor-fusion',
      title: 'LiDAR-Radar Sensor Fusion for Reliable Navigation',
      shortTitle: 'Sensor Fusion',
      kind: 'fusion',
      period: 'Aug 2025 - Mar 2026',
      venue: 'Co-op Project, SKKU Robotics Innovatory',
      image: SensorFusionImage,
      tags: ['Graph Attention Network', 'Dynamic Occupancy Grid Map', 'LiDAR', 'Radar'],
      body: 'Built an uncertainty-aware LiDAR-Radar fusion pipeline to estimate the motion direction of dynamic obstacles and improve reliable navigation. A Graph Attention Network learned measurement uncertainty, which was then incorporated into a Dynamic Occupancy Grid Map.',
      highlights: [
        'Defined the research problem, reviewed prior work, and selected the model architecture for a two-person project.',
        'Designed experiments, analyzed failure cases, and proposed and validated alternatives when sensor behavior or training results were unstable.',
      ],
      links: [
        { label: 'Project materials', url: 'https://drive.google.com/drive/folders/1A6l83cFcqyf8Ko0SUnCMf3ujQFR4JfUr?usp=drive_link' },
      ],
    },
    {
      id: 'rocker-bogie',
      title: 'Rocker-Bogie Rover with Transformable Wheels',
      shortTitle: 'Stair-Climbing Rover',
      kind: 'rover',
      period: 'Mar 2026 - Jun 2026',
      venue: 'SKKU Creative Capstone Design Project - Team Leader',
      image: 'https://img.youtube.com/vi/Lb7DVNLix9U/hqdefault.jpg',
      tags: ['Rocker-Bogie', 'Four-Bar Linkage', 'Mechanical Design', 'Team Leadership'],
      body: 'Led a six-member team in developing a disaster-reconnaissance rover featuring a rocker-bogie suspension and four-bar-linkage transformable wheels for enhanced stair-climbing capability.',
      highlights: [
        'Combined a rocker-bogie suspension with transformable wheels so the rover could adapt its contact geometry while climbing stairs.',
        'Coordinated the mechanical design and integration workflow using Fusion 360 and Inventor, then validated the completed platform through a driving demonstration.',
      ],
      links: [
        { label: 'Demo video', url: 'https://www.youtube.com/watch?v=Lb7DVNLix9U' },
      ],
    },
    {
      id: '4wis',
      title: 'Kinematics-Based Real-Time Control of a 4WIS Mobile Robot',
      shortTitle: '4WIS Mobile Robot',
      kind: 'steering',
      period: 'Jul 2025 - Aug 2025',
      venue: 'Undergraduate Research Program, SKKU Robotics Innovatory',
      image: 'https://raw.githubusercontent.com/untiwin21/4ws-mobile-robot-control/main/docs/robot.png',
      tags: ['Ackermann Steering', 'Inverse Kinematics', 'ROS 1', 'Gazebo'],
      body: 'Developed multiple driving modes for a four-wheel-independent-steering mobile robot whose four wheels can each rotate through 180 degrees. The controller converts a high-level Twist command into the steering angle and angular velocity required by each wheel.',
      highlights: [
        'Led the three-person team, divided responsibilities, and designed the end-to-end joystick-to-actuator control flow.',
        'Created the URDF and Gazebo environment, verified the Ackermann-based kinematics in simulation, and then reproduced the driving modes on the real robot.',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/untiwin21/4ws-mobile-robot-control' },
        { label: 'Project materials', url: 'https://drive.google.com/drive/folders/1OfYiR8YK0zq91z3WM80ZtlFwILq27xls?usp=drive_link' },
        { label: 'Demo video', url: 'https://www.youtube.com/watch?v=MZC4QIJRUfw&t=4s' },
      ],
    },
    {
      id: 'underwater-leg',
      title: 'Bio-Inspired Underwater Leg Mechanism',
      shortTitle: 'Underwater Leg',
      kind: 'underwater',
      period: 'Jul 2026 - Present',
      venue: 'Undergraduate Research Internship, POSTECH HERO Lab',
      tags: ['3-DOF Mechanism', 'Kinematics', 'Dynamics', 'Hydrodynamic Forces'],
      body: 'Designing a 3-DOF bio-inspired underwater robotic leg and analyzing its kinematics, dynamics, hydrodynamic forces, and actuator torque requirements.',
      links: [],
    },
    {
      id: 'bartender',
      title: 'Bartender Robot Arm',
      shortTitle: 'Bartender Robot',
      kind: 'arm',
      period: 'Aug 2025 - Nov 2025',
      venue: 'Team Project, SKKU Robotics Club - Team Leader',
      image: 'https://img.youtube.com/vi/IX1vHyPMZBo/hqdefault.jpg',
      tags: ['4-DOF Robot Arm', 'ROS 2', 'MoveIt 2', 'Dynamixel', 'Web Interface'],
      body: 'Led the development of a four-DOF bartender robot that receives a beverage order through the web, plans the manipulation sequence, and serves the selected drink. The system combines custom hardware, robot-arm control, and an Arduino-based dispenser.',
      highlights: [
        'Co-designed and fabricated the robot-arm hardware, including the joint layout and end-effector integration.',
        'Implemented and tested manipulation with ROS 2, MoveIt 2, Gazebo, and Dynamixel actuators, then connected the robot to the ordering interface and dispenser.',
      ],
      links: [
        { label: 'Robot GitHub', url: 'https://github.com/untiwin21/bartender_robot' },
        { label: 'Web GitHub', url: 'https://github.com/untiwin21/bartender_robot_web' },
        { label: 'Demo video', url: 'https://www.youtube.com/shorts/IX1vHyPMZBo' },
      ],
    },
    {
      id: 'basketball',
      title: 'Autonomous Basketball-Shooting Robot',
      shortTitle: 'Basketball Robot',
      kind: 'basketball',
      period: 'May 2025 - Jun 2025',
      venue: 'Design Lab on Vibration and Dynamic Systems',
      image: 'https://img.youtube.com/vi/tygq8_Xjm6U/hqdefault.jpg',
      tags: ['Autonomous Navigation', 'Launch Mechanism', 'Distance-Based Control'],
      body: 'Developed a robot that autonomously approaches predefined shooting positions and scores from different distances. The final platform used LEGO EV3 navigation and a spring-powered striking mechanism whose launch angle changed with target distance.',
      highlights: [
        'Reworked the original four-wheel TT-motor chassis into a more steerable three-wheel LEGO EV3 platform and programmed its autonomous motion.',
        'Helped optimize the spring and striking bar, then used MATLAB kinematic analysis to validate the plate angle and motor position after the demonstration.',
      ],
      links: [
        { label: 'Demo video', url: 'https://www.youtube.com/shorts/tygq8_Xjm6U?si=30bzVSbiIgdogd_e' },
      ],
    },
    {
      id: 'crack-detection',
      title: 'Real-Time Underwater Crack Detection System',
      shortTitle: 'Crack Detection',
      kind: 'vision',
      period: 'Jul 2026 - Present',
      venue: 'PKRC Project, POSTECH HERO Lab',
      image: 'https://raw.githubusercontent.com/untiwin21/Underwater_Crack_Detection/main/runs/underwater_crack_detection-6/val_batch0_pred.jpg',
      tags: ['YOLO Segmentation', 'NVIDIA Jetson', 'Real-Time Vision', 'Underwater Inspection'],
      body: 'Developing a YOLO-based vision pipeline for real-time underwater crack detection on an NVIDIA Jetson platform, including live visualization and automatic storage of detected crack frames.',
      links: [
        { label: 'GitHub', url: 'https://github.com/untiwin21/Underwater_Crack_Detection' },
      ],
    },
    {
      id: 'quadruped-gear',
      title: 'Gear Train Design for a Quadruped Robot Leg',
      shortTitle: 'Quadruped Gear Train',
      kind: 'quadruped',
      period: 'Sep 2022 - Nov 2022',
      venue: 'Team Project, SKKU Robotics Club',
      image: 'https://img.youtube.com/vi/IIMJcklUVtw/hqdefault.jpg',
      tags: ['Gear Train', 'Reduction Ratio', 'Joint Layout', 'Mechanical Integration'],
      body: 'Designed and modeled the gears and transmission components of a quadruped robot leg, considering the required reduction ratio, joint layout, and mechanical integration.',
      highlights: [
        'Owned the gear design work for the SKKU robotics-club project and supported the final poster and live demonstration.',
      ],
      links: [
        { label: 'Demo video', url: 'https://www.youtube.com/watch?v=IIMJcklUVtw' },
      ],
    },
    {
      id: 'arduino-car',
      title: 'Autonomous Arduino RC Car',
      shortTitle: 'Autonomous RC Car',
      kind: 'car',
      period: 'Jun 2022',
      venue: '2022 Smart Car Autonomous Driving Competition',
      image: 'https://img.youtube.com/vi/H3Idl_pO30k/hqdefault.jpg',
      tags: ['Arduino', 'Ultrasonic Sensor', 'Infrared Sensor', 'Autonomous Driving'],
      body: 'Designed and built an Arduino-based autonomous RC car that used ultrasonic and infrared sensing to navigate the smart-car competition course.',
      highlights: [
        'Implemented the Arduino control code and sensor logic; the team placed fourth among ten teams.',
      ],
      links: [
        { label: 'Demo video', url: 'https://www.youtube.com/shorts/H3Idl_pO30k' },
      ],
    },
  ];

  const awards = [
    {
      title: 'Grand Prize, SKKU Creative Capstone Design Competition',
      subtitle: 'AI-Based Directional Audio Guidance System for Pedestrians',
      body: 'Developed an assistive intersection guidance system that detects a pedestrian help-request gesture using YOLOv8-Pose, tracks the selected user with a two-axis actuation mechanism, and delivers directional audio only toward the target. Qualified for the national-level competition.',
      links: [
        { label: 'Project material', url: 'https://drive.google.com/file/d/1LioXxWz6yPYWJiMybwLZWYl8EqKGVK7_/view?usp=drive_link' },
      ],
    },
    {
      title: 'Bronze Prize, SKKU Creative Capstone Design Competition',
      subtitle: 'Stair-Climbing Disaster-Reconnaissance Rover',
      body: 'Received the Bronze Prize for developing a rocker-bogie rover with transformable wheels for stair climbing; served as team leader of a ten-member competition team.',
      links: [
        { label: 'Demo video', url: 'https://www.youtube.com/watch?v=Lb7DVNLix9U' },
      ],
    },
  ];

  const timelineItems = [
    {
      title: 'Undergraduate Research Intern',
      organization: 'POSTECH HERO Lab',
      period: 'Jul 2026 - Present',
      tags: ['Underwater Robotics', 'Dynamics', 'Mechanism Design'],
    },
    {
      title: '3D Printing & Laser Cutting Manager',
      organization: 'SKKU Makerspace',
      period: 'Dec 2025 - Present',
      tags: ['Fabrication', 'Equipment Operation'],
    },
    {
      title: 'Undergraduate Research Intern',
      organization: 'SKKU Robotics Innovatory',
      period: 'Jan 2025 - May 2026',
      tags: ['Sensor Fusion', 'Mobile Robotics', 'Control'],
    },
    {
      title: 'B.S. in Mechanical Engineering',
      organization: 'Sungkyunkwan University',
      period: '2021 - Present',
      tags: ['GPA 3.67 / 4.50', 'Robotics'],
    },
    {
      title: 'Mandatory Military Service',
      organization: 'Republic of Korea Air Force',
      period: 'Feb 2023 - Nov 2024',
      tags: ['Honorably Discharged'],
    },
  ];

  const skillGroups = [
    {
      title: 'Robotics & Control',
      skills: ['Robot Kinematics', 'Robot Dynamics', 'ROS 1', 'ROS 2', 'MoveIt 2', 'Gazebo', 'URDF'],
    },
    {
      title: 'Perception & Learning',
      skills: ['PyTorch', 'Graph Attention Networks', 'YOLO', 'LiDAR-Radar Fusion', 'Dynamic Occupancy Grid Maps'],
    },
    {
      title: 'Engineering Tools',
      skills: ['Python', 'C++', 'MATLAB', 'Fusion 360', '3D Printing', 'Laser Cutting'],
    },
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
              <img src={MyPhoto} alt="Portrait of Choi Taewoong" />
              <div>
                <p className="eyebrow">Mechanical Engineering · Robotics</p>
                <h1>Choi Taewoong</h1>
                <div className="subtitle">Undergraduate Research Intern at POSTECH HERO Lab</div>
              </div>
            </div>

            <p className="bio">
              I am a Mechanical Engineering undergraduate at Sungkyunkwan University. My work spans bio-inspired
              robotic mechanisms, robot dynamics, hydrodynamic analysis, sensor fusion, and mobile robot control.
              I aim to build reliable robotic systems by integrating mechanical design, model-based analysis, and software.
            </p>

            <div className="tags">
              <span className="tag">Robot Design</span>
              <span className="tag">Dynamics & Control</span>
              <span className="tag">Underwater Robotics</span>
              <span className="tag">Sensor Fusion</span>
            </div>

            <div className="links primary-links">
              <a href="mailto:taewoong1377@g.skku.edu">Email</a>
              <a href="https://github.com/untiwin21" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/taewoong-choi-322a53379/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="download-link" href={`${process.env.PUBLIC_URL}/Choi_Taewoong_CV.pdf`} download="Choi_Taewoong_CV.pdf">Download CV</a>
            </div>
          </section>

          <section id="research" className="section">
            <h2>Research Experience</h2>
            <div className="research-list">
              {researchExperience.map((experience) => (
                <article className="research-entry" key={`${experience.organization}-${experience.period}`}>
                  <div className="research-heading">
                    <div>
                      <div className="entry-title">{experience.organization}</div>
                      <div className="entry-role">{experience.role}</div>
                    </div>
                    <div className="entry-period">{experience.period}</div>
                  </div>
                  <p>{experience.body}</p>
                  <div className="entry-links">
                    {experience.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <div className="section-heading-row">
              <h2>Selected Projects</h2>
              <span>{projects.length} projects</span>
            </div>
            {projects.map((project) => (
              <article className="entry" key={project.id}>
                <div className="thumb">
                  <ProjectMedia project={project} />
                </div>
                <div className="entry-content">
                  <div className="entry-title">{project.title}</div>
                  <div className="entry-meta">
                    {project.period}<br />{project.venue}
                  </div>
                  <div className="entry-body">{project.body}</div>
                  {project.highlights ? (
                    <ul className="entry-highlights">
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  ) : null}
                  <div className="entry-links">
                    {project.links.map((link) => (
                      <a className="text-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                        {link.label}
                      </a>
                    ))}
                    {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section id="awards" className="section">
            <h2>Awards & Scholarship</h2>
            <div className="award-list">
              {awards.map((award) => (
                <article className="award-card" key={award.title}>
                  <div className="award-mark">Award</div>
                  <div>
                    <div className="entry-title">{award.title}</div>
                    <div className="entry-role">{award.subtitle}</div>
                    <p>{award.body}</p>
                    <div className="entry-links">
                      {award.links.map((link) => (
                        <a className="text-link" href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              <article className="scholarship-card">
                <div>
                  <div className="entry-title">Future Mobility Bootcamp Scholarship</div>
                  <div className="entry-role">2026</div>
                  <p>Awarded for studies in future mobility and automotive electrification.</p>
                </div>
                <strong>KRW 3,600,000</strong>
              </article>
            </div>
          </section>

          <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tags skill-list">
                    {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="contact" className="section">
            <h2>Contact</h2>
            <p className="bio">
              I am interested in research and engineering opportunities involving robot mechanisms, dynamics and control,
              underwater robotics, and reliable autonomous systems.
            </p>
            <div className="contact-grid">
              <a href="mailto:taewoong1377@g.skku.edu">
                <span>Email</span>
                taewoong1377@g.skku.edu
              </a>
              <a href="https://github.com/untiwin21" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                github.com/untiwin21
              </a>
              <a href="https://www.linkedin.com/in/taewoong-choi-322a53379/" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                taewoong-choi
              </a>
            </div>
          </section>
        </div>

        <aside className="timeline-aside" aria-label="Timeline">
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
        Last updated August 2026.
      </footer>
    </div>
  );
};

export default Portfolio;
