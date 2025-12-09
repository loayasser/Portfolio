import React from 'react';
// import './About.css'; // For component-specific styles

const About = () => {
  return (
    <section className="section about" id="about">
      <h2>🙋 About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm **[Your Name]**, a passionate developer based in [Your City, Country]. My journey into web development began [Year or Event], and since then, I've been dedicated to building clean, functional, and user-centric digital experiences.
          </p>
          <p>
            I recently completed [Your Degree/Bootcamp/Major Project], where I honed my skills in the **MERN stack (MongoDB, Express, React, Node.js)**. I thrive on collaborating with cross-functional teams and translating complex ideas into elegant code solutions.
          </p>
          <p>
            When I'm not coding, you can find me [Hobby 1, e.g., learning about cybersecurity] or [Hobby 2, e.g., hiking in the mountains]. I'm currently looking for opportunities where I can contribute my frontend expertise and continue growing as a developer.
          </p>
        </div>
        {/* Optional: Add a profile image or a visual timeline graphic here */}
        {/* [Image of a clean, modern illustration of a person reviewing code on a multi-screen setup] */}
      </div>
    </section>
  );
};

export default About;