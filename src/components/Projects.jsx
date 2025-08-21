import { Link } from "react-router-dom";
import projects from "../api/projects";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeIn } from "../common/animation";

const Projects = ({ sectionRef }) => {
  return (
    <section className="projects bg-neutral-950" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-4 py-24 space-y-10">
        <motion.h2
          className="text-4xl font-bold text-center text-neutral-200"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, amount: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="project-cards my-2 grid lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card px-4 py-6 bg-gradient-to-br from-neutral-800 to-neutral-950 border border-neutral-700 rounded-lg"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={project.logo}
                  alt={project.title}
                  className={`h-8 rounded ${project.whiteBg && "bg-white"}`}
                />
                <h3 className="text-xl text-neutral-100">{project.title}</h3>
              </div>
              <p className="text-neutral-300 mb-3">{project.description}</p>
              <div className="link flex items-center gap-2">
                <Link
                  to={project.link}
                  className="text-neutral-100"
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
                    {/* <tech.icon
                      className={`text-2xl ${tech.icon ? "text-neutral-300 me-2" : ""
                        }`}
                    /> */}
                    <span className="text-neutral-300 bg-neutral-800 py-1 px-3 rounded-full">{tech.name}</span>
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

Projects.propTypes = {
  sectionRef: PropTypes.any,
};

export default Projects;
