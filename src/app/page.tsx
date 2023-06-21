import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, maxime
          maiores.
        </p>
        <Button text="See Our Works!" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt="hero" />
      </div>
    </div>
  );
}
