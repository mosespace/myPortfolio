"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavBar] = useState(false);
  const navLinks = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Works",
      path: "#",
    },
    {
      name: "About",
      path: "#",
    },
    {
      name: "Projects",
      path: "#",
    },
    {
      name: "Services",
      path: "#",
    },
  ];
  function handleNavBar() {
    setShowNavBar(!showNavbar);
  }
  return (
    <header className="navbar">
      <Link href="" className="logo">
        {/* <Image src="" width={50} height={50} alt="Jazz Africa Logo" /> */}
        <h2>Moses .</h2>
      </Link>
      <nav className={showNavbar ? "showNav" : ""}>
        {navLinks.map((link, i) => {
          return (
            <Link key={i} href={link.path}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="cta">
        <Link href="#">Let's chat</Link>
      </div>
      <button
        id="humbergMenu"
        className={showNavbar ? "showNav" : ""}
        onClick={handleNavBar}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
