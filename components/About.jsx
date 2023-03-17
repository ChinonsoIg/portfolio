import Image from "next/image";
import { Poppins } from "@next/font/google";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

  const aboutRef = useRef(null);
  const headerRef = useRef(null);
  const devRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const checkOutRef = useRef(null);
  const imgRef = useRef(null);

  const aboutIsInView = useInView(aboutRef, { once: true });
  const headerIsInView = useInView(headerRef, { once: true });
  const devIsInView = useInView(devRef, { once: true });
  const para1IsInView = useInView(para1Ref, { once: true });
  const para2IsInView = useInView(para2Ref, { once: true });
  const checkOutIsInView = useInView(checkOutRef, { once: true });
  const imgIsInView = useInView(imgRef, { once: true });


  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8" 
      style={{ overflowX: !imgIsInView ? "hidden" : null }}
    >

        <div className="col-span-2">
          <p
            className={`${poppins_400.className} uppercase text-xl tracking-widest text-[#008080]`}
            ref={aboutRef}
            style={{
              transform: aboutIsInView ? "none" : "translateX(-200px)",
              opacity: aboutIsInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            About
          </p>
          <h2 className={`${poppins_600.className} py-4`}
            ref={headerRef}
            style={{
              transform: headerIsInView ? "none" : "translateX(-200px)",
              opacity: headerIsInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >Who I Am</h2>
          <p className="py-2 text-gray-400 italic" ref={devRef}
          style={{
            transform: devIsInView ? "none" : "translateX(-200px)",
            opacity: devIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
            // Not your normal developer <span className="not-italic">😃</span>
          </p>
          <p className="py-2 text-gray-600"
            ref={para1Ref}
            style={{
              transform: para1IsInView ? "none" : "translateX(-200px)",
              opacity: para1IsInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
          >
            A software developer, with over a year experience in shipping softwares with React.js, Next.js and Typescript. Highly detailed with strong motivation for success. Ability to leverage on my strong interpersonal skills to build and maintain good working relationships with both co-workers and clients.
          </p>
          <p className="py-2 text-gray-600"
          ref={para2Ref}
          style={{
            transform: para2IsInView ? "none" : "translateX(-200px)",
            opacity: para2IsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
            I prioritise accessibility in all my projects, hence my web apps conform with the WAI-ARIA standards. <br />Being well grounded in the principles  of responsive  design  with tools like SASS, Bootstrap, TailwindCSS and Chakra UI, I present my clients with the best user experience. I have successfully built applications with good browser compatibility and SEO.
          </p>
          <p className="py-2 underline cursor-pointer w-max text-[#008080]"
          ref={checkOutRef}
          style={{
            transform: checkOutIsInView ? "none" : "translateX(-200px)",
            opacity: checkOutIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
            <Link href="/#projects">Check out some of my latest projects</Link>
          </p>
        </div>

        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300"
          ref={imgRef}
          style={{
            transform: imgIsInView ? "none" : "translateX(200px)",
            opacity: imgIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          <Image
            src={pic}
            alt="Chinonso"
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
