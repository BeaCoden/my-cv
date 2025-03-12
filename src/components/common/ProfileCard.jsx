import React from "react";
import { Card, Button } from "react-bootstrap";

const ProfileCard = ({ image, name, title, onDownloadCV, onHireMe }) => {
  return (
    <Card
      className="text-center p-3"
      style={{ maxWidth: "20rem", margin: "0 auto" }}>
      {/* Profilbild oben, rund dargestellt */}
      <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          className="rounded-circle"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
