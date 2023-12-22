import "./Footer.css";
import React from "react";
import CodeQR from "../../assets/codeQR.jpg";
import GooglePlay from "../../assets/googleplay.svg";

import iconSend from "../../assets/icon-send.svg";
import FacebookIcon from '../../assets/Icon-Facebook.svg'
import TweeterIcon from '../../assets/Group.svg'
import InstagramIcon from '../../assets/Groupe.svg'
import LinkedinIcon from '../../assets/Icon-Linkedine.svg' 

function Footer() {
    return (
      <div className ="footer">
        <div className="FooterContainer">
          <div className="section1">
            <li className="footerTitles">Exclusive</li>
            <li className="Subscribe">Subscribe</li>
  
            <li className="getOff">Get 10% off your first order</li>
            <div className="Email_Footer">
              <input placeholder="Enter your email" type="email" />
              <img className="sendIcon" src={iconSend} alt="" />
            </div>
          </div>
          <div className="section2">
            <li className="footerTitles2">Support</li>
            <div className="titleBody">
              <li>
                111 Bijoy sarani, Dhaka,
                <br /> DH 1515, Bangladesh.
              </li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </div>
          </div>
          <div className="section3">
            <li className="footerTitles2">Account</li>
            <div className="titleBody">
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </div>
          </div>
          <div className="section4">
            <li className="footerTitles2">Quick Link</li>
            <div className="titleBody">
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </div>
          </div>
          <div className="section5">
            <li className="footerTitles2">Download App</li>
            <li className="aaa">Save $3 with App New User Only</li>
            <div className="playstore">
              <img src={CodeQR} style={{ width: "77px" }} />
              <div className="socialIcons">
                <img src={GooglePlay} width={"77px"} />
                <img className="appstore" src={AppStore} width={"77px"} />
              </div>
            </div>
            <div className="social-media">
             <img src={FacebookIcon} alt="" />
             <img src={TweeterIcon} alt="" />
             <img src={InstagramIcon} alt="" />
             <img src={LinkedinIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy</p>
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
   );
  }
  
  export default Footer