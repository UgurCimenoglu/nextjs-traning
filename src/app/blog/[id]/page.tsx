import React from "react";
import styles from "./page.module.css";
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

const getData = async (id: any): Promise<Post> => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) return notFound();
  return res.json();
};

export async function generateMetadata({ params }: any) {
  //bu fonksiyon seo için işe yarıyor. Bizim meta taglarımıza istediğimiz değerleri otomatikmen atıyor. Fonksiyon ismi aynı bu şekilde olmalı.!
  const post = await getData(params.id);
  return {
    title: post.title,
    desc: post.desc,
  };
}

const BlogPost = async ({ params }: any) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.unsplash.com/photo-1687368438166-9eddb521e280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
