import React from 'react'
import './App.css'
export default function Projects() {
  return (
    <section id="projects" className="container-fluid bg-dark my-2 mt-0 mb-0">
  <h2 className="text-center fw-bold mb-3 display-5 text-white">
          My <span className="text-primary">Projects</span>
        </h2>
  
<div className="row justify-content-center mt-5">

  {/* Hypermarket Card */}
  <div className="col-md-5 mb-4"> {/* col-md-5 rakho taaki space bache */}
    <div className="project-card" style={{background:'#1a293b'}}>
      <h3 className="text-white">Hypermarket Management</h3>
      <p className="text-light">A full-stack solution for streamlining inventory and sales operations with a clean UI.</p>
      <div className="my-3">
        <span className="tech-tag">React</span>
        <span className="tech-tag">Node.js</span>
        <span className="tech-tag">MongoDB</span>
      </div>
      <button className="btn btn-outline-info mt-2" disabled>Work In Progress</button>
    </div>
  </div>

  {/* Portfolio Card - Extra 'container' hata diya */}
  <div className="col-md-5 mb-4"> 
    <div className="project-card" style={{background:'#1a293b'}}>
      <h3 className="text-white">Personal Portfolio</h3>
      <p className="text-light">My technical showcase built with modern web technologies, focusing on responsive design.</p>
      <div className="my-3">
        <span className="tech-tag">React</span>
        <span className="tech-tag">Bootstrap</span>
        <span className="tech-tag">CSS3</span>
      </div>
      <a href="#" className="btn btn-outline-info mt-2">View Code</a>
    </div>
  </div>

</div>
</section>
  )
}
