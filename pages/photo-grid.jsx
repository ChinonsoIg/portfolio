import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import photo_grid from "../public/assets/projects/photo_grid.png";

const PhotoGrid = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={photo_grid}
          alt="Sales and inventory management"
          className="absolute z-1 object-cover"
          fill
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2 text-white">Photo Grid App</h2>
          <h3>Vue Js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 md:col-span-3 lg:col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            This sleek UI uses unsplash API to display images of different sizes in columns. When an image is clicked, it will show a pop-up displaying the full image. I took advantage of skeleton loader to present my user with the best UI experience. <br />
            You can search for pictures of any city/place from around the world.
            I built this with Vue Js and pure CSS.

          </p>
          <div className="flex justify-start items-center gap-3">
            <button className="px-8 py-2 mt-4 mr-8">
              <Link
                href="https://unsplash-photo-grid.netlify.app"
                target="_blank"
                className="flex justify-between items-center gap-3"
              >
                Demo
                <FiExternalLink />
              </Link>
            </button>
            <button className="px-8 py-2 mt-4">
              <Link
                href="https://github.com/ChinonsoIg/photo-grid"
                target="_blank"
                className="flex justify-between items-center gap-3"
              >
                Code
                <FiExternalLink />
              </Link>
            </button>
          </div>
        </div>

        <div className="col-span-4 md:col-span-2 lg:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-col-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                Vue Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill size={16} className="pr-1" />
                CSS
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

export default PhotoGrid;
