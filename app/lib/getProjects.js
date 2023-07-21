import fs from "fs";
import path from "path";
export default function getProjects() {
  const filePath = path.join(process.cwd(), "projects.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const projects = JSON.parse(fileContents);
  return projects.data;
}
