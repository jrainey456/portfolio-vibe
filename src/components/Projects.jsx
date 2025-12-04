import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Projects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and featuring dark/light mode toggle.',
      technologies: ['React', 'CSS3', 'Vite'],
      image: '/placeholder-portfolio.svg',
      github: 'https://github.com/jrainey456',
      live: '#'
    },
    {
      id: 2,
      title: 'Wordle Clone',
      description: 'A recreation of the popular word-guessing game with custom features.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image: '/placeholder-wordle.svg',
      github: 'https://github.com/jrainey456',
      live: '#'
    },
    {
      id: 3,
      title: 'Splash Page Generator',
      description: 'A tool for creating beautiful landing pages with customizable templates.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      image: '/placeholder-splash.svg',
      github: 'https://github.com/jrainey456',
      live: '#'
    }
  ];

  return (
    <>
      <section ref={sectionRef} id="projects" className={`section projects ${isVisible ? 'section-visible' : 'section-hidden'}`}>
        <div className="container">
          <div className="section-content">
            <h2 className={`section-title ${isVisible ? 'fade-in visible ripple-delay-1' : 'fade-in'}`}>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.id} className={`project-card ${isVisible ? `fade-in visible ripple-delay-${index + 2}` : 'fade-in'}`}>
                  <div className={`project-image ${isVisible ? `fade-in visible ripple-delay-${index + 3}` : 'fade-in'}`}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3 className={`project-title ${isVisible ? `fade-in visible ripple-delay-${index + 4}` : 'fade-in'}`}>{project.title}</h3>
                    <p className={`project-description ${isVisible ? `fade-in visible ripple-delay-${index + 5}` : 'fade-in'}`}>{project.description}</p>
                    <div className={`project-technologies ${isVisible ? `fade-in visible ripple-delay-${index + 6}` : 'fade-in'}`}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={tech} className={`tech-tag ${isVisible ? `fade-in visible ripple-delay-${index + 7 + techIndex}` : 'fade-in'}`}>{tech}</span>
                      ))}
                    </div>
                    <div className={`project-links ${isVisible ? `fade-in visible ripple-delay-${index + 10}` : 'fade-in'}`}>
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i> GitHub
                      </a>
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>🔗</span> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section projects ${isVisible ? 'section-visible' : 'section-hidden'}`}>
        <div className="container">
          <div className="section-content">
            <h2 className={`section-title ${isVisible ? 'fade-in visible ripple-delay-1' : 'fade-in'}`}>Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={project.id} className={`project-card ${isVisible ? `fade-in visible ripple-delay-${index + 2}` : 'fade-in'}`}>
                  <div className={`project-image ${isVisible ? `fade-in visible ripple-delay-${index + 3}` : 'fade-in'}`}>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3 className={`project-title ${isVisible ? `fade-in visible ripple-delay-${index + 4}` : 'fade-in'}`}>{project.title}</h3>
                    <p className={`project-description ${isVisible ? `fade-in visible ripple-delay-${index + 5}` : 'fade-in'}`}>{project.description}</p>
                    <div className={`project-technologies ${isVisible ? `fade-in visible ripple-delay-${index + 6}` : 'fade-in'}`}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={tech} className={`tech-tag ${isVisible ? `fade-in visible ripple-delay-${index + 7 + techIndex}` : 'fade-in'}`}>{tech}</span>
                      ))}
                    </div>
                    <div className={`project-links ${isVisible ? `fade-in visible ripple-delay-${index + 10}` : 'fade-in'}`}>
                      <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i> GitHub
                      </a>
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>🔗</span> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;