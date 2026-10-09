import React from "react";
import "./Project.css";

function Projects() {
  const projectcard = [
    {
      label: "Full Stack Project",
      name: "QuickKart",
      description:
        "A local shopping platform connecting customers with nearby vendors.",
      image:
        "https://img.magnific.com/free-vector/flat-design-payday-illustration_23-2151093392.jpg?semt=ais_hybrid&w=740&q=80",
      techStack: ["React", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/",
      live: "#",
    },
    {
      label: "MERN Stack Project",
      name: "Collaborative Editor",
      description:
        "A real-time collaborative document editor built for multiple users.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RVzmDmSDsTo_9AKKMOjlDNet4VA0bAGsnineTybDuerM5a_Uroy0sdk&s=10",
      techStack: ["React", "Node.js", "MongoDB", "Socket.IO"],
      github: "https://github.com/",
      live: "#",
    },

    {
      label: "MERN + AI Project",
      name: "AI Resume Analysis",
      description:
        "An AI-powered resume analysis application that helps users improve their resumes.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFYZw_40uXKhPdBugD7plpCN4LnhdXoevpC_Oujnl8iS0GJAY-uqcjnqGc&s=10",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "AI"],
      github: "https://github.com/",
      live: "#",
    },

    {
      label: "React Project",
      name: "Mind Wellness",
      description:
        "A responsive wellness website focused on mental health and wellbeing.",
      image:
        "https://www.solhapp.com/blog/storage/the-correlation-of-physical-and-mental-health.webp",
      techStack: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/smruti-0105/mind-wellness",
      live: "https://smruti-0105.github.io/mind-wellness/",
    },
    {
      label: "Web Development Project",
      name: "NuraTree",
      description:
        "A modern nursery website for exploring plants and gardening products.",
      image:
        "https://img.magnific.com/free-vector/flower-shop-modern-vector-cartoon-woman-characters-illustration-white_1150-40337.jpg?semt=ais_hybrid&w=740&q=80",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/smruti-0105/Paradies-nursary",
      live: "https://smruti-0105.github.io/Paradies-nursary/Paradies-nursery.html",
    },
    {
      label: "Frontend Project",
      name: "Road Safety",
      description:
        "A website created to promote traffic rules and road safety awareness.",
      image:
        "https://img.magnific.com/free-vector/pedestrian-crossing-crosswalk-road-green-traffic-light-man-walking-zebra-holding-mobile-phone-flat-vector-illustration-safety-street-accident-compliance-with-traffic-rules-concept_74855-21244.jpg?semt=ais_hybrid&w=740&q=80",
      techStack: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/smruti-0105/road-safety",
      live: "https://smruti-0105.github.io/road-safety/index%20copy.html",
    },
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">
        {projectcard.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />

            <div className="project-content">
              <h2>{project.name}</h2>

              <p className="project-type">{project.label}</p>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span className="tech-card" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  className="github-button"
                >
                  GitHub
                </a>

                <a href={project.live} target="_blank" className="live-button">
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
