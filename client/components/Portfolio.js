import React, { useState } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Slider from "react-slick";
import SingleProject from "./SingleProject";
import WorksInProgress from "./WorksInProgress";

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
              role="Team Developer"
              desc="An e-commerce website for purchasing your favorite characters."
              site="https://character-spot.herokuapp.com/"
              demo="https://youtu.be/Si6PQvqs2yw"
              repo="https://github.com/graceshopper-team-charmander/graceshopper-project"
              learnMore="My contributions toward this site include UI/UX design, the rendering of all products, single product, and order history pages, as well as ensuring accurate inventory and quantity counts upon adding products to cart. As a team, we worked together on schema design, express routes, and authentication."
              techStack="React | Redux | PostgreSQL | Sequelize | Express | Node.js"
            />
            <SingleProject
              role="Team Developer"
              desc="A mobile app for tracking the moles on your skin."
              site="https://mole-tracks.herokuapp.com/"
              demo="https://youtu.be/Kes7bkad9Hc"
              repo="https://github.com/2108-the-muses/mole-tracks"
              learnMore="My contributions toward this mobile application include the UI/UX design, the log in, single mole, add mole, entries, compare entries, and profile screens, as well as incorporating authentication with Firebase and Google sign in."
              techStack="React-Native | Redux | PostgreSQL | Sequelize | Express | Node.js | Firebase | Cloudinary | TensorFlow.js"
            />
            <SingleProject
              role="Solo Developer"
              desc="An old school RPG. Do chores - get points."
              site="https://being-a-grown-up.herokuapp.com/"
              demo="https://youtu.be/PFAz8eyRLew"
              repo="https://github.com/amarks93/being-a-grown-up"
              learnMore="I had so much fun creating the main scene and coming up with the theme for this game. Originally inspired by the many days I spent in my youth playing Harvest Moon from a floppy disk."
              techStack="JavaScript | Phaser 3 | Tiled | Webpack"
            />
            <WorksInProgress />
          </Slider>
        </Row>
      </Col>
    </Container>
  );
};

export default Portfolio;

// sm={12} md={6} lg={4}
