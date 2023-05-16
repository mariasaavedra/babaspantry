import type { NextPage } from "next";
import Head from "next/head";
import AnimatedMarquee from "../components/AnimatedMarquee/AnimatedMarquee";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import ScrollSection from "../components/ScrollSection/ScrollSection";
import FullScreenMenu from "../components/FullScreenMenu/FullScreenMenu";
import { useState } from "react";
import Menu from "../components/Menu/Menu";
import Logo from "../components/Logo/Logo";
import LayoutHorizontal from "../components/LayoutHorizontal/LayoutHorizontal";
import LayoutVertical from "../components/LayoutVertical/LayoutVertical";
import Script from "next/script";

const Sandbox: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <Head>
        <title>Baba's Pantry</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Authentic Palestinian-American deli & cafe serving up traditional dishes with a modern twist."
        />
        <meta
          name="keywords"
          content="palestinian, american, deli, cafe, food, restaurant"
        />
        <meta name="author" content="Maria Saavedra"></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <AnimatedMarquee />
      <Menu toggleOpen={() => setIsOpen((prev) => !prev)} />
      <Logo />
      <Hero />
      <LayoutHorizontal />
      <Footer />
      {isOpen && <FullScreenMenu handleClose={close}></FullScreenMenu>}
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C0DEMKM865"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-C0DEMKM865);
        `}
      </Script>
    </div>
  );
};

export default Sandbox;
