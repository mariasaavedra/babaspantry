import styles from "./SectionThree.module.css";
import Text from "../Text/Text";
import Link from "next/link";
import Image from "next/image";

export interface SectionThreeProps {}

export default function SectionThree(props: SectionThreeProps) {
  return (
    <div className={styles.SectionThreeComponent}>
      {/* Section 3 */}
      <div id="menu" className="scroll-section bg-purple">
        <div className="relative flex flex-col justify-start h-screen md:w-1/2 ">
          <Text>
            <div className="h-3/4"></div>
            <div>
              <img width={200} src="/images/menu-arabic_2.svg"></img>
              <h1 className="text-5xl md:text-7xl  font-header">Menu</h1>
              <p className="text-sm min-w-[150px] md:text-lg max-w-lg">
                Click on the menu below to explore a world of mouth-watering
                flavors.
              </p>
            </div>
          </Text>

          <Image
            src="/images/menu-half.png"
            alt="Menu"
            width={500}
            height={500}
            className="absolute bottom-0 left-0 right-0"
          />
        </div>
        <div className="w-1/2 h-screen"></div>
      </div>
    </div>
  );
}
