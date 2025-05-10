import styles from "./SectionThree.module.css";
import Text from "../Text/Text";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export interface SectionThreeProps {}

export default function SectionThree(props: SectionThreeProps) {
  const grubhubButtonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
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
  });
  return (
    <div className={styles.SectionThreeComponent}>
      {/* Section 3 */}
      <div id="menu" className="scroll-section bg-purple">
        <div className="relative flex flex-col h-screen md:w-1/2 ">
          <Text>
            <div className="h-3/4"></div>
            <div className="relative mt-8">
              <img
                width={200}
                className="md:my-4"
                src="/images/menu-arabic_2.svg"
              ></img>
              <h1 className="text-5xl md:text-7xl font-header">Menu</h1>
              <p className="text-base min-w-[150px] md:text-lg my-2 max-w-lg">
                Click on the menu below to explore a world of mouth-watering
                flavors.
              </p>
            </div>
          </Text>
          <Link href="/menu.pdf" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/menu-half.png"
                alt="Menu - Click to view PDF"
                width={500}
                height={500}
                className="absolute max-w-xs md:max-w-[400px] md:max-w-none mx-auto left-0 bottom-0 right-0 cursor-pointer hover:opacity-90 transition-opacity"
              />
            </a>
          </Link>
        </div>
        <div
          className="relative inline h-screen md:w-1/2 "
          style={{
            backgroundImage: `url("/images/BP_5.jpeg")`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
