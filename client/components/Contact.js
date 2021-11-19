import React, { useState } from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";

const Contact = () => {
  const [showNumber, setShowNumber] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showUsername, setShowUsername] = useState(false);

  return (
    <Container
      className="my-10 d-flex flex-row flex-wrap align-items-center"
      id="contact"
    >
      <Col sm={12} md={6} lg={5} className="mx-auto">
        <Image fluid src="/images/alexandra-butterfly-2.png" />
      </Col>
      <Col sm={12} md={6} lg={7} className="mx-auto">
        <Row>
          <Col className="mx-auto text-nowrap" style={{ textAlign: "center" }}>
            <h4>Contact</h4>
            <h1>Ways To Contact Me</h1>
            <p>Call me, beep me, if you wanna reach me.</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col sm={12} md={8} className="mb-3">
            <Button
              variant="outline-secondary"
              href="mailto:amarks93@gmail.com"
              onMouseEnter={() => setShowEmail(true)}
              onMouseLeave={() => setShowEmail(false)}
              className="contact-button"
            >
              {showEmail ? "amarks93@gmail.com" : "Email"}
            </Button>
          </Col>
          <Col sm={12} md={8} className="mb-3">
            <Button
              variant="outline-secondary"
              href="tel:+18452161847"
              onMouseEnter={() => setShowNumber(true)}
              onMouseLeave={() => setShowNumber(false)}
              className="contact-button"
            >
              {showNumber ? "845 216 1847" : "Call"}
            </Button>
          </Col>
          <Col sm={12} md={8} className="mb-3">
            <Button
              variant="outline-secondary"
              href="https://www.linkedin.com/in/alexandravmarks/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setShowUsername(true)}
              onMouseLeave={() => setShowUsername(false)}
              className="contact-button"
            >
              {showUsername ? "alexandravmarks" : "Message"}
            </Button>
          </Col>
        </Row>
      </Col>
      {/* <Col sm={12} md={6} lg={6} className="mx-auto">
        <Row>
          <Col className="mx-auto text-nowrap" style={{ textAlign: "center" }}>
            <h4>Socials</h4>
            <h1>My Artist Pages</h1>
            <p>I'm like Hannah: living the best of both worlds.</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col sm={12} md={8} className="mb-3">
            <Button
              variant="outline-secondary"
              href="mailto:amarks93@gmail.com"
              onMouseEnter={() => setShowEmail(true)}
              onMouseLeave={() => setShowEmail(false)}
              className="contact-button"
            >
              {showEmail ? "amarks93@gmail.com" : "Performance Site"}
            </Button>
          </Col>
          <Col sm={12} md={8} className="mb-3">
            <Button
              variant="outline-secondary"
              href="tel:+18452161847"
              onMouseEnter={() => setShowNumber(true)}
              onMouseLeave={() => setShowNumber(false)}
              className="contact-button"
            >
              {showNumber ? "845 216 1847" : "Instagram"}
            </Button>
          </Col>
          <Col sm={12} md={8} className="mb-3">
            <Button
              variant="outline-secondary"
              href="https://www.linkedin.com/in/alexandravmarks/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setShowUsername(true)}
              onMouseLeave={() => setShowUsername(false)}
              className="contact-button"
            >
              {showUsername ? "alexandravmarks" : "YouTube"}
            </Button>
          </Col>
        </Row>
      </Col> */}
    </Container>
  );
};

export default Contact;
