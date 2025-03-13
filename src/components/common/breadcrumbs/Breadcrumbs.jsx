import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb className={styles.breadcrumbContainer}>
      <Breadcrumb.Item
        linkAs={Link}
        linkProps={{ to: "/" }}>
        Zurück
      </Breadcrumb.Item>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <Breadcrumb.Item
            key={to}
            linkAs={Link}
            linkProps={{ to }}
            className={styles.breadcrumbItem}>
            {value}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
