import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "../cvData.json";

const Portfolio = () => {
  const { projects } = data;

  return (
    <section
      id="portfolio"
      className="py-5">
      <Container>
        <h2>Projekte</h2>
        <Row>
          {projects.map((project, index) => (
            <Col
              md={6}
              lg={4}
              className="mb-4"
              key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{project.date}</Card.Subtitle>
                  <Card.Text>{project.description}</Card.Text>
                  {project.link && (
                    <Card.Link
                      href={project.link}
                      target="_blank">
                      Zum Projekt
                    </Card.Link>
                  )}
                  <br />
                  <strong>Tech Stack:</strong> {project.techstack}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
