import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const Navbar = () => {
  const links = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Portfolio", url: "/portfolio" },
    { id: 3, name: "Blog", url: "/blog" },
    { id: 4, name: "About", url: "/about" },
    { id: 5, name: "Contact", url: "/contact" },
    { id: 6, name: "Dashboard", url: "/dashboard" },
  ];
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        MyBlogLogo
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link, i) => (
          <Link className={styles.link} key={i} href={link.url}>
            {link.name}
          </Link>
        ))}
        <button className={styles.logout}>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
