export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: "/private/",
      },
      sitemap: "https://my-portfolio-mosespace.vercel.app/sitemap.xml",
    };
  }