
import { useState } from "react"
import "./EDIT.css"

const EditProfile= ()=>{
const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [Email,setEmail]=useState("")
const [Adress,setAdress]=useState("")
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")
    return (
      
        <div  className="home"  >
         
        <h4 style={{ color: "red" }}>Edit Your Profile</h4>
          <div  className="name"> 
<div className="firstName">
<h6  style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
 > First Name</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="Md"
onChange={(e)=>setFirstName(e.target.value)}></input>
</div>
<div className="lastName">
<h6   style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}> Last Name</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="Rimel"
onChange={(e)=>setLastName(e.target.value)}></input>
</div>



          </div>

          <div  className="name"> 
<div className="firstName">
<h6  style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}
> Email</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="Rimel111@gmail.com"
onChange={(e)=>setEmail(e.target.value)}></input>
</div>
<div className="lastName">
<h6   style={{
              color: 'black',
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: '400',
              lineHeight: '24px',
              wordWrap: 'break-word',
            }}> Adress</h6>
<input  style={{

width: '330px',
height: '50px',
left: '0px',
top: '0px',
background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="Kingston, 5236,United State" 
onChange={(e)=>setAdress(e.target.value)}></input>
</div>




          </div>

          <div className="password">
<h6   style={{

 color: 'black',
 fontSize: '16px',
 fontFamily: 'Poppins',
 fontWeight: '400',
 lineHeight: '24px',
wordWrap: 'break-word',
              
            }}> Password changes</h6>
<input  style={{

width: '550px',
height: '90px',

background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="current Password"></input>
<input  style={{

width: '550px',
height: '90px',

background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="New Password"></input>
<input  style={{

width: '550px',
height: '90px',

background: '#F5F5F5',
borderRadius: '4px',
}}placeholder="Confirm Password"></input>
</div>
<div className ="buttuncancel">
<button style={{ background: "white", color: "black" }}>Cancel</button>

    
    <button style={{background:"red"}}>save change</button>
    {/* <button onClick={()=>{updated({email:email,newPassword:newPassword,currentPassword:currentPassword})}}>SaveChanges</button> */}
</div>
            </div  >
    )
    
    
    }
    
    
    export default EditProfile
    // module.exports={

    //   checkpassword:async (req,res)=>{
    //       try {
    //           const userInfo = await db.User.findOne({
    //             where: {
    //               email: req.body.email,
    //             }
    //           });
  
    //           if (!userInfo) {
    //             return res.status(404).json({
    //               status: 'error',
    //               message: 'User not found',
    //             });
    //           }
  
    //           const isPasswordValid = await bcrypt.compare(req.body.currentPassword, userInfo.password);
  
    //           if (!isPasswordValid) {
    //             return res.status(401).json({
    //               status: 'error',
    //               message: 'Incorrect current password',
    //             });
    //           }
  
    //           const hashedNewPassword = await bcrypt.hash(req.body.newPassword, 10);
  
    //           await db.User.update({
    //             name: req.body.name,
    //             email: req.body.email,
    //             password: hashedNewPassword,
                
    //           }, {
    //             where: { email: userInfo.email }
    //           });
  
    //           res.json({
    //             status: 'success',
    //             message: 'Password updated successfully',
    //             data: {
    //               user: userInfo,
    //             },
    //           });
    //         } catch (error) {
    //           console.error(error);
    //           res.status(500).json({
    //             status: 'error',
    //             message: 'Internal server error',
    //           });
    //         }
  
    //     }