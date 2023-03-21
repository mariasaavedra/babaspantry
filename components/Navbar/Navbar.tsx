import AnimatedText from '../AnimatedText/AnimatedText';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import styles from './Navbar.module.css';


export interface NavbarProps {
}

export default function Navbar(props: NavbarProps) {
    return (
        <div className={styles.NavbarComponent + ' max-h-[80px] md:max-h-[150px]'}>
            <Logo></Logo>
            <AnimatedText></AnimatedText>
            <Menu></Menu>
        </div>
    );
}