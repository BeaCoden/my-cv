import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";
import data from "../../cvData.json";

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="about"
      className="py-5">
      <Container>
        <Row>
          <Col>
            <h2>{language === "de" ? "Über mich" : "About me"}</h2>
            <p>{data.about[language]}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
