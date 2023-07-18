import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

export default function DetailedBlog({data}) {
  
  return (
    <div className='full-blog-display'>
      <div className='image-container'>
        <Image
          src='/images/third_blog.jpg'
          alt='Image Only'
          fill
          objectFit='cover'
        />
      </div>

      <div className='all-content'>
        <h1>
          Curiosity and Consistency: How people managers can empower and grow
          diverse teams
        </h1>
        <h3>by Kisakye Moses, Web Developer</h3>
        <h3 className='date'>June 1, 2023</h3>
        <div className='main-blog-text'>
          <p className='first-paragraph'>
            As a woman of color who has spent most of my career coming up in a
            field dominated by men, I was fortunate enough to have been
            encouraged to advocate for myself—for the way I work best and the
            circumstances that enable me to achieve my best results. I recognize
            that not everyone is fortunate enough to have those opportunities,
            and this realization led me on a journey to help other people have
            the same supportive work environment. <br />
            <br />
            I’ve worked with a lot of leaders and founders on how to support
            their teams, so it gave me great pleasure to have the opportunity to
            sit with my friend, Will Guerra, Head of Culture, Innovation, &
            Strategy at tEQuitable, to chat about how we can develop managers to
            empower diverse teams. <br />
            <br />
            Will shared that it was when he found himself in a management
            consulting role—where he had the opportunity to work on some pretty
            significant cultural transformation work with large
            organizations—that he really discovered his passion for diversity,
            equity, and inclusion. It gave him “the language to finally
            understand all the experiences that I had in my life…and of course,
            from a professional perspective, it just helped me lean even more
            into [becoming] a better people manager.”
          </p>

          <h2 className='sub-title'>Framing Diversity</h2>

          <p className='second-paragraph'>
            What do we mean when we talk about diverse teams? What is diversity?
            According to Will, a diverse team is a “group of individuals who
            have different backgrounds and skills that work together to achieve
            common goals. They might have differences regarding age,
            nationality, ethnicity, education, professional background, skills,
            and of course, different ways of thinking,” and the data shows that
            diverse teams can outperform less diverse groups by over 30%. We
            know that diverse teams can increase creativity and innovation. They
            are better at problem-solving and decision-making. And we also know
            that individuals can develop and expand their existing skill sets by
            working collaboratively within a diverse environment—all of which
            points to increased engagement and reduced turnover. Will says,
            “This is where leaders need to make sure that everyone feels that
            they have a voice and contribute to the work of creating space for
            everyone to feel included, no matter what their role is...what we’re
            talking about [here] is inclusion.”
          </p>

          <h2 className='sub-title'>How Do We Do Inclusion? </h2>

          <p className='third-paragraph'>
            Will made some great points about the benefits of diversity and
            inclusion. When we think about creating diverse teams within
            organizations, we need to think about a duality. Many organizations
            are putting resources toward supporting DEI initiatives, and there
            are many things going on in the People space showing that work is
            being done to increase inclusion in the workplace. But, I would
            argue that there’s a big difference, a disconnect between doing
            inclusion (i.e., making public diversity statements, advertising
            inclusive policies) and being inclusive. We need to focus on our
            intentions, like how do we show up as leaders and organizations to
            support and build diverse teams? It’s a critical but overlooked area
            of focus. Organizations may be hiring from diverse, marginalized,
            non-traditional groups, but if the intention behind that is purely
            so that the numbers look good, “we were able to hire so that our
            customers are happy,” then we’re not coming from the right
            intention. If the intentions are not aligned, the implementation
            will not land well.
          </p>
          <Link href='' className='banner-img'>
            <Image
              src='/images/banner-01.jpg'
              alt='Image Only'
              width={700}
              height={200}
            />
          </Link>
        </div>
        <div className="share-links">
          <h1>SHARE THIS BLOG</h1>
          <FaTwitterSquare size={30}  className="icons"/>
          <FaFacebookSquare size={30} className="icons"/>
        </div>
      </div>
    </div>
  );
}
{/* <div className='full-blog-display'>
      <div className='image-container'>
        <Image
          src='/images/third_blog.jpg'
          alt='Image Only'
          fill
          objectFit='cover'
        />
      </div>

      <div className='all-content'>
        <h1>
          Curiosity and Consistency: How people managers can empower and grow
          diverse teams
        </h1>
        <h3>by Kisakye Moses, Web Developer</h3>
        <h3 className='date'>June 1, 2023</h3>
        <div className='main-blog-text'>
          <p className='first-paragraph'>
            As a woman of color who has spent most of my career coming up in a
            field dominated by men, I was fortunate enough to have been
            encouraged to advocate for myself—for the way I work best and the
            circumstances that enable me to achieve my best results. I recognize
            that not everyone is fortunate enough to have those opportunities,
            and this realization led me on a journey to help other people have
            the same supportive work environment. <br />
            <br />
            I’ve worked with a lot of leaders and founders on how to support
            their teams, so it gave me great pleasure to have the opportunity to
            sit with my friend, Will Guerra, Head of Culture, Innovation, &
            Strategy at tEQuitable, to chat about how we can develop managers to
            empower diverse teams. <br />
            <br />
            Will shared that it was when he found himself in a management
            consulting role—where he had the opportunity to work on some pretty
            significant cultural transformation work with large
            organizations—that he really discovered his passion for diversity,
            equity, and inclusion. It gave him “the language to finally
            understand all the experiences that I had in my life…and of course,
            from a professional perspective, it just helped me lean even more
            into [becoming] a better people manager.”
          </p>

          <h2 className='sub-title'>Framing Diversity</h2>

          <p className='second-paragraph'>
            What do we mean when we talk about diverse teams? What is diversity?
            According to Will, a diverse team is a “group of individuals who
            have different backgrounds and skills that work together to achieve
            common goals. They might have differences regarding age,
            nationality, ethnicity, education, professional background, skills,
            and of course, different ways of thinking,” and the data shows that
            diverse teams can outperform less diverse groups by over 30%. We
            know that diverse teams can increase creativity and innovation. They
            are better at problem-solving and decision-making. And we also know
            that individuals can develop and expand their existing skill sets by
            working collaboratively within a diverse environment—all of which
            points to increased engagement and reduced turnover. Will says,
            “This is where leaders need to make sure that everyone feels that
            they have a voice and contribute to the work of creating space for
            everyone to feel included, no matter what their role is...what we’re
            talking about [here] is inclusion.”
          </p>

          <h2 className='sub-title'>How Do We Do Inclusion? </h2>

          <p className='third-paragraph'>
            Will made some great points about the benefits of diversity and
            inclusion. When we think about creating diverse teams within
            organizations, we need to think about a duality. Many organizations
            are putting resources toward supporting DEI initiatives, and there
            are many things going on in the People space showing that work is
            being done to increase inclusion in the workplace. But, I would
            argue that there’s a big difference, a disconnect between doing
            inclusion (i.e., making public diversity statements, advertising
            inclusive policies) and being inclusive. We need to focus on our
            intentions, like how do we show up as leaders and organizations to
            support and build diverse teams? It’s a critical but overlooked area
            of focus. Organizations may be hiring from diverse, marginalized,
            non-traditional groups, but if the intention behind that is purely
            so that the numbers look good, “we were able to hire so that our
            customers are happy,” then we’re not coming from the right
            intention. If the intentions are not aligned, the implementation
            will not land well.
          </p>
          <Link href='' className='banner-img'>
            <Image
              src='/images/banner-01.jpg'
              alt='Image Only'
              width={700}
              height={200}
            />
          </Link>
        </div>
        <div className="share-links">
          <h1>SHARE THIS BLOG</h1>
          <FaTwitterSquare size={30}  className="icons"/>
          <FaFacebookSquare size={30} className="icons"/>
        </div>
      </div>
    </div> */}