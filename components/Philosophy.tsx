import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "./BaseSection";
import { Heading } from "./Heading";
import { Tile } from "./Tile";

export const Philosophy = () => {
  const tiles = [
    {
      title: "Minimalism",
      subTitle: "'Few word do trick' - Kevin",
      bodyText:
        "I believe in creating designs that doesn't distract the user from achieving the primary goals of the website.",
      img: "./images/file-minus.svg",
    },
    {
      title: "Familiarity",
      subTitle: "Uniqueness is overrated... sometimes.",
      bodyText:
        "I design websites that feel unique, but also deliver a sense of comfort to the user by using fundamental UX principles.",
      img: "./images/lightbulb.svg",
    },
    {
      title: "Purposeful",
      subTitle: "Every interaction is an opportunity.",
      bodyText:
        "I create interfaces that guide the users to quickly achieve their goals of being on the website in the first place.",
      img: "./images/target.svg",
    },
  ];
  return (
    <BaseSection sectionClassName="philosophy">
      <div className="blog__section-header bg--primary">
        <Container>
          <Heading
            headingLabel="Philosophy"
            headingType="primary"
            color="primary"
            size="lg"
            className="mb-5 py-5 text-white"
          />
        </Container>
      </div>
      <Container className="philosophy__container">
        <Row>
          {tiles.map((tile) => {
            return (
              <Col
                lg={4}
                className="mb-4 px-lg-4"
                key={tile.title.split(" ").join("-")}
              >
                <Tile
                  img={tile.img}
                  title={tile.title}
                  subTitle={tile.subTitle}
                  bodyText={tile.bodyText}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </BaseSection>
  );
};
