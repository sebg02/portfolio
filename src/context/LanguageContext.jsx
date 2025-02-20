import React, { createContext, useState } from "react";
import { en } from "./english.js";
import { es } from "./spanish.js";

const LanguageContext = createContext();

const translations = {
  en: en,
  es: es,
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
