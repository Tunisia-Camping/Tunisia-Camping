
import React, { useState } from "react"; 
import "./EDIT.css"
import axios from "axios"
const EditProfile = () => {
  // const emailUser = localStorage.getItem("user")
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("emailUser.email")
const [adress,setAdress]=useState("")
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")





const update =async(users)=>{
  try {
    if(newPassword===confirmPassword)
{    await axios.post("http://localhost:3000/clients/updateClient",users)
alert("your update is successfully")
return 
  }} catch (error) {
    alert("check passworrd")
  }
}

  return (
    <div className="account">
   
   

      <div className="manage-my-account">Manage My Account</div>
      <div className="my-orders">My Orders</div>
      <div className="my-wishlist">My WishList</div>
      <div className="my-profile-parent">
        <div className="my-profile">My Profile</div>
        <div className="address-book">Address Book</div>
        <div className="address-book">My Payment Options</div>
      </div>
      <div className="my-returns-parent">
        <div className="address-book">My Returns</div>
        <div className="address-book">My Cancellations</div>
      </div>
      <div className="edit-your-profile-parent">
        <div className="edit-your-profile">Edit Your Profile</div>
        <div className="frame-group">
          <div className="first-name-parent">
            <div className="first-name">First Name</div>
            <div className="placebox-info">
              <input   style={{color:"black"}}  placeholder="md" onChange={(e)=>setFirstName(e.target.value)} className="place-to-info-box" />
             
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Last Name</div>
            <div className="placebox-info">
              <input    style={{color:"black"}} placeholder="Rimel"  onChange={(e)=>setLastName(e.target.value)}className="place-to-info-box" />
             
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="first-name-parent">
            <div className="first-name">Email</div>
            <div className="placebox-info">
              <input   style={{color:"black"}}  placeholder="Rimellll@gmail.com" onChange={(e)=>setEmail(e.target.value)} className="place-to-info-box" />
             
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Address</div>
            <div className="placebox-info">
              <input  style={{color:"black"}} className="place-to-info-box" placeholder="Kingstan ,5236,United State" onChange={(e)=>setAdress(e.target.value)}/>
           
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="first-name-parent">
            <div className="first-name">Password Changes</div>
            <div className="placebox-info4">
              <input  style={{color:"black"}}  className="place-to-info-box"onChange={(e)=>setCurrentPassword(e.target.value)} placeholder="currentPassword"/>
       
            </div>
          </div>
          <div className="placebox-info4">
            <input  style={{color:"black"}}  className="place-to-info-box"onChange={(e)=>setNewPassword(e.target.value)} placeholder="newPassword"/>
         
          </div>
          <div className="placebox-info4">
            <input  style={{color:"black"}}  onChange={(e)=>setConfirmPassword(e.target.value)}placeholder="confirmpassword"className="place-to-info-box" />
          </div>
        </div>
        <div className="cancel-parent">
          <button className="first-name">Cancel</button>
          <button className="button">
            <div className="view-all-products" onClick={()=>{update({email:email,newPassword:newPassword,currentPassword:currentPassword,firstName:firstName,lastName:lastName,adress:adress})}}>Save Changes</div>
          </button>
        </div>
      </div>

    </div>
  );
};

export default EditProfile;
