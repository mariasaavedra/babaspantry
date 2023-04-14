import Link from "next/link";
import styles from "./FullScreenMenu.module.css";

export interface FullScreenMenuProps {
  handleClose: any;
}

export default function FullScreenMenu(props: FullScreenMenuProps) {
  return (
    <div className={styles.FullScreenMenuComponent}>
      <div className="h-screen flex flex-col">
        <div className="flex justify-end p-4">
          <svg
            onClick={props.handleClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <ul className="animate__animated  text-6xl flex flex-col items-center">
            <li className="py-4 font-header"><Link href={"#welcome"}>ABOUT</Link></li>
            <li className="py-4 font-header"><Link href={"#menu"}>MENU</Link></li>
            <li className="py-4 font-header"><Link href={"#catering"}>CATERING</Link></li>
            <li className="py-4 font-header"><Link href={"#merch"}>MERCH</Link></li>
            <li className="py-4 font-header"><Link href={"#menu"}>SHOP PANTRY</Link></li>
            <li className="py-4 font-header"><Link href={"#menu"}>PRESS</Link></li>
            <li className="py-4 font-header"><Link href={"#menu"}>CONTACT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
