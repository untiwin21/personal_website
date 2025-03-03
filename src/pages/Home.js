// src/pages/Home.js
import React from 'react';
import MyPhoto from '../imgs/my_photo.jpg';
import Backgroundimg from '../imgs/night.webp';
function Home() {
  return (
    <main>
      {/* 처음 메인 페이지 (intro) */}
      <section className="intro">
        <div>
          <h2>Choi Taewoong</h2>
        </div>
        <div>
          <h3>Thank you for visiting my website!</h3>
          <p>I am a third-year student in the Department of Mechanical Engineering 
            at Sungkyunkwan University, aspiring to be a robotics engineer.
          </p>
        </div>
        <img src= {Backgroundimg} alt="Background" />
      </section>


      <section className="page" id="intro_msg">
        <h1>It's not over until I win</h1>
        <div>
          <div id="my_photo">
            <img src= {MyPhoto} alt="My Photo" />
          </div>
          <div>
            <h1>로봇공학자 최태웅입니다</h1>
            <p>생활 속의 기술을 만듭니다.</p>
            <p>성장과 편리함을 선물해드리겠습니다.</p>
          </div>
        </div>
      </section>
      <section className="page" id="Timeline">
        <div className="timeline">
          <h1>My Journey</h1>

        </div>

      </section>

      {/* 전공, 툴, 언어 섹션 */}
      <section className="page" id="skills">
        <div className="skill">
          <h1>Majors</h1>
          <ol>
            <li>Mechanical Engineering</li>
          </ol>
        </div>
        <div className="skill">
          <h2>Control Engineering</h2>
          <p>안정적인 시스템을 설계합니다</p>
          <ol>
            <li>#Matlab</li>
          </ol>
          <h2>3D Modeling</h2>
          <p>공학적인 요소를 고려한 3D 디자인을 합니다</p>
          <ol>
            <li>#Inventor</li>
            <li>#Fusion 360</li>
          </ol>
          <h2>#Programming</h2>
          <ol>
            <li>#C++</li>
            <li>#ROS</li>
            <li>#ROS2</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Home;
