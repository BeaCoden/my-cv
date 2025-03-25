import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from "./locales/de/translationDE.json";
import translationEN from "./locales/en/translationEN.json";
import cvData from "./cvData.json";

const resources = {
  de: { translation: translationDE },
  en: { translation: translationEN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de", // Standard-Sprache
  fallbackLng: "en", // Fallback
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
