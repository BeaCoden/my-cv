import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../App.css";
const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg">
      <Container>
        <Navbar.Brand href="#home">Mein CV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">Über mich</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
