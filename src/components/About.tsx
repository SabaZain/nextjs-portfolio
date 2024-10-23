import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='container pt-20'>
      <h2 className='text-center text-4xl md:text-5xl text-red-700 font-semibold p-4' data-aos="zoom-in-up">About Me</h2>
      <div className=' flex flex-col md:flex-row bg-orange-400 p-6 border rounded-md' data-aos="zoom-in-up">
        <Image src="/aboutmepic.jpg" alt="about me" width={450} height={450}/>
        <p className='text-black text-center md:text-left font-serif font-semibold p-4'>
      I have done MBA(Finance) from Mohammad Ali Jinnah University.<br/> Currently I have been selected for the Course - Cloud Applied Generative Artificial Intelligence (Governor Sindh Initiative), learning the fundamentals and passionate about building applications.<br/> Along with this running my own online business.
      <br/>  Looking forward for good opportunity to enhance my career and professional development.
      </p>
        </div>
      
    </div>
  )
}

export default About
