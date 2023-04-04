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
        <Navbar></Navbar>

        <Content layout="horizontal">
          <Sidebar></Sidebar>
          <div className="relative h-screen max-w-xlg">
            <img className=" h-screen w-auto" src="/images/BP_1.jpeg"></img>
          </div>
          <div className="relative h-screen max-w-xlg">
            <img className="h-screen w-auto" src="/images/BP_9.webp"></img>
            <Arabic></Arabic>
          </div>
          <div className="relative h-screen max-w-lg ">
            <Text>
              <h1 className="text-5xl py-2 font-header">
                Welcome to Baba's Pantry,
              </h1>
              For almost two decades, Yahia Kamal has been a prominent figure in
              the food scene of Kansas City. However, Baba's Pantry marks
              several significant firsts for the Palestine-born chef.
              <br />
              <br />
              Every dish on the menu feels deeply personal, from the impossibly
              crisp falafel to the smooth, velvety hummus and an array of
              homemade sauces and seasonings. Baba's Pantry is a mouth-watering
              expression of the feeling of being at home.
            </Text>
          </div>
          <div className="relative h-screen">
            <img className="h-auto w-auto" src="/images/BP_7.webp"></img>
            <Arabic></Arabic>
          </div>

          <div className="relative h-screen max-w-[90vw]">
            <div className="relative h-[50%] max-w-[400px]">
              <Text>
                Kansas City's own Baba's Pantry was named one of America's best
                new restaurants by Bon Appetit Magazine.
              </Text>
              <div className="absolute w-full max-w-[250px] h-screen top-[30%] right-[-100px] z-[1]">
                <AnimatedButton><span className="text-xl">Top 10 <br/> Best New Restaurants <br/> in America</span></AnimatedButton>
              </div>
            </div>
            <img
              className="h-[50%] w-auto opacity-0"
              src="/images/BP_5.jpeg"
            ></img>
          </div>

          <div className="relative max-w-3xl">
            <img src="/images/BP_4.jpeg"></img>
          </div>

          <div className="h-screen max-w-lg pr-[100px]">
            <Text>
              <h1 className="font-header text-7xl">Contact Us</h1>

              <h1 className="font-header text-3xl">Location</h1>
              <p> 1019 E 63rd St, Kansas City, MO 64110</p>

              <h1 className="font-header text-3xl">Hours</h1>
              <p> Monday - Saturday 11AM–7:00PM</p>
              <p>Sunday Closed</p>

              <h1 className="font-header text-3xl">Phone</h1>
              <p>(816) 702-0045</p>
            </Text>
          </div>
        </Content>
      </LayoutHorizontal>
    </div>
  );
};

export default Home;
