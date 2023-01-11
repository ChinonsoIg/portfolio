import Image from "next/image";
import { Poppins } from "@next/font/google";
import React from "react";
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
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className={`${poppins_400.className} text-xl tracking-widest uppercase text-[#008080]`}>
          Skills
        </p>
        <h2 className={`${poppins_600.className} py-4`}>What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={skill.img} width="64" height="64" alt={skill.name} />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
