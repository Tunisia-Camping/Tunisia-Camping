import React,{useEffect, useState}from "react";
import axios from 'axios'
import "./Seller.css"
import {Routes, Route} from 'react-router-dom'
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./component/Home";
import CreateProduct from "./component/CreateProduct";
import OneProduct from "./component/OneProduct";
import Profile from "./component/Profile";

const Seller=()=>{

    const [data, setData]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/api/seller/getAll").then((res)=>{
          setData(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[])

return(
    <div>
        <Navbar/>
        <Footer/>
        <Routes>
            <Route path="/" element={<Home data={data}/>} />
            <Route path="/SellerProfile/:id" element={<Profile/>} />
            <Route path="/addProduct" element={<CreateProduct/>} />
            <Route path="/:name" element={<OneProduct/>} />
        </Routes>
    </div>
)
}

export default Seller