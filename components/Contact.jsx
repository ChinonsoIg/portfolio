import Image from "next/image";
import Link from "next/link";
import { Poppins } from "@next/font/google";
import React from "react";
import { HiOutlineChevronDoubleUp, HiPhoneOutgoing, HiOutlineMail } from "react-icons/hi";
import { socials } from "../utils/Functions";
import contact_me from "../public/assets/me/contact_me.png";

const poppins_600 = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const poppins_400 = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className={`${poppins_400.className} text-xl tracking-widest uppercase text-[#008080]`}>
          Contact
        </p>
        <h2 className={`${poppins_600.className} py-4`}>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* For the left element */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contact_me}
                  alt="Contact me"
                  width="500"
                  height="500"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="">
                <h2 className="py-2">Ojoechem Chinonso</h2>
                <p className="">Frontend Developer</p>
                <p className="py-4">
                  I&apos;m available for freelance or full-time positions.
                  Contact me let&apos;s talk.
                </p>
                <p className="flex justify-start items-center gap-3">
                  <HiOutlineMail color="#001a1a" />
                  ojononso@yahoo.com
                </p>
                <p className="flex justify-start items-center gap-3 py-1">
                  <HiPhoneOutgoing color="#001a1a" />
                  +234 708 147 5026
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#008080]">Connect with Me</p>
                <div className="flex justify-between items-center max-w-[230px] py-4">
                  {socials.map((social) => (
                    <div
                      className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                      key={social.id}
                    >
                      <Link href={social.url} target="_blank">
                        {social.icon}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right element */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      type="text"
                      className="border-2 rounded-lg p-3 flex border-gray-300 "
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300 "
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows={10}
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">send message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#008080]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
