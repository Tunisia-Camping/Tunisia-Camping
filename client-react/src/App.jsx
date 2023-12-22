import {useEffect, useState} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import SellerHome from './Seller/component/SellerHome.jsx'
import CreateProduct from './Seller/component/CreateProduct.jsx'
import SellerOneProduct from './Seller/component/SellerOneProduct.jsx'
import Profile from './Seller/component/Profile.jsx'
import EditProfile from './user/edit/EditProfile.jsx'
import axios from 'axios'



function App() {

 const [products, setProducts] = useState([])
 const [refresh, setRefresh] = useState(false)
 const navigate = useNavigate()


  useEffect(()=>{
    axios.get("http://localhost:3000/seller/getAll").then((res)=>{
     setProducts(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  

  const showProduct=(newData)=>{
      navigate(`/${newData.id}`)   
  }

  return(
    <Routes>
        <Route path="/Seller" element={<SellerHome products={products} showProduct={showProduct}/>} />
        <Route path='/addProduct' element={<CreateProduct refresh={refresh} setRefresh={setRefresh} />} />
        <Route path='/:id' element={<SellerOneProduct />} refresh={refresh} setRefresh={setRefresh}/>
        <Route path='/Profile/:id' element={<Profile/>} />
        <Route path='/updateProfileClient' element={<EditProfile/>} />
    </Routes>
  )
    
}

export default App
