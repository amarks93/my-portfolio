import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";

const SingleProject = () => {
  return (
    <Container className="my-5" id="portfolio">
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
            definitely a theme. That theme is "all things cute, cuddly, and
            animated."
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleProject;
