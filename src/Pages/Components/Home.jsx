import React from 'react'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
function Home() {
  return (
    <>
    <div className="container">
      <div className="row my-5">
        <div className="col"><img src="/images/certificate.png" alt="" /></div>
        
       
        
      </div>
      <div className="row">
        <div className="col-12">
          <h3>Hello, I'm Ishwar Pal</h3>
      <h4>Front-end Web Developer | UI/UX Enthusiast</h4>
        </div>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
    </>
    
  )
}

export default Home