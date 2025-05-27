import Link from "next/link";
import { Button } from "@headlessui/react";
import { SectionSlide } from "../SectionSlide/SectionSlide";

export interface SectionTwoProps {}

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

export default function SectionPress(props: SectionTwoProps) {
  return (
    <SectionSlide
      title="Press & Features"
      subtitle="Baba's Pantry has been featured in various media outlets, showcasing our unique offerings and community impact."
      arabicWord="صحافة"
      inlineTitle
      contentClassName="!justify-start items-start pt-32"
      content={
        <section className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {pressItems.map(({ title, desc, link, linkText, type }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm"
            >
              <div>
                <span className="text-xs uppercase tracking-wide text-neutral-500">
                  {type}
                </span>
                <h3 className="text-2xl font-semibold mt-1 text-neutral-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {desc}
                </p>
              </div>
              <div className="mt-4">
                <Button
                  as={Link}
                  href={link}
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline underline-offset-4"
                >
                  {linkText} →
                </Button>
              </div>
            </div>
          ))}
        </section>
      }
    />
  );
}
