import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A complete full-stack e-commerce solution featuring product catalog, shopping cart, secure payment processing with Stripe integration, user authentication, and a comprehensive admin dashboard for managing inventory and orders.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      icon: '🛒',
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management platform enabling teams to organize workflows efficiently with real-time updates, user authentication, role-based access control, task assignments, and progress tracking in an intuitive interface.',
      technologies: ['React', 'Firebase', 'Redux', 'Material-UI'],
      icon: '✓',
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'An interactive weather application providing real-time weather data with location search, 7-day forecasts, weather alerts, temperature trends visualization, and UV index tracking for informed outdoor planning.',
      technologies: ['React', 'API Integration', 'Chart.js', 'CSS3'],
      icon: '⛅',
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A professional analytics dashboard consolidating social media metrics from multiple platforms, displaying engagement statistics, follower growth trends, post performance analysis, and actionable insights with interactive data visualizations.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      icon: '📊',
      demo: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A full-featured blogging platform with markdown editor, rich content creation, comment system, user profiles, search functionality, category organization, and automated content management for modern digital publishing.',
      technologies: ['Next.js', 'Prisma', 'Tailwind CSS', 'PostgreSQL'],
      icon: '✍️',
      demo: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A mobile-friendly fitness tracking application allowing users to log workouts, track exercises, monitor progress with visual charts, set fitness goals, manage nutrition, and achieve better health outcomes with detailed analytics.',
      technologies: ['React Native', 'Firebase', 'Redux', 'JavaScript'],
      icon: '💪',
      demo: '#',
      github: '#'
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">Latest Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-background">
              <div className="project-icon">{project.icon}</div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={project.demo} className="link-btn demo">
                  🔗 Demo
                </a>
                <a href={project.github} className="link-btn github">
                  💻 Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
