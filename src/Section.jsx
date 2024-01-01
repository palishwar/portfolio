import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/Home'
import Details from './Pages/Components/Details'
import Skills from './Pages/Components/Skills'
import Contact from './Pages/Components/Contact'
import Projects from './Pages/Components/Projects'
function Section() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Details/:pro_id" element={<Details/>}/>
    <Route path="/Skills" element={<Skills/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/projects" element={<Projects/>}/>
  </Routes>
  )
}


export default Section