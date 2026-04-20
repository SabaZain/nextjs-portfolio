import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-32 border-t border-zinc-900 bg-black py-12'>
      <div className='container mx-auto px-4 text-center'>
        <p className='text-zinc-500 text-sm tracking-wide'>
          &copy; {new Date().getFullYear()} Saba Ali Zain. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
