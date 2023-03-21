import styles from './Logo.module.css';


export interface LogoProps {
}

export default function Logo(props: LogoProps) {
    return (
        <div className={styles.LogoComponent}>
            <img src="/images/logo.png" className='md:max-h-20'></img>
        </div>
    );
}