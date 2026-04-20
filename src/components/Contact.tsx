import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='container py-24 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col items-center mb-16 text-center' data-aos="fade-up">
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>Get In Touch</h2>
          <div className='h-1.5 w-16 bg-blue-600 rounded-full'></div>
          <p className='text-zinc-500 mt-6 max-w-lg'>
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          <div className='glass-card p-8 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all' data-aos="fade-up" data-aos-delay="100">
            <div className='w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform'>
              <CiMail size={32} />
            </div>
            <h3 className='text-lg font-bold text-white mb-2'>Email Me</h3>
            <p className='text-zinc-500 text-sm mb-4'>Always happy to help.</p>
            <a href="mailto:saba_punjwani@yahoo.com" className='text-blue-400 font-medium hover:underline text-sm truncate w-full'>
              saba_punjwani@yahoo.com
            </a>
          </div>

          <div className='glass-card p-8 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all' data-aos="fade-up" data-aos-delay="200">
            <div className='w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform'>
              <FaPhoneAlt size={24} />
            </div>
            <h3 className='text-lg font-bold text-white mb-2'>Call Me</h3>
            <p className='text-zinc-500 text-sm mb-4'>Mon-Fri from 9am to 6pm.</p>
            <a href="tel:03342929247" className='text-blue-400 font-medium hover:underline text-sm'>
              0334-2929247
            </a>
          </div>

          <div className='glass-card p-8 flex flex-col items-center text-center group hover:border-green-500/30 transition-all' data-aos="fade-up" data-aos-delay="300">
            <div className='w-14 h-14 bg-green-600/10 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform'>
              <FaWhatsapp size={32} />
            </div>
            <h3 className='text-lg font-bold text-white mb-2'>WhatsApp</h3>
            <p className='text-zinc-500 text-sm mb-4'>For quick responses.</p>
            <a href="https://wa.me/923342929247" target="_blank" rel="noopener noreferrer" className='text-green-500 font-medium hover:underline text-sm'>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
