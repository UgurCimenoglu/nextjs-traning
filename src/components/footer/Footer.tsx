import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Ugur. All rights reserved.</div>
      <div>
        <div className={styles.social}>
        <Image src="/twitter.png" width={25} height={25} className={styles.icon} alt="twitter-icon" />
        <Image src="/facebook.png" width={25} height={25} className={styles.icon} alt="twitter-icon" />
        <Image src="/instagram.png" width={25} height={25} className={styles.icon} alt="twitter-icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
