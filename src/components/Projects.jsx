import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import ProjectCardOverlap from './ProjectCardOverlap';
import PortfolioScreenshot from '../assets/ProjectScreenshots/PortfolioScreenshot.JPG';
import WordleScreenshot from '../assets/ProjectScreenshots/WordleScreenshot.JPG';
import PruittSolutionsScreenshot from '../assets/ProjectScreenshots/PruittSolutionsScreenshot.JPG';
import BakeryScreenshot from '../assets/ProjectScreenshots/BakeryScreenshot.JPG';
import NoHelpdeskScreenshot from '../assets/ProjectScreenshots/NoHelpdesk.jpg';
import HouseRulesScreenshot from '../assets/ProjectScreenshots/HouseRules.jpg';

const Projects = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and featuring dark/light mode toggle.',
      technologies: ['React', 'CSS', 'Vite'],
      image: PortfolioScreenshot,
      github: 'https://github.com/jrainey456/portfolio-vibe',
      live: null
    },
    {
      id: 2,
      title: 'Wordle Clone',
      description: 'A recreation of the popular word-guessing game with custom features.',
      technologies: ['JavaScript', 'HTML5', 'CSS'],
      image: WordleScreenshot,
      github: 'https://github.com/jrainey456/wordle',
      live: 'https://wordle.rainydaydevelopment.com/'
    },
    {
      id: 3,
      title: 'Pruitt Solutions',
      description: 'A concept splash page for an ongoing full-featured helpdesk and support ticketing system designed to manage customer inquiries and service requests.',
      technologies: ['JavaScript', 'HTML5', 'CSS'],
      image: PruittSolutionsScreenshot,
      github: 'https://github.com/jrainey456/pruitt-solutions-splash-page',
      live: 'https://dev.pruitt-solutions.com/'
    },
    {
      id: 4,
      title: 'Rise and Shine Bakery',
      description: 'A beautiful bakery website featuring an elegant menu display and contact form.',
      technologies: ['Next.js', 'React', 'CSS'],
      image: BakeryScreenshot,
      github: 'https://github.com/jrainey456/bakery-site',
      live: 'https://bakery.rainydaydevelopment.com/'
    },
    {
      id: 5,
      title: 'NoHelpdesk',
      description: 'A "No as a Service" website that makes an API call to naas.isalman.dev/no to deliver the most helpful response possible.',
      technologies: ['JavaScript', 'HTML5', 'CSS'],
      image: NoHelpdeskScreenshot,
      imagePosition: '75% center',
      github: 'https://github.com/jrainey456/no-help-desk-chat',
      live: 'https://nohelpdesk.rainydaydevelopment.com/'
    },
    {
      id: 6,
      title: 'HouseRules',
      description: 'A horror-themed game concept using WebSockets to push real-time messages from server to clients while tracking session IDs for each connected player.',
      technologies: ['Node.js', 'WebSockets', 'JavaScript'],
      image: HouseRulesScreenshot,
      github: null,
      live: 'https://houserules.rainydaydevelopment.com/',
      comingSoon: true
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