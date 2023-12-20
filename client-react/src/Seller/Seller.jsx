import React from "react";
import "./Seller.css"
import {Link, Routes, Route} from 'react-router-dom'
import Home from "./component/Home";
import CreateProduct from "./component/CreateProduct";
import OneProduct from "./component/OneProduct";
import Profile from "./component/Profile";

const Seller=()=>{
return(
    <div>
        <nav>
        <ul>
              <li>
                <Link to="/HomePage">Home</Link>
              </li>
              <li>
                <Link to="/SellerProfile/:id">Profile</Link>
              </li>
              <li>
                <Link to="/addProduct">Create Product</Link>
              </li>
              <li>
                <Link to="/">Log Out</Link>
              </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/SellerProfile/:id" element={<Profile/>} />
            <Route path="/addProduct" element={<CreateProduct/>} />
            <Route path="/:name" element={<OneProduct/>} />
        </Routes>
    </div>
)
}

export default Seller