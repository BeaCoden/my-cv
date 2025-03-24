import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Button
      variant="outline-primary"
      onClick={toggleLanguage}>
      {language === "de" ? "DE" : "EN"}
    </Button>
  );
};

export default LanguageSwitcher;
