// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Project from './pages/Project';
import Research from './pages/Research';
import Study from './pages/Study';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* 모든 페이지에 공통으로 보여질 상단바 */}
      <Header />

      {/* 페이지별 라우팅 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/research" element={<Research />} />
        <Route path="/study" element={<Study />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
