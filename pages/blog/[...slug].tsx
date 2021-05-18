import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { WP_REST_API_Posts } from "wp-types";
import { Container } from "reactstrap";

interface IPost {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;
  categories: number[];
  excerpt: string;
  date: string;
  content: string;
}
interface IPostProps {
  post: IPost;
}

const Post = ({ post }: IPostProps) => {
  console.log(post);

  return (
    <>
      <Head>
        <title></title>
        <meta title="description" content={""} />
      </Head>
      <section className="blog-post">
        <Container>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </section>
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
    "http://blog.kentokanazawa.com/wp-json/wp/v2/posts?_embed&filter[p]=0&include[]=" +
      context.params.slug[1]
  );

  const posts: WP_REST_API_Posts = await res.json();
  const post = posts[0];

  if (!posts) {
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
