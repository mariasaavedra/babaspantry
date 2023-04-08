import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimatedMarquee.module.css";
import Content from "../Content/Content";
import Text from "../Text/Text";
import LayoutHorizontal from "../LayoutHorizontal/LayoutHorizontal";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Arabic from "../Arabic/Arabic";
import Logo from "../Logo/Logo";

export interface AnimatedMarqueeProps {}

export default function AnimatedMarquee(props: AnimatedMarqueeProps) {
  gsap.registerPlugin(ScrollTrigger);
  const body = useRef("#content");
  const topRef = useRef("#top");
  const rightRef = useRef("#right");
  const leftRef = useRef("#left");
  const bottomRef = useRef("#bottom");
  const marquee = (
    <>
      <div className="inline font-medium  text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>

        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
      <div className="inline font-medium  text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>

        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header">Sandwiches</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic">والحلويات </span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Coffee</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والقهو</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Tea</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> السندويشات</span>
      </div>
      <div className="inline font-medium text-4xl">
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-header"> Sweets</span>
        <span>
          <img
            className="inline w-[25px] px-1 mx-2"
            src="/images/SVG/purple-diamond.svg"
          ></img>
        </span>
        <span className="font-arabic"> والشاي</span>
      </div>
    </>
  );

  useEffect(() => {
    const top = topRef.current;
    const right = rightRef.current;
    const left = leftRef.current;
    const bottom = bottomRef.current;

    // set a default rate, the higher the value, the faster it is
    let rate = 200;
    // get the width of the element
    let distance = 900;
    // get the total width of the element
    let totalDistance = distance;
    // get the duration of the animation
    // for a better explanation, see the quoted codepen in the first comment
    let time = totalDistance / rate;
    // get the parent of the element
    let container = "#top";

    const config = {
      scrollTrigger: {
        trigger: "#section",
        start: 0,
        horizontal: true,
        markers: true,
        repeat: -1,
        scrub: true,
      },
    };
    const t1 = gsap.timeline(config);
    const t2 = gsap.timeline(config);
    const t3 = gsap.timeline(config);
    const t4 = gsap.timeline(config);

    t1.to(left, { yPercent: -50, y: 1000, x: 0, duration: 1, delay: 0 });
    t2.to(right, { yPercent: -50, y: 1000, x: 0, duration: 1, delay: 0 });
    t3.to(top, { xPercent: -50, x: 1000, y: 0, duration: 1, delay: 0 });
    t4.to(bottom, { xPercent: 50, x: 1000, duration: 1, delay: 0 });
  });

  return (
    <div>
      <div
        id="section"
        className="flex flex-nowrap min-w-[4000px] p-12 overflow-x-auto overflow-y-hidden"
      >
        <LayoutHorizontal>
          {/* Logo */}
          <div className="p-2 z-[9999] bg-[#dbcaea] rounded-[50%] h-[200px] w-[200px] fixed top-[-80px] left-0 right-0 text-center mx-auto">
            <img
              src="/images/logo-black.svg"
              width={130}
              className="mx-auto text-center animate__animated animate__flash animate__infinite animate__delay-5s  animate__slower md:max-h-20 top-[10px] ml-7 fixed z-10"
            ></img>
          </div>

          {/* Menu */}
          <div
            className={
              styles.MenuComponent +
              " fixed top-[-5px] right-[-5px] z-10 p-4 rounded-full  bg-[#dbcaea]"
            }
          >
            <img
              width={70}
              className="animate__animated animate__shakeY"
              src="/images/menu.png"
            ></img>
          </div>

          <Content layout="horizontal">
            {/* <Sidebar></Sidebar> */}
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
                For almost two decades, Yahia Kamal has been a prominent figure
                in the food scene of Kansas City. However, Baba's Pantry marks
                several significant firsts for the Palestine-born chef.
                <br />
                <br />
                Every dish on the menu feels deeply personal, from the
                impossibly crisp falafel to the smooth, velvety hummus and an
                array of homemade sauces and seasonings. Baba's Pantry is a
                mouth-watering expression of the feeling of being at home.
              </Text>
            </div>
            <div className="relative h-screen">
              <img className="h-auto w-auto" src="/images/BP_7.webp"></img>
              <Arabic></Arabic>
            </div>

            <div className="relative h-screen max-w-[90vw]">
              <div className="relative h-[50%] max-w-[400px]">
                <Text>
                  Kansas City's own Baba's Pantry was named one of America's
                  best new restaurants by Bon Appetit Magazine.
                </Text>
                <div className="absolute w-full max-w-[250px] h-screen top-[30%] right-[-100px] z-[1]">
                  <AnimatedButton>
                    <span className="text-xl">
                      Top 10 <br /> Best New Restaurants <br /> in America
                    </span>
                  </AnimatedButton>
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

      <div id="container" className={styles.AnimatedMarqueeComponent}>
        <div
          id="top"
          className={styles.marquee + " " + styles.top + " shadow-3xl"}
        >
          {marquee}
        </div>

        <div
          id="right"
          className={styles.marquee + " " + styles.right + " shadow-3xl"}
        >
          {marquee}
        </div>

        <div
          id="bottom"
          className={styles.marquee + " " + styles.bottom + " shadow-3xl"}
        >
          {marquee}
        </div>

        <div
          id="left"
          className={styles.marquee + " " + styles.left + " shadow-3xl"}
        >
          {marquee}
        </div>
      </div>
    </div>
  );
}
