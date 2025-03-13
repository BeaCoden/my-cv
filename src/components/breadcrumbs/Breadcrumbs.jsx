import React from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  // Splitte den Pfad
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Mapping
  const breadcrumbNames = {
    about: "Über mich",
    portfolio: "Portfolio",
    experience: "Erfahrung",
    education: "Abschlüsse",
    skills: "Skills",
    contact: "Kontakt",
    resume: "Lebenslauf",
    copyright: "Urheberrecht",
  };

  return (
    <Container className="mt-3">
      <Row className="align-items-center">
        <Col
          xs={12}
          md={8}>
          <Breadcrumb className={styles.breadcrumbContainer}>
            {/* Home */}
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/" }}
              className={styles.breadcrumbItem}>
              Home
            </Breadcrumb.Item>

            {/* Dynamische Breadcrumbs */}
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const displayName = breadcrumbNames[value] || value;
              return (
                <Breadcrumb.Item
                  key={to}
                  linkAs={Link}
                  linkProps={{ to }}
                  className={styles.breadcrumbItem}>
                  {displayName}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default Breadcrumbs;
