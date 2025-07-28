// components/Projects.js
import React from 'react';
import './Projects.css';

const projects = [
  { name: "Precision Line-Guided Robot", link: "https://github.com/sanjjiiev/Precision-Line-Guided-Autonomous-Robot" },
  { name: "Dynamic Route Optimization", link: "https://github.com/sanjjiiev/Dynamic-Route-Optimization-System" },
  { name: "E-Commerce Website", link: "https://github.com/sanjjiiev/E-commerce-Website" },
];

function Projects() {
  return (
    <div className="glass-card card-section">
      <h2>Projects</h2>
      <div className="card-grid">
        {projects.map((project, index) => (
          <div className="card-item" key={index}>
            <h5>{project.name}</h5>
            {project.link && <a href={project.link} target="_blank" rel="noreferrer">View Project →</a>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
