import React from 'react';
import './Workflow.css';

const Workflow: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Data Collection",
      desc: "Structured forms and API pipelines to securely gather field data."
    },
    {
      num: "02",
      title: "Cleaning & Validation",
      desc: "Standardizing formats, handling missing values, and assuring data quality."
    },
    {
      num: "03",
      title: "Analysis",
      desc: "Finding patterns, trends, and correlations to answer programmatic questions."
    },
    {
      num: "04",
      title: "Visualization",
      desc: "Translating complex matrices into intuitive dashboard-style visualizations."
    },
    {
      num: "05",
      title: "Insight Generation",
      desc: "Deriving actionable recommendations to improve program impact."
    }
  ];

  return (
    <section className="section" id="workflow">
      <div className="container">
        <h2 className="section-title text-center">How I Work With Data</h2>
        <p className="section-subtitle text-center">
          A systematic lifecycle for transforming raw information into programmatic decisions.
        </p>

        <div className="workflow-horizontal">
          <div className="workflow-line"></div>
          <div className="workflow-steps-container">
            {steps.map((step, idx) => (
              <div className="workflow-step" key={idx}>
                <div className="workflow-dot-container">
                  <div className="workflow-dot"></div>
                </div>
                <div className="workflow-content">
                  <span className="workflow-num">{step.num}</span>
                  <h4 className="workflow-title">{step.title}</h4>
                  <p className="workflow-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
