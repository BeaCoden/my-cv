import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LanguageContext } from "../../context/LanguageContext";
import data from "../../cvData.json";

const Education = () => {
  const { education } = data;
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="education"
      className="py-5">
      <Container>
        <h2>{language === "de" ? "Ausbildung" : "Education"}</h2>
        {education.map((edu, index) => (
          <Row
            key={index}
            className="mb-3">
            <Col>
              <h5>{edu.title[language]}</h5>
              <p>
                <strong>{language === "de" ? "Zeitraum:" : "Period:"}</strong> {edu.date[language]}
              </p>
              {typeof edu.link === "string" ? (
                <p>
                  <strong>{language === "de" ? "Webseite:" : "Website:"}</strong>{" "}
                  <a
                    href={edu.link}
                    target="_blank"
                    rel="noreferrer">
                    {edu.link}
                  </a>
                </p>
              ) : edu.link && typeof edu.link === "object" ? (
                <p>
                  <strong>{language === "de" ? "Webseite:" : "Website:"}</strong> {edu.link[language]}
                </p>
              ) : null}
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default Education;
