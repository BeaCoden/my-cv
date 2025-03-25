import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../cvData.json";
import styles from "./Contact.module.css";

const Contact = () => {
  const { phone, email, linkedin, github } = data;

  return (
    <section
      id="contact"
      className="py-5 bg-light">
      <Container>
        <h2>Kontakt</h2>
        <Row>
          <Col>
            <p>
              <strong>Telefon:</strong> {phone}
            </p>
            <p>
              <strong>E-Mail:</strong> <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              <strong>LinkedIn:</strong>
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer">
                {linkedin}
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>
              <a
                href={github}
                target="_blank"
                rel="noreferrer">
                {github}
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
