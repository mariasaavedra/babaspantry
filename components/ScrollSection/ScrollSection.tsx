"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import SectionWelcome from "@/components/SectionOne/SectionOne";
import SectionPress from "@/components/SectionTwo/SectionTwo";
import SectionMenu from "@/components/SectionThree/SectionThree";
import SectionBakery from "@/components/SectionBakery/SectionBakery";
import SectionDelivery from "@/components/SectionDelivery/SectionDelivery";
import SectionCatering from "@/components/SectionCatering/SectionCatering";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ScrollSection() {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const sections = [
    <SectionWelcome key="welcome" />,
    <SectionPress key="press" />,
    <SectionMenu key="menu" />,
    <SectionBakery key="bakery" />,
    <SectionDelivery key="delivery" />,
    <SectionCatering key="catering" />,
  ];

  useGSAP(() => {
    if (!containerRef.current || !triggerRef.current) return;
    // @ts-expect-error
    const totalWidth = containerRef.current.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(containerRef.current, {
      x: () => `-${scrollDistance}px`,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.4 },
          delay: 0.1,
          ease: "power1.inOut",
        },
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={triggerRef} className="scroll-section-outer">
      <div
        ref={containerRef}
        className="scroll-section-inner"
        style={{
          display: "flex",
          width: `${sections.length * 100}vw`,
          height: "100vh",
        }}
      >
        {sections.map((Component, i) => (
          <div
            key={i}
            className="scroll-section"
            style={{ width: "100vw", flexShrink: 0 }}
          >
            {Component}
          </div>
        ))}
      </div>
    </section>
  );
}
