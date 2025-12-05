import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header, { Navbar } from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide mobile nav when footer comes into view
        if (entry.isIntersecting) {
          setMobileNavVisible(false);
        } else {
          setMobileNavVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px' // Trigger when footer is 100px from bottom of viewport
      }
    );

    const footerElement = footerRef.current;
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Header />
        <main>
          <About />
          <Experience />
          <Projects />
        </main>
        <div ref={footerRef}>
          <Footer />
        </div>
        <nav className={`mobile-nav ${mobileNavVisible ? 'mobile-nav-visible' : 'mobile-nav-hidden'}`}>
          <ul className="mobile-nav-links">
            <li>
              <a href="#top">
                <i className="fa-solid fa-house"></i>
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                <i className="fa-solid fa-user"></i>
                About
              </a>
            </li>
            <li>
              <a href="#experience">
                <i className="fa-solid fa-briefcase"></i>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects">
                <i className="fa-solid fa-folder"></i>
                Projects
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default App;
