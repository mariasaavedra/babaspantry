import React, { useRef } from "react";
import styles from "./SectionWelcomePartTwo.module.css";
import Text from "../Text/Text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SectionSlide } from "../SectionSlide/SectionSlide";

export interface SectionWelcomePartTwoProps {}

export default function SectionWelcomePartTwo(props: SectionWelcomePartTwoProps) {
  const textRef = useRef(null);

  useGSAP(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { 
          opacity: 0,
          y: 50 
        },
        { 
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <SectionSlide
      title="Our Journey Continues..."
      arabicWord="رحلتنا مستمرة"
      content={
        <div>
          <div className={styles.storyConnector}>
            <div className={styles.storyLine}></div>
            <div className={styles.storyIcon}>✦</div>
          </div>
          <Text>
            <section className="text-lg space-y-4" ref={textRef}>
              <p>
                Since then, Baba has continued to craft dishes inspired by
                Palestinian cuisine and his experience of living in the
                diaspora. For a time, you could even find his products on Whole
                Foods shelves across the country. Baba's Pantry officially
                opened in 2021. With the love and support of friends and the
                community he built over the years, we were able to bring a
                longtime dream to life: an eatery where Baba could cook freely
                and express himself through food. After decades of working with
                others, this was his first time building something truly his
                own.
              </p>
              <p>
                Our take on Palestinian food is shaped by living in the
                diaspora. We celebrate the creativity that comes from adapting
                traditional recipes with the tools and ingredients available to
                us—often leading to beautiful, cross-cultural connections with
                other communities in the diaspora. We hold onto our Palestinian
                culture while making space for change as a form of resilience,
                which we are proud to share through our food.
              </p>
              <p>
                While our hummus and falafel stay close to tradition, dishes
                like our shawarma and kebabs reflect how we've adapted to use
                what's around us to create something that feels both new and
                familiar. Baba's Pantry is about more than just food. It's about
                resilience, celebration of culture, creativity, and community.
                Through our kitchen, we hope to spark conversations around those
                themes and celebrate all the ways we can stay rooted in who we
                are while building something new.
              </p>
            </section>
          </Text>
        </div>
      }
    />
  );
}
