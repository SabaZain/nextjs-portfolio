import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div id="home" className='relative overflow-hidden'>
      <Navbar />
      
      {/* Background decoration */}
      <div className='absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full' />
      <div className='absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full' />

      {/* Mobile view */}
      <div className='sm:hidden min-h-screen pt-24 pb-12 flex flex-col items-center justify-center px-4'>
        <div className='w-48 h-48 rounded-full overflow-hidden border-2 border-zinc-800 p-2 mb-8 shadow-2xl bg-zinc-900' data-aos="zoom-in">
          <Image
            src="/portfoliopic.jpg"
            alt="Saba Ali Zain"
            width={200}
            height={200}
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        
        <div className='text-center space-y-4'>
            <div className='space-y-1' data-aos="fade-up">
                <p className='text-blue-400 font-medium tracking-wide uppercase text-xs'>Available for opportunities</p>
                <h1 className='text-4xl font-bold tracking-tight text-white'>Saba Ali Zain</h1>
                <p className='text-xl text-zinc-400 font-medium'>Web Developer</p>
            </div>
            <p className='text-zinc-500 max-w-xs mx-auto text-sm leading-relaxed' data-aos="fade-up" data-aos-delay="100">
                I craft clean, user-friendly websites using modern technologies like Next.js and Tailwind CSS.
            </p>
            <div className='flex flex-col gap-3 pt-4' data-aos="fade-up" data-aos-delay="200">
                <a href='#recent-projects' className='btn-primary text-center'>See My Work</a>
                <a href='#contact' className='btn-secondary text-center'>Get in Touch</a>
            </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className='hidden sm:flex min-h-screen items-center pt-32'>
        <div className='container mx-auto grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-8 max-w-2xl'>
            <div className='space-y-4' data-aos="fade-right">
                <p className='text-blue-400 font-semibold tracking-widest uppercase text-sm'>Professional Portfolio</p>
                <h1 className='text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]'>
                  Building Digital <br />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                    Experiences.
                  </span>
                </h1>
                <p className='text-2xl text-zinc-400 font-medium'>Saba Ali Zain — Web Developer</p>
            </div>
            
            <p className='text-lg text-zinc-500 leading-relaxed' data-aos="fade-right" data-aos-delay="100">
                Focused on creating high-performance, accessible, and beautiful web applications 
                using React, Next.js, and TypeScript.
            </p>
            
            <div className='flex gap-4' data-aos="fade-right" data-aos-delay="200">
                <a href='#recent-projects' className='btn-primary'>View Projects</a>
                <a href='#contact' className='btn-secondary'>Contact Me</a>
            </div>
          </div>

          <div className='hidden lg:block relative' data-aos="fade-left">
            <div className='relative w-[450px] h-[450px] mx-auto'>
              <div className='absolute inset-0 bg-blue-600/20 rounded-3xl rotate-6 animate-pulse' />
              <div className='absolute inset-0 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl'>
                <Image
                  src="/portfoliopic.jpg"
                  alt="Saba Ali Zain"
                  fill
                  className='object-cover grayscale hover:grayscale-0 transition-all duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
