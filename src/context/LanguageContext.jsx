import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("de"); // "de" oder "en"

  // Optional: Sprache in localStorage speichern/lesen
  // useEffect(() => {
  //   const savedLanguage = localStorage.getItem("appLanguage");
  //   if (savedLanguage) setLanguage(savedLanguage);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("appLanguage", language);
  // }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "de" ? "en" : "de"));
  };

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>;
};
