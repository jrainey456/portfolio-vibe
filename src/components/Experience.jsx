import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  const skills = [
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.81.46 1.31.5 1.76.5 1.44 0 2.26-.87 2.26-2.38V8.1c0-.13-.1-.23-.23-.23H8.29c-.13 0-.23.1-.23.23v7.49c0 .81-.87 1.63-2.28.94l-1.94-1.12c-.06-.03-.1-.09-.1-.16V7.61c0-.07.04-.13.1-.16l7.44-4.3c.06-.03.14-.03.2 0l7.44 4.3c.06.03.1.09.1.16v8.58c0 .07-.04.13-.1.16l-7.44 4.3c-.06.03-.14.03-.2 0l-1.92-1.12c-.07-.04-.16-.04-.22 0-.37.21-.44.25-.81.44-.1.05-.24.13-.06.22l2.5 1.45c.24.14.51.2.78.2s.54-.06.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.61c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
          <path d="M14.1 10.4c0-1.35-.54-2.05-2.14-2.05-1.74 0-2.25.74-2.25 1.73 0 .73.57 1.24 2.23 1.63 2.33.55 2.6 1.04 2.6 1.76 0 1.11-.89 1.79-2.4 1.79-1.65 0-2.5-.59-2.57-1.87 0-.13.1-.23.23-.23h1.23c.12 0 .22.09.23.21.07.48.28.63 1.12.63.69 0 1.15-.31 1.15-.73 0-.43-.2-.61-2.23-1.12-1.75-.45-2.26-1.06-2.26-2.03 0-1.33 1.13-2.12 2.96-2.12 2.25 0 2.94 1.04 2.94 2.12v.27c0 .13-.1.23-.23.23h-1.22c-.12 0-.22-.1-.22-.23-.02-.27-.02-.4-.18-.4z"/>
        </svg>
      ),
      description: 'Backend development with Express.js and API design'
    },
    {
      name: 'React',
      icon: '⚛️',
      description: 'Frontend development with modern React patterns'
    },
    {
      name: 'SQL',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="tech-icon">
          <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.151zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.025c.102-1.745.24-3.5.413-5.244h1.176l1.344 4.28h.016l1.411-4.28h1.195c.085 1.744.245 3.499.327 5.244zM9.76 15.02c-.827-.077-1.419-.616-1.419-1.23 0-.827.812-1.43 2.081-1.43 3.298 0 2.331 3.11-1.054 3.11a.918.918 0 01-.334-.06c.214-.272.394-.635.394-.998 0-.411-.257-.646-.668-.392zm9.623-.787a3.069 3.069 0 00-.693-.01c-.628.07-1.331.283-1.331 1.074 0 .312.357.456.689.5.3.04.65.04.957.04 1.055 0 1.81-.388 1.81-1.146 0-.339-.202-.468-.432-.458zM19.207.807c.555 0 1.005.676 1.005 1.506 0 .957-.312 1.24-.312 2.063 0 .456.204.619.204 1.075 0 .456-.456 1.012-.456 1.506 0 .33.456.33.456.783 0 .062-.018.125-.049.2H9.031V19.5c0 .08-.063.15-.141.15H4.24c-.079 0-.142-.07-.142-.15V8.94H.141C.063 8.94 0 8.87 0 8.79V4.24c0-.08.064-.15.142-.15H4.24c.08 0 .142.07.142.15V7.94h4.65c.08 0 .142.07.142.15V19.5c0 .08.063.15.141.15h9.656c.079 0 .142-.07.142-.15V.957c0-.08.063-.15.142-.15z"/>
        </svg>
      ),
      description: 'Database design and query optimization'
    },
    {
      name: 'ASP.NET',
      icon: (
        <div className="tech-icon" style={{color: '#512BD4', fontSize: '1.5rem', fontWeight: 'bold'}}>♦</div>
      ),
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