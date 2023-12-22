import React from "react";
import "./cssFiles/Footer.css"
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="Footer">
          <footer>
          <div className="FooterContainer">
           <div className="Row">
            <div className="column">
             <h3>Website Name</h3>
             <h4>Subscribe</h4>
             <p>Get 10% off your first order</p>
             <input className="Email" placeholder="Enter you Email"/>
            </div>
            <div className="column">
             <h3>Support</h3>
             <p>Pole Technologie RBK</p>
             <p>RBK@gmail.com</p>
             <p>27.365.149</p>
            </div>
            <div className="column">
             <h3>Account</h3>
             <Link to="/SellerProfile/:id">My Account</Link>
             <p>Log in/ Register</p>
             <p>Orders</p>
            </div>
            <div className="column">
             <h3>Quick Link</h3>
             <p>Privacy Policy</p>
             <p>Terms Of Use</p>
             <p>FAQ</p>
             <p>Contact</p>
            </div>
           </div>
          </div>
          </footer>
        </div>
    )
}

export default Footer