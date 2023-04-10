import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Text from "../Text/Text";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section bg-purple">
            <div
              className="relative inline h-screen w-1/2"
              style={{
                backgroundImage: `url("/images/BP_1.jpeg")`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="relative h-screen w-1/2">
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
          </div>
          <div className="scroll-section bg-blue">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section bg-purple">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section bg-green">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
