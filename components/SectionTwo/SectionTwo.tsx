import Link from "next/link";
import Text from "../Text/Text";

import styles from "./SectionTwo.module.css";

export interface SectionTwoProps {}

export default function SectionTwo(props: SectionTwoProps) {
  return (
    <div id="press" className={styles.SectionTwoComponent}>
      {/* Section 2 */}
      <div id="tomd:p-10" className="scroll-section bg-purple">
        <div
          className="relative inline h-screen md:w-1/2 md:border-2 border-violet"
          style={{
            backgroundImage: `url("/images/BP_1.jpeg")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="relative items-center flex h-screen md:w-1/2 md:p-8">
          <Text>
            <img width={180} src="/images/press-arabic.svg"></img>
            <h1 className="text-5xl md:text-7xl py-2 font-header">Press</h1>
            <h1 className="text-3xl md:text-4xl py-2 font-header">
              Top 10 Best Restaurants in America
            </h1>
            <p className="text-sm md:text-lg">
              Kansas City's own Baba's Pantry was named one of America's best
              new restaurants by Bon Appetit Magazine.
            </p>
            <p className="mt-4 md:text-2xl">Links:</p>
            <ul className="text-sm">
              <li className="underline">
                <Link
                  target="_blank"
                  href="https://www.bonappetit.com/story/babas-pantry-kansas-city-missouri-best-new-restaurant-2022"
                >
                  Bon Appetit
                </Link>
              </li>
              <li className="underline">
                <Link
                  target="_blank"
                  href="https://www.kcur.org/arts-life/2022-09-14/babas-pantry-in-kansas-city-named-one-of-the-countrys-10-best-new-restaurants"
                >
                  KCUR
                </Link>
              </li>
              <li className="underline">
                <Link
                  target="_blank"
                  href="https://www.kansascity.com/news/local/article265499761.html"
                >
                  Kansas City Star
                </Link>
              </li>
            </ul>
          </Text>
        </div>
      </div>
    </div>
  );
}
