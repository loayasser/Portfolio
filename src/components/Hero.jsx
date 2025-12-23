import React from 'react';
import profilePic from '../assets/profilePic.jpg';
// import './Hero.css'; // If you prefer component-specific CSS files

const Hero = () => {
  return (
    <section className="section hero" id="hero">
      <div className="hero-content">
        <p className="greeting">Hi, my name is</p>
        <h1>LOAY BERZAN</h1>
        <h3>
          I build intelligent solutions as an 
          <span className="accent-text"> AI & Machine Learning Engineer</span>.
        </h3>
        <p className="description">
          I specialize in developing predictive models, fine-tuning Large Language Models (LLMs), and turning complex data into actionable insights using Python and modern AI frameworks.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="cta-button primary">View Projects</a>
          <a href="#contact" className="cta-button secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={profilePic} alt="Loay Berzan" className="hero-img" />
      </div>
    </section>
  );
};

export default Hero;