import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
// Optionally import icons, e.g. import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // If you want to apply a data-theme to <body> for global styling:
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="toggleTheme" // We'll style this in CSS
    >
      {theme === "light" ? "☀️" : "🌙"}
      {/* Or <FaSun /> : <FaMoon /> if using react-icons */}
    </button>
  );
};

export default ThemeSwitcher;
