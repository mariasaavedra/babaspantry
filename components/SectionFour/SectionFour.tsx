import styles from "./SectionFour.module.css";
import Text from "../Text/Text";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

export interface SectionFourProps {}

export default function SectionFour(props: SectionFourProps) {
  return (
    <div id="merch" className={styles.SectionFourComponent}>
      {/* Section 4 */}
      <div className="scroll-section relative bg-purple">
        <p className="font-header absolute top-[200px] text-violet text-3xl md:text-6xl animate__animated animate__flash animate__infinite">COMING SOON</p>
        
        <div className="relative items-center flex h-screen w-full md:p-8">
          <div className="w-1/2 md:w-1/4">
            <Text>
              <img width={150} src="/images/merch-arabic.svg"></img>
              <h1 className="text-3xl md:text-7xl py-2 font-header">
                Merchandise
              </h1>
            </Text>
          </div>
          <div className="hidden md:block w-1/4 md:w-1/4 mx-2">
            <img
              className="border border-2 border-violet h-1/2"
              src="/images/bambi.jpeg"
            ></img>
          </div>

          <div className="w-1/2 md:w-1/4">
            <Text>
              <img width={150} src="/images/pantry_arabic.svg"></img>
              <h1 className="text-3xl md:text-7xl py-2 font-header">
                Shop Pantry
              </h1>
            </Text>
          </div>
          <div className="hidden md:block w-1/2 md:w-1/4 mx-2">
            <img
              className="border border-2 border-violet h-1/2"
              src="/images/pantry.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
