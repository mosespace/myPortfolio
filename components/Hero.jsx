import React from 'react'

export default function Hero() {
  // const Information = [
  //   {
  //     name: "Home",
  //     path: "#",
  //   },
  //   {
  //     name: "Works",
  //     path: "#",
  //   },
  //   {
  //     name: "About",
  //     path: "#",
  //   },
  //   {
  //     name: "Projects",
  //     path: "#",
  //   },
  //   {
  //     name: "Services",
  //     path: "#",
  //   },
  // ];
  return (
    <main>
    <div className="container footer-down">
    <div className="left-column">
      <h2>Hello I Am Kisakye Moses</h2>
      <h3>Am a software <span>Dev.</span> and a UI/UX Designer.</h3>
      <p>I've been designing web applications for over 7+ years and am super experienced as a <span>FrontEnd Developer 😎</span> </p>
        <div className="both-buttons">
            <button className='hire-me'>Hire Me</button>
            <button className='projects'>Projects</button>
      </div>
      <h1>+84</h1>
      <p>Clients on work  worldwide</p>
    <div className='info-section'>
      <h1>572</h1>
      <p>Clients on work  worldwide</p>
      <h1>Contact</h1>
      <p>Kiskayemoses@gmail.com</p>
    </div>
      
    </div>
    <div className="right-column">
      <h2>Right Div</h2>
      <p>This is the right content.</p>
    </div>
    
  </div>
  <div className="end-footer">
        <h3>Footer</h3>
        <p>This is the footer content.</p>
      </div>
  </main>
  )
}
