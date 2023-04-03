import styles from "./Logo.module.css";
import "animate.css";

export interface LogoProps {}

export default function Logo(props: LogoProps) {
  return (
    <div className={styles.LogoComponent + " sm:w-[150px]  md:w-[350px]"}>
      <img
        src="/images/logo-black.svg"
        className="animate__animated animate__flash animate__infinite animate__delay-4s  animate__slow md:max-h-20 md:p-4"
      ></img>
    </div>
  );
}
