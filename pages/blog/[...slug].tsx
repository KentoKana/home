import React, { useEffect } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { WP_REST_API_Post, WP_REST_API_Posts } from "wp-types";
import { Container } from "reactstrap";
import { BaseSection } from "../../components/BaseSection";
import { Heading } from "../../components/Heading";
import { DateDisplay } from "../../components/DateDisplay";
import { EBlogCategories } from "../../enums/BlogCategories";
import { useRouterScroll } from "@moxy/next-router-scroll";

interface IPost {
  id: number;
  slug: string;
  title: string;
  featuredImage: { link: string; alt_text: string }[];
  categories: number[];
  excerpt: string;
  date: string;
  content: string;
}
interface IPostProps {
  post: IPost;
}

const Post = ({ post }: IPostProps) => {
  const { updateScroll } = useRouterScroll();

  useEffect(() => {
    updateScroll();
  }, []);
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta title="description" content={post.excerpt.stripHTMLTag()} />
      </Head>
      <BaseSection sectionClassName="blog-item">
        <div className="blog-item__header-container d-flex align-items-center">
          <Container className="blog-item__header">
            <div>
              <Heading
                headingLabel={post.title}
                headingType="primary"
                color="primary"
                size="lg"
                className="m-0 text-white"
              />
              <div className="mb-4 blog-item__date text-white">
                <DateDisplay date={post.date} />
              </div>
              <div className="blog-item__categories">
                {post.categories.map((category) => {
                  return (
                    <span className="blog-item__category">
                      {EBlogCategories[category]}
                    </span>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
        <Container className="blog-item__container my-5">
          <div className="blog-item__feature-image-container d-flex justify-content-center align-items-center mb-5">
            <img
              className="blog-item__feature-image"
              src={post.featuredImage[0].link}
              alt={post.featuredImage[0].alt_text}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </BaseSection>
    </>
  );
};

export default Post;
export const getStaticPaths = async () => {
  const res = await fetch(
    "http://blog.kentokanazawa.com/wp-json/wp/v2/posts?_embed"
  );
  const posts: WP_REST_API_Posts = await res.json();

  return {
    paths: posts?.map((post) => {
      return {
        params: {
          slug: [decodeURI(post.slug), post.id.toString()],
        },
      };
    }),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `http://blog.kentokanazawa.com/wp-json/wp/v2/posts/${context.params.slug[1]}?_embed`
  );

  const post: WP_REST_API_Post = await res.json();

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: {
        id: post.id ?? null,
        slug: post.slug ?? null,
        title: post.title?.rendered ?? null,
        featuredImage: post._embedded["wp:featuredmedia"],
        categories: post.categories,
        excerpt: post.excerpt.rendered,
        date: post.date,
        content: post.content.rendered,
      },
    },
  };
};
