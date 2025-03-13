import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/navbar/Navbar";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Hero from "./pages/hero/Hero";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";

const ConditionalBreadcrumbs = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return <Breadcrumbs />;
};

function App() {
  return (
    <Router>
      <Navigation />
      <ConditionalBreadcrumbs />
      <Routes>
        <Route
          path="/"
          element={<Hero />}
        />
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
