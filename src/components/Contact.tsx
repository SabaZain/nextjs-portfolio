import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <div id='contact' className='container pt-20 sm:pt-32 px-4'>
      <div className='space-y-6 sm:space-y-8 text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl text-red-700 font-semibold' data-aos="zoom-in-up">Get in Touch</h2>
        <p className='text-orange-600 text-lg sm:text-xl md:text-[22px] px-4' data-aos="zoom-in-up">Feel free to reach out to me via email, phone, or WhatsApp.</p>
        
        <div className='flex flex-col gap-4 sm:gap-6 items-center'>
          <div className='flex gap-3 items-center text-base sm:text-lg' data-aos="zoom-in-up">
            <CiMail size={25} color='green' /> saba_punjwani@yahoo.com
          </div>
          <div className='flex gap-3 items-center text-base sm:text-lg' data-aos="zoom-in-up">
            <FaPhoneAlt size={25} color='blue' /> 0334-2929247
          </div>
          <a 
            href="https://wa.me/923342929247" 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex gap-3 items-center text-base sm:text-lg text-green-600 hover:text-green-500 transition'
            data-aos="zoom-in-up"
          >
            <FaWhatsapp size={25} color='#25D366' /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
