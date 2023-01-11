import Image from "next/image";
import { Poppins } from "@next/font/google";
import React from "react";
import Link from "next/link";

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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry"s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p className="py-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry"s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projetcs</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/me/pic.jpeg"
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
