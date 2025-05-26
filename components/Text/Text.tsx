import { HTMLAttributes } from "react";
import { MaybeParentComponentProps } from "../../interfaces/ParentComponentProps";
import styles from "./Text.module.css";

export interface TextProps
  extends HTMLAttributes<HTMLDivElement>,
    MaybeParentComponentProps {}

export default function Text(props: TextProps) {
  return (
    <div className={styles.TextComponent + ` ${props?.className}`} {...props}>
      {props.children}
    </div>
  );
}
