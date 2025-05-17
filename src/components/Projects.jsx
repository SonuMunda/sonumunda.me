import { Link } from "react-router-dom";
import projects from "../api/projects";
import { motion } from "framer-motion";

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="projects bg-gray-950 flex justify-center">
      <div className="container max-w-6xl p-4">
        <motion.h2
          className="text-4xl font-bold text-blue-400 text-center py-4 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Projects
        </motion.h2>
        <div className="project-cards my-2 grid lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card px-4 py-6 bg-gray-900 border border-gray-800 rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={project.logo}
                  alt=""
                  className={`h-8 rounded ${project.whiteBg && "bg-white"}`}
                />
                <h3 className="text-xl text-cyan-500">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="link flex items-center gap-2">
                <Link
                  to={project.link}
                  className="text-blue-500"
                  target="_blank"
                >
                  {project.linkTitle}
                </Link>
                <span className={`${project.iconColor} text-xl`}>
                  {<project.icon />}
                </span>
              </div>
              <div className="tech-stack mt-4 flex flex-wrap gap-4">
                {project.techStack.map((tech, index) => (
                  <div key={index} className="tech-item flex">
                    <tech.icon
                      className={`text-2xl ${
                        tech.icon ? "text-gray-300 me-2" : ""
                      }`}
                    />
                    <span className="text-gray-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
