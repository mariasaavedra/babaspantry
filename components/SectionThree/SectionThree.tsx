import styles from "./SectionThree.module.css";
import Text from "../Text/Text";
import Link from "next/link";

export interface SectionThreeProps {}

export default function SectionThree(props: SectionThreeProps) {
  return (
    <div className={styles.SectionThreeComponent}>
      {/* Section 3 */}
      <div id="menu" className="scroll-section bg-purple">
        <div className="relative items-center flex h-screen md:w-1/2 md:p-8">
          <Text>
            <img width={200} src="/images/menu-arabic_2.svg"></img>
            <h1 className="text-7xl py-2 font-header">Menu</h1>
            <p className="text-lg max-w-lg">
              Click on the menu on the right to explore a world of
              mouth-watering flavors.
            </p>
          </Text>
          <Link className="pointer" target="_blank" href="/menu.pdf">
            <img
              className="border border-2 border-violet h-[70vh] mr-2"
              src="/images/MENU-FRONT.png"
            ></img>
          </Link>
        </div>
        <div className="relative items-center flex h-screen md:w-1/2 md:p-8 pr-0">
          <img
            className="border border-2 border-violet h-screen mr-2"
            src="/images/BP_9.webp"
          ></img>
        </div>
      </div>
    </div>
  );
}
