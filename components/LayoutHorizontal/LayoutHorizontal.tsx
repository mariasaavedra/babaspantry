import ScrollSection from "../ScrollSection/ScrollSection";
import styles from "./LayoutHorizontal.module.css";

export default function LayoutHorizontal() {
  return (
    <div className={styles.LayoutHorizontalComponent + ' hidden md:block'}>
      <ScrollSection />
    </div>
  );
}
