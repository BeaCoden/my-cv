// Beispiel ThemeContext
import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Beim ersten Laden: aus localStorage lesen, sonst "light"
    const saved = localStorage.getItem("myAppTheme");
    return saved || "light";
  });

  useEffect(() => {
    // Jedes Mal, wenn sich theme ändert, in localStorage speichern
    localStorage.setItem("myAppTheme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
