import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-4xl md:text-5xl text-red-700 font-semibold' data-aos="zoom-in-up">Get in contact</h2>
            <p className='text-orange-600 text-[22px] pt-2' data-aos="zoom-in-up">Feel free to send me a message, give me a call, or reach out via this form.</p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <CiMail  size={25} color='green'/> saba_punjwani@yahoo.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            < FaPhoneAlt size={25} color='blue'/> 0334-2929247
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type="text"
                className='h-[40px bg-transparent border border-slate-500'
                id='name'/>
            </div>

            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor='email'>Email</label>
                <input type="text"
                className='h-[40px bg-transparent border border-slate-500'
                id='email'/>
            </div>

            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor='msg'>Message</label>
                <textarea 
                className='bg-transparent border border-slate-500'
                id='msg' rows={6}>
                </textarea>
            </div>
            <button className='bg-green-800 text-xl p-2 border rounded-sm' data-aos="zoom-in-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact