import { motion } from "framer-motion";
import education from "../api/education";
import experiences from "../api/experiences";
import workingSkills from "../api/workingSkills";
import techStack from "../api/techStack";

const Resume = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="resume flex items-center justify-center bg-slate-900">
      <div className="container max-w-6xl p-4 flex flex-col gap-8 my-10 ">
        <motion.h2
          className="text-4xl font-bold text-blue-400 text-center uppercase py-4 mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Resume
        </motion.h2>
        <motion.div className="education">
          <motion.h2
            className="text-3xl font-bold text-cyan-500 py-4 mt-2 border-b border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Education
          </motion.h2>
          <motion.div className="education grid gap-4 sm:grid-cols-1 lg:grid-cols-2 my-4">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className="education-item col px-6 py-10 flex flex-col bg-slate-950 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                whileHover={{
                  y: [0, -4, 0],
                  transition: {
                    duration: 0.4,
                    repeat: Infinity,
                  },
                }}
                variants={fadeInUp}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-container text-blue-400 text-2xl">
                      <edu.icon />
                    </div>
                    <h3 className="text-xl text-blue-400 font-semibold uppercase">
                      {edu.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-1">
                    <strong>Location:</strong> {edu.location}
                  </p>
                  <p className="text-slate-400">
                    <strong>Duration:</strong> {edu.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="experience">
          <motion.h2
            className="text-3xl font-bold text-cyan-500 py-4 mt-2 border-b border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Experience
          </motion.h2>
          <div className="experience grid sm:grid-cols-1 lg:grid-cols-2 gap-8 my-4">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="experience-item col p-6 flex flex-col gap-2 bg-slate-950"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                whileHover={{
                  y: [0, -4, 0],
                  transition: {
                    duration: 0.4,
                    repeat: Infinity,
                  },
                }}
                variants={fadeInUp}
              >
                <h3 className="text-xl text-blue-400"> - {exp.title}</h3>
                <p className="text-slate-400">{exp.duration}</p>
                <p className="text-slate-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="workingSkills">
          <motion.h2
            className="text-3xl font-bold text-cyan-500 py-4 mt-2 border-b border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Working Skills
          </motion.h2>

          <div className="workingSkills my-4">
            {workingSkills.map((skill) => (
              <motion.div key={skill.id} className="workingSkills-item p-2">
                <div className="flex justify-between">
                  <h3 className={`text-xl mb-2 flex ${skill.textColor}`}>
                    {skill.name}
                  </h3>
                  <p className="text-slate-400">{skill.percentage}%</p>
                </div>
                <div className="relative w-full h-2 bg-slate-800 overflow-hidden">
                  <motion.div
                    className={`progress h-full ${skill.progressColor}`}
                    style={{
                      width: `${skill.percentage}%`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 0.4 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="tech-stack">
          <motion.h2
            className="text-3xl font-bold text-cyan-500 py-4 mt-2 border-b border-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Tech Stack
          </motion.h2>
          <div className="tech-stacks grid grid-flow-row grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 my-4">
            {techStack.map((stack) => (
              <motion.div
                key={stack.id}
                className="stack flex flex-col items-center p-4 bg-slate-950  text-center border border-slate-800"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                <div className={`icon text-4xl ${stack.color} mb-3`}>
                  <stack.icon />
                </div>
                <p className="text-slate-400 text-sm sm:text-lg font-medium">
                  {stack.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
