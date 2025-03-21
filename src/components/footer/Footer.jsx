import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import cvData from "../../cvData.json";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          {/* Linke Spalte: Copyright */}
          <Col
            xs={12}
            md={6}
            className={styles.footerLeft}>
            <Link
              to="/copyright"
              className={styles.copyrightLink}>
              © {new Date().getFullYear()} {cvData.name}
            </Link>
          </Col>

          {/* Rechte Spalte: Social & Kontakt Icons */}
          <Col
            xs={12}
            md={6}
            className={styles.footerRight}>
            <div className={styles.socialIcons}>
              <a
                href={cvData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a
                href={cvData.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub">
                <FaGithub />
              </a>
              <a
                href={`mailto:${cvData.email}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Email">
                <FaEnvelope />
              </a>
              <a
                href={`tel:${cvData.phone}`}
                title="Telefon">
                <FaPhone />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
