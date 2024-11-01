import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import doc_profile from '../assets/doc_profile.png';

const Doctors = () => {

  const {speciality} = useParams()

  const[filterDoc, setFilterDoc] = useState([])

  const{doctors} = useContext(AppContext)
  
  const navigate = useNavigate()

  const applyFilter = () => {
    if(speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }

useEffect(()=> {
  applyFilter()
}),[doctors, speciality]

  return (

    <div>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality != 'General physician' ? navigate('/doctors/General physician') : navigate('/doctors')} className={`w-[94vw] sm:w-auto py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}`}>General Physician</p>
          <p onClick={()=> speciality != 'Gynecologist' ? navigate('/doctors/Gynecologist') : navigate('/doctors')} className={`w-[94vw] sm:w-auto py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}`}>Gynecologist</p>
          <p onClick={()=> speciality != 'Dermatologist' ? navigate('/doctors/Dermatologist') : navigate('/doctors')} className={`w-[94vw] sm:w-auto py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`}>Dermatologist</p>
          <p onClick={()=> speciality != 'Gastroenterologist' ? navigate('/doctors/Gastroenterologist') : navigate('/doctors')} className={`w-[94vw] sm:w-auto py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''}`}>Gastroenterologist</p>
          <p onClick={()=> speciality != 'Pediatricians' ? navigate('/doctors/Pediatricians') : navigate('/doctors')} className={`w-[94vw] sm:w-auto py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''}`}>Pediatrician</p>
          <p onClick={()=> speciality != 'Neurologist' ? navigate('/doctors/Neurologist') : navigate('/doctors')} className={`w-[94vw] sm:w-auto py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`}>Neurologist</p>
        </div>

        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item, index)=>(
              <div onClick={()=> navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-x1 overflow-hidden cursor-pointer'>
                <img  src={doc_profile} alt="" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          } 
          
        </div>
      </div>
    </div>
    
  )
}

export default Doctors
