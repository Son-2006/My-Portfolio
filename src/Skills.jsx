import React from 'react';

export default function Skills() {
  // Saare colors ko uniform 'bg-info' (bright cyan-blue) kar diya hai
  // Aur layout ko balance karne ke liye DSA ko add kiya hai
  const technicalSkills = [
    { name: "HTML5 & CSS3", level: "90%", color: "bg-info" },
    { name: "Bootstrap & Responsive Design", level: "85%", color: "bg-info" },
    { name: "JavaScript (ES6+)", level: "75%", color: "bg-info" },
    { name: "C / C++ Programming", level: "65%", color: "bg-info" },
    { name: "Database Management Systems (DBMS)", level: "70%", color: "bg-info" },
    { name: "Data Structures & Algorithms (DSA)", level: "40%", color: "bg-info" }
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-light border-top border-secondary border-3" style={{ minHeight: '80vh' }}>
      <div className="container py-4">
        
        {/* Section Title */}
        <h2 className="text-center fw-bold mb-3 display-5">
          My <span className="text-primary">Skills</span>
        </h2>
        <p className="text-center text-light mb-5 fs-5 mx-auto" style={{ maxWidth: '600px' }}>
          Here are the programming languages and technologies that I work with to build responsive web applications.
        </p>
        
        {/* Perfect 2-Column Grid Layout (Ab koi box akela nahi bachega) */}
        <div className="row g-4 justify-content-center">
          {technicalSkills.map((skill, index) => (
            <div className="col-md-6 px-4" key={index}>
              
              {/* Skill Details Card Wrapper */}
              <div className="p-3 rounded-3" style={{ backgroundColor: '#1e293b' }}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-bold fs-6 text-light">
                    <span className="text-primary me-2">🔹</span>{skill.name}
                  </span>
                  <span className="badge bg-info text-dark fw-bold px-2 py-1">
                    {skill.level}
                  </span>
                </div>
                
                {/* Progress Bar Container */}
                <div className="progress" style={{ height: '8px', overflow: 'hidden', backgroundColor: '#334155' }}>
                  <div 
                    className={`progress-bar ${skill.color} progress-bar-striped progress-bar-animated`} 
                    role="progressbar" 
                    style={{ width: skill.level }}
                    aria-valuenow={parseInt(skill.level)} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}