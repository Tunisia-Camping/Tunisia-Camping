import React from 'react' 
import {  Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Lab from './Lab'
function App() {
   

  return (
    
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lab" element={<Lab />} />
     
      </Routes>
     
      
   
  )
}

export default App
