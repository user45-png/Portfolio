import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App light-mode'}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="toggle-mode-btn"
      >
        {darkMode ? 'Light' : 'Dark'}
      </button>

      <Sidebar />
      <Hero />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
