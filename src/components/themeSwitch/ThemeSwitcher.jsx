import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import styles from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.toggleTheme}>
      {theme === "light" ? <GoSun /> : <FaRegMoon />}
    </button>
  );
};

export default ThemeSwitcher;
