import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Navigation und Hero als eigene Seiten
import Navigation from "./areas/navigation/Navbar";
import Hero from "./areas/hero/Hero";

// Deine weiteren Seiten
import About from "./areas/about/About";
import Portfolio from "./areas/portfolio/Portfolio";
import Experience from "./areas/experience/Experience";
import Education from "./areas/education/Education";
import Skills from "./areas/skills/Skills";
import Contact from "./areas/contact/Contact";

// Breadcrumb-Komponente (s. u.)
import Breadcrumbs from "./components/common/breadcrumbs/Breadcrumbs";

function App() {
  return (
    <Router>
      <Navigation />
      {/* Zeige überall die Breadcrumbs an */}
      <Breadcrumbs />

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
