import getBlogs from "./lib/getBlogs";

export default async function sitemap() {
  const baseUrl = "https://kisakye-moses.vercel.app";
  const blogs = await getBlogs();
  const blogUrls =
    blogs?.map((blog) => {
      return {
        url: `${baseUrl}/blogs/${blog.slug}`,
        lastModified: new Date(),
      };
    }) ?? [];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
