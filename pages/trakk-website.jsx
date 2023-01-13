import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import trakk_website from "../public/assets/projects/trakk_website.png";

const TrakkWebsite = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={trakk_website}
          alt="Sales and inventory management"
          className="absolute z-1 object-cover"
          fill
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-white">Trakk Website</h2>
          <h3>Next Js / Chakra UI / TypeScript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            Official website of the Trakk app. It's an informational page about the Trakk app. It also has a tracking feature, where a user can enter his/her tracking ID, and see the location of the courier in real time. This feature was implemented with Google map API.
          </p>
          <div className="flex justify-start items-center gap-3">
            <button className="px-8 py-2 mt-4 mr-8">
              <Link
                href="https://trakkhq.com"
                target="_blank"
                className="flex justify-between items-center gap-3"
              >
                Demo
                <FiExternalLink />
              </Link>
            </button>
            {/* <button className="px-8 py-2 mt-4">
              <Link
                href="https://github.com/ChinonsoIg/myreads"
                target="_blank"
                className="flex justify-between items-center gap-3"
              >
                Code
                <FiExternalLink />
              </Link>
            </button> */}
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-col-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Next Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Chakra UI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Tidio
              </p>
            </div>
          </div>
        </div>

        <p className="underline cursor-pointer py-10 w-max">
          <Link href="/#projects">Back</Link>
        </p>
      </div>
    </div>
  );
};

export default TrakkWebsite;
