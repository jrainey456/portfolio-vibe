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
                I'm John Rainey, a Full Stack Developer who views software development as both a technical discipline and a creative outlet. I approach every project with a focus on craftsmanship, using logic and syntax to build elegant, user-centric solutions.
              </p>
              <p className={`${isVisible ? 'fade-in visible ripple-delay-4' : 'fade-in'}`}>
                While I am comfortable working across the entire stack, I possess specific expertise in SQL and database management. I am a lifelong learner who thrives on problem-solving and am constantly exploring emerging technologies to expand my capabilities and deliver better results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;