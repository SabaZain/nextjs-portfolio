import React from 'react'
import Image from 'next/image'
import Heading from './Heading'

const About = () => {
  return (
    <div id='about' className='container py-16 md:py-24 px-4'>
      <Heading title='About Me' />
      <div className='glass-card flex flex-col md:flex-row items-center gap-8 md:gap-12' data-aos="fade-up">
        <div className='w-full max-w-[280px] md:w-1/3 md:max-w-none relative group'>
          <div className='absolute -inset-2 bg-blue-600/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity'></div>
          <Image 
            className='relative rounded-2xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-500 border border-zinc-800 w-full'
            src="/aboutmepic.jpg" 
            alt="about me" 
            width={400} 
            height={400}
          />
        </div>
        <div className='w-full md:w-2/3 space-y-4 md:space-y-6 text-center md:text-left'>
          <p className='text-zinc-300 text-base md:text-lg leading-relaxed'>
            I am a passionate frontend developer dedicated to crafting clean, functional, and visually engaging web experiences. 
            My journey into web development began with a fascination for how code can transform ideas into interactive reality. 
            Currently, I specialize in building responsive websites using a modern tech stack that includes 
            <span className='text-blue-400 font-bold'> HTML, CSS, JavaScript, and Next.js</span>.
          </p>
          <p className='text-zinc-400 text-base md:text-lg leading-relaxed'>
            I believe that great UI design is just as important as robust code. I strive to bridge the gap between aesthetics 
            and performance, ensuring that every project I work on is not only beautiful but also intuitive for users. 
            As a developer with a growth-oriented mindset, I am constantly exploring new tools and frameworks to stay at 
            the forefront of the ever-evolving web ecosystem.
          </p>
          <div className='pt-4 flex justify-center md:justify-start'>
            <a href='#contact' className='btn-primary'>Let&apos;s Work Together</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
