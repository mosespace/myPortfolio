import React from "react";
import Image from "next/image";
import myImage from "../public/imgbg.png";

export default function SubHero() {
  return (
    <section className='sub-hero'>
      <div className='hero-content'>
        {/* <div className="bg-image">
        <Image src={myImage} alt="Title" fill />
      </div> */}
        <h1 className='main-title'>Programming and design from the future</h1>
        <a href="#mainBody-text">
        <button className='btn-outline'>Dig Into My Universe</button></a>
      </div>
    </section>
  );
}
