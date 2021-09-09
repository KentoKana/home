import { GetStaticProps } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Blog } from "../components/Blog";
import type { WP_REST_API_Posts } from "wp-types";
import { useEffect, useState } from "react";
import { useRouterScroll } from "@moxy/next-router-scroll";
import { Closing } from "../components/Closing";

export default function Home() {
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
      </main>
    </div>
  );
}
