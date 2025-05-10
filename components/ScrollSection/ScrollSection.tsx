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
  const trigger = useRef(null);
  const container = useRef(null);
  gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

  useGSAP(() => {
    if (container && container.current) {
      gsap.fromTo(
        container.current,
        {
          translateX: 0,
        },
        {
          translateX: "-500vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: trigger.current,
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

      <div ref={trigger}>
        <div ref={container} className="scroll-section-inner">
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
