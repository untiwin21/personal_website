// src/pages/Home.js
import React, { useEffect } from 'react';
import MyPhoto from '../imgs/my_photo.jpg';
import Backgroundimg from '../imgs/background.jpg';

function Home() {
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
        <div className="animate">
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
      </section>

      {/* Timeline Section */}
      <section className="page" id="Timeline">
        <h1 className="animate">Career Journey</h1>
        <div className="timeline animate">
          <div className="timeline-item">
            <div className="timeline-date">2022 - Present</div>
            <div className="timeline-content">
              <h3>Mechanical Engineering</h3>
              <p>Sungkyunkwan University</p>
              <p>Focusing on robotics and control systems</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2023</div>
            <div className="timeline-content">
              <h3>Research Assistant</h3>
              <p>Robotics Laboratory</p>
              <p>Worked on autonomous navigation systems</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>Engineering Workshop</h3>
              <p>Summer Internship</p>
              <p>Developed 3D modeling skills and prototyping experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="page" id="skills">
        <h1 className="animate">Skills & Expertise</h1>
        <div className="skills-container">
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
        
        <div className="featured-projects animate">
          <h2>Featured Projects</h2>
          <div className="project-cards">
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
        </div>
      </section>
    </main>
  );
}

export default Home;
