import React from 'react'
import { IoMenu } from "react-icons/io5";
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <div className='container pt-5 ml-1'>
        <div className='flex justify-between items-center'>
       <div className='pl-1' data-aos="zoom-in-up"> <Image src="/logo.png" alt="logo" width={80} height={80}/></div>
            <div className='text-3xl font-medium text-blue-700'>Saba Ali Zain</div>
            <div className='md:hidden cursor-pointer' onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
          <IoMenu size={30} />
        </div>
        
            <ul className='gap-5 lg:gap-14  hidden md:flex'>
                <li className='menuLink hover:text-blue-900'><a href='#home'>Home</a></li>
                <li className='menuLink hover:text-blue-900'><a href='#about'>About</a></li>
                <li className='menuLink hover:text-blue-900'><a href='#education&skills'>Education & Skills</a></li>
                <li className='menuLink hover:text-blue-900'><a href='#projects'>Projects</a></li>
                <li className='menuLink hover:text-blue-900'><a href='#contact'>Contact</a></li>
            </ul>
            </div>
        
        {isOpen && (
        <div className='md:hidden bg-orange-400 p-4 rounded-md mt-2'>
          <ul className='flex flex-col gap-4'>
          <li className='menuLink hover:text-blue-900'><a href='#home' onClick={() => setIsOpen(false)}>Home</a></li>
            <li className='menuLink hover:text-blue-900'><a href='#about' onClick={() => setIsOpen(false)}>About</a></li>
            <li className='menuLink hover:text-blue-900'><a href='#education&skills' onClick={() => setIsOpen(false)}>Education & Skills</a></li>
            <li className='menuLink hover:text-blue-900'><a href='#projects' onClick={() => setIsOpen(false)}>Projects</a></li>
            <li className='menuLink hover:text-blue-900'><a href='#contact' onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
