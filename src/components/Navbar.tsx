import React from 'react'
import { IoMenu, IoClose } from "react-icons/io5";
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-lg border-b border-white/5'>
      <div className='container mx-auto px-4 sm:px-6 py-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3' data-aos="zoom-in">
            <Image src="/logo.png" alt="logo" width={65} height={65} className='w-[60px] sm:w-[65px] h-auto rounded-lg shadow-lg'/>
            <div className='text-xl sm:text-2xl font-bold tracking-tighter text-white hidden sm:block'>Saba Ali Zain</div>
          </div>

          <div className='md:hidden cursor-pointer text-white hover:text-blue-400 transition-colors' onClick={toggleMenu}>
            {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </div>

          <ul className='hidden md:flex items-center gap-8 text-sm font-medium'>
            <li><a href='#home' className='menuLink'>Home</a></li>
            <li><a href='#about' className='menuLink'>About</a></li>
            <li><a href='#education&skills' className='menuLink'>Education</a></li>
            <li><a href='#skills' className='menuLink'>Skills</a></li>
            <li className='relative group cursor-pointer'>
              <div className='flex items-center gap-1 menuLink'>
                Projects
              </div>
              <ul className='absolute left-0 top-full pt-4 hidden group-hover:block w-48'>
                <div className='bg-zinc-900 border border-zinc-800 rounded-xl p-2 shadow-2xl'>
                  <li><a href='#recent-projects' className='block px-4 py-2 hover:bg-zinc-800 hover:text-blue-400 rounded-lg transition-all'>Recent Projects</a></li>
                  <li><a href='#projects' className='block px-4 py-2 hover:bg-zinc-800 hover:text-blue-400 rounded-lg transition-all'>My Projects</a></li>
                </div>
              </ul>
            </li>
            <li><a href='#contact' className='menuLink'>Contact</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 p-6 animate-in slide-in-from-top duration-300'>
            <ul className='flex flex-col gap-6 text-lg font-medium'>
              <li><a href='#home' className='menuLink block' onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href='#about' className='menuLink block' onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href='#education&skills' className='menuLink block' onClick={() => setIsOpen(false)}>Education</a></li>
              <li><a href='#skills' className='menuLink block' onClick={() => setIsOpen(false)}>Skills</a></li>
              <li><a href='#recent-projects' className='menuLink block' onClick={() => setIsOpen(false)}>Recent Projects</a></li>
              <li><a href='#projects' className='menuLink block' onClick={() => setIsOpen(false)}>My Projects</a></li>
              <li><a href='#contact' className='menuLink block' onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
