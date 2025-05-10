import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionBakery from "@/components/SectionBakery/SectionBakery";
import SectionCatering from "@/components/SectionCatering/SectionCatering";
import SectionDelivery from "@/components/SectionDelivery/SectionDelivery";
import SectionWelcome from "@/components/SectionOne/SectionOne";
import SectionMenu from "@/components/SectionThree/SectionThree";
import SectionPress from "@/components/SectionTwo/SectionTwo";

function ScrollSection() {
  const sectionRef = useRef(null);
  const slideRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  //responsive
  let mm = gsap.matchMedia();

  useGSAP(() => {
    if (sectionRef && sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-600vw",
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
    }
  });

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}

      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          {/* Intro */}
          <SectionWelcome />
          {/* Press */}
          <SectionPress />
          {/* Menu */}
          <SectionMenu />
          {/* Bakery */}
          <SectionBakery />
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
