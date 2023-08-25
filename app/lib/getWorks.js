import fs from "fs";
import path from "path";
export default function getWorks() {
  const filePath = path.join(process.cwd(), "works.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const works = JSON.parse(fileContents);
  const finalWorks = works.works;
  return finalWorks;
}
