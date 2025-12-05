import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ProjectCardOverlap from './ProjectCardOverlap';

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
    <section ref={sectionRef} id="projects" className={`section projects ${isVisible ? 'section-visible' : 'section-hidden'}`}>
      <div className="container">
        <div className="section-content">
          <h2 className={`section-title ${isVisible ? 'fade-in visible ripple-delay-1' : 'fade-in'}`}>Projects</h2>
          <div>
            {projects.map((project, index) => (
              <ProjectCardOverlap
                key={project.id}
                project={project}
                isVisible={isVisible}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;