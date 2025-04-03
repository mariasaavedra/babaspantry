import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Text from "../Text/Text";
import Link from "next/link";
import SectionOne from "../SectionOne/SectionOne";
import SectionTwo from "../SectionTwo/SectionTwo";
import SectionThree from "../SectionThree/SectionThree";
import SectionCatering from "../SectionCatering/SectionCatering";
import SectionDelivery from "../SectionDelivery/SectionDelivery";

function ScrollSection() {
  const sectionRef = useRef(null);
  const slideRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  //responsive
  let mm = gsap.matchMedia();

  useEffect(() => {
    if (sectionRef && sectionRef.current) {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-400vw",
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
      return;
    }
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {/* Intro */}
          <SectionOne />
          {/* Press */}
          <SectionTwo />
          {/* Menu */}
          <SectionThree />
          {/* Delivery */}
          <SectionDelivery />
          {/* Catering & Custom Orders */}
          <SectionCatering />
          {/* <SectionOne /> */}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
