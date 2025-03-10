import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import "../App.css";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar
      className={!isOpen ? "navbar-closed" : ""}
      sticky="top"
      bg="dark"
      variant="dark"
      expand="lg">
      <Container>
        <Navbar.Brand href="#home">🔵 Bea Pitzschke JUNIOR FRONTEND DEVELOPER</Navbar.Brand>
        <div className="custom-toggle">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#fff"
          />
        </div>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isOpen ? "show" : ""}>
          <Nav className="ml-auto">
            <Nav.Link
              href="#about"
              onClick={() => setOpen(false)}>
              Über mich
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => setOpen(false)}>
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => setOpen(false)}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
