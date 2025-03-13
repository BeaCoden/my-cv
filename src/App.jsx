import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Navigation from "./components/navbar/Navbar";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import Experience from "./pages/experience/Experience";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Resume from "./components/resume/Resume";
import Copyright from "./pages/copyrights/Copyright";
import Footer from "./components/footer/Footer";
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
          element={<Home />}
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
        <Route
          path="/resume"
          element={<Resume />}
        />
        <Route
          path="/copyright"
          element={<Copyright />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
