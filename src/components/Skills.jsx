import React from 'react';
// import './Skills.css'; 

const skillsData = [
  { 
    category: "Frontend Development", 
    items: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "React", "Redux/Context API", "Responsive Design"] 
  },
  { 
    category: "Backend & Databases", 
    items: ["Node.js", "Express", "Python / Django", "MongoDB", "PostgreSQL", "REST APIs"] 
  },
  { 
    category: "Tools & Workflow", 
    items: ["Git / GitHub", "VS Code", "Webpack / Vite", "Figma", "Docker (Basic)", "Agile/Scrum"] 
  },
];

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2>💻 My Skills & Tools</h2>
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
       {/*  */}
    </section>
  );
};

export default Skills;