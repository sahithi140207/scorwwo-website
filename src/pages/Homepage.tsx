import React from 'react';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';

function Content() {
  const { t } = useLanguage();

  return (
    <main className="main-content">
      <Navbar />

      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>{t.hero.titleLine1} <br />{t.hero.titleLine2}</h1>
            <p>{t.hero.paragraph}</p>
            <button className="btn-primary">{t.hero.exploreMore} <i className="ph ph-arrow-right"></i></button>
          </div>
        </div>
      </section>

      <div className="quick-access-wrapper">
        <div className="qa-title">
          <h4>QUICK<br/>ACCESS</h4>
        </div>
        <div className="qa-items">
          <div className="qa-item pnr-card">
            <i className="ph-fill ph-ticket" style={{color: '#6366f1'}}></i>
            <h5>{t.quickAccess.pnr}</h5>
            <p>Check your PNR</p>
          </div>
          <div className="qa-item rrb-card">
            <i className="ph-fill ph-train" style={{color: '#10b981'}}></i>
            <h5>{t.quickAccess.rrb}</h5>
            <p>Get updates on RRB notifications</p>
          </div>
          <a href="vacancies.html" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="qa-item">
              <i className="ph-fill ph-clock-countdown" style={{color: '#f59e0b'}}></i>
              <h5>{t.quickAccess.vacancies}</h5>
              <p>Check available seats</p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default function HomepageWrapper() {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
}
