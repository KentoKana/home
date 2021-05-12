import { GetStaticProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Philosophy } from "../components/Philosophy";
import { Blog } from "../components/Blog";
import type { WP_REST_API_Posts } from "wp-types";

export interface IBlogPostProps {
  id: number;
  slug: string;
  title: string;
  featuredImage: { link: string; alt_text: string }[];
  categories: number[];
}

interface IHomeProps {
  blogPosts: IBlogPostProps[];
}

export default function Home({ blogPosts }: IHomeProps) {
  return (
    <div>
      <Head>
        <title>Kento Kanazawa | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="home">
        <Hero />
        <Philosophy />
        <Blog blogPosts={blogPosts} />
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
          title: post.title,
          featuredImage: post._embedded["wp:featuredmedia"],
          categories: post.categories,
        };
      }),
    },
  };
};
