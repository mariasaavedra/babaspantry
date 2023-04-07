import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import AnimatedButton from "../components/AnimatedButton/AnimatedButton";
import Arabic from "../components/Arabic/Arabic";
import Content from "../components/Content/Content";
import FullScreenMenu from "../components/FullScreenMenu/FullScreenMenu";
import LayoutHorizontal from "../components/LayoutHorizontal/LayoutHorizontal";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Text from "../components/Text/Text";
import AnimatedMarquee from "../components/AnimatedMarquee/AnimatedMarquee";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <LayoutHorizontal>
        <Content layout="horizontal">
          <AnimatedMarquee/>
        </Content>
      </LayoutHorizontal>
    </div>
  );
};

export default Home;
