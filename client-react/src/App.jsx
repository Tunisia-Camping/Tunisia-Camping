import React from 'react'
import Seller from './Seller/Seller'


import {  Routes , Route } from 'react-router-dom'
import './App.css'
import EditProfile from './user/edit/EditProfile.jsx'

function App() {
   

  return (
    
      <div>
  <Routes>
      hii 
      <Route path="/user/edit" element={<EditProfile />} />
   
    </Routes>
      </div>
    
     
      
   
  )
}

export default App
