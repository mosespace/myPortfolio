import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { TbMessageQuestion } from "react-icons/tb";
import facebookPost from "../public/images/janet-ad.png";

function Footer() {
  return (
    <section className='footer-wrapper'>
      <div className='row'>
        <div className='about-me'>
          <h2>| About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cumque
            enim odit soluta doloribus, blanditiis fugit sint distinctio facilis
            exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ex cumque enim odit soluta doloribus, blanditiis fugit sint
            distinctio facilis exercitationem. exercitationem. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Ex cumque enim odit soluta
            doloribus, blanditiis fugit sint distinctio facilis exercitationem.
          </p>
        </div>
        <div className='latest-post'>
          <h2>| Latest Post</h2>
          <div className='facebook-post'>
            <Image src={facebookPost} fill />
          </div>
          <p>
            Dudes!!!, Have you checked out this store for your beb's favorite
            ear rings?! 🙉🙉.
          </p>
          <span>
            <SlCalender /> April 04 2023 <TbMessageQuestion /> 0
          </span>
        </div>
        <div className='contact-info'>
          <h2>| CONTACT INFO</h2>

          <div className='textwidget'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
              cumque enim odit soluta doloribus, blanditiis fugit sint
              distinctio facilis exercitationem.
            </p>

            <h3>CONTACT ME</h3>
            <li>info@kisakyemoses.com</li>
            <h3>BECOME VOLUNTEER</h3>
            <li>register@kisakyemoses.com</li>
          </div>
        </div>
        <div className='tags-wrapper'>
          <h2>| TAGS</h2>
          <div className='allButtons'>
            <button>Charity</button>
            <button>Donation</button>
            <button>Education</button>
            <button>Environment</button>
            <button>Future</button>
            <button>Generation</button>
            <button>Helping</button>
            <button>Poverty</button>
            <button>Sponsor</button>
            <button className='see-more'>See more tags</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
