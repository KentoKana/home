import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "./BaseSection";
import { Heading } from "./Heading";
import Link from "next/link";
import { IBlogPostProps } from "../pages";

interface IBlogProps {
  blogPosts: IBlogPostProps[];
}

export const Blog = ({ blogPosts }: IBlogProps) => {
  return (
    <BaseSection sectionClassName="philosophy d-flex align-items-center">
      <Container className="philosophy__container">
        <Row>
          <Heading
            headingLabel="Rambling"
            headingType="primary"
            color="primary"
            size="lg"
          />
        </Row>
        <Row>
          {blogPosts.map((post) => {
            return (
              <Col lg={4} className="mb-4 px-lg-4" key={post.id}>
                {/* <Tile
                  img={post.img}
                  title={post.title}
                  subTitle={post.subTitle}
                  bodyText={post.bodyText}
                /> */}
                {blogPosts?.map((post, index) => {
                  return (
                    <div key={post.slug + index}>
                      <img
                        src={post.featuredImage[0].link}
                        alt={post.featuredImage[0].alt_text}
                      />
                      <Link href={"/blog/" + post.slug}>
                        <a>{"/blog/" + post.slug}</a>
                      </Link>
                    </div>
                  );
                })}
              </Col>
            );
          })}
        </Row>
      </Container>
    </BaseSection>
  );
};
