import Image from "next/image";
import SubHero from "@/components/SubHero";
import MainBody from "@/components/MainBody";
import RecentWork from "@/components/RecentWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <SubHero />
      <MainBody/>
      <RecentWork/>
      <Contact/>
    </main>
  );
}
