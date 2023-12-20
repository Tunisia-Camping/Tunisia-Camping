import React from "react";
import "./cssFiles/Navbar.css"
import {Link} from 'react-router-dom'


const Navbar=()=>{
    return(
        <div>
<header>
        <nav>
          <h1>Tunisia Camping</h1>
        <ul>
          
              <li>
                <Link to="/HomePage">Home</Link>
              </li>
              <li>
                <Link to="/Profile/:id">Profile</Link>
              </li>
              <li>
                <Link to="/addProduct">Create Product</Link>
              </li>
              <li>
                <Link to="/">Log Out</Link>
              </li>
            </ul>
        </nav>
        </header>
        </div>
    )
        
}

export default Navbar