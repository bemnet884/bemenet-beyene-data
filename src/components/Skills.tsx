import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Data Analytics & Visualization",
      color: "blue",
      skills: ["Power BI", "Tableau", "Excel", "Data Cleaning", "Dashboard Development", "Trend Analysis"]
    },
    {
      title: "Data Systems & Programming",
      color: "purple",
      skills: ["Python", "TypeScript", "SQL", "PostgreSQL", "MySQL", "Prisma ORM", "APIs & Data Pipelines"]
    },
    {
      title: "Core Competencies",
      color: "green",
      skills: ["Analytical Thinking", "Problem Solving", "Data Interpretation", "Effective Communication", "Team Collaboration", "Attention to Detail"]
    }
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          Software engineering systems knowledge combined with monitoring & evaluation strategy.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div className={`skill-card card-${category.color}`} key={idx}>
              <div className="skill-card-header">
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="skill-item">
                    <span className="check-icon">/</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
