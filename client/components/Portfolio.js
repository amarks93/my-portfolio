import React, { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Slider from "react-slick";
import SingleProject from "./SingleProject";

const Portfolio = () => {
  const [navThumbnails, setNavThumbnails] = useState();
  const [navProject, setNavProject] = useState();

  var settings = {
    dots: true,
    asNavFor: navProject,
    ref: (selectColumn) => setNavThumbnails(selectColumn),
    slidesToShow: 3,
    focusOnSelect: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

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
          <Slider {...settings} className="thumbnail-parent">
            <Col className="thumbnail">
              <Image src="/images/character-spot-thumbnail.png" thumbnail />
            </Col>
            <Col className="thumbnail">
              <Image src="/images/mole-tracks-thumbnail.jpeg" thumbnail />
            </Col>
            <Col className="thumbnail">
              <Image src="/images/being-a-grown-up-thumbnail.png" thumbnail />
            </Col>
            <Col className="thumbnail">
              <Image src="/images/extras-and-wip-thumbnail.png" thumbnail />
            </Col>
          </Slider>
          <Slider
            asNavFor={navThumbnails}
            ref={(selectProject) => setNavProject(selectProject)}
            className="my-3"
          >
            <SingleProject
              title={"Character Spot"}
              role={"Team Developer"}
              desc={
                "An e-commerce website for purchasing your favorite characters."
              }
              imgSrc={"/images/character-spot-thumbnail.png"}
            />
            <SingleProject
              title={"Mole Tracks"}
              role={"Team Developer"}
              desc={"A mobile app for tracking the moles on your skin."}
              imgSrc={"/images/mole-tracks-thumbnail.png"}
            />
            <SingleProject
              title={"Being A Grown Up"}
              role={"Solo Developer"}
              desc={"An old school RPG. Do chores -> get points."}
              imgSrc={"/images/being-a-grown-up-thumbnail.png"}
            />
            <SingleProject
              title={"Extras and Works In Progress"}
              role={"Solo Developer"}
              desc={"A collection of things that I am proud of."}
              imgSrc={"/images/extra-and-wip-thumbnail.png"}
            />
          </Slider>
        </Row>
      </Col>
    </Container>
  );
};

export default Portfolio;

// sm={12} md={6} lg={4}
