import { ParentComponentProps } from '../../interfaces/ParentComponentProps';
import styles from './LayoutHorizontal.module.css';


export interface LayoutHorizontalProps extends ParentComponentProps{
}

export default function LayoutHorizontal(props: LayoutHorizontalProps) {
    return (
        <div className={styles.LayoutHorizontalComponent}>
            {props.children}
        </div>
    );
}