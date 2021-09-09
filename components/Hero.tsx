import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "./BaseSection";

export const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (imageLoaded) {
      console.log("loaded");
    }
  }, [imageLoaded]);

  return (
    <BaseSection sectionClassName="hero d-flex align-items-center mb-4">
      <Container className="hero__container">
        <Row>
          <Col lg={4} className="align-self-center">
            <div className="hero__image-container d-flex justify-content-center d-lg-none mb-4">
              <img
                id="hero__image"
                className="hero__image"
                src="./images/profile.jpg"
                alt="placeholder"
                onLoad={() => {
                  setImageLoaded(true);
                }}
              />
            </div>
            <h1 className="heading--primary mb-4">
              I'm Kento, A Web Developer.
            </h1>
            <p className="hero__blurb heading--secondary mb-4">
              I'm a developer with a keen eye for designing intuitive and
              engaging user interfaces to bring life into your digital product.
            </p>
            <a href="mailto:kento@kentokanazawa.com" className="primary-button">
              Get In Touch{" "}
              <span className="animated-caret">
                <FontAwesomeIcon icon={faCaretRight} />
              </span>
            </a>
          </Col>
          <Col
            className="hero__image-section align-self-center mt-4 mt-lg-0 d-lg-block d-none"
            style={{ position: "relative" }}
          >
            <img
              src="./images/dots.png"
              alt="dots"
              style={{
                position: "absolute",
                top: -50,
                right: -20,
                width: 300,
                zIndex: -1,
              }}
            />
            <img
              src="./images/stripes.png"
              alt="stripes"
              style={{
                position: "absolute",
                bottom: -30,
                left: 0,
                width: 300,
                zIndex: -1,
                opacity: 0.9,
              }}
            />
            <div className="hero__image-container d-flex justify-content-center">
              <img
                className="hero__image"
                src="./images/profile.jpg"
                alt="placeholder"
                onLoad={() => {
                  setImageLoaded(true);
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </BaseSection>
  );
};
