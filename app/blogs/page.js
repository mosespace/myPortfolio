import Blogs from "@/components/Blogs";
import React from "react";
import getBlogs from "../lib/getBlogs";

export const metadata = {
  title: "Blogs",
  alternates: {
    canonical: "/blogs",
  },
};

export default async function blogs() {
  const blogs = await getBlogs();

  return (
    <section>
      <Blogs data={blogs} />
    </section>
  );
}
