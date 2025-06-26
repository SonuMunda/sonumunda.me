import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 h-dvh flex items-center justify-center">
      <div className="max-w-6xl p-4 backdrop-blur-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <motion.div
          className="text-white text-center lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-sky-400 font-bold text-lg mb-6">Namaste!</p>
          <motion.h1
            className="text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            I&apos;m Sonu Munda
          </motion.h1>
          <p className="text-gray-300 text-lg mb-10">
            I&apos;m a MERN stack developer who loves building web applications
            and exploring new technologies. When I&apos;m not coding, I enjoy
            music and photography. I&apos;m always eager to learn new things and
            create something meaningful!
          </p>

          <div className="hero-buttons flex flex-wrap justify-center gap-4 sm:flex-row flex-col">
            {/* <Link to="mailto: sonumunda1312@gmail.com">
              <motion.button
                className="border-4 border-sky-400 text-sky-400 px-8 py-3 text-xl font-semibold hover:bg-sky-400 hover:text-gray-900  transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Contact Me
              </motion.button>
            </Link> */}

            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Link
                to={
                  "https://drive.google.com/file/d/1v4vIzrJi9-UrtZmnVtoMy5DN6wJXPUSm/view?usp=sharing"
                }
                target="_blank"
                className="bg-sky-400 text-gray-900 px-6 py-3 text-xl font-semibold rounded-full hover:bg-sky-500 transition duration-300"
              >
                Download CV
              </Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
