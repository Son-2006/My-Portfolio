import React,{useState} from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "df6b868e-d43c-406b-971f-7dc5767fdb17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="py-5 bg-dark text-light border-top border-secondary border-3" style={{ minHeight: '90vh' }}>
      <div className="container py-4">
        
        {/* Section Title */}
        <h2 className="text-center fw-bold mb-3 display-5">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-light mb-5 fs-5 mx-auto" style={{ maxWidth: '600px' }}>
          Have a question or want to work together? Feel free to drop a message or reach out directly!
        </p>

        <div className="row g-5 justify-content-center">
          
          {/* Left Side: Contact Info & Live Google Map */}
          <div className="col-md-5">
            <h3 className="fw-bold mb-4 text-primary">Contact Information</h3>
            
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <span className="fs-4 text-info me-3">📧</span>
                <div>
                  <h6 className="mb-0 fw-bold text-light">Email</h6>
                  <p className="m-0 text-secondary">sonalk53225@gmail.com <br /><br /><br /></p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3">
                <span className="fs-4 text-info me-3">📱</span>
                <div>
                  <h6 className="mb-0 fw-bold text-light">Phone</h6>
                  <p className="m-0 text-secondary">+91 8178973945<br /><br /><br /></p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <span className="fs-4 text-info me-3">📍</span>
                <div>
                  <h6 className="mb-0 fw-bold text-light">Location</h6>
                  <p className="m-0 text-secondary">Jaipur, Rajasthan, India<br /><br /><br /></p>
                </div>
              </div>
            </div>
            </div>

          {/* Right Side: Informative Message Form */}
          <div className="col-md-6">
            <h3 className="fw-bold mb-4 text-primary">Send a Message</h3>
            
            <form onSubmit={onSubmit} style={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label text-light fw-semibold">Your Name</label>
    <input type="text" name="name" className="form-control bg-dark text-light border-secondary" required />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label text-light fw-semibold">Email Address</label>
    <input type="email" name="email" className="form-control bg-dark text-light border-secondary" required />
  </div>

  <div className="mb-4">
    <label htmlFor="message" className="form-label text-light fw-semibold">Your Message</label>
    <textarea name="message" className="form-control bg-dark text-light border-secondary" rows="4" required></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary w-100">Send Message 🚀</button>
</form>
            <div className="mt-4">
           </div>
          </div>

        </div>

      </div>
      <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.763411449541!2d75.76419677450366!3d26.87925686152915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5004cbcda31%3A0xc3d1ba6128c84b1!2sMahakaleshwar%20Girls%20PG%20And%20Library!5e0!3m2!1sen!2sin!4v1780638094387!5m2!1sen!2sin" 
    width="100%" 
    height="350" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
   <footer className="bg-dark text-light py-5 mt-5" style={{ backgroundColor: '#0f172a', borderTop: '3px solid #1e293b' }}>
  <div className="container">
    <div className="row gy-4">
      
      {/* Column 1: About / Branding */}
      <div className="col-lg-4 col-md-6">
        <h3 className="fw-bold mb-3" style={{ letterSpacing: '1px', color: '#6366f1' }}>
          Sonal Website
        </h3>
        <p className="text-light small" style={{ lineHeight: '1.8' }}>
          Building modern, responsive, and beautiful web experiences. Let's create something amazing together.
        </p>
        {/* Social Icons (Optional Placeholder) */}
        <div className="d-flex gap-3 mt-3">
          <a href="#" className="text-primary text-decoration-none hover-link" style={{ transition: '0.3s' }}>GitHub</a>
          <a href="#" className="text-primary text-decoration-none hover-link" style={{ transition: '0.3s' }}>LinkedIn</a>
        </div>
      </div>

      {/* Column 2: Quick Links */}
      <div className="col-lg-3 col-md-6 px-lg-5">
        <h5 className="fw-bold mb-3" style={{ color: '#f8fafc' }}>Quick Links</h5>
        <ul className="list-unstyled d-flex flex-column gap-2 m-0 p-0">
          <li>
            <a href="#home" className="text-light text-decoration-none custom-footer-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-light text-decoration-none custom-footer-link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="text-light text-decoration-none custom-footer-link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="text-light text-decoration-none custom-footer-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Contact Info */}
      <div className="col-lg-5 col-md-12">
        <h5 className="fw-bold mb-3" style={{ color: '#f8fafc' }}>Get In Touch</h5>
        <div className="d-flex flex-column gap-3 text-light small">
          <div className="d-flex align-items-center gap-2">
            <span>📍</span> 
            <span>India Gate, Sitapura, Jaipur</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span>📞</span> 
            <a href="tel:+918178973945" className="text-light text-decoration-none custom-footer-link">+91 8178973945</a>
          </div>
          <div className="d-flex align-items-center gap-2">
            <span>✉️</span> 
            <a href="mailto:sonalk53225@gmail.com" className="text-light text-decoration-none custom-footer-link">sonalk53225@gmail.com</a>
          </div>
        </div>
      </div>

    </div>

    {/* Custom CSS directly injected for Hover Effects */}
    <style>{`
      .custom-footer-link {
        transition: all 0.3s ease;
      }
      .custom-footer-link:hover {
        color: #6366f1 !important;
        padding-left: 5px;
      }
    `}</style>

    {/* Bottom Line */}
    <hr className="my-4" style={{ borderColor: '#1e293b' }} />
    
    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center text-light small">
      <p className="mb-2 mb-sm-0">&copy; {new Date().getFullYear()} Sonal. All rights reserved.</p>
      <p className="mb-0">Designed with ❤️</p>
    </div>
  </div>
</footer>
</section>
    

    
  );
}