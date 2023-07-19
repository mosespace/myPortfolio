import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { TbMessageQuestion } from "react-icons/tb";

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='row'>
        <div>
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
        <div>
          <h2>| Latest Post</h2>
          <Image src='/images/janet-ad.png' width={200} height={200} />
          <p>
            Dudes!!!, Have you checked out this store for your beb's favorite
            ear rings?! 🙉🙉.
          </p>
          <span>
            <SlCalender /> April 04 2023 <TbMessageQuestion /> 0
          </span>
        </div>
        <div className='p-padding'>
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
        <div>
          <h2>| TAGS</h2>
          <buttonName>
            <button>Charity</button>
            <button>Donation</button>
            <button>Education</button>
            <button>Environment</button>
            <button>Future</button>
            <button>Generation</button>
            <button>Helping</button>
            <button>Poverty</button>
            <button>Sponsor</button>
            <button className="see-more">See more tags</button>
          </buttonName>
        </div>
      </div>
    </div>
  );
}

export default Footer;
