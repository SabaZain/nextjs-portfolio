import React from 'react'
import Image from 'next/image';
import Link from "next/link"

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    link: string;
    problemSolved?: string;
}

const Card: React.FC<propsType> = ({ title, desc, img, tags, link, problemSolved}) => {
  return (
    <div className='group glass-card overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10' data-aos="zoom-in-up">
        <div className='relative aspect-video overflow-hidden rounded-xl'>
            <Image 
              className='object-cover transition-transform duration-700 group-hover:scale-110'
              src={img} 
              fill
              alt={title}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4'>
               <Link href={link} className='w-full'>
                 <button className='w-full bg-blue-600 text-white py-2.5 rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-blue-500 shadow-lg'>
                   View Live Demo
                 </button>
               </Link>
            </div>
        </div>

        <div className='pt-6 space-y-3'>
            <div className='flex flex-wrap gap-1'>
              {tags.map((el) => (
                <span className='tags !m-0 !py-0.5 !px-2 !text-[9px]' key={el}>
                  {el}
                </span>))}
            </div>
            <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>{title}</h3>
            <p className='text-zinc-400 text-sm leading-relaxed'>{desc}</p>
            {problemSolved && (
              <div className='pt-2 border-t border-zinc-800/50'>
                <p className='text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-1'>Problem Solved</p>
                <p className='text-zinc-500 text-xs italic leading-snug'>{problemSolved}</p>
              </div>
            )}
        </div>
    </div>
  )
}

export default Card
