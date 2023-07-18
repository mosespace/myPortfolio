import getBlogs from "@/app/lib/getBlogs";
import BlogData from "@/components/BlogData";
import SwiperImage from "@/components/SwiperImage";
import React from "react";


export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const { slug } = params;
  // fetch data
  const blogs = await getBlogs();
  const blog = blogs?.find((blog) => blog.slug == slug);

  return {
    title: blog.title,
    description: blog.overview,
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
  };
}

export default async function Page({ params: { slug } }) {
  const blogs = await getBlogs();

  const blog = blogs?.find((blog) => blog.slug == slug);

  return (
    <div className='full-blog-display'>
      <div className='image-container'>
        <SwiperImage blogs={blog} />
      </div>

      <dayiv className='all-content'>
        <BlogData blog={blog}/>
      </dayiv>
    </div>
  );
}
