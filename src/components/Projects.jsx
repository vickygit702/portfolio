import React from "react";

const projects = [
  {
    title: "Domestic Services Website",
    desc: "Developed a full-stack solution for connecting users with local service providers .",
    img: "/project1.png",
    tech: ["/react.svg", "/MongoDB.svg", "/node.svg", "/Bootstrap.svg"],
    liveDemo: "https://domestic-services-frontend.onrender.com",
  },
  {
    title: "Medi-Care Website",
    desc: "A fully functional healthcare platform for booking appointments and managing patient records.",
    img: "/project2.png",
    tech: ["/react.svg", "/tailwind.svg", "/node.svg"],
    liveDemo: "https://medi-care-project.vercel.app",
  },
  {
    title: "Social Media Website",
    desc: "A real-time social media platform for users to share their experiences.",
    img: "/project3.png",
    tech: ["/react.svg", "/MongoDB.svg", "/node.svg", "/CSS3.svg"],
    liveDemo: "https://domestic-services-frontend.onrender.com",
  },
];

const Projects = () => {
  return (
    <div id="projects" className=" mt-40" style={{ scrollMarginTop: "120px" }}>
      <div className="flex items-center justify-center mb-8">
        <div className="flex-1 border-t border-gray-400"></div>
        <h2 className="mx-4 text-2xl font-semibold text-center">Projects</h2>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="flex flex-col gap-10 mt-25">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex items-center justify-evenly ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex-shrink-0 w-[350px] h-[250px] bg-gray-200 relative group rounded-lg overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 backdrop-blur-[3px] bg-white/10 flex items-center justify-center text-black font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Live Demo
              </a>
            </div>

            <div
              className="flex flex-col justify-center "
              style={{ width: "300px" }}
            >
              <h3 className="text-xl font-semibold py-3 text-center">
                {project.title}
              </h3>
              <p className="text-gray-700 py-3 text-justify">{project.desc}</p>
              <div className="flex items-center justify-center gap-3 py-3">
                {project.tech.map((tech, i) => (
                  <img
                    key={i}
                    src={tech}
                    alt=""
                    className="w-8 h-8 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
