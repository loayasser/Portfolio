import React from 'react';

const projects = [
  {
    id: 1,
    title: 'German Traffic Sign AI Recognition',
    description:
      'An end-to-end Computer Vision app that uses a custom CNN to classify 43 types of German traffic signs with real-time deployment on Streamlit.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Streamlit'],
    liveUrl:
      'https://traffic-sign-recognizergit-hzyappvcpygdvkykdmtgeyp.streamlit.app/',
    githubUrl: 'https://github.com/loayasser/Traffic-Sign-Recognizer'
  }
];

const Portfolio = () => {
  return (
    <section className="section portfolio" id="portfolio">
      <h2>Featured Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button primary-link"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-button secondary-link"
              >
                GitHub Repo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
