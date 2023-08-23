"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [showNavbar, setShowNavBar] = useState(false);
  // Adds the Router form "next/navigation"
  const router = useRouter();

  // Sets the pathname to be router.pathname
  const pathname = router.pathname;

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Works",
      path: "/works",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  function handleNavBar() {
    setShowNavBar(!showNavbar);
  }

  // This function handles all the clicks done to the links and majorly it sets the ShowNavBar state to false
  function handleLinkClick() {
    setShowNavBar(false);
  }

  return (
    <header className='navbar'>
      <Link href='' className='logo'>
        {/* <Image src="/images/logo.png" width={80} height={80} alt="Kisakye Moses AKA Uncle Moses Logo" /> */}
        <h2>Moses .</h2>
      </Link>
      <nav className={showNavbar ? "showNav" : ""}>
        {navLinks.map((link, i) => {
          return (
            <Link
              key={i}
              href={link.path}
              className={link.path == pathname ? "activeLinks" : ""}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className='cta'>
        <Link href='#'>Let's chat</Link>
      </div>
      <button
        id='humbugMenu'
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
