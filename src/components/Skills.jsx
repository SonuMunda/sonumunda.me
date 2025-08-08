import { motion } from "framer-motion";
import techStack from "../api/techStack";
import PropTypes from "prop-types";
import { fadeIn, fadeUp } from "../common/animation";

const Skills = ({ sectionRef }) => {
  return (
    <section className="skills bg-neutral-900" ref={sectionRef}>
      <div className="container max-w-7xl mx-auto px-4 py-24 space-y-10">
        <motion.h2
          className="text-4xl font-bold text-center text-neutral-200"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: false, amount: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="tech-stacks grid grid-flow-row grid-cols-2  sm:grid-cols-3 md:grid-cols-4  gap-8">
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              className="stack flex flex-col items-center p-4 bg-gradient-to-r from-neutral-800 to-neutral-950  text-center border-2 border-neutral-800 rounded-lg"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className={`icon text-4xl ${stack.color} mb-3`}>
                <stack.icon />
              </div>
              <p className="text-neutral-400 text-sm sm:text-lg font-medium">
                {stack.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  sectionRef: PropTypes.any,
};

export default Skills;
