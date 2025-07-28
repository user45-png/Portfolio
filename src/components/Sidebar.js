// components/Sidebar.js
import React from 'react';
import { FaUser, FaCode, FaProjectDiagram, FaAward, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <a href="#hero"><FaUser title="Home" /></a>
    <a href="#about"><FaCode title="About" /></a>
    <a href="#skills"><FaCode title="Skills" /></a>
    <a href="#projects"><FaProjectDiagram title="Projects" /></a>
    <a href="#awards"><FaAward title="Awards" /></a>
    <a href="#contact"><FaEnvelope title="Contact" /></a>
  </div>
);

export default Sidebar;