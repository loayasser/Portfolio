import React from 'react';
import Resume from '../assets/Resume.pdf';
// You might use an icon library here, e.g., react-icons
// import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2>✉️ Get In Touch</h2>
      <p className="contact-intro">
        I am currently open to new opportunities and projects. Whether you have a question or just want to connect, feel free to reach out, my inbox is always open!
      </p>

      <div className="contact-links-container">
        <a 
          href="mailto:loay.berzan@gmail.com" 
          className="contact-link"
          aria-label="Email me"
        >
          {/* <FiMail /> */}
          Email Me
        </a>
        <a 
          href="https://www.linkedin.com/in/loay-berzan/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link"
          aria-label="Connect on LinkedIn"
        >
          {/* <FiLinkedin /> */}
          LinkedIn
        </a>
        <a 
          href="https://github.com/loayasser" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link"
          aria-label="View my GitHub profile"
        >
          {/* <FiGithub /> */}
          GitHub
        </a>
      </div>

      <a 
        href={Resume} 
        target="_blank"             // Opens in new tab
        rel="noopener noreferrer"   // Security best practice for new tabs
        className="cta-button primary resume-button"
        // REMOVE the 'download' attribute completely
      >
        View Resume
      </a>
    </section>
  );
};

export default Contact;