import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Separate Navbar component
export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="nav">
      <div className="nav-brand">
        <a href="#top" className="nav-brand-link">
          <h2>🌧️ Rainy Day Development</h2>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
      <div className="theme-toggle-wrapper">
        <input 
          type="checkbox"
          id="theme-toggle"
          className="theme-toggle-input"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <label htmlFor="theme-toggle" className="theme-toggle-label">
          <span className="theme-toggle-slider">
            <span className="theme-icon">{isDarkMode ? '🌙' : '☀️'}</span>
          </span>
        </label>
      </div>
    </nav>
  );
};

// Header component (hero section only)
const Header = () => {
  const { isDarkMode, toggleTheme, animationTrigger } = useTheme();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (animationTrigger > 0) {
      // Reset animations
      setShouldAnimate(false);
      // Trigger animations after a brief delay
      setTimeout(() => setShouldAnimate(true), 50);
    }
  }, [animationTrigger]);

  const getAnimationClass = (baseClass, triggerClass) => {
    if (shouldAnimate) {
      return triggerClass;
    }
    return baseClass;
  };

  return (
    <header className="header">
      <section className="hero">
        <video 
          className="hero-video-background"
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/rain-background.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-text">
              <p className={getAnimationClass('fade-in-left', 'animate-greeting')}>Hello, I'm</p>
              <h1 className={`hero-name ${getAnimationClass('fade-in-up', 'animate-name')}`}>
                <span className="first-name">John</span>
                <span className="last-name">Rainey</span>
              </h1>
              <p className={getAnimationClass('fade-in-left delay-1', 'animate-title')}>Software Developer</p>
            </div>
          </div>
          <div className="hero-right">
            <div className={getAnimationClass('fade-in-right', 'animate-buttons')}>
              <a 
                href="/resume.pdf" 
                className="cta-button primary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-file-pdf"></i>
                Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <i className="fa-brands fa-linkedin social-icon"></i>
                LinkedIn
              </a>
              <a 
                href="https://github.com/jrainey456" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-button"
              >
                <i className="fa-brands fa-github social-icon"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;