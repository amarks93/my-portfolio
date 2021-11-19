import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="my-5">
      <Col className="mx-auto d-flex align-items-center justify-content-center">
        <FaCopyright className="mx-2" />
        2021 Design by Alexandra Marks
      </Col>
    </Container>
  );
};

export default Footer;
