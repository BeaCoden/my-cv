import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../cvData.json";
import ProfileCard from "../../components/profilCard/ProfileCard";
import About from "../about/About";
import styles from "./Hero.module.css";

const Hero = () => {
  const { name, title, profile_image, location } = data;

  const handleDownloadCV = () => {
    console.log("triggered download btn");
  };

  const handlePrintCV = () => {
    console.log("triggered drucken btn");
  };

  return (
    <section>
      <Container
        fluid
        className="p-0 h-100">
        <Row className="h-100 m-0 p-0 flex-wrap">
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
                onPrintCV={handlePrintCV}
              />
            </div>
          </Col>
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
