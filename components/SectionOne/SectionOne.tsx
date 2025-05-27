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
      content={
        <>
          <Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base leading-relaxed">
              <div className="space-y-6">
                <p>
                  We’re all about sharing the vibrant flavors of Palestine—right
                  here in Kansas City.
                </p>
                <p>
                  Our story begins in the year 2000, when Baba brought his
                  passion for hummus and Palestinian cooking to the local
                  market. He was one of the first to introduce hummus to Kansas
                  City, often seen in grocery stores offering samples and
                  chatting with folks about its roots and health benefits—long
                  before it became the staple it is today.
                </p>
                <p>
                  Since then, Baba has continued to craft dishes inspired by
                  Palestinian cuisine and his experience of living in the
                  diaspora. For a time, you could even find his products on
                  Whole Foods shelves across the country.
                </p>
                <p>
                  Baba’s Pantry officially opened in 2021. With the love and
                  support of friends and the community he built over the years,
                  we were able to bring a longtime dream to life: an eatery
                  where Baba could cook freely and express himself through food.
                  After decades of working with others, this was his first time
                  building something truly his own.
                </p>
              </div>

              <div className="space-y-6">
                <p>
                  Our take on Palestinian food is shaped by living in the
                  diaspora. We celebrate the creativity that comes from adapting
                  traditional recipes with the tools and ingredients available
                  to us—often leading to beautiful, cross-cultural connections
                  with other communities in the diaspora. We hold onto our
                  Palestinian culture while making space for change as a form of
                  resilience, which we are proud to share through our food.
                </p>
                <p>
                  While our hummus and falafel stay close to tradition, dishes
                  like our shawarma and kebabs reflect how we’ve adapted to use
                  what’s around us to create something that feels both new and
                  familiar.
                </p>
                <p>
                  Baba’s Pantry is about more than just food. It’s about
                  reliance, celebration of culture, creativity, and community.
                  Through our kitchen, we hope to spark conversations around
                  those themes and celebrate all the ways we can stay rooted in
                  who we are while building something new.
                </p>
              </div>
            </div>

          </Text>
        </>
      }
    />
  );
}
