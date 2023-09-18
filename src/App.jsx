import React from 'react'
import StoredData from './Components/StoredData'
import { BrowserRouter } from 'react-router-dom'
const App = () => {

  return (
    <div >
      <BrowserRouter>
        <StoredData />
      </BrowserRouter>
   
    </div>
  )
}

export default App