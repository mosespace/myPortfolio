import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { SiApplepodcasts } from "react-icons/si";

function SubFooter() {
  return (
    <div className='sub-footer-wrapper'>
      <div className='sub-flex-wrapper'>
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
      </div>
      <div className='privacy-policy'>
        <h3>Privacy Policy | Terms and Conditions </h3>
        <p>
          {" "}
          Copyright © 2023 Bosa Charity. Powered by<a>Vercel.app</a>
        </p>
      </div>
      <div className='logo'>
        {/* <Image
          src='/images/logo-white.png'
          width={90}
          height={90}
          alt='Kisakye Moses'
        /> */}
        <h2>MOSES .</h2>
      </div>
    </div>
  );
}

export default SubFooter;
