import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import styles from "./Navbar.module.css";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={styles.navbar}>
      <Container className={styles.containerCustom}>
        {/* Brand links */}
        <Navbar.Brand
          href="#home"
          className={styles.navbarBrandCustom}>
          <div className={styles.brandName}>🔵 Bea Pitzschke</div>
          <div className={styles.brandTitle}>JUNIOR FRONTEND DEVELOPER</div>
        </Navbar.Brand>

        {/* Hamburger Icon (sichtbar nur unter 992px) */}
        <div className={styles.customToggle}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#fff"
          />
        </div>

        {/* Kollabierende Nav – Klasse wird je nach isOpen gesetzt */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${isOpen ? styles.navbarCollapseShow : styles.navbarCollapse}`}>
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Über mich
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#experience"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Erfahrung
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Skills
            </Nav.Link>
            <Nav.Link
              href="#education"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Abschlüsse
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
