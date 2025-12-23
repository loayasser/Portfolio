import React from 'react';

const skillsData = [
  { 
    // The "Star" Category - Put this first!
    category: "🤖 Machine Learning & AI", 
    items: [
      "Python", 
      "PyTorch / TensorFlow", 
      "Large Language Models (LLMs)", 
      "Computer Vision (OpenCV)", 
      "Scikit-learn", 
      "Hugging Face Transformers"
    ] 
  },
  { 
    // The "Data" Category
    category: "📊 Data Science & Analytics", 
    items: [
      "Pandas / NumPy", 
      "SQL / PostgreSQL", 
      "Data Visualization (Matplotlib)", 
      "Data Cleaning & Preprocessing",
      "Jupyter Notebooks",
      "RAG Pipelines"
    ] 
  },
  { 
    // The "Full Stack" skills, rebranded for AI
    category: "🚀 Deployment & MLOps", 
    items: [
      "Docker / Containers", 
      "FastAPI / Flask", // Essential for serving AI models
      "Git / GitHub", 
      "React.js", // Good to keep, shows you can build demos
      "Cloud Basics (AWS/GCP)", 
      "REST APIs"
    ] 
  },
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2>💻 My Skills & Tech Stack</h2>
      <div className="skills-container">
        {skillsData.map((group, index) => (
          <div key={index} className="skill-group">
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;