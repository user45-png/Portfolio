// components/Education.js
import React from 'react';
import './Projects.css';

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institute: "Amrita Vishwa Vidyapeetham, Coimbatore",
    year: "2022 – 2026",
    description: "Focused on AI, Web Development, and Networking, CGPA: 7.95"
  },
  {
    degree: "Higher Secondary",
    institute: "SSVM Mettupalayam",
    year: "2021 – 2022",
    description: "Graduated with outstanding in science stream"
  }
];

function Education() {
  return (
    <div className="glass-card card-section">
      <h2>Education</h2>
      <div className="card-grid">
        {education.map((edu, index) => (
          <div className="card-item" key={index}>
            <h5>{edu.degree}</h5>
            <p>{edu.institute}</p>
            <small>{edu.year}</small>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
