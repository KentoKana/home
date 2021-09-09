import { GetStaticProps } from "next";
import { Blog as BlogComponent } from "../components/Blog";
import type { WP_REST_API_Posts } from "wp-types";
import React, { useEffect } from "react";
import { useRouterScroll } from "@moxy/next-router-scroll";
import Head from "next/head";

export interface IBlogPostProps {
  id: number;
  slug: string;
  title: string;
  featuredImage: { link: string; alt_text: string }[];
  categories: number[];
  excerpt?: string;
  date?: string;
}

interface IHomeProps {
  blogPosts: IBlogPostProps[];
}

export default function Blog({ blogPosts }: IHomeProps) {
  const { updateScroll } = useRouterScroll();

  useEffect(() => {
    updateScroll();
  }, []);
  return (
    <>
      <Head>
        <title>Kento Kanazawa | Blog</title>
        <meta
          name="description"
          content="A web developer blog of Kento Kanazawa."
        />
        <meta
          name="Keywords"
          content="Kento Kanazawa web developer designer UX UI product software app digital design creative portfolio Victoria BC Canada"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogComponent blogPosts={blogPosts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://blog.kentokanazawa.com/wp-json/wp/v2/posts?_embed"
  );
  const posts: WP_REST_API_Posts = await res.json();
  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blogPosts: posts.map((post) => {
        return {
          id: post.id,
          slug: post.slug,
          title: post.title.rendered,
          featuredImage: post._embedded["wp:featuredmedia"],
          categories: post.categories,
          excerpt: post.excerpt.rendered,
          date: post.date,
        };
      }),
    },
  };
};
