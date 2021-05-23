import React, { useEffect } from "react";
import Head from "next/head";

import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "../components/BaseSection";
import { Heading } from "../components/Heading";
import { Philosophy } from "../components/Philosophy";
import { useRouterScroll } from "@moxy/next-router-scroll";
import { ImageContainer } from "../components/ImageContainer";

function About() {
  const { updateScroll } = useRouterScroll();

  useEffect(() => {
    updateScroll();
  }, []);
  return (
    <>
      <Head>
        <title></title>
        <meta title="description" content="" />
      </Head>
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
        <div className="my-5">
          <Container>
            <Row>
              <Col>
                <Heading
                  headingLabel={
                    "I'm a developer by profession, and a general hobbyist at heart."
                  }
                  headingType="primary"
                  color="primary"
                  size="lg"
                  className="text-dark"
                />
                <p>
                  After getting my bachelor's degree in Psychology, I jumped
                  into the world of web development to pursue a career this
                  creative currently worked at{" "}
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
              </Col>
              <Col>
                <ImageContainer
                  src={"./images/_profile-mug.jpg"}
                  alt={"Kento"}
                  rounded
                />
              </Col>
            </Row>
          </Container>
        </div>
      </BaseSection>
      <Philosophy />
    </>
  );
}

export default About;
