import Link from "next/link";
import React from "react";

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
    <div>
      {links.map((link, i) => (
        <Link key={i} href={link.url}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
