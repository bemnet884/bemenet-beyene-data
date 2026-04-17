import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-info">
            <h2>Let's build data-driven impact together.</h2>
            <p>
              Open to opportunities in Monitoring, Evaluation, and Learning (MEL) or Data Analytics roles within NGOs and impact-driven organizations.
            </p>

            <div className="contact-methods">
              <a href="mailto:bemnet537@gmail.com" className="contact-link">
                <span className="c-icon">@</span> bemnet537@gmail.com
              </a>
              <a href="tel:+251936950355" className="contact-link">
                <span className="c-icon">T</span> +251 93-695-0355
              </a>
              <a href="https://linkedin.com/in/bemnetbeyene" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="c-icon">in</span> LinkedIn
              </a>
              <a href="https://github.com/bemnet884" className="contact-link" target="_blank" rel="noopener noreferrer">
                <span className="c-icon">&lt;/&gt;</span> GitHub
              </a>
            </div>

            <a href="/Bemenet B. Data.pdf" download className="btn btn-primary btn-cv" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
              Download CV
            </a>
          </div>

          <div className="footer-visual">
            <div className="impact-badge">
              <div className="badge-inner">
                <span className="b-num">100%</span>
                <span className="b-text">Focus on Insights</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bemenet Beyene</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
