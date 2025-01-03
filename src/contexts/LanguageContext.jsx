import React, { createContext, useState, useContext } from 'react';
import translations from '../data/translations.json';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const value = {
    language,
    setLanguage,
    translations: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);