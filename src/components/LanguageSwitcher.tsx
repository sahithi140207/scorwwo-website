import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const options = [
    { code: 'en', label: t.common.english },
    { code: 'hi', label: t.common.hindi },
  ] as const;

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(s => !s)}
        className="btn-lang"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Select language"
      >
        {lang === 'en' ? t.common.english : t.common.hindi} <span style={{ marginLeft: 6 }}>▾</span>
      </button>

      {open && (
        <div className="dropdown-list" role="menu" aria-label="Language menu">
          {options.map(o => (
            <button
              key={o.code}
              onClick={() => {
                setLang(o.code as 'en' | 'hi');
                setOpen(false);
              }}
              className="dropdown-item"
              style={{ padding: '8px 12px', width: '100%', background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer' }}
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
