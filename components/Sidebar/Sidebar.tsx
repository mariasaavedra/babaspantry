import AnimatedTextVertical from '../AnimatedTextVertical/AnimatedTextVertical';
import styles from './Sidebar.module.css';


export interface SidebarProps {
}

export default function Sidebar(props: SidebarProps) {
    return (
        <div className={styles.SidebarComponent}>
            <AnimatedTextVertical></AnimatedTextVertical>
        </div>
    );
}