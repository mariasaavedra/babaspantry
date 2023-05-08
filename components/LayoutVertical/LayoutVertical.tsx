import styles from "./LayoutVertical.module.css";
import Text from "../Text/Text";
import Link from "next/link";

export default function LayoutVertical() {
  return (
    <div className={styles.LayoutVerticalComponent + " hidden sm:block"}>
      <section>
        Vertical Layout
      </section>
    </div>
  );
}
