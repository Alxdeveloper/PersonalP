import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container text-center">
        <div className="row align-items-center">
          {/* Profile Image */}
          <div className="col-lg-4 mb-4">
            <img 
              src="https://via.placeholder.com/200" 
              alt="Profile" 
              className="rounded-circle img-fluid shadow"
            />
          </div>

          {/* About Text */}
          <div className="col-lg-8 text-start">
            <h2 className="fw-bold">About Me</h2>
            <p className="lead">
              Hello! I'm <strong>Your Name</strong>, a passionate Full-Stack Developer specializing in the 
              **MERN Stack (MongoDB, Express.js, React, Node.js)**. I build scalable, user-friendly web applications.
            </p>
            <p>
              I love working with **JavaScript, Bootstrap, and React** to create dynamic web experiences. 
              When I'm not coding, I enjoy learning new technologies and contributing to open-source projects.
            </p>

            {/* Skills */}
            <h5 className="fw-bold mt-3">Skills</h5>
            <div className="d-flex flex-wrap">
              <span className="badge bg-primary me-2 mb-2">JavaScript</span>
              <span className="badge bg-secondary me-2 mb-2">React</span>
              <span className="badge bg-success me-2 mb-2">Node.js</span>
              <span className="badge bg-danger me-2 mb-2">MongoDB</span>
              <span className="badge bg-dark me-2 mb-2">Bootstrap</span>
              <span className="badge bg-warning text-dark me-2 mb-2">Git & GitHub</span>
            </div>

            {/* Resume Download */}
            <a href="/resume.pdf" className="btn btn-dark mt-4" download>
              <i className="bi bi-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
