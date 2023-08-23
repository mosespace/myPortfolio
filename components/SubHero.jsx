import React from "react";
import Image from "next/image";
import myImage from "../public/moses.png";

export default function SubHero() {
  return (
    <section className='sub-hero'>
      {/* <div className='hero-flex'>
        <div className='hero-content'>
          <h1>Hello I am Kisakye Moses</h1>
          <h3>
            Am a software <span>Dev.</span> and a UI/UX Designer.
          </h3>
          <p className='sub-para'>
            I've been designing web applications for over 7+ years and am super
            experienced as a <span>FrontEnd Developer 😎</span>
          </p>
          <div className='action-buttons'>
            <button className='btns-1'>Hire Me</button>
            <button className='btns-2'>Projects</button>
          </div>
        </div>
        <div className='my-image'>
          <Image
            src={myImage}
            alt='Kisakye Moses, Software Developerr In Uganda'
            fill
          />
        </div>
      </div> */}
    </section>
  );
}
