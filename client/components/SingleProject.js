import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

const SingleProject = ({
  title,
  role,
  desc,
  site,
  youTube,
  gitHub,
  imgSrc,
}) => {
  return (
    <Container className="my-2 px-0" id="portfolio">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1 className="align-self-center">{title}</h1>
        <h6 className="align-self-center">{desc}</h6>
        <div className="align-self-center">
          <a className="mx-2" href={site}>
            Site
          </a>
          |
          <a className="mx-2" href={youTube}>
            YouTube
          </a>
          |
          <a className="mx-2" href={gitHub}>
            GitHub
          </a>
        </div>
      </div>
    </Container>
  );
};

export default SingleProject;
