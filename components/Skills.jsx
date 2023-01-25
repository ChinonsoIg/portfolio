import Image from "next/image";
import { Poppins } from "@next/font/google";
import { useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { skills } from "../utils/Functions";

const poppins_600 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const poppins_400 = Poppins({
  weight: "400",
  subsets: ["latin"],
});


const Skills = () => {
  const skillsRef = useRef(null);
  const headerRef = useRef(null);

  const skillsIsInView = useInView(skillsRef, { once: true });
  const headerIsInView = useInView(headerRef, { once: true });

  return (
    <AnimatePresence>
      <div id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
          <p className={`${poppins_400.className} text-xl tracking-widest uppercase text-[#008080]`}
          ref={skillsRef}
          style={{
            transform: skillsIsInView ? "none" : "translateX(-200px)",
            opacity: skillsIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
            Skills
          </p>
          <h2 className={`${poppins_600.className} py-4`}
          ref={headerRef}
          style={{
            transform: headerIsInView ? "none" : "translateX(-200px)",
            opacity: headerIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >What I Can Do</h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.85 }
              },
              hidden: { opacity: 0 }
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
                variants={{
                  hidden: { scale: 0, x: -200 },
                  visible: { scale: 1, x: 0, transition: { duration: 0.8 } },
                }}
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center"
                >
                  <motion.div className="m-auto"
                    variants={{
                      hidden: { opacity: 1, x: 20, y: -15 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: { duration: 0.8, delay: 7.5 }
                      }
                    }}
                  >
                    <Image src={skill.img} width="64" height="64" alt={skill.name} />
                  </motion.div>
                  <div className="flex flex-col justify-center items-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Skills;
