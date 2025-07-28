// components/Skills.js
import React from 'react';
import { FaPython, FaReact, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiFlutter, SiMongodb, SiArduino, SiTensorflow } from 'react-icons/si';
import './Skills.css';

function Skills() {
  const skillCategories = {
    "Languages & Frameworks": [
      { name: "Python", icon: <FaPython /> },
      { name: "React", icon: <FaReact /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Node.js", icon: <FaNodeJs /> },
    ],
    "AI & ML": [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "AI/ML Concepts", icon: "🧠" },
    ],
    "Tools & Platforms": [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Arduino", icon: <SiArduino /> },
      { name: "Git", icon: <FaGitAlt /> },
    ]
  };

  return (
    <div className="glass-card skills-section">
      <h2>Skills</h2>
      {Object.entries(skillCategories).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h5>{category}</h5>
          <div className="skills-grid">
            {items.map((item, index) => (
              <div key={index} className="skill-item">
                <span>{item.icon}</span> {item.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
