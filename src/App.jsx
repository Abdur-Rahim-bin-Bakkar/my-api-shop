import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tebs from './components/Tabs/Tebs'
import Model from './components/Models.jsx/Model'
import { ToastContainer } from 'react-toastify'
import MyCard from './components/MyCards.jsx/MyCard'

const data = fetch('/models.json').then(res => res.json())
function App() {
  const [tab, setTab] = useState(true)
  const [addAi , setAddAi] = useState([])

  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Tebs tab={tab} setTab={setTab}  addAi={addAi}/>
      {
        tab && <Suspense fallback={<span className='loading fixed top-[50%] left-[50%]'></span>}>
        <Model data={data} addAi={addAi} setAddAi={setAddAi}></Model>

      </Suspense>
      }

      {
        tab|| <MyCard addAi={addAi} setAddAi={setAddAi}></MyCard>
      }


    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
