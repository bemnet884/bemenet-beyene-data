import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "SMROD Project",
      organization: "Data Systems & Dashboards",
      achievements: [
        "Built dashboards for real-time KPI monitoring and decision-making.",
        "Developed data pipelines for collection, cleaning, and transformation.",
        "Managed datasets using PostgreSQL.",
        "Produced visual insights for operational analysis."
      ],
      isRecent: true,
      colorClass: "proj-primary"
    },
    {
      role: "HIMS Inventory Management System",
      organization: "Data-Focused",
      achievements: [
        "Built workflows for data collection, validation, and reporting.",
        "Ensured data accuracy through structured storage.",
        "Supported trend analysis using organized datasets."
      ],
      isRecent: false,
      colorClass: "proj-secondary"
    },
    {
      role: "Medlink Telemedicine Platform",
      organization: "Software Engineer",
      achievements: [
        "Supported secure data collection and management systems.",
        "Ensured reliable data flow and storage.",
        "Maintained data integrity across application components."
      ],
      isRecent: false,
      colorClass: "proj-tertiary"
    },
    {
      role: "Brighter Generation",
      organization: "Program Coordinator",
      achievements: [
        "Coordinated youth programs and ensured smooth delivery.",
        "Tracked activities, participation, and engagement.",
        "Assisted in data collection and reporting."
      ],
      isRecent: false,
      colorClass: "proj-quaternary"
    }
  ];

  const education = {
    degree: "B.Sc. Software Engineering",
    school: "Addis Ababa Science and Technology University",
    period: "2022 – Present",
    description: "Studied database systems, statistics, data structures, and software architecture. Built data-driven projects through coursework and personal work."
  };

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Building and leveraging data systems for organizational impact.
        </p>

        <div className="experience-grid">
          {experiences.map((exp, idx) => (
            <div className={`experience-card ${exp.isRecent ? 'featured' : ''}`} key={idx}>
              <div className={`experience-header ${exp.colorClass}`}>
                <div className="experience-top-row">
                  <h3 className="experience-role">{exp.role}</h3>
                  {exp.isRecent && <span className="featured-badge">Recent</span>}
                </div>
                <p className="experience-org">{exp.organization}</p>
              </div>
              <div className="experience-body">
                <ul className="exp-achievements">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="education-block">
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginTop: '60px' }}>Education</h3>
          <div className="card" style={{ padding: '32px', marginTop: '24px' }}>
            <h4 className="exp-role">{education.degree}</h4>
            <p className="exp-org">{education.school} — {education.period}</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{education.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
