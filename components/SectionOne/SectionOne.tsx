import styles from "./SectionOne.module.css";
import Text from "../Text/Text";

export interface SectionOneProps {}

export default function SectionWelcome(props: SectionOneProps) {
  return (
    <div className={styles.SectionOneComponent}>
      {/* Section 1 */}
      <div className="scroll-section bg-purple">
        <div
          id="welcome"
          className="relative flex items-center h-screen w-screen md:p-8"
        >
          <Text>
            <img width={100} src="/images/arabic-welcome.svg"></img>
            <h1 className="md:text-7xl text-5xl py-2 font-header">
              Welcome to Baba's Pantry
            </h1>
            <section className="text-base md:text-lg">
              <div className="mb-4">
                For almost two decades, Yahia Kamal has been a prominent figure
                in the food scene of Kansas City. However, Baba's Pantry marks
                several significant firsts for the Palestine-born chef.
              </div>
              <div className="mb-4">
                Every dish on the menu feels deeply personal, from the
                impossibly crisp falafel to the smooth, velvety hummus and an
                array of homemade sauces and seasonings. Baba's Pantry is a true
                expression of the feeling of being at home. We’re all about
                sharing the vibrant flavors of Palestine—right here in Kansas
                City. Our story begins in the year 2000, when Baba brought his
                passion for hummus and Palestinian cooking to the local market.
                He was one of the first to introduce hummus to Kansas City,
                often seen in grocery stores offering samples and chatting with
                folks about its roots and health benefits—long before it became
                the staple it is today.
              </div>
              <div className="mb-4">
                Since then, Baba has continued to craft dishes inspired by
                Palestinian cuisine and his experience of living in the
                diaspora. For a time, you could even find his products on Whole
                Foods shelves across the country. Baba’s Pantry officially
                opened in 2021. With the love and support of friends and the
                community he built over the years, we were able to bring a
                longtime dream to life: an eatery where Baba could cook freely
                and express himself through food. After decades of working with
                others, this was his first time building something truly his
                own.
              </div>
              <div className="mb-4">
                Our take on Palestinian food is shaped by living in the
                diaspora. We celebrate the creativity that comes from adapting
                traditional recipes with the tools and ingredients available to
                us—often leading to beautiful, cross-cultural connections with
                other communities in the diaspora. We hold onto our Palestinian
                culture while making space for change as a form of resilience,
                which we are proud to share through our food.
              </div>
              <div className="mb-4">
                While our hummus and falafel stay close to tradition, dishes
                like our shawarma and kebabs reflect how we’ve adapted to use
                what’s around us to create something that feels both new and
                familiar. Baba’s Pantry is about more than just food. It’s about
                reliance, celebration of culture, creativity, and community.
                Through our kitchen, we hope to spark conversations around those
                themes and celebrate all the ways we can stay rooted in who we
                are while building something new.
              </div>
            </section>
          </Text>
        </div>
      </div>
    </div>
  );
}
