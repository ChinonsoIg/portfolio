import Image from "next/image";
import Link from "next/link";
import { Poppins } from "@next/font/google";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { HiOutlineChevronDoubleUp, HiPhoneOutgoing, HiOutlineMail } from "react-icons/hi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const contactRef = useRef(null);
  const headerRef = useRef(null);
  const leftBoxRef = useRef(null);
  const rightBoxRef = useRef(null);

  const contactIsInView = useInView(contactRef, { once: true });
  const headerIsInView = useInView(headerRef, { once: true });
  const leftBoxIsInView = useInView(leftBoxRef, { once: true });
  const rightBoxIsInView = useInView(rightBoxRef, { once: true });


  const notifySuccess = () => toast.success("Message sent succesfully", {
    position: "top-right"
  });
  const notifyError = () => toast.error("An error occured!", {
    position: "top-right"
  });

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("E: ", e.target)
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "bf3dcb82-d8ba-4102-b780-a9de7365084f",
        name: e.target.name.value,
        phoneNumber: e.target.phoneNumber.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      // console.log(result);
      notifySuccess();
    } else {
      notifyError();
    }
  }


  return (
    <div id="contact" className="w-full lg:h-min-content">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full"
      style={{ overflowX: (!leftBoxIsInView || !rightBoxIsInView) ? "hidden" : null }}
      >
        <p className={`${poppins_400.className} text-xl tracking-widest uppercase text-[#008080]`}
        ref={contactRef}
        style={{
          transform: contactIsInView ? "none" : "translateX(-200px)",
          opacity: contactIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        >
          Contact
        </p>
        <h2 className={`${poppins_600.className} py-4`}
        ref={headerRef}
        style={{
          transform: headerIsInView ? "none" : "translateX(-200px)",
          opacity: headerIsInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        >Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">

          {/* For the left element */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"
          ref={leftBoxRef}
          style={{
            transform: leftBoxIsInView ? "none" : "translateX(-200px)",
            opacity: leftBoxIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
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
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
          ref={rightBoxRef}
          style={{
            transform: rightBoxIsInView ? "none" : "translateX(200px)",
            opacity: rightBoxIsInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          >
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phoneNumber" className="uppercase text-sm py-2">
                      Phone number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-teal-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-teal-500 focus:outline-none"
                    rows={10}
                  />
                </div>
                <button type="submit" className="w-full p-4 mt-4 bg-gradient-to-r from-[#008080] to-[#00cccc] text-white">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <ToastContainer position="top-center" />

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
