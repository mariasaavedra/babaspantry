import styles from "./Menu.module.css";

export interface MenuProps {
    toggleOpen: () => void;
}

export default function Menu(props: MenuProps) {
  return (
    <div className={styles.MenuComponent}>
      {/* Menu */}
      <div
        onClick={props.toggleOpen}
        className={
          styles.MenuComponent +
          " cursor-pointer spin fixed top-[-5px] right-[-5px] z-10 p-4 rounded-full top-[1px]  bg-[#dbcaea]"
        }
      >
        <img
          width={70}
          className="animate__animated animate__shakeY"
          src="/images/menu.svg"
        ></img>
      </div>
    </div>
  );
}
