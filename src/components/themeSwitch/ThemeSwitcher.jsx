import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Button
      variant="outline-secondary"
      onClick={toggleTheme}>
      {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </Button>
  );
};

export default ThemeSwitcher;
