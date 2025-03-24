import React, { useState, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import { BsCodeSlash } from "react-icons/bs";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";
import styles from "./Navbar.module.css";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={styles.navbar}>
      <Container className={styles.containerCustom}>
        <Navbar.Brand
          href="/"
          className={styles.navbarBrandCustom}>
          <div className={styles.brandName}>
            <BsCodeSlash />
            Bea Pitzschke
          </div>
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
              href="/portfolio"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="/resume"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Lebenslauf
            </Nav.Link>
            <Nav.Link
              href="/skills"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Skills
            </Nav.Link>
            <Nav.Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={styles.navLink}>
              Kontakt
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center ms-auto">
            <button
              className={styles.toggleLanguage}
              type="button"
              onClick={toggleLanguage}>
              {language === "de" ? "DE" : "EN"}
            </button>

            <button
              className={styles.toggleTheme}
              type="button"
              onClick={toggleTheme}>
              {theme === "light" ? "Light" : "Dark"}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
