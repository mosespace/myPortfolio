"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

export default function BlogData({ blog }) {
  return (
    <>
      <div className='all-content'>
        <h1>{blog.detailedTitle}</h1>
        <h3>
          by {blog.author}, {blog.jobTitle}
        </h3>
        <h3 className='date'>{blog.date}</h3>
        <div className='main-blog-text'>
          <p className='first-paragraph'>{blog.firstParagraph}</p>

          <h2 className='sub-title1'>{blog.subTitle}y</h2>

          <p className='second-paragraph'>{blog.secondParagraph}</p>

          <h2 className='sub-title2'>{blog.subTitle2}</h2>

          <p className='third-paragraph'>{blog.thirdParagraph}</p>
          <Link href='' className='banner-img'>
            <Image className="img"
              src={blog.bannerImage}
              alt='Image Only'
              width={700}
              height={200}
            />
          </Link>
        </div>
        <div className='share-links'>
          <h1>SHARE THIS BLOG</h1>
          <FaTwitterSquare size={30} className='icons' />
          <FaFacebookSquare size={30} className='icons' />
        </div>
      </div>
    </>
  );
}
