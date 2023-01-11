import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../utils/Functions";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16 ">
      <p className="uppercase text-xl tracking-widest text-[#5651e5]">
        Projects
      </p>
      <h2 className="py-4">What I&apos;ve Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image
              src={project.img}
              alt={project.name}
              width="800"
              height="400"
              className="rounded-xl group-hover:opacity-10 ease-in-out duration-300"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">{project.name}</h3>
              <p className="pb-4 pt-2 text-white text-center">{project.technology}</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
