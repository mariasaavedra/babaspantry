import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import Text from "../Text/Text";
import Link from "next/link";

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
              className="relative inline h-screen md:w-1/2 border-2 border-t-0 border-violet"
              style={{
                backgroundImage: `url("/images/BP_5.jpeg")`,
                backgroundSize: "cover",
              }}
            ></div>
            <div
              id="welcome"
              className="relative flex items-center h-screen md:w-1/2 md:p-8"
            >
              <Text>
                <img width={150} src="/images/arabic-welcome.svg"></img>
                <h1 className="text-7xl py-2 font-header">
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
          <div id="tomd:p-10" className="scroll-section bg-purple">
            <div
              className="relative inline h-screen md:w-1/2 border-2 border-violet"
              style={{
                backgroundImage: `url("/images/BP_1.jpeg")`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="relative items-center flex h-screen md:w-1/2 md:p-8">
              <Text>
                <img width={180} src="/images/press-arabic.svg"></img>
                <h1 className="text-7xl py-2 font-header">Press</h1>
                <h1 className="text-4xl py-2 font-header">
                  Top 10 Best Restaurants in America
                </h1>
                <p className="text-lg">
                  Kansas City's own Baba's Pantry was named one of America's
                  best new restaurants by Bon Appetit Magazine.
                </p>
                <p className="mt-4 text-2xl">Links:</p>
                <ul>
                  <li className="underline">
                    <Link target="_blank" href="https://www.bonappetit.com/story/babas-pantry-kansas-city-missouri-best-new-restaurant-2022">
                      Bon Appetit
                    </Link>
                  </li>
                  <li className="underline">
                    <Link target="_blank" href="https://www.kcur.org/arts-life/2022-09-14/babas-pantry-in-kansas-city-named-one-of-the-countrys-10-best-new-restaurants">
                      KCUR
                    </Link>
                  </li>
                  <li className="underline">
                    <Link target="_blank" href="https://www.kansascity.com/news/local/article265499761.html">
                      Kansas City Star
                    </Link>
                  </li>
                </ul>
              </Text>
            </div>
          </div>

          {/* Section 3 */}
          <div id="menu" className="scroll-section bg-purple">
            <div className="relative items-center flex h-screen md:w-1/2 md:p-8">
              <Text>
                <img width={200} src="/images/menu-arabic_2.svg"></img>
                <h1 className="text-7xl py-2 font-header">Menu</h1>
                <p className="text-lg max-w-lg">
                  Hungry for a delicious feast? Click on our menu photo and
                  explore a world of mouth-watering flavors in a new page! From
                  savory starters to indulgent desserts, satisfy your cravings
                  with just a click.
                </p>
              </Text>
              <Link className="pointer" target="_blank" href="/menu.pdf">
                <img
                  className="border border-2 border-violet h-[70vh] mr-2"
                  src="/images/MENU-FRONT.png"
                ></img>
              </Link>
            </div>
            <div className="relative items-center flex h-screen md:w-1/2 md:p-8 pr-0">
              <img
                className="border border-2 border-violet h-screen mr-2"
                src="/images/BP_9.webp"
              ></img>
            </div>
          </div>
          {/* Section 4 */}
          <div className="scroll-section bg-purple">
            <div className="relative items-center flex h-screen w-full md:p-8">
              <div className="md:w-1/2">
                <Text>
                  <img width={150} src="/images/merch-arabic.svg"></img>
                  <h1 className="text-7xl py-2 font-header">Merchandise</h1>
                  <p className="text-lg">
                    Show your love for Baba's Pantry and support a local
                    business by grabbing one of our branded jerseys! Not only
                    will you look great, but you'll be helping us continue to
                    bring authentic Palestinian cuisine to your table. Order now
                    and wear your pride on your sleeve!
                  </p>
                </Text>
              </div>
              <div className="md:w-1/2">
                <Text>
                <img width={150} src="/images/pantry_arabic.svg"></img>
                  <h1 className="text-7xl py-2 font-header">Shop Pantry</h1>
                  <p className="text-lg">
                    Show your love for Baba's Pantry and support a local
                    business by grabbing one of our branded jerseys! Not only
                    will you look great, but you'll be helping us continue to
                    bring authentic Palestinian cuisine to your table. Order now
                    and wear your pride on your sleeve!
                  </p>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
