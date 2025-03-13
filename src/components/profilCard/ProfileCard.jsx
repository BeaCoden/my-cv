import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ image, name, title, onDownloadCV, onHireMe }) => {
  return (
    <Card className={`text-center p-3 ${styles.cardContainer}`}>
      {/* Profilbild oben, rund dargestellt */}
      <div className={styles.imageWrapper}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className={`rounded-circle ${styles.profileImage}`}
        />
      </div>

      <Card.Body>
        <Card.Title className="mt-3">{name}</Card.Title>
        <Card.Subtitle className="text-muted mb-4">{title}</Card.Subtitle>

        {/* Buttons nebeneinander */}
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="mx-2"
            onClick={onDownloadCV}>
            Lebenslauf
          </Button>
          <Button
            variant="secondary"
            className="mx-2"
            onClick={onHireMe}>
            Hire Me
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
