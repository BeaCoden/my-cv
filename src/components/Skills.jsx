import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../cvData.json";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-5 bg-light">
      <Container>
        <h2>Skills</h2>
        <Row>
          <Col>
            <h3>Frontend</h3>
            <ul>
              {data.skills.frontend.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Backend & APIs</h3>
            <ul>
              {data.skills.backend.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Tools & Sonstiges</h3>
            <ul>
              {data.skills.tools.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Soft Skills</h3>
            <ul>
              {data.skills.soft.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
