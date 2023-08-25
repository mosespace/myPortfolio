import React from "react";
import PersonalImg from "../public/images/author-image4.jpg";
import Image from "next/image";

export default function MainBody() {
  return (
    <section className='mainBody'>
      <div className='mainBody-img'>
        <Image
          src={PersonalImg}
          alt='kisakye Moses Software Developer In Kampala Uganda'
          fill
        />
      </div>
      <div id="mainBody-text" className='mainBody-text'>
        <span>ABOUT_</span>
        <h1>Kisakye Moses</h1>
        <p>
          Globetrotter I am Kisakye Moses, a passionate software Developer from
          kampala Uganda, bringing you programming and design from the future.
          My expertise is developing next-level websites and web applications
          including full frontend design and backend development as well.
        </p>
      </div>
    </section>
  );
}
