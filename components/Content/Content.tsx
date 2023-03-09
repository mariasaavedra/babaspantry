import styles from './Content.module.css';


export interface ContentProps {
}

export default function Content(props: ContentProps) {
    return (
        <div className={styles.ContentComponent}>
            Hello
        </div>
    );
}