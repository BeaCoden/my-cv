import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // "light" oder "dark"

  // Optional: Theme in localStorage speichern/lesen
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("appTheme");
  //   if (savedTheme) setTheme(savedTheme);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("appTheme", theme);
  // }, [theme]);

  // Für ein globales CSS-Switching kannst du ein data-Attribut auf <body> setzen
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
