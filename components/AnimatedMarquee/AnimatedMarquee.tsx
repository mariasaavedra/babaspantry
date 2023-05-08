import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimatedMarquee.module.css";

export interface AnimatedMarqueeProps {
  toggleOpen: any;
}

export default function AnimatedMarquee(props: AnimatedMarqueeProps) {
  gsap.registerPlugin(ScrollTrigger);
  const body = useRef("#content");
  const topRef = useRef("#top");
  const bottomRef = useRef("#bottom");

  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    const config = {
      start: 0,
      markers: true,
      repeat: -1,
      scrub: true,
    };
    const t3 = gsap.timeline(config);
    const t4 = gsap.timeline(config);
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
    </div>
  );
}
