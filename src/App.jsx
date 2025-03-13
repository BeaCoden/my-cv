import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Navigation und Hero als eigene Seiten
import Navigation from "./components/navigation/Navbar";
import Hero from "./pages/hero/Hero";

// Deine weiteren Seiten
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        {/* Startseite */}
        <Route
          path="/"
          element={<Hero />}
        />

        {/* Weitere Routen */}
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/experience"
          element={<Experience />}
        />
        <Route
          path="/education"
          element={<Education />}
        />
        <Route
          path="/skills"
          element={<Skills />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
