import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section ref={sectionRef} id="about" className={`section about ${isVisible ? 'section-visible' : 'section-hidden'}`}>
      <div className="container">
        <div className="section-content">
          <h2 className={`section-title ${isVisible ? 'fade-in visible ripple-delay-1' : 'fade-in'}`}>About Me</h2>
          <div className="about-content">
            <div className={`about-text ${isVisible ? 'fade-in visible ripple-delay-2' : 'fade-in'}`}>
              <p className={`${isVisible ? 'fade-in visible ripple-delay-3' : 'fade-in'}`}>
                I'm a passionate software developer with experience in full-stack development.
                I love creating efficient, scalable solutions and learning new technologies.
              </p>
              <p className={`${isVisible ? 'fade-in visible ripple-delay-4' : 'fade-in'}`}>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open source projects, or enjoying outdoor activities.
              </p>
            </div>
            <div className={`about-image ${isVisible ? 'fade-in visible ripple-delay-5' : 'fade-in'}`}>
              <div className="placeholder-image">
                <span>📸</span>
                <p>Profile Photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;