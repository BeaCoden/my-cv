import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../../cvData.json";
import ProfileCard from "../../components/profilCard/ProfileCard";
import About from "../about/About";
import styles from "./Hero.module.css";

const Hero = () => {
  const { name, title, location, profile_image } = data;
  const navigate = useNavigate();

  const handleDownloadCV = () => {
    navigate("/resume");
    console.log("CV-Download / Print ausgelöst");
  };

  const handleHireMe = () => {
    // Hier kannst du z. B. ein Kontaktformular öffnen
    // oder eine Mailto-Option triggern
    console.log("Hire Me geklickt");
  };

  return (
    // Fluid Container und Volle Höhe
    <section className={styles.heroSection}>
      <Container
        fluid
        className="h-100">
        <Row className="h-100">
          {/* Linke Hälfte */}
          <Col
            md={6}
            className={styles.leftHalf}>
            <div className={styles.contentWrapper}>
              <ProfileCard
                image={profile_image}
                name={name}
                title={title}
                onDownloadCV={handleDownloadCV}
                onHireMe={handleHireMe}
              />
              <p>{location}</p>
            </div>
          </Col>

          {/* Rechte Hälfte */}
          <Col
            md={6}
            className={styles.rightHalf}>
            <div className={styles.contentWrapper}>
              <About />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
