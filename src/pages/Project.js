// src/pages/Projects.js
import React, { useState } from 'react';

function Project() {
  const [activeProject, setActiveProject] = useState(null);

  const projectData = [
    {
      id: 'mobile-robot',
      title: 'Autonomous Driving Mobile Robot with independent wheels',
      content: `
        <h3>Autonomous Mobile Robot Project</h3>
        <p>Designed and implemented an autonomous mobile robot with independently controlled wheels for enhanced maneuverability and navigation capabilities.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li>Independent wheel control system for precise movement</li>
          <li>SLAM (Simultaneous Localization and Mapping) implementation</li>
          <li>Obstacle detection and avoidance using LiDAR sensors</li>
          <li>Path planning algorithms for efficient navigation</li>
          <li>ROS (Robot Operating System) integration for modular development</li>
        </ul>
        
        <h4>Technologies Used</h4>
        <ul>
          <li>ROS (Robot Operating System)</li>
          <li>C++ for core functionality</li>
          <li>Python for high-level control</li>
          <li>LiDAR and camera sensor integration</li>
          <li>Custom PCB design for motor control</li>
        </ul>
        
        <h4>Results</h4>
        <p>Successfully demonstrated autonomous navigation through complex environments with dynamic obstacle avoidance capabilities. The robot achieved a positioning accuracy of ±2cm and could navigate through narrow passages with minimal human intervention.</p>
      `
    },
    {
      id: 'robot-arm',
      title: 'Robot Arm',
      content: `
        <h3>Robotic Arm Control System</h3>
        <p>Developed a 6-DOF robotic arm with precise control mechanisms for object manipulation tasks.</p>
        
        <h4>Key Features</h4>
        <ul>
          <li>6 degrees of freedom for complex manipulation tasks</li>
          <li>Inverse kinematics solver for intuitive control</li>
          <li>Computer vision integration for object recognition</li>
          <li>Force feedback system for delicate operations</li>
          <li>User-friendly interface for programming movements</li>
        </ul>
        
        <h4>Technologies Used</h4>
        <ul>
          <li>Arduino for low-level motor control</li>
          <li>Python for high-level programming</li>
          <li>OpenCV for computer vision</li>
          <li>3D printed components for custom parts</li>
          <li>Servo motors with high precision encoders</li>
        </ul>
        
        <h4>Applications</h4>
        <p>The robotic arm has been successfully applied to sorting tasks, pick-and-place operations, and basic assembly processes. It demonstrates the capability to handle objects of various shapes and sizes with high precision.</p>
      `
    }
  ];

  const openProjectDetail = (id) => {
    setActiveProject(id);
    // 스크롤 위치 유지, 배경 페이지는 그대로 보이게 함
    document.body.style.overflow = 'hidden';
  };

  const closeProjectDetail = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main>
      <section className="page" id="project">
        <h1>Projects</h1>
        <div className="project-container">
          {projectData.map((project) => (
            <section 
              key={project.id} 
              className="project" 
              onClick={() => openProjectDetail(project.id)}
            >
              <h3>{project.title}</h3>
              <p>Click to view details</p>
            </section>
          ))}
        </div>
        <div>
          <section id="more_project">
            <h4>Continuing...</h4>
          </section>
        </div>

        {activeProject && (
          <div className="modal-overlay" onClick={closeProjectDetail}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeProjectDetail}>×</button>
              <div 
                className="project-detail"
                dangerouslySetInnerHTML={{ 
                  __html: projectData.find(project => project.id === activeProject).content 
                }} 
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Project;
