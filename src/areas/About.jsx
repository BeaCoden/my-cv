import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../cvData.json";
import "../App.css";

const About = () => {
  return (
    <section
      id="about"
      className="py-5">
      <Container>
        <Row>
          <Col>
            <h2>Über mich</h2>
            <p>{data.about}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
