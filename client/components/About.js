import React, { useState } from "react";
import { Container, Col, Row, Image, ListGroup, Nav } from "react-bootstrap";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Container className="my-5" id="about">
      <Row>
        <Col
          sm={12}
          md={6}
          lg={8}
          className="d-flex flex-column justify-content-start"
        >
          <Row>
            <h4>Introduction</h4>
            <h1>Full Stack Web Developer</h1>
            <p>
              A New York City creative in software development. As a
              contortionist and dancer, I have an eye for detail and a constant
              diligence that has weaved its way into my career as a software
              engineer. I pursue every project with creativity, organization,
              and efficiency in mind in order to deliver applications with a
              seamless user experience.
              {showMore ? (
                <>
                  <br />
                  <br />I am currently working as a Teaching Fellow for the
                  Grace Hopper Program at Fullstack Academy where I mentor a
                  class of 30+ students, provide support, and aid them with
                  engineering technical concepts, algorithms, and debugging.
                  <br />
                  <br />
                  When I am not coding, I am training contortion and handstands,
                  finding new animes to binge, and cuddling with my cat, Luna
                  (as in Lovegood, but also as in the cat from Sailor Moon). I
                  love video editing, playing around on PicMonkey, and getting
                  creative with all different mediums. Van Leeuwen's vegan mint
                  chocolate chip ice cream is my dessert of choice.
                  <a className="mx-1" onClick={() => setShowMore(false)}>
                    Close
                  </a>
                </>
              ) : (
                <a className="mx-1" onClick={() => setShowMore(true)}>
                  Learn more
                </a>
              )}
            </p>
          </Row>
          <Row>
            <ListGroup
              horizontal
              className="d-flex justify-content-end align-items-center"
            >
              <Nav.Link
                href="https://github.com/amarks93"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Nav.Link>
              <span>|</span>
              <Nav.Link
                href="https://www.linkedin.com/in/alexandravmarks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Nav.Link>
              <span>|</span>
              <Nav.Link
                href="https://youtube.com/playlist?list=PL0CG9S_6mN0j0LcKT7AdL7Mz-XtqMXb3o"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </Nav.Link>
            </ListGroup>
          </Row>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Image src="/images/alexandra-marks.png" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
