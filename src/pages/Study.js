import React, { useState } from 'react';

function Study() {
  const [activeStudy, setActiveStudy] = useState(null);

  const studyData = [
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      content: `
        <h3>Algorithm & Data Structure</h3>
        <p>Mastering fundamental algorithms and data structures to solve complex computational problems efficiently.</p>
        <ul>
          <li>Graph algorithms (DFS, BFS, Dijkstra's)</li>
          <li>Dynamic programming techniques</li>
          <li>Advanced data structures (Segment Trees, Fenwick Trees)</li>
          <li>Optimization algorithms</li>
        </ul>
        <h4>Practice Platforms</h4>
        <p>Regular practice on competitive programming platforms like LeetCode, Codeforces, and HackerRank to sharpen problem-solving skills.</p>
      `
    },
    {
      id: 'web-development',
      title: 'Web Development',
      content: `
        <h3>Modern Web Technologies</h3>
        <p>Building responsive and interactive web applications using modern frameworks and libraries.</p>
        <ul>
          <li>Frontend: React.js, Next.js, CSS/SCSS</li>
          <li>Backend: Node.js, Express, RESTful APIs</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>State Management: Redux, Context API</li>
        </ul>
        <h4>Projects</h4>
        <p>Implementing various web projects to apply theoretical knowledge and explore new technologies in real-world scenarios.</p>
      `
    }
  ];

  const openStudyDetail = (id) => {
    setActiveStudy(id);
    // 스크롤 위치 유지, 배경 페이지는 그대로 보이게 함
    document.body.style.overflow = 'hidden';
  };

  const closeStudyDetail = () => {
    setActiveStudy(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main>
      <section className="page" id="studies">
        <h1>Study Areas</h1>
        <div className="study-container">
          {studyData.map((study) => (
            <section 
              key={study.id} 
              className="study-block" 
              onClick={() => openStudyDetail(study.id)}
            >
              <h3>{study.title}</h3>
              <p>Click to view details</p>
            </section>
          ))}
        </div>

        {activeStudy && (
          <div className="modal-overlay" onClick={closeStudyDetail}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeStudyDetail}>×</button>
              <div 
                className="study-detail"
                dangerouslySetInnerHTML={{ 
                  __html: studyData.find(study => study.id === activeStudy).content 
                }} 
              />
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Study;
