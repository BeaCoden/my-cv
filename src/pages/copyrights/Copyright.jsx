import React from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styles from "./Copyright.module.css";

const Copyright = () => {
  const { t } = useTranslation();

  return (
    <Container className={`py-5 ${styles.copyright}`}>
      <h1>{t("copyright.header")}</h1>

      <h2>{t("copyright.section1.title")}</h2>
      <p>{t("copyright.section1.text")}</p>

      <h2>{t("copyright.section2.title")}</h2>
      <p>{t("copyright.section2.text")}</p>

      <h2>{t("copyright.section3.title")}</h2>
      <p>{t("copyright.section3.text")}</p>

      <h2>{t("copyright.section4.title")}</h2>
      <p>{t("copyright.section4.text")}</p>

      <h2>{t("copyright.section5.title")}</h2>
      <p>{t("copyright.section5.text")}</p>

      <h2>{t("copyright.section6.title")}</h2>
      <p>{t("copyright.section6.text")}</p>

      <p className={styles.signature}>
        &copy; {new Date().getFullYear()} {t("copyright.signature")}
      </p>
    </Container>
  );
};

export default Copyright;
