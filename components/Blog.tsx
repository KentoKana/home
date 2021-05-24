import React from "react";
import { Col, Container, Row } from "reactstrap";
import { BaseSection } from "./BaseSection";
import { Heading } from "./Heading";
import Link from "next/link";
import { IBlogPostProps } from "../pages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { DateDisplay } from "./DateDisplay";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { CategoryIcon } from "./CategoryIcon";

interface IBlogProps {
  blogPosts: IBlogPostProps[];
}

export const Blog = ({ blogPosts }: IBlogProps) => {
  return (
    <BaseSection sectionClassName="blog">
      <div className="blog__section-header">
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
            const postLink = "/blog/" + post.slug + "/" + post.id;

            return (
              <Col lg={12} className="mb-4" key={index}>
                <div className="blog__blog-item">
                  <div className="blog__blog-category-icon d-lg-flex justify-content-center align-items-center d-none">
                    <CategoryIcon category={post.categories[0]} />
                  </div>

                  <div className="blog__blog-item-title-container mb-5 py-3 d-flex align-items-center justify-content-between">
                    <div>
                      <h3 className="mb-3 blog__blog-item-title">
                        <Link href={postLink} shallow scroll>
                          <a>{post.title}</a>
                        </Link>
                      </h3>
                      <div>
                        <span className="text-muted">
                          <DateDisplay date={post.date} />
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="blog__blog-category-icon d-flex justify-content-center align-items-center d-lg-none">
                        <CategoryIcon category={post.categories[0]} />
                      </div>
                    </div>
                  </div>
                  <Link href={postLink} shallow scroll>
                    <a>
                      <div className="blog__blog-item-image-container mb-5 d-flex justify-content-center align-items-center">
                        <img
                          className="blog__blog-item-image"
                          src={post.featuredImage[0].link}
                          alt={post.featuredImage[0].alt_text}
                        />
                      </div>
                    </a>
                  </Link>
                  <p>{post.excerpt.stripHTMLTag()}</p>
                  <div className="d-flex justify-content-end">
                    <Link href={postLink} shallow scroll>
                      <a className="primary-button">
                        Read More{" "}
                        <span className="animated-caret">
                          <FontAwesomeIcon icon={faBookOpen} />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </BaseSection>
  );
};
