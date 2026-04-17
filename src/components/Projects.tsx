import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Program Performance Dashboard",
      subtitle: "Monitoring Participant Outreach & Outcomes",
      tools: ["Power BI", "SQL", "Data Modeling", "DAX"],
      description: "A comprehensive dashboard designed for NGO program managers to track key performance indicators, participant demographics, and programmatic trends over time.",
      insights: "Identified a 22% drop in youth participation in rural sectors during Q3, allowing the field team to reallocate resources and adjust outreach strategies proactively.",
      colorClass: "proj-primary",
      isFeatured: true
    },
    {
      title: "Impact Data Cleaning & Analysis",
      subtitle: "From Raw Field Data to Reliable Deliverables",
      tools: ["Python", "Pandas", "Data Quality Assurance"],
      description: "Processed 50,000+ rows of raw, unstructured survey data collected from field tablets. Automated cleaning workflows to handle missing values, standardize responses, and validate against pre-defined MEL criteria.",
      insights: "Improved data reliability from 68% to 99%, ensuring the final donor report reflected accurate, verifiable outcomes without duplicate entries.",
      colorClass: "proj-secondary",
      isFeatured: false
    },
    {
      title: "MEL Development Program Simulation",
      subtitle: "End-to-End Tracking of Educational Outcomes",
      tools: ["Excel", "Tableau", "Outcome Metrics"],
      description: "Designed a simulated monitoring framework for an education program. Built data collection templates, tracked attendance rates, and visualized mid-term assessment improvements against program benchmarks.",
      insights: "Demonstrated the correlation between consistent attendance and a 15% increase in literacy scores, offering a replicable template for actual program evaluation.",
      colorClass: "proj-tertiary",
      isFeatured: false
    },
    {
      title: "Geospatial Needs Assessment",
      subtitle: "Mapping Vulnerabilities and Resource Allocation",
      tools: ["Tableau", "Geospatial Analysis", "Open Data"],
      description: "Created an interactive map-based visualization overlapping regional poverty indices with existing clinic locations to identify underserved communities.",
      insights: "Highlighted 3 'dark zones' lacking facilities within a 50km radius, providing a data-backed justification for proposing a new mobile clinic route.",
      colorClass: "proj-quaternary",
      isFeatured: false
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Analytics storytelling and actionable insights derived from complex datasets.
        </p>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div className={`project-card ${project.isFeatured ? 'featured' : ''}`} key={idx}>
              <div className={`project-header ${project.colorClass}`}>
                <div className="project-top-row">
                  <h3 className="project-title">{project.title}</h3>
                  {project.isFeatured && <span className="featured-badge">Featured</span>}
                </div>
                <p className="project-category">{project.subtitle}</p>
                <div className="project-tools">
                  {project.tools.map((tool, tIdx) => (
                    <span className="tag" key={tIdx}>{tool}</span>
                  ))}
                </div>
              </div>
              <div className="project-body">
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                
                <div className="insight-box">
                  <div className="insight-header">
                    <h4>Key Insight</h4>
                  </div>
                  <p className="insight-text">{project.insights}</p>
                </div>
              </div>
              <div className="project-footer">
                <button className="btn btn-outline btn-full">View Case Study</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
