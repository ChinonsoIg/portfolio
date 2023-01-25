import Link from "next/link";
import { Poppins } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { socials } from "../utils/Functions";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
})


const Main = () => {
  return (
    <AnimatePresence>
      <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exist={{ opacity: 0, y: 15 }}
              transition={{ delay: 0.25 }}
            >
              <p className="uppercase text-xs md:text-sm tracking-widest text-gray-600">
                LET&apos;S BUILD SOMETHING TOGETHER
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exist={{ opacity: 0, x: 15 }}
              transition={{ delay: 0.65, duration: 0.85 }}
            >
            <h1 className={`${poppins.className} py-5 text-gray-700`}>
              Hi, I&apos;m <span className="text-[#008080]">Chinonso</span>
            </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exist={{ opacity: 0, x: 15 }}
              transition={{ delay: 1.65, duration: 1.45 }}
            >
            <h2 className={`${poppins.className} py-2 text-gray-700 font-bold`}>A Front-End Web Developer</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exist={{ opacity: 0, x: 15 }}
              transition={{ delay: 2.65, duration: 1.85 }}
            >
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              I&apos;m a Front-end Web dev bringing your designs to live, with the required aesthetics.
            </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exist={{ opacity: 0, y: 15 }}
              transition={{ delay: 3.65, duration: 1.85 }}
            >
              <div className="flex justify-between items-center max-w-[230px] m-auto py-4">
                {socials.map((social) => (
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    key={social.id}
                  >
                    <Link href={social.url} target="_blank">{social.icon}</Link>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatePresence >
  );
};

export default Main;
