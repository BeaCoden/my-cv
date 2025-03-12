import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../cvData.json";import "../App.css";

const Hero = () => {
  const { name, title, location, profile_image } = data;

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col
            md={3}
            className="text-center mb-4 mb-md-0">
            <img
              src={profile_image}
              alt="Profilbild"
              className="img-fluid rounded-circle"
              style={{ maxWidth: "150px" }}
            />
          </Col>
          <Col md={9}>
            <h1>{name}</h1>
            <h3>{title}</h3>
            <p>{location}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
