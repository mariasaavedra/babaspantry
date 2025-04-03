import Link from "next/link";
import Text from "../Text/Text";
import Image from "next/image";
export interface SectionOneProps {}

export default function SectionOne(props: SectionOneProps) {
  return (
    <div>
      {/* Section Catering */}
      <div className="scroll-section bg-purple w-full">
        <Text className="relative max-w-prose p-8 md:p-8 text-violet">
          <Link
            href="https://order.spoton.com/so-babas-pantry-11884/kansas-city-mo/639a2a2e0d2bfd0041fd231a"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-20 right-10  md:-right-10 md:bottom-40 flex items-center justify-center"
          >
            <Image
              src="/images/SVG/order-catering.svg"
              alt="Catering"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>
          <h1 className="text-5xl md:text-7xl  font-header mb-2">Catering</h1>
          <div className="space-y-2 relative">
            <p className="leading-tight">
              We accept catering orders through the link provided below. Please
              place your order at least{" "}
              <span className="font-semibold">48 hours</span> in advance, as all
              orders must be placed online.
            </p>

            <p className="leading-tight">
              If an order is placed with less than 48 hours' notice, we’ll do
              our best to accommodate it, but due to time constraints, staffing,
              and ingredient availability, we may not always be able to fulfill
              last-minute requests. We appreciate your understanding!
            </p>
          </div>

          <div className="hidden md:block space-y-2">
            {/* <h2 className="text-4xl mt-4 font-light font-header">
              Special Requests
            </h2> */}
            <p className="leading-tight my-4">
              For special requests, such as weddings or custom catering orders,
              please contact us directly—ideally via email—at{" "}
              <Link
                style={{
                  color: "rgb(12 116 153)",
                }}
                href="mailto:babapantrycatering@gmail.com"
                className="text-green-600 underline hover:text-green-700"
              >
                babapantrycatering@gmail.com
              </Link>
              . Be sure to allow plenty of time for revisions.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-lg  my-2 font-body">
              When confirming an order via email, please include:
            </p>
            <ul className="list-disc text-sm list-inside space-y-1">
              <li>Your name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Order confirmation number</li>
            </ul>
            <p>
              For any questions about an existing order, email us at{" "}
              <Link
                style={{
                  color: "rgb(12 116 153)",
                }}
                href="mailto:babapantrycatering@gmail.com"
                className="!text-green-600 underline hover:text-green-700"
              >
                babapantrycatering@gmail.com
              </Link>{" "}
              with your name and order number.
            </p>
          </div>

          <p className="text-left text-sm text-gray-500">Thank you!</p>
        </Text>
        {/* <div className="w-1/2 p-2"></div> */}
      </div>
    </div>
  );
}
