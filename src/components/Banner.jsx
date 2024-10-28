import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className='flex bg-secondary rounded-1g px-6 sm:px-10 md:px-14 lg:px-12 my-20 md: mx-10'>
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 text-x1 sm:text-2xl md:text-3x1 lg:text-5x1 font-semibold text-charcoal Black'>
            <p>Book Appointment</p>
            <p className='mt-4'>With trusted doctors</p>
        </div>
        <div className='md:block md:w-1/2 lg:w-[370px] relative'>
            <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='w-full absolute bottom-14 right-0 bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Create Account</button>
        </div>
      
    </div>
  )
}

export default Banner
