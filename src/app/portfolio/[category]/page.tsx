import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat: "applications" | "illustrations" | "websites") => {
  const data = items[cat];
  if (data) return data;
  return notFound();
};

const Category = ({ params }: any) => {
  const datas: any[] = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category.toUpperCase()}</h1>
      {datas.map((data, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.desc}>{data.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill
              src={data.image}
              alt="illustration"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
