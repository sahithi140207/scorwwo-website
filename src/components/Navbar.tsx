import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <header className="top-header">
      <div className="logo-section">
        <img src="logo.jpeg" alt="South Coast Railway Logo" className="logo" />
        <h2>SCoR WWO</h2>
      </div>
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder={t.forms.searchPlaceholder} />
          <button><i className="ph ph-magnifying-glass"></i></button>
        </div>
      </div>
      <div className="header-right">
        <LanguageSwitcher />
        <button className="btn-icon"><i className="ph ph-sun"></i></button>
        <button className="btn-helpline"><i className="ph ph-phone"></i> Helpline 139</button>
      </div>
    </header>
  );
}
