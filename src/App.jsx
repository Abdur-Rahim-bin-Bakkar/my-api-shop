import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tebs from './components/Tabs/Tebs'
function App() {
  const [tab, setTab] = useState(true)
  return (
   <>
    <Navbar></Navbar>
    <Hero/>
    <Tebs tab={tab} setTab={setTab} />

    <div className='my-10'></div>
   </>
  )
}

export default App
