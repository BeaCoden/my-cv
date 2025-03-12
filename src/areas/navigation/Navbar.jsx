import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import styles from "./Navbar.module.css";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar
      className={!isOpen ? "navbar-closed" : ""}
      sticky="top"
      expand="lg">
      <Container className="container-custom">
        {/* Brand links */}
        <Navbar.Brand
          href="#home"
          className="navbar-brand-custom">
          <div className="brand-name">🔵 Bea Pitzschke</div>
          <div className="brand-title">JUNIOR FRONTEND DEVELOPER</div>
        </Navbar.Brand>

        {/* Hamburger Icon rechts */}
        <div className="custom-toggle">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#fff"
          />
        </div>

        {/* Nav-Collapse */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isOpen ? "show ms-auto" : "ms-auto"}>
          <Nav>
            <Nav.Link
              href="#about"
              onClick={() => setOpen(false)}>
              Über mich
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => setOpen(false)}>
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#experience"
              onClick={() => setOpen(false)}>
              Erfahrung
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => setOpen(false)}>
              Skills
            </Nav.Link>
            <Nav.Link
              href="#education"
              onClick={() => setOpen(false)}>
              Abschlüsse
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => setOpen(false)}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
