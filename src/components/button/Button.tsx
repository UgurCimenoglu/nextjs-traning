import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

interface Props {
  text: string;
  url: string;
}

const Button = (props: Props) => {
  return (
    <Link href={props.url}>
      <button className={styles.button}>{props.text}</button>
    </Link>
  );
};

export default Button;
