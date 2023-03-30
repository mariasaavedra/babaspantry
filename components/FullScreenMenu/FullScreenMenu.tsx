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
            stroke-width="1.5"
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
          <ul className="text-9xl flex flex-col items-center">
            <li className="py-4 font-header">MENU</li>
            <li className="py-4 font-header">MERCH</li>
            <li className="py-4 font-header">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
