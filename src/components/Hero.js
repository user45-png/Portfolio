import React from 'react';
import './Hero.css';

const Hero = () => (
  <section
    id="hero"
    className="hero-section"
    style={{
      backgroundImage: "url('/bg.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
    }}
  >
    <div className="overlay hero-text">
      <h1>Hello, I'm <span>Sabari</span></h1>
      <p>AI Enthusiast • Web Developer • Innovator</p>
    </div>
  </section>
);

export default Hero;
