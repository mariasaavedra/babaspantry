import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Text from "../Text/Text";

function ScrollSection() {
  const sectionRef = useRef(null);
  const slideRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (sectionRef && sectionRef.current) {
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
          {/* Section 1 */}
          <div className="scroll-section bg-purple">
            <div
              className="relative inline h-screen w-1/2"
              style={{
                backgroundImage: `url("/images/BP_5.jpeg")`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="relative flex items-center  h-screen w-1/2 p-8">
              <Text>
                <h1 className="text-6xl py-2 text-blue font-header">مرحباً</h1>
                <h1 className="text-9xl py-2 font-header">
                  Welcome to Baba's Pantry
                </h1>
                <p className="text-lg">
                  For almost two decades, Yahia Kamal has been a prominent
                  figure in the food scene of Kansas City. However, Baba's
                  Pantry marks several significant firsts for the Palestine-born
                  chef.
                  <br />
                  <br />
                  Every dish on the menu feels deeply personal, from the
                  impossibly crisp falafel to the smooth, velvety hummus and an
                  array of homemade sauces and seasonings. Baba's Pantry is a
                  mouth-watering expression of the feeling of being at home.
                </p>
              </Text>
            </div>
          </div>
          {/* Section 2 */}
          <div className="scroll-section bg-purple">
            <div
              className="relative inline h-screen w-1/2"
              style={{
                backgroundImage: `url("/images/BP_1.jpeg")`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="relative items-center flex h-screen w-1/2 p-8">
              <Text>
                <h1 className="text-9xl py-2 font-header">
                  Top 10 Best Restaurants in America
                </h1>
                <p className="text-lg">
                  Kansas City's own Baba's Pantry was named one of America's
                  best new restaurants by Bon Appetit Magazine.
                </p>
              </Text>
            </div>
          </div>

          {/* Section 3 */}
          <div className="scroll-section bg-purple">
            <div className="relative items-center flex h-screen w-1/2 p-8">
              <Text>
                <h1 className="text-6xl py-2 font-header">قائمة طعام</h1>
                <h1 className="text-9xl py-2 font-header">Menu</h1>
                <p className="text-lg">
                  Hungry for a delicious feast? Click on our menu photo and
                  explore a world of mouth-watering flavors in a new page! From
                  savory starters to indulgent desserts, satisfy your cravings
                  with just a click.
                </p>
              </Text>
            </div>
            <div className="relative items-center flex h-screen w-1/2 p-8">
              <img src="/images/MENU-FRONT.png"></img>
            </div>

            <div className="relative items-center flex h-screen w-1/2 p-8">
              <img src="/images/MENU-BACK.png"></img>
            </div>
          </div>
          {/* Section */}
          <div className="scroll-section bg-green">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
