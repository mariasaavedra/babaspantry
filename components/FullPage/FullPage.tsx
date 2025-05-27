"use client";
import { useState } from "react";
import AnimatedMarquee from "@/components/AnimatedMarquee/AnimatedMarquee";
import Footer from "@/components/Footer/Footer";
import FullScreenMenu from "@/components/FullScreenMenu/FullScreenMenu";
import Hero from "@/components/Hero/Hero";
import LayoutHorizontal from "@/components/LayoutHorizontal/LayoutHorizontal";
import Logo from "@/components/Logo/Logo";
import "@/styles/globals.css";
import "animate.css";
import Menu from "../Menu/Menu";

export interface FullPageProps {}

export default function FullPage(props: FullPageProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <AnimatedMarquee />
      <Logo />
      <Hero />
      <Menu toggleOpen={() => setIsOpen((o) => !o)} />
      <LayoutHorizontal />
      <Footer />
      {isOpen && <FullScreenMenu handleClose={close}></FullScreenMenu>}
    </main>
  );
}
