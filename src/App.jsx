import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import HomePage from './components/HomePage'

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* Navbar Started Here */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  )
}

export default App