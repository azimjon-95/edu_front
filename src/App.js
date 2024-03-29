import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <div>
      <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      < Routes>
        <Route exect path='/' element={<Home openSidebar={openSidebar} />} />
        <Route />
        <Route />
      </Routes>
    </div>
  )
}

export default App
