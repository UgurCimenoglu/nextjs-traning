import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolores sequi dolorem quasi deserunt ducimus molestiae eveniet.
            Expedita obcaecati magni nam sint delectus. Delectus, quidem nemo
            voluptate temporibus voluptatibus corrupti.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.unsplash.com/photo-1687368438166-9eddb521e280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.unsplash.com/photo-1687368438166-9eddb521e280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          perspiciatis accusantium fugit laboriosam maiores quibusdam magnam
          vero corrupti, nesciunt praesentium fuga nulla sed fugiat commodi
          inventore aperiam, esse rem consectetur.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          cumque expedita dicta rem, animi sit doloremque, modi voluptas iusto
          minus ex beatae totam quaerat autem ab possimus nesciunt. Quod, porro.
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          sequi dignissimos consequuntur laborum temporibus assumenda
          necessitatibus dolorem hic eos esse eum excepturi eaque, blanditiis in
          modi officia quidem! Dicta dolorem minus reiciendis placeat
          necessitatibus quaerat ratione corporis quas quisquam animi. Accusamus
          perspiciatis quidem corrupti reiciendis libero blanditiis, assumenda
          fugiat? Ut autem in labore necessitatibus iure!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
