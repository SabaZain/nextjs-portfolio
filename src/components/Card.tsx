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
    <div className='border border-x-purple-700 m-1 w-[300px] sm:w-[350px]' data-aos="zoom-in-up">
        <div>
            <Image className='w-[300px] sm:w-[350px] h-auto'
            src={img} 
            width={350}
            height={350}
            alt={title}
            />
        </div>

        <div className='p-4 space-y-4'>
            <div className='text-4xl text-red-800 font-semibold'>{title}</div>
            <div className='text-amber-700'>{desc}</div>
            <div>
              {tags.map((el) => (
                <div className='tags' key={el}>
                  {el}
                </div>))}
            </div>
            <Link href={link}>
            <button className='text-xl text-blue-500 p-3 font-serif'>
              View Project
            </button>
            </Link>
        </div>
      
    </div>
  )
}

export default Card
