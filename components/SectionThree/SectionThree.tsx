import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { SectionSlide } from "../SectionSlide/SectionSlide";
import Text from "../Text/Text";
import styles from "./SectionThree.module.css";

export interface SectionThreeProps {}

export default function SectionMenu(props: SectionThreeProps) {
  const grubhubButtonRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window !== "undefined" && grubhubButtonRef.current) {
      const script = document.createElement("script");
      script.src =
        "http://gh-prod-restaurant-shortlinks.s3-website-us-east-1.amazonaws.com/libs/scripts/iframeLib.min.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        if (script.parentNode) script.parentNode.removeChild(script);
      };
    }
  }, []);

  return (
    <SectionSlide
      title="Menu"
      arabicWord="قائمة الطعام"
      imageSrc="/images/BP_5.jpeg"
      imageAlt="Baba's Pantry menu display"
      imagePosition="right"
      content={
        <>
          <Text>
            <p className="text-base min-w-[150px] md:text-lg my-2 max-w-lg">
              Click on the menu below to explore a world of mouth-watering
              flavors.
            </p>
            <Button className="mt-4">
              <Link href="/menu.pdf" passHref>
                View Full Menu
              </Link>
            </Button>
          </Text>

          <Link href="/menu.pdf" passHref>
            <Image
              src="/images/menu-half.png"
              alt="Menu - Click to view PDF"
              width={500}
              height={500}
              className="mt-8 mx-auto cursor-pointer hover:opacity-90 transition-opacity max-w-xs md:max-w-none"
            />
          </Link>

          <div ref={grubhubButtonRef} />
        </>
      }
    />
  );
}
