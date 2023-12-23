
import React from 'react' 
import {useEffect, useState} from 'react'
import {  Routes , Route , Link , useNavigate } from 'react-router-dom'


import './App.css'
import SellerHome from './Seller/component/SellerHome.jsx'
import CreateProduct from './Seller/component/CreateProduct.jsx'
import SellerOneProduct from './Seller/component/SellerOneProduct.jsx'
import Profile from './Seller/component/Profile.jsx'
import EditProfile from './user/edit/EditProfile.jsx'
import Login from './auth/login.jsx'
import Register from './auth/register.jsx'
import axios from 'axios'
import NavBar from './user/edit/navbar.jsx'
import Footer from './user/edit/footer.jsx'
import ProductsDetails from './user/ProductDetail.jsx'
import Home from './user/HomePage/Home.jsx'

function App() {
   

  const [products, setProducts] = useState([])
  const [refresh, setRefresh] = useState(false)
  const navigate = useNavigate();


  useEffect(()=>{
    axios.get("http://localhost:3000/seller/getAll").then((res)=>{
     setProducts(res.data)
     setRefresh(!refresh)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[refresh])

  

  const showProduct=(newData)=>{
      navigate(`/${newData.id}`)   
  }


  const handleClick = (product) => {
    navigate(`/one/${product.name}`, { state: product });
  };

  return (
    
      <div> 
        
        
        < NavBar/>
         <Routes>
    
         <Route path="/Seller" element={<SellerHome products={products} showProduct={showProduct}/>} />
          <Route path='/login' element={ <Login/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/addProduct' element={<CreateProduct refresh={refresh} setRefresh={setRefresh}/>} />
        <Route path='/:id' element={<SellerOneProduct refresh={refresh} setRefresh={setRefresh}/>} />
          <Route path='/updateProfileSeller' element={<Profile/>} />
          <Route path='/updatePDrofileClient' element={<EditProfile/>} />
          <Route path='/one/:name' element={<ProductsDetails/>} />
          <Route path='/Home' element={<Home handleClick={handleClick}  />} />
     
      </Routes>
      {/* < Footer/> */}
      </div>

      
     
      
   
  )
    
}

export default App
