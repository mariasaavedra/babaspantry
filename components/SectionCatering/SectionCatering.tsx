import styles from "./SectionCatering.module.css";
import Text from "../Text/Text";
import Link from "next/link";

export interface SectionCateringProps {}

export default function SectionCatering(props: SectionCateringProps) {
  return (
    <div id="catering" className={styles.SectionCateringComponent}>
      {/* Section Catering */}
      <div className="scroll-section bg-purple">
        <div className="relative items-center flex h-screen w-full md:p-8">
          <div className="w-full md:w-1/2">
            <Text>
              <h1 className="text-5xl md:text-7xl py-2 font-header">
                Catering & Custom Orders
              </h1>
              <p className="text-sm md:text-lg max-w-lg">
                Orders accepted via our online ordering system:
              </p>
              <p className="mb-4">
                <Link 
                  href="https://order.spoton.com/so-babas-pantry-11884/kansas-city-mo/639a2a2e0d2bfd0041fd231a"
                  className="underline text-violet"
                >
                  SpotOn Online Ordering
                </Link>
              </p>
              <p className="text-sm md:text-lg max-w-lg">
                <strong>48-hour advance notice policy required.</strong> Last-minute orders 
                cannot be guaranteed and are subject to availability.
              </p>
              <p className="text-sm md:text-lg max-w-lg mt-4">
                For special requests, please email us at:{" "}
                <a 
                  href="mailto:babapantrycatering@gmail.com"
                  className="underline text-violet"
                >
                  babapantrycatering@gmail.com
                </a>
              </p>
              <p className="text-sm md:text-lg max-w-lg mt-4">
                <strong>Required information for email confirmation:</strong>
              </p>
              <ul className="text-sm md:text-lg list-disc pl-5 max-w-lg">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Order confirmation number</li>
              </ul>
              <p className="text-sm md:text-lg max-w-lg mt-4">
                For questions about existing orders, please contact us directly with your
                order confirmation number.
              </p>
            </Text>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img
              className="border border-2 border-violet h-screen"
              src="/images/BP_7.webp"
              alt="Catering"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
