import type { NextPage } from "next";
import Head from "next/head";
import AnimatedMarquee from "../components/AnimatedMarquee/AnimatedMarquee";

const Sandbox: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Baba's Pantry</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <AnimatedMarquee />
    </div>
  );
};

export default Sandbox;
