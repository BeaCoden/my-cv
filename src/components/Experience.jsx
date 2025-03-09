import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../cvData.json";

const Experience = () => {
  const { experience } = data;

  return (
    <section
      id="experience"
      className="py-5">
      <Container>
        <h2>Berufserfahrung</h2>
        {experience.map((exp, index) => (
          <Row
            key={index}
            className="mb-3">
            <Col>
              <h5>
                {exp.position} bei {exp.company}
              </h5>
              <p>
                <strong>Zeitraum:</strong> {exp.date}
              </p>
              <p>
                <strong>Beschreibung:</strong> {exp.description}
              </p>
              {exp.link && (
                <p>
                  <strong>Website: </strong>
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer">
                    {exp.link}
                  </a>
                </p>
              )}
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
