import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./areas/navigation/Navbar";
import Hero from "./areas/hero/Hero";
import About from "./areas/about/About";
import Portfolio from "./areas/portfolio/Portfolio";
import Experience from "./areas/experience/Experience";
import Education from "./areas/education/Education";
import Skills from "./areas/skills/Skills";
import Contact from "./areas/contact/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
