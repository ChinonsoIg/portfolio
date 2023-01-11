import Link from "next/link";
import { Poppins } from "@next/font/google";
import React from "react";
import { socials } from "../utils/Functions";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
})


const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-xs md:sm tracking-widest text-gray-600">
            LET&apos;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className={`${poppins.className} py-5 text-gray-700`}>
            Hi, I&apos;m <span className="text-[#5651ef]">Chinonso</span>
          </h1>
          <h2 className={`${poppins.className} py-2 text-gray-700 font-bold`}>A Front-End Web Developer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a front-end we dev specialising in building exceptional
            digital experience. I&apos;m focused on building responsive
            front-end web applications while learning back-end technologies
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Main;
