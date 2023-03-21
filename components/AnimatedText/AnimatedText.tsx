import styles from './AnimatedText.module.css';


export interface AnimatedTextProps {
}

export default function AnimatedText(props: AnimatedTextProps) {
    return (
        <div className={styles.AnimatedTextComponent}>
            <ul className={styles.content + ' '}>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Drinks</li>
                <li>Snacks</li>
            </ul>
            <ul className={styles.content}>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Drinks</li>
                <li>Snacks</li>
            </ul>
            <ul className={styles.content}>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Drinks</li>
                <li>Snacks</li>
            </ul>
            <ul className={styles.content}>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Drinks</li>
                <li>Snacks</li>
            </ul>
            <ul className={styles.content}>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Drinks</li>
                <li>Snacks</li>
            </ul>
        </div>
    );
}