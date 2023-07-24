import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

export default function HeroSection() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='header'>
          <div className='logo'>
            <a href='.'>MOSES.</a>
          </div>
          <div className='social'>
            <a
              href='https://facebook.com/uncle_moses'
              title='Facebook'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsFacebook className='icon' />
            </a>
            <a
              href='https://twitter.com/bantu_creative'
              title='Twitter'
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsTwitter className='icon' />
            </a>
            <a
              href='https://github.com/arkn98/coming-soon'
              title='GitHub'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub className='icon' />
            </a>
          </div>
        </div>
        <div className='content'>
          <div className='title-holder'>
            <h1>Get ready for the changes 😋.</h1>
            <p>
              Currently this website is under maintainace. 
              Please check back to know more. Shoot me an
              email if you're curious.
            </p>
          </div>
          <a href='mailto:Kiskayemoses@gmail.com'>
            <div className='cta'>Send Me An Email</div>
          </a>
        </div>
        <div className='footer'>
          <span>
            made by{" "}
            <a
              className='underlined'
              href='https://github.com/mosespace'
              target='_blank'
              rel='noopener noreferrer'
            >
              Kisakye Moses
            </a>{" "}
            using{" "}
            <a
              className='underlined'
              href='https://reactjs.org/'
              title='ReactJS'
              target='_blank'
              rel='noopener noreferrer'
            >
              NextJs
            </a>{" "}
            |{" "}
            <a
              className='underlined'
              href='https://github.com/mosespace/myPortfolio'
              title='GitHub repo'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
