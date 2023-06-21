import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import Team from "public/team.png";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Team} alt="" fill={true} className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgtitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            dolore, illo odit beatae soluta doloribus suscipit natus vel aliquid
            officia unde laboriosam quisquam qui numquam. Repellendus ipsa in ea
            temporibus!
            <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste optio
            perspiciatis facilis consequatur quam labore expedita quis officiis
            ullam, omnis facere molestias reprehenderit vel, perferendis vitae
            doloribus sint cupiditate hic.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sed
            officiis aliquam molestias voluptatibus, cumque eligendi suscipit
            autem, optio harum nisi quaerat sunt culpa vero aspernatur id
            perferendis eos odit?
            <br />
            <br />- Fast and Secure
            <br />
            <br />- Dynamic Websites
            <br />
            <br />- Responsive
            <br />
          </p>
          <Button text="Contact" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
