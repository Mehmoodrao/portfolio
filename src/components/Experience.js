import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
      {
      id: 1,
      position: 'Junior Developer',
      company: 'Fore Brothers',
      duration: '2023 - 2024',
      description: 'Started career learning modern web development practices.'
    },
    {
      id: 2,
      position: 'Community Manager',
      company: 'Sparx Mobiles',
      duration: '2022 - 2023',
      description: 'Maintained multiple customer queries at once.'
    },
    {
      id: 3,
      position: 'Social Media Manager',
      company: 'Kit And Kaboodle',
      duration: '2021 - 2022',
      description: 'Maintained multiple customer queries at once.'
    },
    {
      id: 4,
      position: 'Graphic Designer',
      company: 'Pixel Play Hub',
      duration: '2018 - 2021',
      description: 'Graphic designer for key projects, mentored junior designers.'
    },
    
  
  ];

  const qualifications = [
      {
      id: 1,
      degree: 'AI Robotics',
      school: 'NAVTTC Pakistan',
      year: '2026-Present'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Computer Science',
      school: 'National University of Modern Languages',
      year: '2023-Present'
    },
    {
      id: 3,
      degree: 'Intermediate',
      school: 'Air Base Inter College Mushaf, Sargodha',
      year: '2020-2022'
    },
    {
      id: 4,
      degree: 'Matriculation',
      school: 'Air Base Inter College Mushaf, Sargodha',
      year: '2018-2020'
    },
    {
      id: 5,
      degree: 'Graphic designing course',
      school: 'Logix College, Sargodha',
      year: '2018'
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="section-title">Experience & Qualifications</h2>
      
      <div className="experience-grid">
        <div className="experience-section">
          <h3 className="subsection-title">💼 Work Experience</h3>
          <div className="experience-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="experience-card">
                <div className="experience-dot"></div>
                <div className="experience-content">
                  <h4 className="position">{exp.position}</h4>
                  <p className="company">{exp.company}</p>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="qualification-section">
          <h3 className="subsection-title">🎓 Qualifications</h3>
          <div className="qualification-list">
            {qualifications.map((qual) => (
              <div key={qual.id} className="qualification-card">
                <div className="qualification-dot"></div>
                <div className="qualification-content">
                  <h4 className="degree">{qual.degree}</h4>
                  <p className="school">{qual.school}</p>
                  <p className="year">{qual.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
