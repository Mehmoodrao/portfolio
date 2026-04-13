import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML & CSS', 'Vue.js', 'Responsive Design']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Tools & Others',
      skills: ['Git & GitHub', 'Docker', 'REST APIs', 'Webpack', 'AWS']
    }
  ];

  return (
    <div className="skills-container">
      <h2 className="section-title">My Skills</h2>
      
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category-card">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-tag">
                  <span className="skill-name">{skill}</span>
                  <div className="skill-level"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="technical-skills">
        <h3 className="technical-title">Technical Proficiency</h3>
        <div className="proficiency-bars">
          <div className="proficiency-item">
            <label>Web Development</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '90%'}}></div>
            </div>
            <span className="percentage">90%</span>
          </div>
          <div className="proficiency-item">
            <label>Database Management</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '85%'}}></div>
            </div>
            <span className="percentage">85%</span>
          </div>
          <div className="proficiency-item">
            <label>DevOps & Deployment</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '80%'}}></div>
            </div>
            <span className="percentage">80%</span>
          </div>
          <div className="proficiency-item">
            <label>Problem Solving</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '95%'}}></div>
            </div>
            <span className="percentage">95%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
