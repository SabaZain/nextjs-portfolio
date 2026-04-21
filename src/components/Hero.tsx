import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import { SiHtml5, SiCss3, SiJavascript, SiNextdotjs } from 'react-icons/si'

const Hero = () => {
  const techStack = [
    { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  ]

  return (
    <div id="home" className='relative overflow-hidden'>
      <Navbar />
      
      {/* Background decoration */}
      <div className='absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full' />
      <div className='absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full' />

      {/* Mobile view */}
      <div className='sm:hidden min-h-screen pt-20 pb-12 flex flex-col items-center px-4'>
        <div className='w-40 h-40 rounded-full overflow-hidden border-2 border-zinc-800 p-1.5 mb-6 shadow-2xl bg-zinc-900' data-aos="zoom-in">
          <Image
            src="/portfoliopic.jpg"
            alt="Saba Ali Zain"
            width={160}
            height={160}
            className='w-full h-full object-cover rounded-full'
          />
        </div>
        
        <div className='text-center space-y-4'>
            <div className='space-y-1' data-aos="fade-up">
                <p className='text-blue-400 font-medium tracking-wide uppercase text-[10px]'>Available for opportunities</p>
                <h1 className='text-xl font-bold tracking-tight text-white leading-tight'>
                  Frontend Developer Crafting <br />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                    Modern Web Experiences
                  </span>
                </h1>
                <p className='text-zinc-400 font-medium text-sm'>Saba Ali Zain</p>
            </div>
            <p className='text-zinc-500 max-w-xs mx-auto text-sm leading-relaxed' data-aos="fade-up" data-aos-delay="100">
                I build responsive, high-performance web applications with a focus on clean code and exceptional user experience.
            </p>
            <div className='flex flex-col gap-3 pt-4' data-aos="fade-up" data-aos-delay="200">
                <a href='#recent-projects' className='btn-primary'>View Projects</a>
                <a href='#contact' className='btn-secondary'>Contact Me</a>
            </div>

            {/* Tech Stack - Mobile */}
            <div className='pt-12' data-aos="fade-up" data-aos-delay="300">
              <p className='text-zinc-500 text-xs font-semibold uppercase tracking-widest mb-4'>Technologies I Use</p>
              <div className='flex justify-center gap-6'>
                {techStack.map((tech) => (
                  <div key={tech.name} className='text-2xl opacity-70 hover:opacity-100 transition-opacity'>
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className='hidden sm:flex min-h-screen items-center pt-24'>
        <div className='container mx-auto grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 max-w-2xl'>
            <div className='space-y-4' data-aos="fade-right">
                <p className='text-blue-400 font-semibold tracking-widest uppercase text-xs'>Professional Portfolio</p>
                <h1 className='text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[1.1]'>
                  Building Digital <br />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
                    Experiences.
                  </span>
                </h1>
                <p className='text-xl text-zinc-400 font-medium'>Saba Ali Zain — Web Developer</p>
            </div>
            
            <p className='text-lg text-zinc-500 leading-relaxed' data-aos="fade-right" data-aos-delay="100">
                I build responsive, high-performance web applications with a focus on clean code and exceptional user experience, 
                turning complex ideas into elegant digital solutions.
            </p>
            
            <div className='flex gap-4' data-aos="fade-right" data-aos-delay="200">
                <a href='#recent-projects' className='btn-primary'>View Projects</a>
                <a href='#contact' className='btn-secondary'>Contact Me</a>
            </div>

            {/* Tech Stack - Desktop */}
            <div className='pt-12' data-aos="fade-right" data-aos-delay="300">
              <p className='text-zinc-500 text-sm font-semibold uppercase tracking-widest mb-6'>Technologies I Use</p>
              <div className='flex gap-8'>
                {techStack.map((tech) => (
                  <div key={tech.name} className='flex items-center gap-2 group'>
                    <div className='text-3xl opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110'>
                      {tech.icon}
                    </div>
                    <span className='text-zinc-600 group-hover:text-zinc-400 font-medium transition-colors'>{tech.name}</span>
                  </div>
                ))}
              </div>
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

