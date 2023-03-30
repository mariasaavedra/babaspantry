import { useState } from "react";
import AnimatedText from "../AnimatedText/AnimatedText";
import FullScreenMenu from "../FullScreenMenu/FullScreenMenu";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./Navbar.module.css";

export interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.NavbarComponent + " max-h-[80px] md:max-h-[150px]"}>
      <Logo></Logo>
      <AnimatedText></AnimatedText>

      <div onClick={() => setIsOpen((prev) => !prev)}>
        <Menu></Menu>
      </div>
      {isOpen && <FullScreenMenu handleClose={close}></FullScreenMenu>}
    </div>
  );
}
