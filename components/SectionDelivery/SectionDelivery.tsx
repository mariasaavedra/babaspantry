import Link from "next/link";
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
        <div className="space-y-6">
          <p className="text-lg text-neutral-700">
            Order delivery through your favorite platforms:
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.order.store/store/babas-pantry-kansas-city/u28uODGzXwK-28I7PDWcDg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-green text-white text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Uber Eats
            </Link>
            <Link
              href="http://menus.fyi/7085328"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-green text-white text-sm font-medium transition-colors shadow-md hover:shadow-lg"
            >
              Grubhub
            </Link>
          </div>
        </div>
      }
    />
  );
}
