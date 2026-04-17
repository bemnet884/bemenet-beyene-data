import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-background">
        {/* Soft geometric background representing data nodes */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container hero-container animate-fade-in">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse"></span> Open to MEL, Data Analyst & Data Entry Roles
          </div>
          <h1 className="hero-title">
            Turning Data into Insights for <span className="highlight-text">Impact-Driven</span> Decisions
          </h1>
          <p className="hero-subtitle">
            Data Analytics & Data Entry | Dashboards | MEL Systems | NGO Programs
          </p>
          <div className="hero-actions">
            <a href="/Bemenet B. Data.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">View Resume</a>
            <a href="#contact" className="btn btn-outline btn-lg">Contact Me</a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in delay-200">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="mockup-body">
              <div className="widget-row top">
                <div className="widget metric-card fade-in-up delay-300">
                  <div className="w-icon bg-blue">KPI</div>
                  <div className="w-data">
                    <span className="w-val">24,500</span>
                    <span className="w-label">Program Participants</span>
                  </div>
                </div>
                <div className="widget metric-card fade-in-up delay-400">
                  <div className="w-icon bg-green">TGT</div>
                  <div className="w-data">
                    <span className="w-val">87%</span>
                    <span className="w-label">Target Completion</span>
                  </div>
                </div>
              </div>
              <div className="widget chart-card fade-in-up delay-500">
                <div className="chart-header">
                  <div className="c-title">Impact Trend Over Time</div>
                </div>
                <div className="chart-bars">
                  <div className="bar b1"></div>
                  <div className="bar b2"></div>
                  <div className="bar b3"></div>
                  <div className="bar b4"></div>
                  <div className="bar b5"></div>
                  <div className="bar b6"></div>
                  <div className="bar b7"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
