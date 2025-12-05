import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ProjectCardOverlap from './ProjectCardOverlap';
import PortfolioScreenshot from '../assets/ProjectScreenshots/PortfolioScreenshot.JPG';
import WordleScreenshot from '../assets/ProjectScreenshots/WordleScreenshot.JPG';
import PruittSolutionsScreenshot from '../assets/ProjectScreenshots/PruittSolutionsScreenshot.JPG';

const Projects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and featuring dark/light mode toggle.',
      technologies: ['React', 'CSS3', 'Vite'],
      image: PortfolioScreenshot,
      github: 'https://github.com/jrainey456/portfolio-vibe',
      live: 'https://www.rainydaydevelopment.com/'
    },
    {
      id: 2,
      title: 'Wordle Clone',
      description: 'A recreation of the popular word-guessing game with custom features.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image: WordleScreenshot,
      github: 'https://github.com/jrainey456/wordle',
      live: 'https://wordle.rainydaydevelopment.com/'
    },
    {
      id: 3,
      title: 'Pruitt Solutions',
      description: 'A full-featured helpdesk and support ticketing system built for a local business to manage customer inquiries and service requests.',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      image: PruittSolutionsScreenshot,
      github: 'https://github.com/jrainey456/pruitt-solutions-splash-page',
      live: 'https://dev.pruitt-solutions.com/'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className={`section projects ${isVisible ? 'section-visible' : 'section-hidden'}`}>
      <div className="container">
        <div className="section-content">
          <h2 className={`section-title ${isVisible ? 'fade-in visible ripple-delay-1' : 'fade-in'}`}>Projects</h2>
          <div>
            {projects.map((project, index) => (
              <ProjectCardOverlapWrapper
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCardOverlapWrapper = ({ project, index }) => {
  const [cardRef, isVisible] = useIntersectionObserver();

  return (
    <div ref={cardRef}>
      <ProjectCardOverlap
        project={project}
        isVisible={isVisible}
        index={index}
      />
    </div>
  );
};

export default Projects;