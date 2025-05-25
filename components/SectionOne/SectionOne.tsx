import React, { useRef } from "react";
import styles from "./SectionOne.module.css";
import Text from "../Text/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SectionOneProps {}

export default function SectionWelcome(props: SectionOneProps) {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    if (titleRef.current && textRef.current && imageRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
      
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.8 }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );
    }
  }, []);

  return (
    <div className={styles.SectionOneComponent}>
      {/* Section 1 */}
      <div className="scroll-section bg-purple">
        <div
          id="welcome"
          className="relative flex items-center h-screen w-screen md:p-8"
        >
          <Text>
            <img ref={imageRef} width={100} src="/images/arabic-welcome.svg" alt="Welcome in Arabic" />
            <h1 ref={titleRef} className="md:text-7xl text-5xl py-2 font-header">
              Welcome to Baba's Pantry
            </h1>
            <section ref={textRef} className="text-base md:text-lg">
              <div className="mb-4">
                For almost two decades, Yahia Kamal has been a prominent figure
                in the food scene of Kansas City. However, Baba's Pantry marks
                several significant firsts for the Palestine-born chef.
              </div>
              <div className="mb-4">
                Every dish on the menu feels deeply personal, from the
                impossibly crisp falafel to the smooth, velvety hummus and an
                array of homemade sauces and seasonings. Baba's Pantry is a true
                expression of the feeling of being at home. We're all about
                sharing the vibrant flavors of Palestine—right here in Kansas
                City.
              </div>
              <div className="mb-4">
                Our story begins in the year 2000, when Baba brought his
                passion for hummus and Palestinian cooking to the local market.
                He was one of the first to introduce hummus to Kansas City,
                often seen in grocery stores offering samples and chatting with
                folks about its roots and health benefits—long before it became
                the staple it is today.
              </div>
              <div className={styles.continueIndicator}>
                <span className={styles.scrollText}>Continue the story</span>
                <span className={styles.scrollArrow}>↓</span>
              </div>
            </section>
          </Text>
        </div>
      </div>
    </div>
  );
}
