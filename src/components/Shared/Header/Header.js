import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#1f2235" }}
      className="py-3 fixed-top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          style={{ color: "#fff" }}
          className="web-name header-logo"
          to="/"
        >
          Fahad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{ color: "#fff" }} to="/">
              {" "}
              Home{" "}
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="#about">
              {" "}
              About{" "}
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="#project">
              {" "}
              Projects{" "}
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="#blog">
              {" "}
              Blog{" "}
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="#contact">
              {" "}
              Contact{" "}
            </Nav.Link>
            <Nav.Link
              style={{ color: "#fff" }}
              target="_blank"
              href="https://drive.google.com/file/d/1hUBC0rwgd58Qccijvve7surAoYIUrkXb/view"
              // className="p-0 px-2 active btn-brand"
            >
              Resume{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
