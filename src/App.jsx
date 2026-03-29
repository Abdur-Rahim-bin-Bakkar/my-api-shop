import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tebs from './components/Tabs/Tebs'
import Model from './components/Models.jsx/Model'
import { ToastContainer } from 'react-toastify'

const data = fetch('/models.json').then(res => res.json())
function App() {
  const [tab, setTab] = useState(true)
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Tebs tab={tab} setTab={setTab} />
      <Suspense fallback={<span className='loading fixed top-[50%] left-[50%]'></span>}>
        <Model data={data}></Model>

      </Suspense>


    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
