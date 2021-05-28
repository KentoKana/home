import { GetStaticProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Blog } from "../components/Blog";
import type { WP_REST_API_Posts } from "wp-types";
import { useEffect } from "react";
import { useRouterScroll } from "@moxy/next-router-scroll";
import { Closing } from "../components/Closing";

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
        <meta
          name="description"
          content="A web developer portfolio and blog site of Kento Kanazawa."
        />
        <meta
          name="Keywords"
          content="Kento Kanazawa web developer designer UX UI product software app digital design creative portfolio Victoria BC Canada"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <Hero />
        <Blog blogPosts={blogPosts} />
        <Closing />
      </main>
    </div>
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
