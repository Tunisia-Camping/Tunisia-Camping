
// import { useState } from "react"
// import "./EDIT.css"

// const EditProfile= ()=>{




//     return (
      
//         <div  className="home"  >
         
//         <h4 style={{ color: "red" }}>Edit Your Profile</h4>
//           <div  className="name"> 
// <div className="firstName">
// <h6  style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}
//  > First Name</h6>
// <input  style={{

// width: '330px',
// height: '50px',
// left: '0px',
// top: '0px',
// background: '#F5F5F5',
// borderRadius: '4px',
// }}placeholder="Md"
// onChange={(e)=>setFirstName(e.target.value)}></input>
// </div>
// <div className="lastName">
// <h6   style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}> Last Name</h6>
// <input  style={{

// width: '330px',
// height: '50px',
// left: '0px',
// top: '0px',
// background: '#F5F5F5',
// borderRadius: '4px',
// }}placeholder="Rimel"
// onChange={(e)=>setLastName(e.target.value)}></input>
// </div>



//           </div>

//           <div  className="name"> 
// <div className="firstName">
// <h6  style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}
// > Email</h6>
// <input  style={{

// width: '330px',
// height: '50px',
// left: '0px',
// top: '0px',
// background: '#F5F5F5',
// borderRadius: '4px',
// }}placeholder="Rimel111@gmail.com"
// onChange={(e)=>setEmail(e.target.value)}></input>
// </div>
// <div className="lastName">
// <h6   style={{
//               color: 'black',
//               fontSize: '16px',
//               fontFamily: 'Poppins',
//               fontWeight: '400',
//               lineHeight: '24px',
//               wordWrap: 'break-word',
//             }}> Adress</h6>
// <input  style={{

// width: '330px',
// height: '50px',
// left: '0px',
// top: '0px',
// background: '#F5F5F5',
// borderRadius: '4px',
// }}placeholder="Kingston, 5236,United State" 
// onChange={(e)=>setAdress(e.target.value)}></input>
// </div>




//           </div>

//           <div className="password">
// <h6   style={{

//  color: 'black',
//  fontSize: '16px',
//  fontFamily: 'Poppins',
//  fontWeight: '400',
//  lineHeight: '24px',
// wordWrap: 'break-word',
              
//             }}> Password changes</h6>
// <input  style={{

// width: '550px',
// height: '90px',

// background: '#F5F5F5',
// borderRadius: '4px',
// }}placeholder="current Password"></input>
// <input onChange={(e)=>setNewPassword(e.target.value)} style={{

// width: '550px',
// height: '90px',

// background: '#F5F5F5',
// borderRadius: '4px',
// }}placeholder="New Password"></input>
// <input onChange={(e)=>setConfirmPassword(e.target.value)}  style={{

// width: '550px',
// height: '90px',

// background: '#F5F5F5',
// borderRadius: '4px',
// }}placeholder="Confirm Password"></input>
// </div>
// <div className ="buttuncancel">
// <button style={{ background: "white", color: "black" }}>Cancel</button>

    
//     <button style={{background:"red"}}   >save change</button>

// </div>
//             </div  >
//     )
    
    
//     }
    
    
//     export default EditProfile
import { useState } from "react";
import "./EDIT.css"
// import axios from "axios"
const EditProfile = () => {
  // const emailUser = localStorage.getItem("user")
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("emailUser.email")
const [adress,setAdress]=useState("")
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")


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
              <input   style={{color:"black"}}  onChange={(e)=>setFirstName(e.target.value)} className="place-to-info-box" />
             
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Last Name</div>
            <div className="placebox-info">
              <input    style={{color:"black"}}  onChange={(e)=>setLastName(e.target.value)}className="place-to-info-box" />
             
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="first-name-parent">
            <div className="first-name">Email</div>
            <div className="placebox-info">
              <input   style={{color:"black"}}  onChange={(e)=>setEmail(e.target.value)} className="place-to-info-box" />
             
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Address</div>
            <div className="placebox-info">
              <input  style={{color:"black"}} className="place-to-info-box" onChange={(e)=>setAdress(e.target.value)}/>
           
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
