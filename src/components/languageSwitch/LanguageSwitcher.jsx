import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { MdOutlineTranslate } from "react-icons/md";
import { Dropdown } from "react-bootstrap";
import styles from "./LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Dropdown>
      <Dropdown.Toggle className={styles.dropdownToggle}>
        <MdOutlineTranslate />
      </Dropdown.Toggle>
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
