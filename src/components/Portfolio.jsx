import React from 'react';
// import './Portfolio.css'; 

const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "A full-stack e-commerce site with user authentication, a shopping cart, and a built-in payment gateway. Built using the MERN stack.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    liveUrl: "https://[live-demo-1].com",
    githubUrl: "https://github.com/[repo-1]"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A minimalist To-Do application featuring drag-and-drop task reordering and local storage persistence.",
    technologies: ["React", "JavaScript", "Styled Components", "Vite"],
    liveUrl: "https://[live-demo-2].com",
    githubUrl: "https://github.com/[repo-2]"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A real-time weather application that fetches data from a public API and displays a 5-day forecast for any major city.",
    technologies: ["Vanilla JS", "HTML5", "CSS Grid", "OpenWeatherMap API"],
    liveUrl: "https://[live-demo-3].com",
    githubUrl: "https://github.com/[repo-3]"
  },
];

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <h2>⭐ Featured Projects</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            {/* 

[Image of a clean, modern design of a project card showing a screenshot of the project]
 */}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-button primary-link">
                Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-button secondary-link">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;