import React from 'react'
import Heading from './Heading'

const Skills = () => {
  const skills = [
    { name: 'TypeScript', level: 75, color: 'bg-blue-600' },
    { name: 'Next.js', level: 80, color: 'bg-gray-800' },
    { name: 'React', level: 70, color: 'bg-cyan-500' },
    { name: 'HTML', level: 90, color: 'bg-orange-600' },
    { name: 'CSS', level: 85, color: 'bg-purple-600' },
    { name: 'Tailwind CSS', level: 80, color: 'bg-teal-500' },
  ]

  return (
    <div id='skills' className='container pt-20 sm:pt-32 px-4'>
      <Heading title='My Skills' />
      <div className='grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto' data-aos="zoom-in-up">
        {skills.map((skill) => (
          <div key={skill.name} className='space-y-2'>
            <div className='flex justify-between'>
              <span className='text-white font-semibold'>{skill.name}</span>
              <span className='text-gray-400'>{skill.level}%</span>
            </div>
            <div className='w-full bg-gray-700 rounded-full h-3'>
              <div
                className={`${skill.color} h-3 rounded-full transition-all duration-500`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
