import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./areas/Navbar";
import Hero from "./areas/Hero";
import About from "./areas/About";
import Portfolio from "./areas/Portfolio";
import Experience from "./areas/Experience";
import Education from "./areas/Education";
import Skills from "./areas/Skills";
import Contact from "./areas/Contact";

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
