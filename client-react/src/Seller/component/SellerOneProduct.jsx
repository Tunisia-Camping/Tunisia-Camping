import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import SellerNavbar from './SellerNavbar.jsx'
import "./cssFiles/SellerOneProduct.css"
import UpdateProduct from "./UpdateProduct";

const SellerOneProduct=({refresh, setRefresh})=>{
  const [oneProduct, setOneProduct] = useState({})
    const [show, setShow] = useState(false)
    const {id}= useParams()
    const navigate= useNavigate()
   



    useEffect(()=>{
        axios.get(`http://localhost:3000/seller/getOne/${id}`).then((res)=>{
        setOneProduct(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    },[id])


    const remove=(id)=>{
        axios.delete(`http://localhost:3000/seller/removeProduct/${id}`).then(()=>{
            // alert("Product deleted")
            setRefresh(!refresh)
            navigate("/Seller")
          })
          .catch((err)=>{
              console.log(err)
          })
    }

 return(
    <div>
      <SellerNavbar/>
        <div className="product-container">
        <img className="" src={oneProduct.images} alt="" />
        <h4>{oneProduct.name}</h4>
        <div>
        <div>Price:{oneProduct.price}</div>
        <div>Description:{oneProduct.description}</div>
        <div>Unit:{oneProduct.unit}</div>
        </div>
      <button className="delete-button" 
      onClick={() => {
        remove(oneProduct.id)
    }}>Delete 
      </button>
      <button className="edit-button" 
      onClick={() => {
        setShow(!show)
        }}
      >Edit
      </button>
      {show&&
      <UpdateProduct oneProduct={oneProduct}/>
    }
    </div>
    </div>
 )
}

export default SellerOneProduct