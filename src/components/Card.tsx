import React from 'react'
import Image from 'next/image';
import Link from "next/link"

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
    link: string;
}

const Card: React.FC<propsType> = ({ title, desc, img, tags, link}) => {
  return (
    <div className='group glass-card overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10' data-aos="zoom-in-up">
        <div className='relative aspect-video overflow-hidden rounded-xl'>
            <Image 
              className='object-cover transition-transform duration-700 group-hover:scale-110'
              src={img} 
              fill
              alt={title}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4'>
               <Link href={link} className='w-full'>
                 <button className='w-full bg-white text-black py-2 rounded-lg font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                   View Live Demo
                 </button>
               </Link>
            </div>
        </div>

        <div className='pt-6 space-y-3'>
            <h3 className='text-2xl font-bold text-white group-hover:text-blue-400 transition-colors'>{title}</h3>
            <p className='text-zinc-400 text-sm leading-relaxed line-clamp-2'>{desc}</p>
            <div className='flex flex-wrap gap-1 pt-2'>
              {tags.map((el) => (
                <span className='tags !m-0' key={el}>
                  {el}
                </span>))}
            </div>
        </div>
    </div>
  )
}

export default Card
