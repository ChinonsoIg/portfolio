import Image from "next/image";
import Link from "next/link";
import { Poppins } from "@next/font/google";
import { useRef } from "react";
import { useInView } from "framer-motion";

import { projects } from "../utils/Functions";

const poppins_600 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const poppins_400 = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  const projectsRef = useRef(null);
  const headerRef = useRef(null);

  const projectsIsInView = useInView(projectsRef, { once: true });
  const headerIsInView = useInView(headerRef, { once: true });

  return (
    <div id="projects" className="max-w-[1240px] mx-auto px-2 py-16 ">
      <p className={`${poppins_400.className} uppercase text-xl tracking-widest text-[#008080]`}
      ref={projectsRef}
      style={{
        transform: projectsIsInView ? "none" : "translateX(-200px)",
        opacity: projectsIsInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      >
        Projects
      </p>
      <h2 className={`${poppins_600.className} py-4`}
      ref={headerRef}
      style={{
        transform: headerIsInView ? "none" : "translateX(-200px)",
        opacity: headerIsInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      >What I&apos;ve Built</h2>
      <div className="grid 
      grid-cols-1 
      md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group relative flex justify-center items-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 hover:bg-gradient-to-r from-[#008080] to-[#00cccc]">
            <Image
              src={project.img}
              alt={project.name}
              width="800"
              height="400"
              className="rounded-xl group-hover:opacity-10 ease-in-out duration-300"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-sm md:text-xl font-normal md:font-bold text-white md:tracking-wider text-center">{project.name}</h3>
              <p className="pb-4 pt-2 text-white text-center">{project.technology}</p>
              <Link href={project.url}>
                <p className="text-center py-1 md:py-3 rounded-lg bg-white text-gray-700 font-normal md:font-bold text-lg cursor-pointer">More Info</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
