import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Alex_Brush } from "@next/font/google";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navItems, socials } from "../utils/Functions";

const alex_brush = Alex_Brush({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#001a1a");
  const [logoColor, setLogoColor] = useState("#008080");

  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === "/sales-inventory" ||
      router.asPath === "/merchant-dashboard" ||
      router.asPath === "/trakk-website" ||
      router.asPath === "/zebrra-website" ||
      router.asPath === "/photo-grid" ||
      router.asPath === "/would-you-rather" ||
      router.asPath === "/myreads"
    ) {
      if (shadow) {
        setNavBg("#ecf0f3");
        setLinkColor("#001a1a");
        setLogoColor("#008080")
      } else {
        setNavBg("transparent");
        setLinkColor("#f8f8f8");
        setLogoColor("#f8f8f8");
      }
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router, shadow]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        // console.log("true");
        setShadow(true);
      } else {
        // console.log("false");
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full 2xl-px-16 px-5">
        <Link href="/" className={`${alex_brush.className} text-xl font-bold`} style={{ color: logoColor }} aria-label="Go to home page">
          ChiDev
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {navItems.map((navItem) => (
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b-2 ease-in-out duration-300"
                key={navItem.id}
              >
                <Link href={`/#${navItem.name}`} className="w-full" aria-label={`Go to ${navItem.name} section`}>
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} color={linkColor} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500"
              : "fixed left-[-120%] top-0 p-5 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full">
              <Link href="/" className={`${alex_brush.className} text-xl font-bold text-[#008080]`} aria-label="Go to home page">
                ChiDev
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-base text-[#001a1a]">
                Let&apos;s build something legendary together.
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col text-left">
            <ul>
              {navItems.map((navItem) => (
                <li
                  onClick={() => setNav(false)}
                  className="text-sm uppercase py-3"
                  key={navItem.id}
                >
                  <Link href={`/#${navItem.name}`} className="w-full" aria-label={`Go to ${navItem.name} section`}>
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#008080]">
                Let&apos;s connect
              </p>
              <div className="flex justify-between items-center my-4 w-full sm:w-[80%]">
                {socials.map((social) => (
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                    key={social.id}
                  >
                    <Link href={social.url} target="_blank" aria-label={`Let's connect on ${social.name}`}>
                      {social.icon}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
