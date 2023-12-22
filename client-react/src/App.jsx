
import React from 'react' 
import {  Routes , Route } from 'react-router-dom'
import './App.css'
import SellerHome from './Seller/component/SellerHome.jsx'
import CreateProduct from './Seller/component/CreateProduct.jsx'
import SellerOneProduct from './Seller/component/SellerOneProduct.jsx'
import Profile from './Seller/component/Profile.jsx'
import EditProfile from './user/edit/EditProfile.jsx'
import Login from './auth/login.jsx'
import Register from './auth/register.jsx'
import AdminPage from './admin/AdminPage.jsx'


function App() {
  return(
    <Routes>
      <Route path="/AdminPage" element={<AdminPage />}/>
        <Route path="/" element={<SellerHome/>} />
        <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/addProduct' element={<CreateProduct/>} />
        <Route path='/SellerOneProduct/:id' element={<SellerOneProduct/>} />
        <Route path='/updateProfileSeller' element={<Profile/>} />
        <Route path='/updateProfileClient' element={<EditProfile/>} />
    </Routes>
  )
    
}

export default App
