import React, { useState } from "react";
import { Container } from "react-bootstrap";

const SingleProject = ({
  role,
  desc,
  site,
  demo,
  repo,
  learnMore,
  techStack,
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Container className="my-3 px-0" id="portfolio">
      <div className="d-flex flex-column align-items-center justify-content-start">
        <h4>{role}</h4>
        <p>{desc}</p>

        <div>
          <a
            className="mx-2"
            href={site}
            target="_blank"
            rel="noopener noreferrer"
          >
            Site
          </a>
          |
          <a
            className="mx-2"
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
          |
          <a
            className="mx-2"
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repo
          </a>
        </div>
        {showMore ? (
          <div className="my-3">
            <p>{learnMore}</p>
            <p>{techStack}</p>
            <a onClick={() => setShowMore(false)}>Close</a>
          </div>
        ) : (
          <div className="my-3">
            <a onClick={() => setShowMore(true)}>Learn more</a>
          </div>
        )}
      </div>
    </Container>
  );
};

export default SingleProject;
