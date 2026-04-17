import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        
        <div className="about-grid">
          <div className="about-text-content">
            <p className="about-paragraph">
              Detail-oriented professional with a strong foundation in Software Engineering and growing expertise in data analytics. Experienced in working with data systems, dashboard development, and data processing. Skilled in transforming raw data into meaningful insights through cleaning, visualization, and analysis. Passionate about using data to support informed decision-making and solve real-world problems.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-card">
              <div className="h-text">
                <h4>Software Engineering</h4>
                <p>Python, TypeScript, SQL databases, and API integrations for complex data pipelines.</p>
              </div>
            </div>
            
            <div className="highlight-card top-highlight">
              <div className="h-text">
                <h4>Analytics & MEL</h4>
                <p>Power BI, Tableau, and data quality assurance for programmatic action.</p>
              </div>
            </div>
            
            <div className="highlight-card">
              <div className="h-text">
                <h4>NGO & Community Impact</h4>
                <p>Scalable participant tracking and learning workflows for development programs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
