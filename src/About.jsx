import React from 'react';

export default function About() {
  return (
    
    <section id="about" className="py-5 bg-dark text-light border-top border-secondary border-3" style={{ minHeight: '90vh' }}>
      <div className="container py-4">
        
        {/* Title */}
        <h2 className="text-center fw-bold mb-5 display-5">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="row g-5 justify-content-center">
          
          {/* Left Side: Journey & Extra-Curriculars (Khali-pan bharne ke liye) */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-4 text-primary">My Journey</h3>
            <p className="fs-5 lh-base text-light mb-4">
              I am currently pursuing my B.Tech in Computer Science and Engineering. 
              I have a strong academic foundation and a keen interest in building functional, 
              user-friendly web applications using modern technologies.
            </p>
            
            {/* Added Extra Activities to balance the page layout */}
            <h4 className="fw-bold text-info mb-3 fs-5" style={{letterSpacing:'0.5px'}}>Beyond Coding</h4>
            
          <ul className="list-unstyled fs-6 lh-lg" style={{ color: '#e2e8f0' }}>
              <li className="mb-3">
                <span className="text-primary me-2">🔹</span>
                <strong className="text-light">NSS Volunteer:</strong> Actively involved in National Service Scheme community camps and teamwork activities.
              </li>
              <li className="mb-3">
                <span className="text-primary me-2">🔹</span>
                <strong className="text-light">Creative Arts:</strong> Passionate about Music and exploring creative dance performances.
              </li>
              <li className="mb-3">
                <span className="text-primary me-2">🔹</span>
                <strong className="text-light">Problem Solving:</strong> Passionate about learning data structures and database management systems.
              </li>
            </ul>
          </div>
          
          {/* Right Side: Education Cards (Ab isme 10th bhi include hai!) */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-4 text-primary">Education</h3>
            
            {/* 1. B.Tech Card */}
            <div className="card mb-3 text-light border-start border-primary border-4 shadow-sm" style={{ backgroundColor: '#1e293b', border: 'none' }}>
              <div className="card-body py-3">
                <h5 className="card-title fw-bold text-light m-0">B.Tech in Computer Science</h5>
                <p className="card-text text-primary fw-semibold my-1">Compucom Institute of Technology and Management</p>
                <p className="card-text text-light small m-0">Currently in 3rd Year (5th Semester)</p>
              </div>
            </div>
            
            {/* 2. 12th Card */}
            <div className="card mb-3 text-light border-start border-info border-4 shadow-sm" style={{ backgroundColor: '#1e293b', border: 'none' }}>
              <div className="card-body py-3">
                <h5 className="card-title fw-bold text-light m-0">Higher Secondary Education (12th)</h5>
                <p className="card-text text-light my-1">Rajasthan Secondary Board Of Education</p>
                <p className="card-text text-info fw-bold m-0">Scored: 86%</p>
              </div>
            </div>

            {/* 3. 10th Card (Naya Addition!) */}
            <div className="card mb-3 text-light border-start border-warning border-4 shadow-sm" style={{ backgroundColor: '#1e293b', border: 'none' }}>
              <div className="card-body py-3">
                <h5 className="card-title fw-bold text-light m-0">Secondary Education (10th)</h5>
                <p className="card-text text-light my-1">Rajasthan Secondary Board Of Education</p>
                <p className="card-text text-warning fw-bold m-0">Scored: 92.33%</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}