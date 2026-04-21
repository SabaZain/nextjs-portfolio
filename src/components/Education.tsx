import React from 'react'

const Education = () => {
  return (
    <div id='education&skills' className='container py-16 md:py-24 px-4'>
      <div className='grid md:grid-cols-2 gap-6 md:gap-8 items-stretch'>
        <div className='glass-card group hover:border-blue-500/30 transition-all !p-6 md:!p-8' data-aos="fade-right">
            <h2 className='text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3'>
              <span className='w-2 h-8 bg-blue-600 rounded-full'></span>
              Education
            </h2>
            <ul className='space-y-6'>
                <li className='relative pl-6 border-l border-zinc-800'>
                  <div className='absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]'></div>
                  <p className='text-xs md:text-sm text-blue-400 font-bold'>2012</p>
                  <p className='text-base md:text-lg font-bold text-white'>MBA (Finance)</p>
                  <p className='text-zinc-400 text-sm md:text-base'>Mohammad Ali Jinnah University</p>
                </li>
                <li className='relative pl-6 border-l border-zinc-800'>
                  <div className='absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-zinc-700 rounded-full'></div>
                  <p className='text-xs md:text-sm text-zinc-500 font-bold'>2009</p>
                  <p className='text-base md:text-lg font-bold text-white'>B.COM</p>
                  <p className='text-zinc-400 text-sm md:text-base'>University Of Karachi</p>
                </li>
                <li className='relative pl-6 border-l border-zinc-800'>
                  <div className='absolute -left-[5px] top-1.5 w-[9px] h-[9px] bg-zinc-700 rounded-full'></div>
                  <p className='text-xs md:text-sm text-zinc-500 font-bold'>2006</p>
                  <p className='text-base md:text-lg font-bold text-white'>HSC</p>
                  <p className='text-zinc-400 text-sm md:text-base'>Nazareth Girls College Hyderabad</p>
                </li>
            </ul>
        </div>

        <div className='glass-card group hover:border-purple-500/30 transition-all !p-6 md:!p-8' data-aos="fade-left">
                <h2 className='text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3'>
                  <span className='w-2 h-8 bg-purple-600 rounded-full'></span>
                  Core Expertise
                </h2>
                <div className='space-y-6'>
                  <div className='group/item'>
                    <h4 className='text-base md:text-lg font-bold text-white group-hover/item:text-purple-400 transition-colors'>TypeScript & JavaScript</h4>
                    <p className='text-zinc-400 text-xs md:text-sm leading-relaxed mt-1'>Skilled in building scalable and maintainable web applications with type safety.</p>
                  </div>
                  <div className='group/item'>
                    <h4 className='text-base md:text-lg font-bold text-white group-hover/item:text-purple-400 transition-colors'>Next.js & React</h4>
                    <p className='text-zinc-400 text-xs md:text-sm leading-relaxed mt-1'>Creating dynamic, SEO-friendly applications with optimized performance.</p>
                  </div>
                  <div className='group/item'>
                    <h4 className='text-base md:text-lg font-bold text-white group-hover/item:text-purple-400 transition-colors'>Tailwind CSS & UI Design</h4>
                    <p className='text-zinc-400 text-xs md:text-sm leading-relaxed mt-1'>Designing responsive, visually appealing interfaces with a focus on user experience.</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education
