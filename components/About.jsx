import Image from "next/image";
import { Poppins } from "@next/font/google";
import React from "react";
import Link from "next/link";
import pic from "../public/assets/me/pic.jpeg"

const poppins_600 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const poppins_400 = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p
            className={`${poppins_400.className} uppercase text-xl tracking-widest text-[#008080]`}
          >
            About
          </p>
          <h2 className={`${poppins_600.className} py-4`}>Who I Am</h2>
          <p className="py-2 text-gray-400 italic">
            // Not your normal developer <span className="not-italic">😃</span>
          </p>
          <p className="py-2 text-gray-600">
            A software developer, with keen interest on code workability and efficiency, maintainability and scalability. Highly detailed with strong motivation for success. Ability to leverage on my strong interpersonal skills to build and maintain good working relationships with both co-workers and clients.
          </p>
          <p className="py-2 text-gray-600">
            I prioritise accessibility in all my projects, considering that users may have physical challenges. <br />Being well grinded with  the principles  of responsive  design  with tools like SASS, Bootstrap and Chakra UI, I present my clients with the best user experience. I have successfully built applications with good browser compatibility and SEO optimisation. I leverage my adept knowledge of CSS and JavaScript (including its frameworks/libraries) to deliver aesthetic and equally engaging/interactive interfaces.
          </p>
          <p className="py-2 underline cursor-pointer w-max text-[#008080]">
            <Link href="/#projects">Check out some of my latest projects</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={pic}
            alt="Me"
            width="350"
            height="400"
            style={{ borderRadius: "8px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
