import { Routes, Route } from 'react-router-dom'
import './App.css'
import SellerHome from './Seller/component/SellerHome.jsx'
import CreateProduct from './Seller/component/CreateProduct.jsx'
import SellerOneProduct from './Seller/component/SellerOneProduct.jsx'
import Profile from './Seller/component/Profile.jsx'
import EditProfile from './user/edit/EditProfile.jsx'
import NavBar from './user/edit/navbar.jsx'
import Footer from './user/edit/footer.jsx'

function App() {
   

  return (
    
      <div> 
        
        
        < NavBar/>
         <Routes>
    
      <Route path="/" element={<SellerHome/>} />
          <Route path='/addProduct' element={<CreateProduct/>} />
          <Route path='/SellerOneProduct/:id' element={<SellerOneProduct/>} />
          <Route path='/updateProfileSeller' element={<Profile/>} />
          <Route path='/updateProfileClient' element={<EditProfile/>} />
      
     
      </Routes>
      < Footer/>
      </div>

      
     
      
   
  )
    
}

export default App
