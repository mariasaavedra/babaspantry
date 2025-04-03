import { useEffect, useRef } from "react";
import styles from "./SectionDelivery.module.css";
import Text from "../Text/Text";
import Link from "next/link";

export interface SectionDeliveryProps {}

export default function SectionDelivery(props: SectionDeliveryProps) {
  const grubhubButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client-side to avoid SSR issues
    if (typeof window !== "undefined" && grubhubButtonRef.current) {
      // Create script element
      const script = document.createElement("script");
      script.src = "http://gh-prod-restaurant-shortlinks.s3-website-us-east-1.amazonaws.com/libs/scripts/iframeLib.min.js";
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
    <div id="delivery" className={styles.SectionDeliveryComponent}>
      {/* Section Delivery */}
      <div className="scroll-section bg-purple">
        <div className="relative items-center flex w-full md:p-8">
          <div className="w-full md:w-1/2">
            <Text>
            <img width={150} src="/images/SVG/delivery.svg"></img>
              <h1 className="text-5xl md:text-7xl py-2 font-header">
                Delivery
              </h1>
              <p className="text-sm md:text-lg max-w-lg mb-6">
                Order delivery through your favorite platforms:
              </p>
              
              <p className="mb-6">
                <Link 
                  href="https://www.order.store/store/babas-pantry-kansas-city/u28uODGzXwK-28I7PDWcDg"
                  className="underline text-violet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order via Uber Eats
                </Link>
              </p>
              
              <p className="text-sm md:text-lg max-w-lg mb-4">
                Or order through Grubhub:
              </p>
              
              <div 
                ref={grubhubButtonRef}
                className="gh-button-ifrm" 
                data-customer-id="7085328" 
                data-restaurant-name="Baba's Pantry" 
                data-button-color="#FF8000:#ffffff" 
                data-button-size="large" 
                data-env="prod" 
                data-shortlinkurl="http://menus.fyi/7085328" 
                data-restaurant-address="1019 E 63rd St, Kansas City MO, 64110" 
                data-version="1.0" 
                data-link-type="gh" 
                data-target="_self"
              ></div>
            </Text>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img
              className="border border-2 border-violet"
              src="/images/BP_10.webp"
              alt="Delivery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
