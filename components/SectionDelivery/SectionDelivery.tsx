import Link from "next/link";
import Text from "../Text/Text";
import { SectionSlide } from "../SectionSlide/SectionSlide";

export interface SectionDeliveryProps {}

export default function SectionDelivery(props: SectionDeliveryProps) {
  return (
    <SectionSlide
      title="Delivery"
      arabicWord="توصيل"
      imageSrc="/images/BP_10.webp"
      imageAlt="Delivery"
      imagePosition="right"
      content={
        <div>
          <Text>
            <p className="text-lg mb-6">
              Order delivery through your favorite platforms:
            </p>
            <div className="space-x-2">
              <Link
                href="https://www.order.store/store/babas-pantry-kansas-city/u28uODGzXwK-28I7PDWcDg"
                className="bg-blue text-white px-4 py-2 rounded-md font-normal text-base inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Uber Eats
              </Link>

              <Link
                href="http://menus.fyi/7085328"
                className="bg-blue text-white px-4 py-2 rounded-md font-normal text-base inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                GrubHub
              </Link>
            </div>
          </Text>
        </div>
      }
    />
  );
}
