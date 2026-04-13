import React, { useState } from 'react';
import './Header.css';

function Header({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#intro" onClick={() => handleNavClick('intro')}>Introduction</a></li>
          <li><a href="#experience" onClick={() => handleNavClick('experience')}>Experience</a></li>
          <li><a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a></li>
          <li><a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={() => handleNavClick('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
