import React, { createContext, useContext, useEffect, useState } from 'react';
import { en } from '../locales/en';
import { hi } from '../locales/hi';

type Lang = 'en' | 'hi';

type Translations = typeof en;

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
};

const defaultLang: Lang = 'en';

const defaultContext: LanguageContextType = {
  lang: defaultLang,
  setLang: () => {},
  t: en,
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(defaultLang);
  const [t, setT] = useState<typeof en>(en);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('site_lang') as Lang | null;
      if (stored === 'en' || stored === 'hi') {
        setLangState(stored);
        setT(stored === 'en' ? en : hi);
      }
    } catch (e) {
      // ignore localStorage errors
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    setT(l === 'en' ? en : hi);
    try {
      localStorage.setItem('site_lang', l);
    } catch (e) {
      // ignore
    }
  };

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
