import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "./BaseSection";
import { Heading } from "./Heading";
import Link from "next/link";
import { IBlogPostProps } from "../pages";
import { Tile } from "./Tile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";

interface IBlogProps {
  blogPosts: IBlogPostProps[];
}

export const Blog = ({ blogPosts }: IBlogProps) => {
  return (
    <BaseSection sectionClassName="blog">
      <div className="bg-primary">
        <Container>
          <Heading
            headingLabel="Rambling"
            headingType="primary"
            color="primary"
            size="lg"
            className="mb-5 text-white py-5"
          />
        </Container>
      </div>
      <Container className="blog__container">
        <Row>
          {blogPosts.map((post, index) => {
            return (
              <Col lg={12} className="mb-4" key={post.id}>
                <div className="blog__blog-item">
                  <div className="blog__blog-category-icon d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faStackOverflow} />
                  </div>
                  <a href={"/blog/" + post.slug} key={post.id}>
                    <Tile
                      key={index}
                      img={post.featuredImage[0].link}
                      title={post.title}
                      imgAlt={post.featuredImage[0].alt_text}
                      bodyText={post.excerpt.stripHTMLTag()}
                    />
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BaseSection>
  );
};
