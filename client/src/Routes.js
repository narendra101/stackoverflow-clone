import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'

export default function() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/auth' element={<Auth />} />
    </Routes>
  )
}