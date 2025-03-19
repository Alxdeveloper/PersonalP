import React from "react";

const Projects = () => {
  const projects = [
    { title: " Website", description: "A personal portfolio using MERN & Bootstrap", link: "https://personal-portfolio-front-delta.vercel.app/" },
    { title: "E-commerce Store", description: "A full-stack e-commerce platform", link: "https://ecommerce-two-psi-84.vercel.app/" },
    { title: "Task Manager", description: "A to-do list app with React & Node.js", link: "https://myapp-omega-two.vercel.app/" }
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold">Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-dark">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
