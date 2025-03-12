import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../cvData.json";
import ProfileCard from "../components/common/ProfileCard";
import "../App.css";

const Hero = () => {
  const { name, title, location, profile_image } = data;

  // Beispiel-Handler für die Buttons
  const handleDownloadCV = () => {
    // Hier kannst du z. B. ein PDF öffnen oder herunterladen
    // window.open("/pfad/zu/deinemCV.pdf");
    // oder Druck-Dialog: window.print();
    console.log("CV-Download / Print ausgelöst");
  };

  const handleHireMe = () => {
    // Hier kannst du z. B. ein Kontaktformular öffnen
    // oder eine Mailto-Option triggern
    console.log("Hire Me geklickt");
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <ProfileCard
              image={profile_image}
              name={name}
              title={title}
              onDownloadCV={handleDownloadCV}
              onHireMe={handleHireMe}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col
            md={6}
            className="text-center">
            <p>{location}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
