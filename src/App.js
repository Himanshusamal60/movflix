import React from 'react'
import Home from './components/Home'
import Nav from './components/nav/Nav'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Detail from './components/Detailpage/Detail'
function App() {
  return (
    <>
      <Nav/>
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<Detail/>}/>
    </Routes>
      <Footer/>
    </>
    
  )
}

export default App
