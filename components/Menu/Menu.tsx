import styles from './Menu.module.css';


export interface MenuProps {
}

export default function Menu(props: MenuProps) {
    return (
        <div className={styles.MenuComponent}>
            <img src="/images/menu-star.svg"></img>
        </div>
    );
}