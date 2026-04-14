import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      {/* Mobile view - image as foreground element, text below */}
      <div id="hero" className='sm:hidden min-h-screen bg-gray-900'>
       <Navbar />
       <div className='container flex flex-col items-center min-h-screen pt-4'>
          {/* Profile Image */}
          <div className='w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-blue-400 mx-auto mb-6' data-aos="zoom-in-up">
            <Image
              src="/portfoliopic.jpg"
              alt="Saba Ali Zain"
              width={200}
              height={200}
              className='w-full h-full object-cover'
            />
          </div>
          
          {/* Text Content */}
          <div className='text-white font-semibold flex flex-col items-center gap-3 px-3 text-center pb-8'>
              <div className='space-y-1' data-aos="zoom-in-up">
                  <p className='text-xl'>Hi, I'm</p>
                  <p className='text-3xl'>Saba Ali Zain</p>
                  <p className='text-xl text-blue-400'>Web Developer</p>
              </div>
              <p className='text-base text-gray-300' data-aos="zoom-in-up">
                  I craft clean, user-friendly websites using modern technologies.
              </p>
              <p className='text-sm text-purple-400' data-aos="zoom-in-up">
                  Next.js | React | TypeScript | Tailwind CSS
              </p>
              <div className='flex gap-3 flex-wrap justify-center' data-aos="zoom-in-up">
                  <a href='#recent-projects' className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm transition'>
                      See My Work
                  </a>
                  <a href='#contact' className='border-2 border-white hover:bg-white hover:text-gray-900 text-white px-5 py-2.5 rounded-md text-sm transition'>
                      Get in Touch
                  </a>
              </div>
          </div>
       </div>
      </div>

      {/* Desktop view */}
      <div id="hero" className='hidden sm:block min-h-screen bg-no-repeat bg-[url(/portfoliopic.jpg)] bg-cover'
      style={{
        backgroundSize: "25%",
        backgroundPosition: "left 15% center"
      }}
      >
       <Navbar />
       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
          <div className='hidden lg:block'></div>
          <div className='text-white font-semibold flex flex-col justify-center gap-4 sm:gap-6 px-3 sm:px-0'>
              <div className='space-y-1 sm:space-y-2' data-aos="zoom-in-up">
                  <p className='text-xl sm:text-2xl md:text-3xl'>Hi, I'm</p>
                  <p className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>Saba Ali Zain</p>
                  <p className='text-xl sm:text-2xl md:text-3xl text-blue-400'>Web Developer</p>
              </div>
              <p className='text-base sm:text-lg md:text-xl text-gray-200 max-w-lg' data-aos="zoom-in-up">
                  I craft clean, user-friendly websites using modern technologies.
              </p>
              <p className='text-sm sm:text-base md:text-lg text-purple-400' data-aos="zoom-in-up">
                  Next.js | React | TypeScript | Tailwind CSS
              </p>
              <div className='flex gap-3 sm:gap-4 flex-wrap' data-aos="zoom-in-up">
                  <a href='#recent-projects' className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-sm sm:text-lg transition'>
                      See My Work
                  </a>
                  <a href='#contact' className='border-2 border-white hover:bg-white hover:text-gray-900 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-sm sm:text-lg transition'>
                      Get in Touch
                  </a>
              </div>
          </div>
       </div>
      </div>
    </>
  )
}

export default Hero
