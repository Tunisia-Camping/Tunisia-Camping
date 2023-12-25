
import  { useState , useEffect} from "react"; 

import Cookies from 'js-cookie';
import "./EDIT.css"
import axios from "axios"
import NavBar from './navbar'

const EditProfile = () => {
  
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [adress,setAdress]=useState("")
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")
const [userid,setUserId]= useState('')
const [confirmPassword,setConfirmPassword]= useState("")



console.log(email,"aaaa")
useEffect(() => {
  
  const token = Cookies.get('token');
  const userId = Cookies.get('userId');
  const email = Cookies.get('email');
  const password = Cookies.get('password')
  const firstName = Cookies.get('firstName')
  const lastName = Cookies.get('lastName')
  const adress = Cookies.get('adress')
  


  if (token && userId) {
    setUserId(userId)
   setFirstName(firstName)
   setLastName(lastName)
   setAdress(adress)
    setCurrentPassword(password)
    setEmail(email)
  } else {
  
    console.log('User is not authenticated');
  }
}, []);

const modifyProfile = (user) => {


console.log(user)

if(user.newPassword.length <8){
  alert("Enter a strong password: " );
  return 
}
  if (user.newPassword === confirmPassword) {
    axios
      .post("http://localhost:3000/clients/UpdateClients", user)
      .then((res) => {
console.log(res.data,"res")
        alert("You successfully updated your account");
        navigate("/home" )
        })
      .catch((err) =>

console.log(err)
        // alert("check your password is incorrect")

      );
  }
}



  return (



    <div>
    <NavBar/>
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
              <input   style={{color:"black"}}  defaultValue={firstName} onChange={(e)=>setFirstName(e.target.value)} className="place-to-info-box" />
             
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Last Name</div>
            <div className="placebox-info">
              <input    style={{color:"black"}} defaultValue={lastName}  onChange={(e)=>setLastName(e.target.value)}className="place-to-info-box" />
             
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="first-name-parent">
            <div className="first-name">Email</div>
            <div className="placebox-info">
              <input   style={{color:"black"}}  defaultValue={email} onChange={(e)=>setEmail(e.target.value)} className="place-to-info-box" />
             
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Address</div>
            <div className="placebox-info">
              <input  style={{color:"black"}} className="place-to-info-box" defaultValue={adress} onChange={(e)=>setAdress(e.target.value)}/>
           
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="first-name-parent">
            <div className="first-name">Password Changes</div>
            <div className="placebox-info4">
              <input   type="password" style={{color:"black"}}  className="place-to-info-box"onChange={(e)=>setCurrentPassword(e.target.value)} placeholder="currentPassword"/>
       
            </div>
          </div>
          <div className="placebox-info4">
            <input  type="password"  style={{color:"black"}}  className="place-to-info-box"onChange={(e)=>setNewPassword(e.target.value)} placeholder="newPassword"/>
         
          </div>
          <div className="placebox-info4">
            <input   type="password" style={{color:"black"}}  onChange={(e)=>setConfirmPassword(e.target.value)}placeholder="confirmpassword"className="place-to-info-box" />
          </div>
        </div>
        <div className="cancel-parent">
          <button className="first-name">Cancel</button>
          <button className="button">
            <div className="view-all-products" onClick={()=>{modifyProfile({email:email,newPassword:newPassword,currentPassword:currentPassword,firstName:firstName,lastName:lastName,adress:adress})}}>Save Changes</div>
          </button>
        </div>
      </div>

    </div>
    </div>
  );
};

export default EditProfile;
