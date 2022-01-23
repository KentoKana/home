import React from "react";

import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "../components/BaseSection";
import { Heading } from "../components/Heading";
import { ImageContainer } from "../components/ImageContainer";
import { Closing } from "../components/Closing";

function About() {
  return (
    <>
      <BaseSection sectionClassName="about">
        <div className="about__header-container d-flex align-items-center">
          <Container className="about__header">
            <div>
              <Heading
                headingLabel={"About"}
                headingType="primary"
                color="primary"
                size="lg"
                className="m-0 text-white"
              />
            </div>
          </Container>
        </div>
        <div className="my-5 about__content">
          <Container>
            <Row>
              <Col lg={5}>
                <Heading
                  headingLabel={"Developer by profession, hobbyist at heart."}
                  headingType="primary"
                  color="primary"
                  size="lg"
                  className="text-dark mb-5"
                />
                <p>
                  I'm Kento, and I am a web developer based in the beautiful
                  British Columbia. After getting my bachelor's degree in
                  Psychology, I jumped into the world of web development to
                  pursue a career in building creative solutions for real world
                  problems. I'm currently working at{" "}
                  <a
                    href="http://lbcit.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LBC IT Solutions
                  </a>{" "}
                  as a web developer, building enterprise-level tool for
                  managing employee performance metrics.
                </p>
                <p>
                  With my Psychology background, my specialties lie within the
                  fields of UI/UX designs and front-end development. I believe
                  in a minimalist and additive approach to web designs - start
                  with the bare minimum viable product, then add UI enhancements
                  without distracting the audience from the core purpose of the
                  website/applicaiton.
                </p>
                <p>
                  Outside of development, I enjoy losing friendship over a game
                  of Mario Party, cooking up a storm in his kitchen, and
                  noodling on my guitar.
                </p>
              </Col>
              <Col lg={7}>
                <ImageContainer
                  src={"/images/_profile-mug.jpg"}
                  alt={"Kento"}
                  rounded
                />
              </Col>
            </Row>
          </Container>
        </div>
      </BaseSection>
      <Closing />
    </>
  );
}

export default About;
