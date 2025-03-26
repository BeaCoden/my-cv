import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/LanguageContext";
import data from "../../cvData.json";
import styles from "./Experience.module.css";

const Experience = () => {
  const { experience } = data;
  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="py-5">
      <Container>
        <h2>{t("experience.header")}</h2>
        {experience.map((exp, index) => (
          <Row
            key={index}
            className="mb-3">
            <Col>
              <h5>
                {exp.position[language]} {t("experience.at")} {exp.company}
              </h5>
              <p>
                <strong>{t("experience.dateLabel")}</strong> {exp.date}
              </p>
              <p>
                <strong>{t("experience.descriptionLabel")}</strong> {exp.description[language]}
              </p>
              {exp.link && (
                <p>
                  <strong>{t("experience.linkLabel")}</strong>
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
