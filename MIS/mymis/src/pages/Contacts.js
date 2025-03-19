import React from "react";

const Contact = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-dark w-100">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
