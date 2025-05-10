import styles from "./SectionBakery.module.css";
import Text from "../Text/Text";

export interface SectionBakeryProps {}

export default function SectionBakery(props: SectionBakeryProps) {
  return (
    <div className={styles.SectionBakeryComponent}>
      {/* Section Bakery */}
      <div className="scroll-section bg-purple">
        <div className="relative flex items-center h-screen md:w-1/2 md:p-8">
          <Text>
            <div className="relative">
              <h1 className="md:text-7xl text-5xl py-2 font-header">Bakery</h1>
              <p className="text-base md:text-lg">
                The word for bakery in Arabic is:
              </p>
              <p className="text-4xl my-2 font-arabic">مخبز</p>
              <p className="text-base md:text-lg my-2">
                Baba's Bakery is our sweet little extension of the Pantry. We're excited to share more of our Palestinian culture through our family's baked goods. You'll find sweet and savory favorites alongside new creations, all made with a mix of classic influences and playful twists.
              </p>
              <p className="text-base md:text-lg my-2">
                For now, we're popping up every Saturday from 11am to 3pm. Stay tuned—regular hours are coming soon!
              </p>
            </div>
          </Text>
        </div>
        <div
          className="relative inline h-screen md:w-1/2"
          style={{
            backgroundImage: `url("/images/BP_6.webp")`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
    </div>
  );
}
