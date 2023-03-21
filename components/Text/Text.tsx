import styles from './Text.module.css';


export interface TextProps {
}

export default function Text(props: TextProps) {
    return (
        <div className={styles.TextComponent}>
            {props.children}
        </div>
    );
}