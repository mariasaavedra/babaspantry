import styles from "./AnimatedTextVertical.module.css";

export interface AnimatedTextVerticalProps {}

export default function AnimatedTextVertical(props: AnimatedTextVerticalProps) {
  return (
    <div className={styles.AnimatedTextVerticalComponent}>
      <ul className={styles.content + " "}>
        <li>إفطار</li>
        <li>غداء</li>
        <li>عشاء</li>
        <li>مشروبات</li>
      </ul>
      <ul className={styles.content}>
        <li>إفطار</li>
        <li>غداء</li>
        <li>عشاء</li>
        <li>مشروبات</li>
      </ul>
      <ul className={styles.content}>
        <li>إفطار</li>
        <li>غداء</li>
        <li>عشاء</li>
        <li>مشروبات</li>
      </ul>
      <ul className={styles.content}>
        <li>إفطار</li>
        <li>غداء</li>
        <li>عشاء</li>
        <li>مشروبات</li>
      </ul>
      <ul className={styles.content}>
        <li>إفطار</li>
        <li>غداء</li>
        <li>عشاء</li>
        <li>مشروبات</li>
      </ul>
    </div>
  );
}
