import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import cvData from "../../cvData.json";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="justify-content-between align-items-center">
          {/* Linke Spalte: Copyright-Link */}
          <Col
            xs={12}
            md={4}
            className={styles.footerLeft}>
            <Link
              to="/copyright"
              className={styles.copyrightLink}>
              © {new Date().getFullYear()} {cvData.name} – Alle rechtlichen Hinweise
            </Link>
          </Col>

          {/* Rechte Spalte: Kontakt & Socials */}
          <Col
            xs={12}
            md={4}
            className={styles.footerRight}>
            <div className={styles.contactBlock}>
              <span className={styles.contactTitle}>Telefon: </span>
              <span className={styles.contactInfo}>{cvData.phone}</span>
            </div>
            <div className={styles.contactBlock}>
              <span className={styles.contactTitle}>E-Mail: </span>
              <span className={styles.contactInfo}>
                <a href={`mailto:${cvData.email}`}>{cvData.email}</a>
              </span>
            </div>
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
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
