import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "./BaseSection";

export const Hero = () => {
  return (
    <BaseSection sectionClassName="hero d-flex align-items-center">
      <Container className="hero__container">
        <Row>
          <Col lg={4} className="align-self-center">
            <div className="hero__image-container d-flex justify-content-center d-lg-none mb-4">
              <img
                className="hero__image"
                src="./images/placeholder.jpg"
                alt="placeholder"
              />
            </div>
            <h1 className="heading--primary mb-4">
              Hello. I'm Kento, A Web Developer.
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
            lg={8}
            className="hero__image-section align-self-center mt-4 mt-lg-0 d-lg-block d-none"
          >
            <div className="hero__image-container d-flex justify-content-center">
              <img
                className="hero__image"
                src="/images/placeholder.jpg"
                alt="placeholder"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </BaseSection>
  );
};
