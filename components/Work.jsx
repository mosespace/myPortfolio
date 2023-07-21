import Image from "next/image";
import Link from "next/link";
import React from "react";

function Works({ data }) {
  return (
    <section>
      <h1>Featured Projects</h1>
      {data.map((project, id) => {
        return (
          <div className='raw-wrapping' key={id}>
            <div className='left-raw'>
              <h2>{project.mainTitle}</h2>
              <p>{project.projectBrief}</p>
              <p>{project.projectBriefTwo}</p>
              <p className='second-p-tag'>
                To find out more details about a specific project,{" "}
                <span>please click on it.</span>
              </p>
            </div>

            <div className='right-raw'>
              <Link href='#'>
                <Image src='/images/second_blog.jpg' fill alt={project.mainTitle} />
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Works;
1989;
