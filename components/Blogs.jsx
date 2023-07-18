import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs({ data }) {
  return (
    <section>
      {data.map((item) => {
        return (
          <div>
            <div className='featured-section'>
              <Link key={item.id} href={`/blogs/${item.slug}`}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={500}
                />
              </Link>

              <div className='left-featured-section'>
                <div className='date-and-time'>
                  <h2>{item.date}</h2>
                  <span>{item.readTime}</span>
                </div>
                <Link key={item.id} href={`/blogs/${item.slug}`}><h1>{item.title}</h1></Link>

                <p className='line-clamp'>{item.description}</p>
                <Link key={item.id} href={`/blogs/${item.slug}`}><button>Read More</button></Link>
                <h2 className='author-name'>{item.author}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
