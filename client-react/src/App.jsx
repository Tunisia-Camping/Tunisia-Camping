import React from 'react'
import Seller from './Seller/Seller'

import React from 'react' 
import {  Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Lab from './Lab'
import EditProfile from './user/edit/EditProfile.jsx'

function App() {
   

  return (
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/user/edit" element={<EditProfile />} />
     
      </Routes>
     
      
   
  )
}

export default App
