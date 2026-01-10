// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import MyPhoto from '../imgs/my_photo.jpg';
import Backgroundimg from '../imgs/background.jpg';
import ImageSlideshow from '../components/ImageSlideshow';
import SkkuMe from '../imgs/SKKU_ME.png';
import RoboticsInnovatory from '../imgs/Robotics Innovatory.png';

function Home() {
  const [modalContent, setModalContent] = useState(null);

  // Add scroll animation effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const educationData = {
    skku: {
      image: SkkuMe,
      title: 'Sungkyunkwan University (SKKU)',
      details: (
        <>
          <p><strong>Bachelor of Science in Mechanical Engineering</strong></p>
          <p>Mar 2021 - Present</p>
        </>
      ),
    },
    innovatory: {
      image: RoboticsInnovatory,
      title: 'SKKU Innovatory',
      details: (
        <>
          <p><strong>Member of the Innovatory</strong></p>
          <p>Sep 2023 - Present</p>
        </>
      ),
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="intro">
        <div>
          <h2 className="animate">Welcome to My Portfolio</h2>
          <p className="animate">Exploring the intersection of mechanical engineering and robotics</p>
          <a href="#intro_msg" className="cta-button animate">Discover More</a>
        </div>
        <img src={Backgroundimg} alt="Background" />
      </section>

      {/* About Me Section */}
      <section className="page" id="intro_msg">
        <h1 className="animate">About Me</h1>
        <div className="about-me-grid" style={{gap: '5rem'}}>
          <div className="animate about-content-container">
            <div id="my_photo">
              <img src={MyPhoto} alt="Choi Taewoong" />
            </div>
            <div className="about-content">
              <h2>Choi Taewoong</h2>
              <p>
                I am a third-year student in the Department of Mechanical Engineering 
                at Sungkyunkwan University, aspiring to be a robotics engineer. My passion 
                lies in creating intelligent systems that can interact with the physical world.
              </p>
              <p>
                With a strong foundation in mechanical principles and a growing expertise in 
                programming and control systems, I aim to develop innovative solutions at the 
                intersection of hardware and software.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon github">GitHub</a>
                <a href="#" className="social-icon linkedin">LinkedIn</a>
                <a href="#" className="social-icon email">Email</a>
              </div>
            </div>
          </div>
          <div className="animate">
            <ImageSlideshow />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="page" id="education">
        <h1 className="animate">Education</h1>
        <div className="education-container page-content">
          <div className="education-card" onClick={() => openModal(educationData.skku)}>
            <img src={educationData.skku.image} alt="SKKU" />
          </div>
          <div className="education-card" onClick={() => openModal(educationData.innovatory)}>
            <img src={educationData.innovatory.image} alt="SKKU Innovatory" />
          </div>
        </div>
      </section>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>✕</button>
            <h2>{modalContent.title}</h2>
            {modalContent.details}
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section className="page" id="skills">
        <h1 className="animate">Skills & Expertise</h1>
        <div className="skills-container page-content">
          <div className="skill animate">
            <h2>Mechanical Engineering</h2>
            <p>Specialized in designing mechanical systems with a focus on robotics applications</p>
            <ol className="skill-tags">
              <li>Mechanical Design</li>
              <li>Structural Analysis</li>
              <li>Dynamics</li>
            </ol>
          </div>
          
          <div className="skill animate">
            <h2>Control Engineering</h2>
            <p>Designing stable and efficient control systems for robotic applications</p>
            <ol className="skill-tags">
              <li>Matlab</li>
              <li>PID Control</li>
              <li>System Modeling</li>
            </ol>
          </div>
          
          <div className="skill animate">
            <h2>3D Modeling</h2>
            <p>Creating engineering-focused 3D designs with attention to functional requirements</p>
            <ol className="skill-tags">
              <li>Inventor</li>
              <li>Fusion 360</li>
              <li>CAD/CAM</li>
            </ol>
          </div>
          
          <div className="skill animate">
            <h2>Programming</h2>
            <p>Developing software solutions for robotics and automation</p>
            <ol className="skill-tags">
              <li>C++</li>
              <li>ROS</li>
              <li>ROS2</li>
              <li>Python</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="page" id="projects">
        <h1 className="animate">Projects</h1>
        <div className="project-cards animate page-content">
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Autonomous Robot</h3>
              <p>Mobile robot with navigation capabilities</p>
              <a href="/project" className="project-link">View Details</a>
            </div>
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Control System</h3>
              <p>Advanced control algorithms implementation</p>
              <a href="/project" className="project-link">View Details</a>
            </div>
          </div>
      </section>
    </main>
  );
}

export default Home;

