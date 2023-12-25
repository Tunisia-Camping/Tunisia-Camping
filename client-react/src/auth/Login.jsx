import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from "axios" ;
import Alert from '@mui/material/Alert';
import Cookies from 'js-cookie';
import { useNavigate ,Link} from 'react-router-dom';
 
function Login({getone}) {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("") 
  const [alert,setAlert]=useState(false)

  const navigate=useNavigate()

const handleLogin = () => {
  
  axios.post("http://localhost:3000/auth/login",{
    email:email,
    password:password
  })
  .then((result) => {
    const { token, id ,email , password ,firstName,lastName,adress} = result.data;

    
   
    Cookies.set('token', token, { expires: 1 }); 
    Cookies.set('userId', id, { expires: 1 }); 
    Cookies.set('email', email, { expires: 1 }); 
    Cookies.set('password', password, { expires: 1 }); 
    Cookies.set('firstName', firstName, { expires: 1 }); 
    Cookies.set('lastName', lastName, { expires: 1 }); 
    Cookies.set('adress', adress, { expires: 1 }); 
    navigate("/")
    
  })
  .catch((error) => {console.log(error) ;handleWrongCredential()});
}

const handleWrongCredential = () => {
  setAlert(true)
  setTimeout(() => {
    setAlert(false)
  }, 1500);
 }

    const sty={
        "background-color": "rgb(244, 77, 77)",
        "color": "white",
        height: "6vh",
        width:"150px",
        "font-size": "16px",
        "font-family":"Franklin Gothic Medium",
        "margin-bottom ": "2em",
    }
    const sty2={
        "color": "red",
        height: "6vh",
        "font-size": "16px",
        "font-family":"Franklin Gothic Medium",
        "margin-bottom": "2em",
        "border": "none"
    }
  return (
    <dix>
      <img className='login_img' src="https://media.discordapp.net/attachments/1151869834217402408/1188879688546922536/istockphoto-1055891566-612x612.jpg?ex=659c217e&is=6589ac7e&hm=840f85a41c0032f211931eec0ef81ccaffaa67f3a0df3d094fe53799f0a95eb6&=&format=webp&width=533&height=662" alt="" />
    <div className='BigDiv_Login'>
            {alert&& <div>
       <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">Invalid Credential </Alert>
    </Stack>
      </div> }
     <h1 className='title_signup' >Log in to MarketPlace</h1>
     <p className='p_signup'>Enter your details below</p>
    <div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className='input_sign'><TextField  onChange={(e)=>setEmail(e.target.value)} sx={{'& > :not(style)': { width: '50ch' },}} type='email' id="standard-basic" label="Email or Phone Number" variant="standard" /></div>
      <div className='input_sign'><TextField  onChange={(e)=>{setPassword(e.target.value)}} sx={{'& > :not(style)': { width: '50ch' },}} type='password' id="standard-basic" label="Password" variant="standard" /></div>
    </Box>
        </div> 
        <div>
        <Stack  spacing={17} direction="row" >
            <Button onClick={()=>handleLogin()}  style={sty}>Log In</Button>
            <Button   style={sty2} > <Link to="/register" >make new account?</Link></Button>
        </Stack>
        </div>
    </div>
    </dix>
  )
}

export default Login
