import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/LanguageContext";
import data from "../../cvData.json";
import styles from "./Skills.module.css";

const Skills = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="skills"
      className="py-5 bg-light">
      <Container>
        <h2>{t("skills.header")}</h2>

        <Row>
          <Col>
            <h3>{t("skills.frontend")}</h3>
            <ul>
              {data.skills.frontend.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>{t("skills.backend")}</h3>
            <ul>
              {data.skills.backend.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>{t("skills.tools")}</h3>
            <ul>
              {data.skills.tools[language].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3>{t("skills.soft")}</h3>
            <ul>
              {data.skills.soft[language].map((item, i) => (
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
