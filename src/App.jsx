import React, { Profiler } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import NavBar from './components/NavBar'
import Doctors from './pages/Doctors'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} /> {/*Home page -- / represents default page*/}
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointment' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
