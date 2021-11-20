import React from "react";
import { Container, Navbar, Nav, ListGroup } from "react-bootstrap";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="my-3">
      <Container>
        <Navbar.Brand>Alexandra Marks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Navbar.Text className="mx-2 d-none d-md-block">|</Navbar.Text>
            <ListGroup horizontal className="d-flex">
              <Nav.Link
                href="https://github.com/amarks93"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <FaGithub />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/alexandravmarks/"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center center-site-link"
              >
                <FaLinkedinIn />
              </Nav.Link>
              <Nav.Link
                href="https://youtube.com/playlist?list=PL0CG9S_6mN0j0LcKT7AdL7Mz-XtqMXb3o"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <FaYoutube />
              </Nav.Link>
            </ListGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
