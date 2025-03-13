import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Experience from "../../pages/experience/Experience";
import Education from "../../pages/education/Education";
import Skills from "../../pages/skills/Skills";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <section className={styles.resumeSection}>
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}>Erfahrung</h2>
            <Experience />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}>Abschlüsse</h2>
            <Education />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <Skills />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
