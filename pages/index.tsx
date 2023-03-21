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
          <div className="h-screen max-w-lg ">
            <Text>
              For almost two decades, Yahia Kamal has been a prominent figure in
              the food scene of Kansas City. However, Baba's Pantry marks
              several significant firsts for the Palestine-born chef. It's the
              first time he's collaborated with his family to run a business,
              and together they have created a charmingly idiosyncratic and
              welcoming atmosphere that perfectly complements Yahia's abundant
              creativity. Furthermore, it's the first time he's operated a
              business that proudly celebrates the cuisine of his homeland in an
              overt and unapologetic manner. Every dish on the menu feels deeply
              personal, from the impossibly crisp falafel to the smooth, velvety
              hummus and an array of homemade sauces and seasonings. Baba's
              Pantry is a mouth-watering expression of the feeling of being at
              home.
            </Text>
          </div>
          <div className="h-screen max-w-[90vw]">
            <div className="h-[50%] max-w-[400px]">
              <Text>
              Kansas City's own Baba's Pantry was named one of America's best new restaurants by Bon Appetit Magazine. 
              </Text>
            </div>
            <img className="h-[50%] w-auto" src="/images/BP_5.jpeg"></img>
          </div>
          <div className="h-screen max-w-[90vw]">
            <img className="h-[50%] w-auto" src="/images/BP_2.jpeg"></img>
            <div className="h-[50%] max-w-[400px]">
              <Text>
                Step into Baba's Pantry and be transported to a world of
                authentic Palestinian cuisine, crafted with care and love passed
                down through generations.
              </Text>
            </div>
          </div>

          <div className="h-screen max-w-lg "></div>

        </Content>
      </LayoutHorizontal>
    </div>
  );
};

export default Home;
