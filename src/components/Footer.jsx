import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            <a 
              href="https://github.com/jrainey456" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/john-rainey-a324309a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="footer-text">
            <p>© {currentYear} John Rainey</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
