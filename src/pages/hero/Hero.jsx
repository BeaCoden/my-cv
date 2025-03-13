import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../cvData.json";
import ProfileCard from "../../components/profilCard/ProfileCard";
import About from "../about/About";
import styles from "./Hero.module.css";

const Hero = () => {
  const { name, title, profile_image, location } = data;

  const handleDownloadCV = () => {
    console.log("CV-Download / Print ausgelöst");
  };

  const handleHireMe = () => {
    console.log("Hire Me geklickt");
  };

  return (
    <section className={styles.heroSection}>
      <Container
        fluid
        className="p-0 h-100">
        <Row className="h-100 m-0 p-0 flex-wrap">
          {/* Linke Hälfte */}
          <Col
            xs={12}
            md={6}
            className={styles.leftHalf}>
            <div className={styles.contentWrapper}>
              <ProfileCard
                image={profile_image}
                name={name}
                title={title}
                location={location}
                onDownloadCV={handleDownloadCV}
                onHireMe={handleHireMe}
              />
            </div>
          </Col>

          {/* Rechte Hälfte */}
          <Col
            xs={12}
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
