import React from 'react'

interface propsType {
    title: string;
}

const Heading: React.FC<propsType> = ({title}) => {
  return (
    <div className='flex flex-col items-center mb-16 text-center' data-aos="fade-up">
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>{title}</h2>
        <div className='h-1.5 w-16 bg-blue-600 rounded-full'></div>
    </div>
  )
}

export default Heading
