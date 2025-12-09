import React from 'react';
// import './Hero.css'; // If you prefer component-specific CSS files

const Hero = () => {
  return (
    <section className="section hero" id="hero">
      <div className="hero-content">
        <p className="greeting">Hi, my name is</p>
        <h1>[Your Full Name]</h1>
        <h3>
          I build scalable web applications as a 
          <span className="accent-text"> Frontend Developer</span>.
        </h3>
        <p className="description">
          I specialize in creating modern, responsive interfaces and solving complex user experience challenges with React and clean, performant code.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="cta-button primary">View Projects</a>
          <a href="#contact" className="cta-button secondary">Get In Touch</a>
        </div>
      </div>
      
      {/* Optional: Add a profile image or simple animation here */}
      {/*  */}
    </section>
  );
};

export default Hero;