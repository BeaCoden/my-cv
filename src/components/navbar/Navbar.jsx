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
        <Navbar.Brand
          href="/"
          className={styles.navbarBrandCustom}>
          <div className={styles.brandName}>🔵 Bea Pitzschke</div>
          <div className={styles.brandTitle}>JUNIOR FRONTEND DEVELOPER</div>
        </Navbar.Brand>

        <div className={styles.customToggle}>
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${isOpen ? styles.navbarCollapseShow : styles.navbarCollapse}`}>
          <Nav>
            <Nav.Link
              href="/"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Über mich
            </Nav.Link>
            <Nav.Link
              href="/resume"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Lebenslauf
            </Nav.Link>
            <Nav.Link
              href="/portfolio"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="/contact"
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
