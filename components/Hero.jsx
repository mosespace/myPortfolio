"use client";
import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const usedValidation = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },

    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  };

  return (
    <main>
      <div className='container {fractul.className}'>
        <motion.div
          className='left-column'
          variants={usedValidation}
          initial='initial'
          animate='animate'
          transition='transition'
        >
          <h2>Hello I Am Kisakye Moses</h2>
          <h3>
            Am a software <span>Dev.</span> and a UI/UX Designer.
          </h3>
          <p>
            I've been designing web applications for over 7+ years and am super
            experienced as a <span>FrontEnd Developer 😎</span>{" "}
          </p>
          <div className='both-buttons'>
            <button className='hire-me'>Hire Me</button>
            <button className='projects'>
              Projects <ImArrowUpRight2 />
            </button>
          </div>
          <h1 className='clients-text-h1'>+84</h1>
          <p className='clients-text'>Clients on work worldwide</p>
          <div className='info-section'>
            <h1>+572</h1>
            <p>Projects Done</p>
            <h1>Contact</h1>
            <p>Kiskayemoses@gmail.com</p>
          </div>
        </motion.div>
        <motion.div
          className='right-column'
          variants={usedValidation}
          initial='initial'
          animate='animate'
          transition='transition'
        >
          <h2>Thank You!</h2>
          <p>Let's connect here.</p>

          <div className='subscribe-form'>
            <input
              type='email'
              id='email-input'
              placeholder='Subscribe to my Newsletter...'
            />
            <button id='subscribe-btn'>
              <FaArrowRight />
            </button>
          </div>
        </motion.div>
      </div>
      {/* <div className="end-footer">
        <h3>Footer</h3>
        <p>This is the footer content.</p>
      </div> */}
    </main>
  );
}

// document.getElementById("subscribe-btn").addEventListener("click", function() {
//   var email = document.getElementById("email-input").value;

//   if (validateEmail(email)) {
//     // Perform the subscription process or any other desired action
//     alert("Subscribed successfully!");
//   } else {
//     alert("Please enter a valid email address.");
//   }
// });

// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
