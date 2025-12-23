import React from 'react';

const About = () => {
  return (
    <section className="section about" id="about">
      <h2>🙋 About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am an <strong>AI & Machine Learning Engineer</strong> and Master’s student at <strong>Deggendorf Institute of Technology</strong>. Bridging the gap between hardware and intelligence, I specialize in building scalable models that solve real-world problems.
          </p>
          
          <p>
            My technical focus lies in the <strong>Python ecosystem</strong> (PyTorch, TensorFlow) for NLP and Computer Vision. I don't just train models; I fine-tune them to turn raw complex data into actionable business insights.
          </p>
          <p>
            When I'm not coding, you'll find me gaming, playing football, or exploring the latest tech trends. 
            Currently open to opportunities where I can push the boundaries of AI.
          </p>
          {/* New "Catchy" Visual Highlights Section */}
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🎓</span>
              <span>Master's in CS</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🤖</span>
              <span>LLM & NLP Specialist</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">⚽</span>
              <span>Football Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;