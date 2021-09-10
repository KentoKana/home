import Head from "next/head";
import { Hero } from "../components/Hero";

export default function Home() {
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
