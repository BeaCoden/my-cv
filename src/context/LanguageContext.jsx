import React, { createContext, useState } from "react";
import i18n from "../i18n";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("de");

  const toggleLanguage = () => {
    const newLanguage = language === "de" ? "en" : "de";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};
