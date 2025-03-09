import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../cvData.json";

const Education = () => {
  const { education } = data;

  return (
    <section
      id="education"
      className="py-5">
      <Container>
        <h2>Ausbildung</h2>
        {education.map((edu, index) => (
          <Row
            key={index}
            className="mb-3">
            <Col>
              <h5>
                {edu.degree} in {edu.subject}
              </h5>
              <p>
                <strong>Zeitraum:</strong> {edu.date}
              </p>
              <p>
                <strong>Ort:</strong> {edu.location}
              </p>
              <p>
                <strong>Beschreibung:</strong> {edu.description}
              </p>
              {edu.link && (
                <p>
                  <strong>Website: </strong>
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noreferrer">
                    {edu.link}
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

export default Education;
