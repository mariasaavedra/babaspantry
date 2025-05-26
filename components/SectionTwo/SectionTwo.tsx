import Link from "next/link";
import Text from "../Text/Text";
import { Button } from "@headlessui/react";
import { SectionSlide } from "../SectionSlide/SectionSlide";

export interface SectionTwoProps {}

export default function SectionPress(props: SectionTwoProps) {
  const pressItems = [
    {
      type: "article",
      title: "KCUR 89.3",
      desc: "Kansas City Welcomed Baba's Pantry with Open Arms. A Bakery Now Shows Off Palestinian Treats",
      link: "https://www.kcur.org/arts-life/2022-09-14/babas-pantry-in-kansas-city-named-one-of-the-countrys-10-best-new-restaurants",
      linkText: "Read more",
    },
    {
      type: "article",
      title: "Kansas City Magazine",
      desc: "Baba's Bakery Is Officially Open",
      link: "#",
      linkText: "Read more",
    },
    {
      type: "article",
      title: "The Pitch KC",
      desc: "Eat This Now: Chicken Shawarma Wrap at Baba's Pantry",
      link: "#",
      linkText: "Read more",
    },
    {
      type: "article",
      title: "SpotOn",
      desc: "The Labor of Love at Baba's Pantry",
      link: "#",
      linkText: "Read more",
    },
    {
      type: "article",
      title: "Kansas City Current",
      desc: "Kansas City Current Announces Baba's Pantry as New Culinary Partner in CPKC Stadium",
      link: "#",
      linkText: "Read more",
    },
    {
      type: "podcast",
      title: "This Is TASTE Podcast",
      desc: "Episode 512: Kamal Kamal and the Dream of Baba's Pantry",
      link: "https://open.spotify.com/",
      linkText: "Listen",
    },
    {
      type: "podcast",
      title: "KCUR's Kansas City Today",
      desc: "Kansas City's New Palestinian Bakery",
      link: "https://open.spotify.com/",
      linkText: "Listen",
    },
  ];

  return (
    <SectionSlide
      title="Press"
      arabicWord="صحافة"
      content={
        <div className="grid gap-6 md:grid-cols-2">
          {pressItems.map(({ type, title, desc, link, linkText }) => (
            <div key={title} className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl">{title}</h3>
              </div>
              <p className="text-sm">{desc}</p>
              <Button as={Link} href={link} target="_blank">
                {linkText}
              </Button>
            </div>
          ))}
        </div>
      }
    />
  );
}
