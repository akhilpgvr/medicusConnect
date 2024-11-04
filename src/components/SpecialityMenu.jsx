import React from 'react'
import {specialityData} from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    
    <div>
      {/* Select By Specialization */}
      <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
        <h1 className='text-3x1 font-medium'>Select the Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>please select your speciality to shortlist the doctors list.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
          {
            specialityData.map((item, index)=>(
              <Link onClick={()=> scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500s' key={index} to={`/doctors/${item.speciality}`}>
                <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
                <p>{item.speciality}</p>
              </Link>
            ))
          }
        </div>
      </div>

      {/* Select by Symptom */}
      <div>
        <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
          <h1 className='text-3x1 font-medium'>Select by Symptoms</h1>
          <p className='sm:w-1/3 text-center text-sm'>please share your symptoms to shortlist the doctors list.</p>
        </div>

        <div class="w-full mb-4 border border-gray-300 rounded-lg bg-green-100 dark:bg-green-900">
          <div class="px-4 py-2 bg-white rounded-t-lg">
            <textarea id="comment" rows="4" class="w-full px-0 text-sm text-black bg-white border border-gray-300 rounded-lg focus:ring-0 placeholder-gray-500" placeholder="Write your symptoms here..." required></textarea>
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t border-gray-300">
            <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-green-200 hover:bg-green-700">
              Search
            </button>
          </div>
        </div>


      </div>
      
    </div>
  )
}

export default SpecialityMenu
