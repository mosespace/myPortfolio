import fs from "fs";
import path from "path";
export default function getBlogs() {
  const filePath = path.join(process.cwd(), "blogs.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const blogs = JSON.parse(fileContents);
  return blogs.data;
}
