import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tebs from './components/Tabs/Tebs'
function App() {
  useState()
  return (
   <>
    <Navbar></Navbar>
    <Hero/>
    <Tebs/>

    <div className='my-10'></div>
   </>
  )
}

export default App
