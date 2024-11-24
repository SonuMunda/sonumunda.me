import { motion } from "framer-motion";
import skillAndInterests from "../api/skillAndInterests";

const About = () => {
  return (
    <section className="about bg-slate-950 flex justify-center py-10">
      <div className="container max-w-6xl p-8 flex flex-col gap-8">
        <div className="about-col flex flex-col lg:flex-row gap-8">
          <motion.div
            className="flex-1 flex flex-col gap-6 border p-4 border-slate-800 bg-slate-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className="font-bold text-3xl text-cyan-300 py-2 w-fit "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              About Me
            </motion.div>
            <p className="text-slate-400">
              I’m a passionate MERN stack developer with experience in both
              front-end and back-end development. I enjoy exploring new tools,
              libraries, and technologies to improve my development process.
              Apart from coding, I’m an avid music listener and love exploring
              different genres.
            </p>
            <p className="text-slate-400">
              My aim is to continue improving my skills and deliver meaningful,
              high-quality applications. I enjoy learning new things, tackling
              challenges, and constantly evolving as a developer.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col gap-6 border p-4 border-slate-800 bg-slate-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              className="font-bold text-3xl text-cyan-300 py-2 w-fit"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.4 }}
            >
              What I Do
            </motion.div>
            <p className="text-slate-400">
              I work on both front-end and back-end projects, creating seamless
              and interactive user experiences. On the back-end, I build robust
              APIs, handle database management, and work with various server
              technologies. On the front-end, I focus on creating responsive and
              engaging interfaces.
            </p>
            <p className="text-slate-400">
              Additionally, I spend time exploring tools and technologies to
              optimize my development workflow. I also enjoy listening to
              various types of music, which helps me stay creative and relaxed
              throughout my work.
            </p>
          </motion.div>
        </div>

        <div className="about-col">
          <motion.div
            className="font-bold text-3xl text-cyan-300 py-2 w-fit mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Skills & Interests
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-8 gap-4"
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            {skillAndInterests.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  className={`col flex flex-col gap-4 p-6 h-full border border-2 ${item.styleClasses}  hover:text-white transition-all duration-300 `}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  <div className="icon text-5xl my-auto">{<item.icon />}</div>
                  <div>
                    <div className="font-semibold text-xl">{item.title}</div>
                    <p className="col-text">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
