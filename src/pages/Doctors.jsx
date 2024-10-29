import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const {speciality} = useParams()

  const[filterDoc, setFilterDoc] = useState([])

  const{doctors} = useContext(AppContext) 

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
      <div>
        <p>General Physician</p>
        <p>Gynecologist</p>
        <p>Dermatologist</p>
        <p>Pediatrician</p>
        <p>Neurologist</p>
        <p>Gastroenterologist</p>
      </div>

      <div>
        {
          filterDoc.map((item, index)=>(
            <div onClick={()=> navigate(`/appointment/${item.id}`)} className='border'>
              <img src={item.image} alt="" />
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
  )
}

export default Doctors
