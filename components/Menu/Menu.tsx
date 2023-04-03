import styles from './Menu.module.css';


export interface MenuProps {
}

export default function Menu(props: MenuProps) {
    return (
        <div className={styles.MenuComponent}>
            <img className="animate__animated animate__shakeY" src="/images/menu.png"></img>
        </div>
    );
}