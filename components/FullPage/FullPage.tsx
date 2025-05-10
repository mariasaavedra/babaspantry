"use client";
import { useState } from "react";
import AnimatedMarquee from "../AnimatedMarquee/AnimatedMarquee";
import Footer from "../Footer/Footer";
import FullScreenMenu from "../FullScreenMenu/FullScreenMenu";
import Hero from "../Hero/Hero";
import LayoutHorizontal from "../LayoutHorizontal/LayoutHorizontal";
import Logo from "../Logo/Logo";

export interface FullPageProps {}

export default function FullPage(props: FullPageProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <AnimatedMarquee />
      <Logo />
      <Hero />
      <LayoutHorizontal />
      <Footer />
      {isOpen && <FullScreenMenu handleClose={close}></FullScreenMenu>}
    </main>
  );
}
