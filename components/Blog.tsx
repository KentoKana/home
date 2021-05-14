import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "./BaseSection";
import { Heading } from "./Heading";
import Link from "next/link";
import { IBlogPostProps } from "../pages";
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
          {blogPosts.map((post) => {
            return (
              <Col lg={12} className="mb-4" key={post.id}>
                <div className="blog__blog-item">
                  <div className="blog__blog-category-icon d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faStackOverflow} />
                  </div>
                  <Link href={"/blog/" + post.slug}>
                    <a>
                      <h3 className="mb-3">{post.title}</h3>
                      <div className="mb-5">
                        <span className="text-muted">{post.date}</span>
                      </div>
                      <div className="blog__blog-item-image-container mb-5 d-flex justify-content-center align-items-center">
                        <img
                          className="blog__blog-item-image"
                          src={post.featuredImage[0].link}
                          alt={post.featuredImage[0].alt_text}
                        />
                      </div>
                      <p>{post.excerpt.stripHTMLTag()}</p>
                    </a>
                  </Link>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BaseSection>
  );
};
