import React from 'react';
import './App.css'
// 1. Apni photo ko import karein. 'path/to/your/photo.jpg' ki jagah 
// apni photo ka sahi path likhein relative to this file.
import MyPhoto from './assets/sonal.jpeg'; 

export default function Home() {
  return (
    <section id="home" className="bg-dark text-light d-flex align-items-center" style={{ minHeight: '90vh' }}>
      <div className="container text-center text-md-start">
        <div className="row align-items-center">
          
          {/* Left Side: Your Intro (pehle jaisa hi hai) */}
          <div className="col-md-8">
            <h4 className="text-primary fw-bold mb-3">Hello, I am</h4>
            <h1 className="display-3 fw-bold mb-3">Sonal</h1>
            <h3 className="text-light mb-4 "style={{ maxWidth: '600px' }}>
  Computer Science Engineering Student & Aspiring <span className='text-blue-800'>Full-Stack Developer</span>
</h3>
            <p className="lead mb-4" style={{ maxWidth: '600px' }}>
              Building scalable web applications using React, Node.js, Express & MongoDB.
            </p>
            {/* Left Side: Buttons */}
         <a href="#contact" className="btn btn-primary btn-lg me-3 px-4 btn-glow">Get In Touch</a>
         <a href="/Sonal Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-lg px-4 btn-glow">Download Resume</a> 
</div>

          {/* Right Side: Your Photo (Yahan badlav hai) */}
          <div className="col-md-4 text-center">
            {/* 2. img tag use karein aur src={MyPhoto} set karein */}
            <img 
              src={MyPhoto} 
              alt="Sonal's Portfolio Photo" 
              className="profile-image"
              
            />
            
          </div>
          </div>
      </div>
    </section>
  );
}