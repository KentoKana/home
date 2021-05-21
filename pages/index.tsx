import { GetStaticProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Philosophy } from "../components/Philosophy";
import { Blog } from "../components/Blog";
import type { WP_REST_API_Posts } from "wp-types";
import { useEffect } from "react";
import { useRouterScroll } from "@moxy/next-router-scroll";

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

export default function Home({ blogPosts }: IHomeProps) {
  const { updateScroll } = useRouterScroll();

  useEffect(() => {
    updateScroll();
  }, []);
  return (
    <div>
      <Head>
        <title>Kento Kanazawa | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <Hero />
        <Blog blogPosts={blogPosts} />
        <Philosophy />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "http://blog.kentokanazawa.com/wp-json/wp/v2/posts?_embed"
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
