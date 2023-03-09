import { ParentComponentProps } from '../../interfaces/ParentComponentProps';
import styles from './LayoutVertical.module.css';


export interface LayoutVerticalProps extends ParentComponentProps {
}

export default function LayoutVertical(props: LayoutVerticalProps) {
    return (
        <div className={styles.LayoutVerticalComponent}>
            {props.children}
        </div>
    );
}