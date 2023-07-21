import Work from "@/components/Work";
import getProjects from "../lib/getProjects";

export const metadata = {
  title: "Works",
  alternates: {
    canonical: "/works",
  },
};

export default async function Works() {
  const projects = await getProjects();

  return (

      <Work data={projects} />

  );
}
