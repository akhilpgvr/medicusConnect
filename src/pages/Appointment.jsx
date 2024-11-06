import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  // constants
  const {docId} = useParams()

  const {doctors} = useContext(AppContext)

  const [daysArray, setDaysArray] = useState([])

  const [datesArray, setDatesArray] = useState([])

  const [docInfo, setDocInfo] = useState(null)

  const [slotIndex, setSlotIndex] = useState(0)

  const [sessionIndex, setSessionIndex] = useState(0)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc=> doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
  }

  //Time slots
  const getNext7DaysExcludingSunday = () => {

    const days = [];
    const dates = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate()+1)

    // Loop until we have 7 valid days
    while (days.length < 6) {
      const dayOfWeek = currentDate.getDay(); // Get the day of the week (0 = Sunday, 6 = Saturday)

      // Skip Sunday
      if (dayOfWeek !== 0) {
        // Store the day name
        const options = { weekday: 'long' };
        days.push(currentDate.toLocaleDateString('en-US', options)); // Day name
        // Store the day of the month as a two-digit string
        const dayOfMonth = currentDate.getDate().toString().padStart(2, '0');
        dates.push(dayOfMonth);
      }
      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Update the state with the calculated values
    setDaysArray(days);
    setDatesArray(dates);

  }



  useEffect(() => {
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=> {
    getNext7DaysExcludingSunday()
  },[docInfo])


  return docInfo && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        
        <div>
          <img className='w-full sm:max-w-40 rounded-lg' src={assets.doc_profile} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2x1 font-mediu, text-gray-900'>
            {docInfo.name}
            <img className='w-4' src={assets.verified_icon} alt="" />
          </p>

          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          <p className='text-gray-500 font-medium mt-4'>Appointment Fee: <span className='text-gray-600'>{docInfo.fees}</span></p>

        </div>

      </div>

      <div className='py-5 sm:ml-72 sm:p1-4 mt-5 font-medium text-gray-700'>
        <p>Select Solts</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            daysArray.length && daysArray.map((item, index)=> (
              <div onClick={()=>setSlotIndex(index)} className= {`rounded-full w-32 h-14 flex items-center justify-center cursor-pointer ${slotIndex === index  ? 'bg-emerald-500 text-white border border-gray-200 p-4' : 'border border-gray-200'}`} key={index}>
                <p>{item}</p><p>  -  </p>
                <p>{datesArray[index]}</p>
              </div>
            ))
          }
        </div>
        {/* <div onClick={()=>setSlotIndex(index)} className= {`rounded-full w-32 h-14 flex items-center justify-center cursor-pointer ${slotIndex === index  ? 'bg-emerald-500 text-white border border-gray-200 p-4' : 'border border-gray-200'}`}> */}
          <div className='flex gap-10  py-10'>
            <div onClick={()=> setSessionIndex(0)} className={`p-4 w-32 rounded-full cursor-pointer ${sessionIndex === 0 ? 'bg-cyan-500 text-white border border-gray-200' : 'border border-gray-200'}`}>
              <p>Forenoon</p>
            </div>
            <div onClick={()=> setSessionIndex(1)} className={`p-4 w-32 rounded-full cursor-pointer ${sessionIndex === 1 ? 'bg-cyan-500 text-white border border-gray-200' : 'border border-gray-200'}`}>
              <p>AFternoon</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment
