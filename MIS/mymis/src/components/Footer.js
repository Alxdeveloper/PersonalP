import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-6 mt-5">
      <div className="container text-center">
        <div className="row">
          {/* Left Section - Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-decoration-none text-light">About</a></li>
              <li><a href="#projects" className="text-decoration-none text-light">Projects</a></li>
              <li><a href="#contact" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </div>

          {/* Middle Section - Social Media */}
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <a href="https://github.com" className="text-light me-3"><i className="bi bi-github fs-4"></i></a>
            <a href="https://linkedin.com" className="text-light me-3"><i className="bi bi-linkedin fs-4"></i></a>
            <a href="https://twitter.com" className="text-light"><i className="bi bi-twitter fs-4"></i></a>
          </div>

          {/* Right Section - Copyright */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: dmurangiri92@gmail.com</p>
            <p>Phone: +254701152721</p>
          </div>
        </div>

        <hr className="my-3 border-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} DensirTech. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
