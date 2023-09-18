import React from 'react'
import Home from './Pages/Home'
import Bollywood from './Pages/Bollywood'
import Technology from './Pages/Technology'
import Hollywood from './Pages/Hollywood'
import Fitness from './Pages/Fitness'
import Food from './Pages/Food'
import NewPage from './Pages/NewPage'
// import LinkComp from '../Components/LinkComp'
import { Routes, Route} from 'react-router-dom'
const RoutesComp = () => {
  return (
    <>
    <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/bollywood' element={<Bollywood />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/hollywood' element={<Hollywood />} />
        <Route path='/fitness' element={<Fitness />} />
        <Route path='/food' element={<Food />} />
        <Route path='/NewPage/:id' element={<NewPage />} />

      </Routes>
    </>
  )
}

export default RoutesComp