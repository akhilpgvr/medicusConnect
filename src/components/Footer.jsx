import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>

        {/* left section */}
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <img className='mb-1 w-40' src={assets.logo} alt="" />
        <p className='w-full md:w-/3 text-gray-600 leading-6'>Experience seamless healthcare with our AI-powered doctor booking app—predict consultation times, minimize waiting, and get personalized care at your fingertips.</p>
      </div>
      <div>

      </div>
      {/* right section */}
      <div>
        <p className='text-x1 font-medium mb-5'>Get in touch</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+9072350954</li>
            <li>akhilpgvr@gmail.com</li>
        </ul>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ MedicusConnect - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
