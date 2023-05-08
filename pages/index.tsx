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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <AnimatedMarquee toggleOpen={() => setIsOpen((prev) => !prev)} />
      <Menu />
      <Logo />

      <Hero />
      <ScrollSection />
      <Footer />
      {isOpen && <FullScreenMenu handleClose={close}></FullScreenMenu>}
    </div>
  );
};

export default Sandbox;
