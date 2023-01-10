import Image from 'next/image';
import Link from 'next/link';
import React, {useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const navItems = [
  { name: 'home', url: '/', id: '1' },
  { name: 'about', url: '/about', id: '2' },
  { name: 'skills', url: '/skills', id: '3' },
  { name: 'projects', url: '/projects', id: '4' },
  { name: 'contacts', url: '/contacts', id: '5' },
];

const socials = [
  { name: 'linkedin', icon: <FaLinkedin />, id: '1' },
  { name: 'twitter', icon: <FaTwitter />, id: '2' },
  { name: 'github', icon: <FaGithub />, id: '3' },
]

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl-px-16'>
        <Image src='/../public/assets/skills/firebase.png' width='50' height='20' />
        <div>
          <ul className='hidden md:flex'>
            {
              navItems.map((navItem) => (
                <Link href={navItem.url} key={navItem.id}>
                  <li className='ml-10 text-sm uppercase hover:border-b'>{navItem.name}</li>
                </Link>
              ))
            }
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-5 ease-in duration-500' : 'fixed left-[-100%] top-0 p-5 ease-in duration-500'}>
          <div>
            <div className='flex justify-between items-center w-full'>
              <Image src='/../public/assets/skills/firebase.png' width='50' height='20' />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4 text-base'>Let&apos;s build something legendary together.</p>
            </div>
          </div>

          <div className='py-4 flex flex-col text-left'>
            <ul >
              {
                navItems.map((navItem) => (
                  <Link href={navItem.url} key={navItem.id}>
                    <li className='text-sm uppercase py-3'>{navItem.name}</li>
                  </Link>
                ))
              }
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&apos;s connect</p>
              <div className='flex justify-between items-center my-4 w-full sm:w-[80%]'>
                {
                  socials.map((social) => (
                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300' key={social.id}>
                      {social.icon}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Navbar;