import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { MdOutlineTranslate } from "react-icons/md";
import { Dropdown } from "react-bootstrap";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Dropdown>
      {/* Toggle button */}
      <Dropdown.Toggle
        variant="outline-primary"
        className="myLanguageDropdown">
        <MdOutlineTranslate />
        {/* {language === "de" ? "DE" : "EN"} */}
      </Dropdown.Toggle>

      {/* Dropdown menu */}
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            if (language !== "de") toggleLanguage();
          }}>
          DE
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            if (language !== "en") toggleLanguage();
          }}>
          EN
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
