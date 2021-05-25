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
        <title>Kento Kanazawa | About</title>
        <meta
          name="Keywords"
          content="Kento Kanazawa, about web developer designer UX UI product software app digital design creative portfolio Victoria BC Canada"
        ></meta>
        <meta
          title="description"
          content="About Kento Kanazawa, a web developer based in Victoria BC"
        />
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
        <div className="my-5 about__content">
          <Container>
            <Row>
              <Col lg={5}>
                <Heading
                  headingLabel={
                    "Developer by profession, a general hobbyist at heart."
                  }
                  headingType="primary"
                  color="primary"
                  size="lg"
                  className="text-dark mb-5"
                />
                <p>
                  Hello there! I'm Kento, and I am a web developer based in the
                  beautiful British Columbia. After getting my bachelor's degree
                  in Psychology, I jumped into the world of web development to
                  pursue a career in building creative solutions for real world
                  problems. I'm currently worked at{" "}
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
                  My specialty lies within the fields of UI/UX designs and
                  front-end development. I believe in a minimalist and additive
                  approach to web designs - start with the bare minimum viable
                  product, then add UI enhancements without distracting the
                  audience from the core purpose.
                </p>
                <p>
                  Outside of development, I enjoy losing friendship over a game
                  of Mario Kart, cooking up a storm in his kitchen, and mucking
                  about on my guitar.
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
      <Philosophy />
    </>
  );
}

export default About;
