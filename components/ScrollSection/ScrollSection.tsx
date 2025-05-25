import React, { RefObject, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionBakery from "@/components/SectionBakery/SectionBakery";
import SectionCatering from "@/components/SectionCatering/SectionCatering";
import SectionDelivery from "@/components/SectionDelivery/SectionDelivery";
import SectionWelcome from "@/components/SectionOne/SectionOne";
import SectionWelcomePartTwo from "@/components/SectionWelcomePartTwo/SectionWelcomePartTwo";
import SectionMenu from "@/components/SectionThree/SectionThree";
import SectionPress from "@/components/SectionTwo/SectionTwo";

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  const trigger = useRef(null);
  const container = useRef(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const sections = [
    { component: <SectionWelcome />, id: "welcome" },
    { component: <SectionWelcomePartTwo />, id: "welcome-story" },
    { component: <SectionPress />, id: "press" },
    { component: <SectionMenu />, id: "menu" },
    { component: <SectionBakery />, id: "bakery" },
    { component: <SectionDelivery />, id: "delivery" },
    { component: <SectionCatering />, id: "catering" }
  ];

  useGSAP(() => {
    if (!container.current || !sectionRefs.current.length) return;
    
    const totalSections = sections.length;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        pin: true,
        start: "top top",
        end: () => `+=${(totalSections - 1) * window.innerHeight}`,
        scrub: 1,
        snap: {
          snapTo: 1 / (totalSections - 1), // Snap to each section
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
          ease: "power1.inOut"
        }
      }
    });
    // Add each section to the timeline
    sections.forEach((section, index) => {
      if (index > 0) {
        timeline.to(container.current, {
          x: () => -(index * window.innerWidth),
          duration: 1,
          ease: "none"
        }, index);
      }
    });
    // Cleanup
    return () => timeline.kill();
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={trigger}>
        <div 
          ref={container} 
          className="scroll-section-inner"
          style={{ display: 'flex', width: `${sections.length * 100}vw` }}
        >
          {sections.map((section, index) => (
            <div 
              key={section.id} 
              ref={el => { sectionRefs.current[index] = el; }}
              style={{ width: '100vw', flexShrink: 0 }}
            >
              {section.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
