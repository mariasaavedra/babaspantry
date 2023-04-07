import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./AnimatedMarquee.module.css";

export interface AnimatedMarqueeProps {}

export default function AnimatedMarquee(props: AnimatedMarqueeProps) {
  gsap.registerPlugin(ScrollTrigger);
  const body = useRef("#content");
  const topRef = useRef("#top");
  const rightRef = useRef("#right");
  const leftRef = useRef("#left");
  const bottomRef = useRef("#bottom");

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
        trigger: body.current,
        start: 0,
        horizontal: true,
        markers: true,
        repeat: -1,
        yoyo: true,
        toggleActions: "restart restart restart restart",
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
    <div id="container" className={styles.AnimatedMarqueeComponent}>
      <div id="top" className={styles.marquee + " " + styles.top}>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
      </div>

      <div id="right" className={styles.marquee + " " + styles.right}>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
      </div>

      <div id="bottom" className={styles.marquee + " " + styles.bottom}>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
      </div>

      <div id="left" className={styles.marquee + " " + styles.left}>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
        <div className="inline">Sandwiches Coffee Tea Tea Sweets</div>
      </div>
    </div>
  );
}
