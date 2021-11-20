import React, { useState } from "react";
import { Container } from "react-bootstrap";

const WorksInProgress = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Container className="my-3 px-0" id="portfolio">
      <div className="d-flex flex-column align-items-center justify-content-start">
        <h4>Solo Developer</h4>
        <p>A few simple knick knacks and things.</p>
        <div>
          <a
            className="mx-2"
            href="https://youtu.be/npBLPxUnGTg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Four Nations Academy
          </a>
          |
          <a
            className="mx-2"
            href="https://amarks93.github.io/guessing-game/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Guessing Game
          </a>
          |
          <a
            className="mx-2"
            href="https://youtu.be/mb_6eb06_fU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Litter Track
          </a>
        </div>
        {showMore ? (
          <div className="my-3">
            <p>
              Four Nations Academy: A full stack web application to help the
              University administrators keep track of their campuses and
              students. My Grace Hopper Junior Phase final. CSS from scratch.
              Avatar themed because I love Avatar.
            </p>
            <p>
              Guessing Game: Guess the correct number with help from Team Avatar
              (I told you there was a theme)! It's a visual and auditory
              experience that I created during the Foundations phase of my
              program at Grace Hopper.
            </p>
            <p>
              Litter Track: My first attempt at a mobile application. It's
              really cute, although it does have it's uh...quirks. Sharing for
              humor and because I had a blast editing the demo video.
            </p>
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

export default WorksInProgress;
