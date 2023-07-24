export default async function sitemap() {
  const baseUrl = "https://kisakye-moses.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}
