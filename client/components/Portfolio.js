import React, { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Slider from "react-slick";

const Portfolio = () => {
  const [navThumbnails, setNavThumbnails] = useState();
  const [navProject, setNavProject] = useState();

  return (
    <Container className="my-5" id="portfolio">
      <Col className="mx-auto">
        <Row>
          <Col
            sm={12}
            md={10}
            lg={8}
            className="mx-auto"
            style={{ textAlign: "center" }}
          >
            <h4>Portfolio</h4>
            <h1>My Projects</h1>
            <p>
              A series of projects that I developed in the past year. There is
              definitely a theme. That theme is "all things cute, nostalgic, and
              animated."
            </p>
          </Col>
        </Row>
        <Row className="d-flex flex-row justify-content-around">
          {/* <Slider
            asNavFor={navThumbnails}
            ref={(selectedCol) => setNavThumbnails(selectedCol)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}

          > */}
          <Col sm={12} md={6} lg={4} className="mb-3">
            <Image src="/images/character-spot-thumbnail.png" thumbnail />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-3">
            <Image src="/images/mole-tracks-thumbnail.jpeg" thumbnail />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-3">
            <Image src="/images/being-a-grown-up-thumbnail.png" thumbnail />
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-3">
            <Image src="/images/extras-and-wip-thumbnail.png" thumbnail />
          </Col>
          {/* </Slider> */}
        </Row>
      </Col>
    </Container>
  );
};

export default Portfolio;

// sm={12} md={6} lg={4} className="mb-3"
