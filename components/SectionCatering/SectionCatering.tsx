import Link from "next/link";
import Text from "../Text/Text";
import Image from "next/image";
import { SectionSlide } from "../SectionSlide/SectionSlide";

export interface SectionCateringProps {}

export default function SectionCatering(props: SectionCateringProps) {
  return (
    <SectionSlide
      title="Catering"
      arabicWord="التموين
"
      content={
        <div className="relative flex flex-row">
          <Link
            href="https://order.spoton.com/so-babas-pantry-11884/kansas-city-mo/639a2a2e0d2bfd0041fd231a"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-16 right-0 md:right-0 flex items-center justify-center"
          >
            <Image
              src="/images/SVG/order-catering.svg"
              alt="Catering"
              width={100}
              height={100}
              className="cursor-pointer"
            />
          </Link>

          <Text>
            <div className="space-y-4 max-w-prose">
              <p className="text-base">
                We accept catering orders through the link provided below.
                Please place your order at least{" "}
                <span className="font-semibold">48 hours</span> in advance, as
                all orders must be placed online.
              </p>

              <p className="hidden md:block">
                If an order is placed with less than 48 hours' notice, we'll do
                our best to accommodate it, but due to time constraints,
                staffing, and ingredient availability, we may not always be able
                to fulfill last-minute requests. We appreciate your
                understanding!
              </p>

              <p>
                For special requests, such as weddings or custom catering
                orders, please contact us directly—ideally via email—at{" "}
                <Link
                  href="mailto:babapantrycatering@gmail.com"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  babapantrycatering@gmail.com
                </Link>
                . Be sure to allow plenty of time for revisions.
              </p>

              <div>
                <p className="font-body mb-2">
                  When confirming an order via email, please include:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Your name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Order confirmation number</li>
                </ul>
              </div>

              <p>
                For any questions about an existing order, email us at{" "}
                <Link
                  href="mailto:babapantrycatering@gmail.com"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  babapantrycatering@gmail.com
                </Link>{" "}
                with your name and order number.
              </p>

              <p className="text-gray-600">Thank you!</p>
            </div>
          </Text>
          {/* <Image
            src="/images/BP_3.jpeg"
            alt="Catering"
            width={300}
            height={100}
            className="mt-8 mx-auto  object-contain w-full max-w-md md:max-w-md"
          /> */}
        </div>
      }
    />
  );
}
