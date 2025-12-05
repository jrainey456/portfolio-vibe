import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const skills = [
    {
      name: 'JavaScript',
      icon: <i className="fa-brands fa-js"></i>,
      description: 'Modern ES6+ JavaScript and frontend development'
    },
    {
      name: 'Node.js',
      icon: <i className="fa-brands fa-node-js"></i>,
      description: 'Backend development with Express.js and API design'
    },
    {
      name: 'React',
      icon: <i className="fa-brands fa-react"></i>,
      description: 'Frontend development with modern React patterns'
    },
    {
      name: 'Next.js',
      icon: <i className="fa-solid fa-layer-group"></i>,
      description: 'Full-stack React framework with SSR and API routes'
    },
    {
      name: 'SQL',
      icon: <i className="fa-solid fa-database"></i>,
      description: 'Database design and query optimization'
    },
    {
      name: 'ASP.NET',
      icon: <i className="fa-solid fa-code"></i>,
      description: 'Enterprise web applications with C#'
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className={`section experience ${isVisible ? 'section-visible' : 'section-hidden'}`}>
      <div className="container">
        <div className="section-content">
          <h2 className={`section-title ${isVisible ? 'fade-in visible ripple-delay-1' : 'fade-in'}`}>Skills & Experience</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={skill.name} className={`skill-card ${isVisible ? `fade-in visible ripple-delay-${index + 2}` : 'fade-in'}`}>
                <div className={`skill-icon ${isVisible ? `fade-in visible ripple-delay-${index + 3}` : 'fade-in'}`}>
                  {skill.icon}
                </div>
                <h3 className={`skill-name ${isVisible ? `fade-in visible ripple-delay-${index + 4}` : 'fade-in'}`}>{skill.name}</h3>
                <p className={`skill-description ${isVisible ? `fade-in visible ripple-delay-${index + 5}` : 'fade-in'}`}>{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;