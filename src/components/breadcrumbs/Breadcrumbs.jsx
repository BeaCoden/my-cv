import React from "react";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathnames = location.pathname.split("/").filter((x) => x);

  const goHome = () => {
    navigate("/");
  };

  return (
    <Container className="mt-3">
      <Row className="align-items-center">
        <Col
          xs={12}
          md={8}>
          <Breadcrumb className={styles.breadcrumbContainer}>
            <Breadcrumb.Item
              as={Link}
              to="/"
              onClick={goHome}
              className={styles.breadcrumbItem}>
              Home
            </Breadcrumb.Item>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;
              return (
                <Breadcrumb.Item
                  key={to}
                  as={Link}
                  to={to}
                  className={styles.breadcrumbItem}>
                  {value}
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
