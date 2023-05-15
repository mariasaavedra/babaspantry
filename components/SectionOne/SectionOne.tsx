import styles from "./SectionOne.module.css";
import Text from "../Text/Text";

export interface SectionOneProps {}

export default function SectionOne(props: SectionOneProps) {
  return (
    <div className={styles.SectionOneComponent}>
      {/* Section 1 */}
      <div className="scroll-section bg-purple">
        <div
          className="relative inline h-screen md:w-1/2 border-2 border-t-0 border-violet"
          style={{
            backgroundImage: `url("/images/BP_5.jpeg")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          id="welcome"
          className="relative flex items-center h-screen md:w-1/2 md:p-8"
        >
          <Text>
            <img width={150} src="/images/arabic-welcome.svg"></img>
            <h1 className="md:text-7xl text-3xl py-2 font-header">
              Welcome to Baba's Pantry
            </h1>
            <p className=" text-sm md:text-lg">
              For almost two decades, Yahia Kamal has been a prominent figure in
              the food scene of Kansas City. However, Baba's Pantry marks
              several significant firsts for the Palestine-born chef.
              <br />
              <br />
              Every dish on the menu feels deeply personal, from the impossibly
              crisp falafel to the smooth, velvety hummus and an array of
              homemade sauces and seasonings. Baba's Pantry is a true expression
              of the feeling of being at home.
            </p>
          </Text>
        </div>
      </div>
    </div>
  );
}
