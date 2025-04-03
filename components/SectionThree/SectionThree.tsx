import styles from "./SectionThree.module.css";
import Text from "../Text/Text";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

export interface SectionThreeProps {}

export default function SectionThree(props: SectionThreeProps) {
  const grubhubButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side to avoid SSR issues
    if (typeof window !== "undefined" && grubhubButtonRef.current) {
      // Create script element
      const script = document.createElement("script");
      script.src =
        "http://gh-prod-restaurant-shortlinks.s3-website-us-east-1.amazonaws.com/libs/scripts/iframeLib.min.js";
      script.async = true;

      // Add script to the DOM
      document.body.appendChild(script);

      // Cleanup function to remove script when component unmounts
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    }
  }, []);
  return (
    <div className={styles.SectionThreeComponent}>
      {/* Section 3 */}
      <div id="menu" className="scroll-section bg-purple">
        <div className="relative flex flex-col justify-start h-screen md:w-1/2 ">
          <Text>
            <div className="h-3/4"></div>
            <div>
              <img width={200} src="/images/menu-arabic_2.svg"></img>
              <h1 className="text-5xl md:text-7xl font-header">Menu</h1>
              <p className="text-base min-w-[150px] md:text-lg max-w-lg">
                Click on the menu below to explore a world of mouth-watering
                flavors.
              </p>
            </div>
          </Text>
          <Image
            src="/images/menu-half.png"
            alt="Menu"
            width={500}
            height={500}
            className="absolute bottom-0 left-0 right-0"
          />
        </div>
        <div className="relative flex flex-col justify-start h-screen md:w-1/2 "></div>
        {/* <div className="relative flex flex-col  md:w-1/2 ">
          <Text className="space-y-4 text-violet">
            <img width={150} src="/images/SVG/delivery.svg"></img>
            <h1 className="text-5xl md:text-7xl font-header ">Delivery</h1>
            <p className="text-base md:text-lg max-w-lg">
              Order delivery through your favorite platforms:
            </p>

            <p>
              <Link
                href="https://www.order.store/store/babas-pantry-kansas-city/u28uODGzXwK-28I7PDWcDg"
                className="underline text-violet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order via Uber Eats
              </Link>
            </p>

            <p className="text-base md:text-lg max-w-lg">
              Or order through Grubhub:
            </p>

            <div
              ref={grubhubButtonRef}
              className="gh-button-ifrm"
              data-customer-id="7085328"
              data-restaurant-name="Baba's Pantry"
              data-button-color="#1EA3D8:#ffffff"
              data-button-size="large"
              data-env="prod"
              data-shortlinkurl="http://menus.fyi/7085328"
              data-restaurant-address="1019 E 63rd St, Kansas City MO, 64110"
              data-version="1.0"
              data-link-type="gh"
              data-target="_self"
            ></div>
          </Text>
        </div> */}
      </div>
    </div>
  );
}
