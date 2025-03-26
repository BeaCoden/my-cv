import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import cvData from "../../cvData.json";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ image, name, onDownloadCV, onPrintCV }) => {
  const { t } = useTranslation();

  return (
    <Card className={styles.cardContainer}>
      <div className={styles.imageWrapper}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className={styles.profileImage}
        />
      </div>
      <Card.Body>
        <Card.Title className="mt-3 mb-3 d-flex justify-content-between align-items-center">
          <hr />
        </Card.Title>
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="mx-2"
            onClick={onDownloadCV}>
            {t("profilCard.btn1")}
          </Button>
          <Button
            variant="secondary"
            className="mx-2"
            onClick={onPrintCV}>
            {t("profilCard.btn2")}
          </Button>
        </div>
      </Card.Body>
      <Card.Footer className={styles.cardFooter}>
        <a
          href={cvData.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a
          href={cvData.github}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub">
          <FaGithub />
        </a>
        <a
          href={`mailto:${cvData.email}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Email">
          <FaEnvelope />
        </a>
      </Card.Footer>
    </Card>
  );
};

export default ProfileCard;
