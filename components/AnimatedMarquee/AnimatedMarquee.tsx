import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimatedMarquee.module.css";
import Content from "../Content/Content";
import Text from "../Text/Text";
import LayoutHorizontal from "../LayoutHorizontal/LayoutHorizontal";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Arabic from "../Arabic/Arabic";
import Logo from "../Logo/Logo";
import FullScreenMenu from "../FullScreenMenu/FullScreenMenu";
import ScrollSection from "../ScrollSection/ScrollSection";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";

export interface AnimatedMarqueeProps {}

export default function AnimatedMarquee(props: AnimatedMarqueeProps) {
  gsap.registerPlugin(ScrollTrigger);
  const body = useRef("#content");
  const topRef = useRef("#top");
  const rightRef = useRef("#right");
  const leftRef = useRef("#left");
  const bottomRef = useRef("#bottom");
  const shapeRef = useRef("#shape");
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const top = topRef.current;
    const right = rightRef.current;
    const left = leftRef.current;
    const bottom = bottomRef.current;
    const shape = shapeRef.current;

    // get the width of the element
    let distance = 900;

    const config = {
      start: 0,
      markers: true,
      repeat: -1,
      scrub: true,
    };
    const t1 = gsap.timeline(config);
    const t2 = gsap.timeline(config);
    const t3 = gsap.timeline(config);
    const t4 = gsap.timeline(config);
    const t5 = gsap.timeline(config);

    // t1.to(left, { yPercent: -50, y: 1000, x: 0, duration: 1, delay: 0 });
    // t2.to(right, { yPercent: -50, y: 1000, x: 0, duration: 1, delay: 0 });
    t3.to(top, { xPercent: -50, x: 1000, y: 0, duration: 50, delay: 0 });
    t4.to(bottom, { xPercent: 50, x: 1000, y: 0, duration: 50, delay: 0 });
  });

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
        <span className="font-arabic">شطائر </span>
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
        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
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
        <span className="font-arabic">شطائر </span>
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

        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
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
        <span className="font-arabic">شطائر </span>
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
        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
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
        <span className="font-arabic">شطائر </span>
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
        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
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
        <span className="font-arabic">شطائر </span>
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
        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
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
        <span className="font-arabic">شطائر </span>
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

        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
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
        <span className="font-arabic">شطائر </span>
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
        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
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
        <span className="font-arabic">شطائر </span>
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
        <span className="font-arabic"> قهوة</span>
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
        <span className="font-arabic"> شاي</span>
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
        <span className="font-arabic"> حلويات</span>
      </div>
    </>
  );

  return (
    <div>
      <div>
        <div>
          
        </div>
        <svg
          className="absolute"
          viewBox="299 299 300 300"
          fill="red"
          stroke="#000"
        >
          <clipPath
  
            className={styles.clipPath}
            id="myClip"
          >
            <path
              stroke="#000"
              d="M24.43,11.01c.84,.11,2.14,.2,3.42,.45,4.76,.93,8.3-.91,11-4.73,.95-1.35,1.89-2.7,3.1-3.84,3.65-3.46,8-3.83,12.19-1.01,1.38,.93,2.56,2.07,3.71,3.26,3.23,3.34,7.01,4.1,11.3,2.4,2.32-.92,4.67-1.71,7.2-1.38,4.96,.64,8.19,4.23,8.73,9.96,.51,5.4,3.33,8.6,8.46,10.13,9.34,2.78,11.61,8.08,7.13,16.67-2.33,4.46-2.1,8.53,1.18,12.4,1.89,2.23,3.37,4.66,3.58,7.7,.22,3.3-1.08,5.87-3.61,7.89-1.08,.86-2.28,1.53-3.54,2.1-4.81,2.18-6.87,6.06-6.9,11.19,0,.76,.05,1.51,.06,2.27,.01,6.78-5.38,11.34-12.02,9.89-5.86-1.28-10.42,.1-13.52,5.47-.58,.99-1.41,1.87-2.23,2.68-3.56,3.52-7.74,3.95-12,1.31-1.3-.8-2.42-1.81-3.43-2.94-3.41-3.78-7.49-4.55-12.15-2.74-1.93,.75-3.88,1.21-5.99,1.25-4.13,.07-6.72-1.98-8.4-5.49-.74-1.55-1.12-3.24-1.33-4.95-.61-4.95-3.2-8.18-8.1-9.49-2.05-.55-4.05-1.31-5.81-2.56-3.13-2.23-4.36-5.42-3.57-9.18,.4-1.9,1.11-3.67,2.04-5.37,2.34-4.29,1.94-8.29-1.21-12.03-1.11-1.32-2.09-2.72-2.78-4.31-1.75-4.02-.95-7.93,2.25-10.9,1.07-.99,2.26-1.81,3.59-2.39,5.13-2.24,7.53-6.15,7.34-11.72-.03-.96,0-1.92,.06-2.88,.39-5.81,4.03-9.17,10.29-9.11Z"
            />
          </clipPath>
        </svg>
        {/* Logo + Menu */}
        <div
          id="shape"
          className={
            styles.shape +
            " shadow-6xl cursor-pointer z-[9999] bg-[] h-[200px] w-[200px] fixed top-[-60px] left-0 right-0 text-center mx-auto"
          }
        >
          <img
            src="/images/logo-blue.svg"
            width={160}
            height={"auto"}
            className="mx-auto text-center animate__animated  animate__infinite animate__delay-5s  animate__slower  top-[5px] ml-[20px] fixed z-10 p-3 py-1"
          ></img>
        </div>
      </div>
      {/* Menu */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={
          styles.MenuComponent +
          " cursor-pointer spin fixed top-[-5px] right-[-5px] z-10 p-4 rounded-full top-[1px]  bg-[#dbcaea]"
        }
      >
        <img
          width={70}
          className="animate__animated animate__shakeY"
          src="/images/menu.svg"
        ></img>
      </div>
      <Hero />
      <ScrollSection />
      <Footer />

      {/* Marquee Container */}
      <div id="container" className={styles.AnimatedMarqueeComponent}>
        <div
          id="top"
          className={styles.marquee + " " + styles.top + " shadow-3xl"}
        >
          {marquee}
        </div>
        <div
          id="bottom"
          className={styles.marquee + " " + styles.bottom + " shadow-3xl"}
        >
          {marquee}
        </div>
      </div>

      {isOpen && <FullScreenMenu handleClose={close}></FullScreenMenu>}
    </div>
  );
}
