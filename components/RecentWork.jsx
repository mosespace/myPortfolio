import Image from "next/image";
import React from "react";
import Project1 from "../public/images/second_blog.jpg";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import getWorks from "@/app/lib/getWorks";

export default async function RecentWork() {
  const finalWorks = await getWorks();
  const recentWork = finalWorks;
  console.log(recentWork);
  return (
    <section className='recent-works'>
      <div className='mainRecent-text'>
        <span>RECENT WOK_</span>
        <h1>Dig into my universe 😎</h1>
      </div>

      {/* <!-- Content--> */}
      {recentWork.map((project, id) => {
        return (
          <div class='container' key={id}>
            <div class='card-columns'>
              {/* <!-- Card--> */}
              <div class='card border-0'>
                <div class='position-relative text-white'>
                  <div>

                    <div className='card-img-overlay three'>
                      <Image src={project.image} alt={project.title} fill />
                    </div>
                  </div>
                </div>

                <div class='card-body'>
                  <h1 className="title">
                    {project.title} <span className="sub-title">{project.subDescription}</span>
                  </h1>
                  <p class='card-text'>{project.description}</p>
                </div>

                <div class='card-footer'>
                  <div class='media align-items-center'>
                    <div class='media-body'>
                      <Link class='card-link text-primary read-more' href={project.liveLink}>
                        Visit Live Link
                      </Link>
                      <Link
                        class='card-link text-primary read-more-two'
                        href={project.gitHubLink}
                      >
                        <BsGithub /> Code..
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
