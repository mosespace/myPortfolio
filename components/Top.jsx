import React from "react";
import {
  BsFacebook,
  BsGoogle,
  BsInstagram,
  BsPinterest,
  BsPostcard,
  BsTelephoneFill,
  BsTwitter,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { SiApplepodcasts } from "react-icons/si";

function Top() {

  return (
    <div className='top-nav'>
      <div className='flex-works'>
        <div>
          <ul>
            <li>
              <BsTelephoneFill className='inline-icon' />
              +(256) 770981193
            </li>
            <li>
              <IoMdMail className='inline-icon' />
              kiskayemoses@gmail.com
            </li>
            <li>
              <MdLocationOn className='inline-icon' />
              Fourth Street Lugogo
            </li>
          </ul>
        </div>
        <div className="social-media">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsGoogle />
          <BsPinterest />
          <SiApplepodcasts />
        </div>
      </div>
    </div>
  );
}

export default Top;
