import Link from "next/link";
import Text from "../Text/Text";

import styles from "./SectionTwo.module.css";

export interface SectionTwoProps {}

export default function SectionTwo(props: SectionTwoProps) {
  return (
    <div id="press" className={styles.SectionTwoComponent}>
      {/* Section 2  - Press */}
      <div id="tomd:p-10" className="scroll-section bg-purple">
        <div className="relative items-center flex h-screen w-full p-2 md:p-8">
          <Text>
            <img width={180} src="/images/press-arabic.svg"></img>
            <h1 className="text-5xl md:text-7xl py-2 font-header">Press</h1>
            
            <h2 className="text-3xl md:text-4xl py-2 font-header">
              🏆 Awards & Recognition
            </h2>
            
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-header">Bon Appétit</h3>
              <p className="text-lg md:text-lg">
                Named one of the 10 Best New Restaurants in America (2022)
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="https://www.bonappetit.com/story/babas-pantry-kansas-city-missouri-best-new-restaurant-2022"
                >
                  Read more
                </Link>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-header">Southern Living</h3>
              <p className="text-lg md:text-lg">
                Featured in The South's Best New Restaurants of 2023
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="#"
                >
                  Read more
                </Link>
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl py-2 font-header">
              📰 Featured Articles
            </h2>
            
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-header">KCUR 89.3</h3>
              <p className="text-lg md:text-lg">
                Kansas City Welcomed Baba's Pantry with Open Arms. A Bakery Now Shows Off Palestinian Treats
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="https://www.kcur.org/arts-life/2022-09-14/babas-pantry-in-kansas-city-named-one-of-the-countrys-10-best-new-restaurants"
                >
                  Read more
                </Link>
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-header">Kansas City Magazine</h3>
              <p className="text-lg md:text-lg">
                Baba's Bakery Is Officially Open
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="#"
                >
                  Read more
                </Link>
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-header">The Pitch KC</h3>
              <p className="text-lg md:text-lg">
                Eat This Now: Chicken Shawarma Wrap at Baba's Pantry
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="#"
                >
                  Read more
                </Link>
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-header">SpotOn</h3>
              <p className="text-lg md:text-lg">
                The Labor of Love at Baba's Pantry
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="#"
                >
                  Read more
                </Link>
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-header">Kansas City Current</h3>
              <p className="text-lg md:text-lg">
                Kansas City Current Announces Baba's Pantry as New Culinary Partner in CPKC Stadium
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="#"
                >
                  Read more
                </Link>
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl py-2 font-header">
              🎧 Podcast Features
            </h2>
            
            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-header">This Is TASTE Podcast</h3>
              <p className="text-lg md:text-lg">
                Episode 512: Kamal Kamal and the Dream of Baba's Pantry
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="https://open.spotify.com/"
                >
                  Listen on Spotify
                </Link>
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl md:text-3xl font-header">KCUR's Kansas City Today</h3>
              <p className="text-lg md:text-lg">
                Kansas City's New Palestinian Bakery
              </p>
              <p className="underline text-lg">
                <Link
                  target="_blank"
                  href="https://open.spotify.com/"
                >
                  Listen on Spotify
                </Link>
              </p>
            </div>
          </Text>
        </div>
      </div>
    </div>
  );
}
