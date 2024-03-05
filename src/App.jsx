import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Heropage/Hero'
import Medicin from './Components/Medicin/Medicin'
import Nurse from './Components/Nursesection/Nurse'
import Service from './Components/Service/Service'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Medicin/>
    <Nurse/>
    <Service/>
    </>
  )
}

export default App