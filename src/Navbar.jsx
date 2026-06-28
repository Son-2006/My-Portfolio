import React from 'react';
import './App.css'
export default function Navbar() {
  
return (
    
    <header className='header'>
      <div className="container-fluid">
        <div className="row align-items-center">
          
          <div className="col-8">
            <h1 className="text-light m-0 ps-3" style={{ fontFamily: 'sans-serif' }}>
              Sonal Portfolio
            </h1>
          </div>
          
          <div className="col-4 d-flex justify-content-end px-4">
            {/* Har link par custom style apply kar diya */}
            <a href="#home" className='link'>Home</a>
            <a href="#about" className='link' >About</a>
            <a href="#skills" className='link'>Skills</a>
            <a href="#projects" className='link'>Projects</a>
            <a href="#contact" className='link'>Contact</a>
            
          </div>

        </div>
      </div>
    </header>
  );
}