import styles from './Arabic.module.css';


export interface ArabicProps {
}

export default function Arabic(props: ArabicProps) {
    return (
        <div className={styles.ArabicComponent}>
            وجبات خفيفة
        </div>
    );
}