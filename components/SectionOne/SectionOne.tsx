import React, { useRef } from "react";
import { SectionSlide } from "../SectionSlide/SectionSlide";
import Text from "../Text/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SectionOne.module.css";

gsap.registerPlugin(ScrollTrigger);

export interface SectionOneProps {}

export default function SectionWelcome(props: SectionOneProps) {
  // const titleRef = useRef(null);
  // const textRef = useRef(null);
  // const imageRef = useRef(null); // unused but kept for extensibility

  // useGSAP(() => {
  //   if (titleRef.current && textRef.current) {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: titleRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none reverse",
  //       },
  //     });

  //     tl.fromTo(
  //       titleRef.current,
  //       { opacity: 0, y: -30 },
  //       { opacity: 1, y: 0, duration: 0.8 }
  //     ).fromTo(
  //       textRef.current,
  //       { opacity: 0, y: 30 },
  //       { opacity: 1, y: 0, duration: 0.8 },
  //       "-=0.4"
  //     );
  //   }
  // }, []);

  return (
    <SectionSlide
      title="Welcome to Baba's Pantry"
      arabicWord="مرحبا"
      imageSrc="/images/BP_5.jpeg"
      imagePosition="left"
      content={
        <>
          <Text>
            <p className="mb-4">
              For almost two decades, Yahia Kamal has been a prominent figure in
              the food scene of Kansas City. However, Baba's Pantry marks
              several significant firsts for the Palestine-born chef.
            </p>
            <p className="mb-4">
              Every dish on the menu feels deeply personal, from the impossibly
              crisp falafel to the smooth, velvety hummus and an array of
              homemade sauces and seasonings. Baba's Pantry is a true expression
              of the feeling of being at home. We're all about sharing the
              vibrant flavors of Palestine—right here in Kansas City.
            </p>
            <p className="mb-4">
              Our story begins in the year 2000, when Baba brought his passion
              for hummus and Palestinian cooking to the local market. He was one
              of the first to introduce hummus to Kansas City, often seen in
              grocery stores offering samples and chatting with folks about its
              roots and health benefits—long before it became the staple it is
              today.
            </p>
            <div className={styles.continueIndicator}>
              <span className={styles.scrollText}>Continue the story</span>
              <span className={styles.scrollArrow}>↓</span>
            </div>
          </Text>
        </>
      }
    />
  );
}
