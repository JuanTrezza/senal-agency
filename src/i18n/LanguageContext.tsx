import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { es, Translations } from './es';
import { en } from './en';

export type Language = 'es' | 'en';

interface LanguageContextType {
  readonly lang: Language;
  readonly t: Translations;
  readonly setLang: (newLang: Language) => void;
  readonly toggleLang: () => void;
  readonly formatNumber: (value: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'es';

  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'es' || saved === 'en') {
      return saved;
    }

    if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
      return 'en';
    }
  } catch {
    // fallback
  }

  return 'es';
}

export const LanguageProvider: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    } catch {
      // ignore
    }
  }, [lang]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const toggleLang = () => {
    setLangState((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t: Translations = useMemo(() => {
    return lang === 'en' ? en : es;
  }, [lang]);

  const formatNumber = useMemo(() => {
    const formatter = new Intl.NumberFormat(lang === 'es' ? 'es-AR' : 'en-US');
    return (value: number) => formatter.format(value);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t,
      setLang,
      toggleLang,
      formatNumber,
    }),
    [lang, t, formatNumber]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
