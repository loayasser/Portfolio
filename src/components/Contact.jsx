import React from 'react';
// You might use an icon library here, e.g., react-icons
// import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <h2>✉️ Get In Touch</h2>
      <p className="contact-intro">
        I am currently open to new opportunities and projects. Whether you have a question or just want to connect, feel free to reach out—my inbox is always open!
      </p>

      <div className="contact-links-container">
        <a 
          href="mailto:youremail@example.com" 
          className="contact-link"
          aria-label="Email me"
        >
          {/* <FiMail /> */}
          Email Me
        </a>
        <a 
          href="[YOUR_LINKEDIN_URL]" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="contact-link"
          aria-label="Connect on LinkedIn"
        >
          {/* <FiLinkedin /> */}
          LinkedIn
        </a>
        <a 
          href="[YOUR_GITHUB_URL]" 
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
        href="[LINK_TO_YOUR_RESUME.pdf]" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="cta-button primary resume-button"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Contact;