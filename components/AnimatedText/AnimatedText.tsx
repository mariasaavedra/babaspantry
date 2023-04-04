import styles from './AnimatedText.module.css';


export interface AnimatedTextProps {
}

export default function AnimatedText(props: AnimatedTextProps) {
    return (
        <div className={styles.AnimatedTextComponent}>
            <ul className={styles.content + ' '}>
                <li>Sandwiches</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Tea</li>
                <li>Sweets</li>
            </ul>
            <ul className={styles.content}>
                <li>Sandwiches</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Tea</li>
                <li>Sweets</li>
            </ul>
            <ul className={styles.content}>
                <li>Sandwiches</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Tea</li>
                <li>Sweets</li>
            </ul>
            <ul className={styles.content}>
                <li>Sandwiches</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Tea</li>
                <li>Sweets</li>
            </ul>
            <ul className={styles.content}>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Tea</li>
                <li>Tea</li>
                <li>Sweets</li>
            </ul>
        </div>
    );
}