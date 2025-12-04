import React from 'react';

const ProjectCardOverlap = ({ project, isVisible, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`project-card-overlap ${isEven ? 'layout-normal' : 'layout-reversed'} ${isVisible ? `fade-in visible ripple-delay-${index + 2}` : 'fade-in'}`}>
            <div className="project-background-box">
            </div>
            <div className="project-foreground-box">
                <h3 className={isVisible ? 'fade-in visible' : 'fade-in'}>{project.title}</h3>
                <p className={isVisible ? 'fade-in visible' : 'fade-in'}>{project.description}</p>
                <div className={`project-technologies ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
                    {project.technologies.map((tech, techIndex) => (
                        <span key={tech} className={`tech-tag ${isVisible ? 'fade-in visible' : 'fade-in'}`}>{tech}</span>
                    ))}
                </div>
                <div className={`project-links ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github"></i> GitHub
                    </a>
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>🔗</span> Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardOverlap;
