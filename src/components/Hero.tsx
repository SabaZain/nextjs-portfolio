import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/portfoliopic.jpg)] bg-cover'
    style={{backgroundSize: "32%" , backgroundPosition: "left 100px top 100px"}}
    >
     <Navbar /> 
     <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[30px] sm:text-[70px] text-green-600 font-semibold leading-tight flex justify-center items-center'>
            <div className='align items-end'>
                <p data-aos="zoom-in-up">Hello,</p>
                <p data-aos="zoom-in-up">I am</p>
                <p data-aos="zoom-in-up">Saba Ali Zain</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Hero
