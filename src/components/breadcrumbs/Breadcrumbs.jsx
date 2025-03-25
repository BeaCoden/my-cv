import React from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Container className="mt-3">
      <Row className="align-items-center">
        <Col
          xs={12}
          md={8}>
          <Breadcrumb className={styles.breadcrumbContainer}>
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{ to: "/" }}
              className={styles.breadcrumbItem}>
              {t("breadcrumb.home")}
            </Breadcrumb.Item>

            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              const displayName = t(`breadcrumb.${value}`, { defaultValue: value });

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
