import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ image, name, onDownloadCV, onPrintCV }) => {
  return (
    <Card className={`text-center p-3 ${styles.cardContainer}`}>
      <div className={styles.imageWrapper}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className={styles.profileImage}
        />
      </div>
      <Card.Body>
        <Card.Title className="mt-3 mb-3">{name}</Card.Title>
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="mx-2"
            onClick={onDownloadCV}>
            download
          </Button>
          <Button
            variant="secondary"
            className="mx-2"
            onClick={onPrintCV}>
            drucken
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
