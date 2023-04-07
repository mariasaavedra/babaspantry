import { ParentComponentProps } from '../../interfaces/ParentComponentProps';
import styles from './Content.module.css';


export interface ContentProps extends ParentComponentProps {
    layout: 'horizontal' | 'vertical'
}

export default function Content(props: ContentProps) {
    return (
        <div id="content" className={styles.ContentComponent + ' ' + styles.horizontal}>
            {props.children}
        </div>
    );
}