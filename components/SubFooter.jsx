import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import Logo from "../public/images/logo-white.png";

function SubFooter() {
  const footerText = [
    {
      id: 1,
      title: "Kisakye Moses",
      facebook: <BsFacebook />,
      facebookPath: "https://twitter.com/UgandanTweeps",
      twitter: <BsTwitter />,
      TwitterPath: "https://twitter.com/UgandanTweeps",
      instagram: <BsInstagram />,
      instagramPath: "https://twitter.com/UgandanTweeps",
      ploicyInfo: "Privacy Policy | Terms and Conditions",
      copyRight: "Copyright © 2023 Bosa Charity. Powered by",
      logo: Logo,
    },
  ];
  return (
    <div className='footer-section'>
      <div className='footer-col'>
        {footerText.map((detail, id) => {
          return (
            <>
              <div className='sub-flex-wrapper' key={id}>
                <a href={detail.facebookPath}>{detail.facebook}</a>
                <a href={detail.TwitterPath}>{detail.twitter}</a>
                <a href={detail.instagramPath}>{detail.instagram}</a>
              </div>
              <div className='privacy-policy'>
                <h3>{detail.ploicyInfo}</h3>
                <p>
                  {detail.copyRight}
                  <a> Vercel.app</a>
                </p>
              </div>
              <div className='footer-logo'>
                <Image src={detail.logo} fill alt={detail.title} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SubFooter;
