import React from 'react'

const Education = () => {
  return (
    <div id='education&skills' className='container pt-32 p-4'>
     <div className='grid md:grid-cols-2 gap-20 items-center p-3'>
        <div className='border rounded-md p-4 bg-emerald-400'>
            <h2 className='text-xl text-red-700 font-semibold pb-2 md:text-5xl' data-aos="zoom-in-up">My Education</h2>
            <ul className='p-6 list-disc text-black font-semibold font-serif' data-aos="zoom-in-up">
                <li>MBA(Finance) - 2012 Mohammad Ali Jinnah University</li>
                <li>BCOM - 2009 University Of Karachi</li>
                <li>HSC - 2006 Nazareth Girls College Hyderabad</li>
                <li>SSC - 2004 County Cambridge School Hyderabad</li>
            </ul>
            
        </div>
        <div className='border rounded-md p-4 bg-yellow-200'>
                <h2 className='text-xl text-red-700 font-semibold pb-2 md:text-5xl' data-aos="zoom-in-up">My Skills</h2>
                <ul className='p-2 list-disc font-semibold font-serif' data-aos="zoom-in-up">
                <li className='text-green-900'>TypeScript - Skilled in TypeScript for building scalable and maintainable web applications.</li>
                <li className='text-purple-900'>HTML - Skilled in writing semantic and accessible HTML, ensuring optimal SEO and user experience.</li>
                <li className='text-yellow-900'>CSS - Skilled in using CSS to create responsive, visually appealing web designs with a focus on layout and styling.</li>
                <li className='text-blue-900'>Next.Js - Skilled in creating dynamic, SEO-friendly pages, managing API routes, and optimizing applications</li>
            </ul>
            </div>
        </div> 
    </div>
  )
}

export default Education
