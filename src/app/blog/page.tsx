import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type Post = {
  _id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
};

const getData = async (): Promise<Post[]> => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) return notFound();
  return res.json();
};

const Blog = async () => {
  const datas: Post[] = await getData();

  return (
    <div className={styles.mainContainer}>
      {datas.map((data, i) => (
        <Link key={i} href={`/blog/${data._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.unsplash.com/photo-1687368438166-9eddb521e280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
              alt=""
              width={400}
              height={250}
              className={styles.image}
              loading="lazy"
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
