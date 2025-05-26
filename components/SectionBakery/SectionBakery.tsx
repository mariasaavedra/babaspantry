import { SectionSlide } from "@/components/SectionSlide/SectionSlide";
import Text from "../Text/Text";

export interface SectionBakeryProps {}

export default function SectionBakery(props: SectionBakeryProps) {
  return (
    <SectionSlide
      title="Bakery"
      arabicWord=""
      imageSrc="/images/BP_6.webp"
      imageAlt="Baba's Pantry exterior with family"
      imagePosition="right"
      content={
        <>
          <Text>The word for bakery in Arabic is:</Text>
          <Text className="text-4xl my-2 font-arabic">مخبز</Text>
          <Text>
            Baba's Bakery is our sweet little extension of the Pantry. We're
            excited to share more of our Palestinian culture through our
            family's baked goods. You'll find sweet and savory favorites
            alongside new creations, all made with a mix of classic influences
            and playful twists.
          </Text>
          <Text>
            For now, we're popping up every Saturday from 11am to 3pm. Stay
            tuned—regular hours are coming soon!
          </Text>
        </>
      }
    />
  );
}
