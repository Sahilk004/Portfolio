import React from 'react'

const Footer = () => {
  return (
    <section className='c-space mt-7 pt-7 pb-3 border-t border-black-300 flex flex-wrap gap-5 items-center justify-between'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className='flex gap-3 '>
            <div className='social-icon'>
                <img src="/assets/github.svg" className='w-1/2 h-1/2' alt="" />
            </div>
        
       
            <div className='social-icon'>
                <img src="/assets/twitter.svg" className='w-1/2 h-1/2' alt="" />
            </div>
    
       
            <div className='social-icon'>
                <img src="/assets/instagram.svg" className='w-1/2 h-1/2' alt="" />
            </div>
            </div>
            <p className='text-white-500'>© 2024 Sahil. All rights reserved</p>
    </section>
  )
}

export default Footer