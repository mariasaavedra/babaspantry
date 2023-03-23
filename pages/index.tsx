import type { NextPage } from "next";
import Head from "next/head";
import Content from "../components/Content/Content";
import LayoutHorizontal from "../components/LayoutHorizontal/LayoutHorizontal";
import Navbar from "../components/Navbar/Navbar";
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
          <div className="h-screen max-w-xlg">
            <img className="h-screen w-auto" src="/images/BP_1.jpeg"></img>
          </div>
          <div className="h-screen max-w-xlg">
            <img className="h-screen w-auto" src="/images/BP_9.webp"></img>
          </div>
          <div className="h-screen max-w-lg ">
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
          <div className="h-screen">
            <img className="h-auto w-auto" src="/images/BP_7.webp"></img>
          </div>

          <div className="h-screen max-w-[90vw]">
            <div className="h-[50%] max-w-[400px]">
              <Text>
                Kansas City's own Baba's Pantry was named one of America's best
                new restaurants by Bon Appetit Magazine.
              </Text>
            </div>
            <img
              className="h-[50%] w-auto opacity-0"
              src="/images/BP_5.jpeg"
            ></img>
          </div>
          <div className="h-screen max-w-lg "></div>
        </Content>
      </LayoutHorizontal>
    </div>
  );
};

export default Home;
