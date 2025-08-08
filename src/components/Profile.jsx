import { motion } from "framer-motion";
import education from "../api/education";
import experiences from "../api/experiences";
import PropTypes from "prop-types";
import { fadeIn, fadeUp } from "../common/animation";

const Profile = ({ sectionRef }) => {
  return (
    <section
      className="resume flex items-center justify-center bg-neutral-900"
      ref={sectionRef}
    >
      <div className="container max-w-7xl px-4 py-24 mx-auto space-y-10">
        <motion.h2
          className="text-4xl font-bold text-center text-neutral-200"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: false, amount: 0.5 }}
        >
          Profile
        </motion.h2>

        <div className="experience">
          <motion.h2
            className="text-3xl font-bold text-neutral-200 py-4 mt-2 "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Experience
          </motion.h2>
          <div className="experience grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                className="experience-item col p-6 flex flex-col gap-2 bg-gradient-to-r from-neutral-800  to-neutral-950  shadow-lg rounded-lg"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <h3 className="text-xl text-neutral-100"> - {exp.title}</h3>
                <p className="text-neutral-300">{exp.duration}</p>
                <p className="text-neutral-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div className="education">
          <motion.h2
            className="text-3xl font-bold text-neutral-200 my-2 "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            Education
          </motion.h2>
          <motion.div className="education grid gap-4 sm:grid-cols-1 lg:grid-cols-2 my-4">
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                className="education-item col px-6 py-10 flex flex-col bg-gradient-to-r from-neutral-800  to-neutral-950  shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-container text-neutral-200 text-2xl">
                      <edu.icon />
                    </div>
                    <h3 className="text-xl text-neutral-200 font-semibold uppercase">
                      {edu.title}
                    </h3>
                  </div>
                  <p className="text-neutral-300 mb-1">
                    <strong>Location:</strong> {edu.location}
                  </p>
                  <p className="text-neutral-300">
                    <strong>Duration:</strong> {edu.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

Profile.propTypes = {
  sectionRef: PropTypes.any,
};

export default Profile;
