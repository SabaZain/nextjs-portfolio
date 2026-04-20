import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'TypeScript', level: 75, color: 'bg-blue-500' },
    { name: 'Next.js', level: 80, color: 'bg-white' },
    { name: 'React', level: 70, color: 'bg-cyan-400' },
    { name: 'HTML', level: 90, color: 'bg-orange-500' },
    { name: 'CSS', level: 85, color: 'bg-purple-500' },
    { name: 'Tailwind CSS', level: 80, color: 'bg-teal-400' },
  ]

  return (
    <div id='skills' className='container py-24 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col items-center mb-16 text-center' data-aos="fade-up">
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>Technical Arsenal</h2>
          <div className='h-1 w-20 bg-blue-600 rounded-full'></div>
          <p className='text-zinc-500 mt-6 max-w-lg'>
            A collection of technologies I use to bring ideas to life, constantly learning and expanding my toolkit.
          </p>
        </div>
        
        <div className='grid gap-8 sm:grid-cols-2' data-aos="fade-up">
          {skills.map((skill) => (
            <div key={skill.name} className='glass-card !p-6 hover:border-zinc-700 transition-colors group'>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-white font-bold tracking-wide group-hover:text-blue-400 transition-colors'>{skill.name}</span>
                <span className='text-zinc-500 text-sm font-mono'>{skill.level}%</span>
              </div>
              <div className='w-full bg-zinc-800/50 rounded-full h-1.5 overflow-hidden'>
                <div
                  className={`${skill.color} h-full rounded-full transition-all duration-1000 shadow-[0_0_12px_-2px_rgba(255,255,255,0.2)]`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
