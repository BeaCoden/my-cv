import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../../context/LanguageContext";
import data from "../../cvData.json";
import { MdWeb } from "react-icons/md";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  const { projects } = data;
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <section
      id="portfolio"
      className="py-5">
      <Container>
        <h2>
          <MdWeb className={styles.icon} />
          {t("portfolio.header")}
        </h2>
        <Row>
          {projects.map((project, index) => (
            <Col
              md={6}
              lg={4}
              className="mb-4"
              key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>{project.title[language]}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{project.date[language]}</Card.Subtitle>
                  <Card.Text>{project.description[language]}</Card.Text>
                  {project.link && (
                    <Card.Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer">
                      {t("portfolio.projectLink")}
                    </Card.Link>
                  )}
                  <br />
                  <strong>{t("portfolio.techStackLabel")}</strong> {project.techstack}
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
