import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeUp } from "../common/animation";
import { LuGithub } from "react-icons/lu";

const HeroSection = ({ sectionRef }) => {
  return (
    <div
      className="bg-gradient-to-br from-black via-neutral-800 to-black h-dvh flex items-center justify-center"
      ref={sectionRef}
    >
      <div className="max-w-7xl px-4 py-24 mx-auto">
        <div className="w-full text-white text-center max-w-3xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0}
            className="greet-text cursive-text font-bold text-lg mb-6"
          >
            <span>Namaste!</span>
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0.2}
            className="text-5xl lg:text-6xl font-bold mb-6"
          >
            I&apos;m Sonu Munda
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0.4}
            className="text-neutral-300 text-lg mb-10"
          >
            I&apos;m a MERN stack developer who loves building web applications
            and exploring new technologies. When I&apos;m not coding, I enjoy
            music and photography. I&apos;m always eager to learn new things and
            create something meaningful!
          </motion.p>

          <motion.div
            className="hero-buttons flex flex-wrap justify-center gap-4 sm:flex-row flex-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            custom={0.6}
          >
            <motion.a
              href="mailto:sonumunda1312@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 rounded border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-neutral-900 transition duration-300"
            >
              Contact Me
            </motion.a>

            <motion.a
              href="https://github.com/sonumunda"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white flex items-center justify-center gap-3 text-neutral-900 px-8 py-3 text-lg font-semibold rounded hover:bg-neutral-100 transition duration-300"
            >
              <LuGithub size={24} /> <span>Github</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  sectionRef: PropTypes.any,
};

export default HeroSection;
