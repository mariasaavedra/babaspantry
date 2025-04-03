import { MaybeParentComponentProps } from '../../interfaces/ParentComponentProps';
import styles from './Text.module.css';


export interface TextProps extends MaybeParentComponentProps {
}

export default function Text(props: TextProps) {
    return (
        <div className={styles.TextComponent} {...props}> 
            {props.children}
        </div>
    );
}