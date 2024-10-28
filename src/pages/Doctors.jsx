import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const {speciality} = useParams()

  console.log(speciality);

  // const{doctors} = useContext(AppContext) 
  // const[filterDoc, setFilterDoc] = useState([])

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
          // filterDoc.map()
        }
      </div>
    </div>
  )
}

export default Doctors
