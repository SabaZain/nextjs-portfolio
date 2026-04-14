import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className='container pt-3 sm:pt-5 mx-auto'>
        <div className='flex justify-between items-center'>
       <div className='pl-1' data-aos="zoom-in-up"> <Image src="/logo.png" alt="logo" width={70} height={70} className='w-[60px] sm:w-[80px] h-auto'/></div>
            <div className='text-xl sm:text-2xl md:text-3xl font-medium text-blue-700'>Saba Ali Zain</div>
            <div className='md:hidden cursor-pointer' onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
          {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>

            <ul className='gap-5 lg:gap-14 hidden md:flex lg:flex'>
                <li className='menuLink hover:text-blue-900'><a href='#home'>Home</a></li>
                <li className='menuLink hover:text-blue-900'><a href='#about'>About</a></li>
                <li className='menuLink hover:text-blue-900'><a href='#education&skills'>Education</a></li>
                <li className='menuLink hover:text-blue-900'><a href='#skills'>Skills</a></li>
                <li className='menuLink hover:text-blue-900 relative group'>
                  <a href='#recent-projects'>Projects</a>
                  <ul className='absolute hidden group-hover:block bg-orange-400 rounded-md mt-2 p-2 w-40'>
                    <li className='hover:text-blue-900 py-1'><a href='#recent-projects'>Recent Projects</a></li>
                    <li className='hover:text-blue-900 py-1'><a href='#projects'>My Projects</a></li>
                  </ul>
                </li>
                <li className='menuLink hover:text-blue-900'><a href='#contact'>Contact</a></li>
            </ul>
            </div>

        {isOpen && (
        <div className='md:hidden bg-orange-400 p-4 rounded-md mt-2'>
          <ul className='flex flex-col gap-4'>
          <li className='menuLink hover:text-blue-900'><a href='#home' onClick={() => setIsOpen(false)}>Home</a></li>
            <li className='menuLink hover:text-blue-900'><a href='#about' onClick={() => setIsOpen(false)}>About</a></li>
            <li className='menuLink hover:text-blue-900'><a href='#education&skills' onClick={() => setIsOpen(false)}>Education</a></li>
            <li className='menuLink hover:text-blue-900'><a href='#skills' onClick={() => setIsOpen(false)}>Skills</a></li>
            <li className='menuLink hover:text-blue-900'>
              <a href='#recent-projects' onClick={() => setIsOpen(false)}>Recent Projects</a>
            </li>
            <li className='menuLink hover:text-blue-900'>
              <a href='#projects' onClick={() => setIsOpen(false)}>My Projects</a>
            </li>
            <li className='menuLink hover:text-blue-900'><a href='#contact' onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;
