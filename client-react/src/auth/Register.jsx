import React, { useState } from 'react'
import { Link} from  'react-router-dom'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Alert from '@mui/material/Alert';
import axios from "axios"
import { TextField } from '@mui/material';
import './login.css'
function Register() {
  const [FirstName,setFirstName]=useState("")
  const [LastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [role, setRole] =useState("client");
  const [alert,setAlert]=useState(false)
  const [verifFirstName,setVerifFirstName]=useState(false)
  const [verifLastName,setVerifLastName]=useState(false)

  const [verifemail,setVerifemail]=useState(false)
  const [verfipass,setVerifpass]=useState(false)

 

const register=()=>{
     const user={
    firstName:FirstName,
    lastName:LastName,
    email:email,
    password:password,
    role:role
  }
  console.log(user)
  axios.post("http://localhost:3000/auth/register",user)
  .then(()=>{
   console.log("user added");
   setAlert(true)
  })
  .catch((err)=>{
   console.error("error:",err);
   setAlert(false)
  })
 }

const handleChange = (event) => {
  setRole(event.target.value);
 
};

const verif_email=(x)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(x);
}
const verif_name=(x)=>{
  if(x.length<3){
    return false
  }
  return true
}
const verif_password = (x) => {
  const num = "123456789";
  const carc = "&'(-)=}]@^'[{#~+/*";
  let verif = true;

  if (x.length < 8) {
    verif = false;
  }

  let hasDigit = false;
  let hasSpecialChar = false;

  for (let i = 0; i < x.length; i++) {
    if (num.includes(x[i])) {
      hasDigit = true;
    } else if (carc.includes(x[i])) {
      hasSpecialChar = true;
    }
  }

  if (!hasDigit) {
    verif = false;
  }

  if (!hasSpecialChar) {
    verif = false;
  }

  return verif;
};

let showLastName=()=>{
 
  if(!verif_name(LastName)){
    console.log("hi");
    setVerifLastName(true);
    return true
  }
  else{
    setVerifLastName(false)
    return false
  }
}
let showFirtName=()=>{
  if(!verif_name(FirstName)){
    setVerifFirstName(true);
    return true
  }
  else{
    setVerifFirstName(false)
    return false
  }
}
let showemail=()=>{
  if(!verif_email(email)){
    setVerifemail(true);
    return true
  }
  else{
    setVerifemail(false)
    return false
  }
}
let showpass=()=>{
  if(!verif_password(password)){
    setVerifpass(true);
    return true
  }
  else{
    setVerifpass(false)
    return false
  }
}

  const rols = [
    
    { label: 'User'},
    { label: 'Seller' }]
    const sty={
        "background-color": "rgb(244, 77, 77)",
        "color": "white",
        height: "6vh",
        "margin-bottom": "2em",
    }
    const sty2={
        "color": "black",
        height: "6vh",
        "margin-bottom": "2em",
        "border": "1px solid  gray"
    }
  return (
    <div>
      <img className='register_img' src="https://i.imgur.com/YmW2J6F.png" alt="" />
    <div  className='BigDiv_Register'>
      {alert&& <div>
       <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Thank you for your sign-up</Alert>
    </Stack>
      </div> }
        <h1 className='title_signup' >Create an acount</h1>
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
      {!verifFirstName&&<div className='input_sign'><TextField  onChange={(e)=>{setFirstName(e.target.value)}}  sx={{'& > :not(style)': { width: '50ch' },}} type='text' id="standard-basic" label="FirstName" variant="standard" /></div>}
      {verifFirstName&&<div className='input_sign'><TextField  onChange={(e)=>{setFirstName(e.target.value)}} error helperText="incorrect entry"   sx={{'& > :not(style)': { width: '50ch' },}} type='text' id="standard-basic" label="FirstName"  variant="standard" /></div>}
      {!verifLastName&&<div className='input_sign'><TextField  onChange={(e)=>{setLastName(e.target.value)}}  sx={{'& > :not(style)': { width: '50ch' },}} type='text' id="standard-basic" label="LastName" variant="standard" /></div>}
      {verifLastName&&<div className='input_sign'><TextField onChange={(e)=>{setLastName(e.target.value)}} error helperText="incorrect entry" sx={{'& > :not(style)': { width: '50ch' },}} type='text' id="standard-basic" label="LastName"  variant="standard" /></div>}
      {!verifemail&&<div className='input_sign'><TextField onChange={(e)=>{setEmail(e.target.value)}} sx={{'& > :not(style)': { width: '50ch' },}} type='email' id="standard-basic" label="Your Email" variant="standard" /></div>}
      {verifemail&&<div className='input_sign'><TextField onChange={(e)=>{setEmail(e.target.value)}} error helperText="incorrect email"  sx={{'& > :not(style)': { width: '50ch' },}} type='email' id="standard-basic" label="Your Email" variant="standard" /></div>}
      {!verfipass&&<div className='input_sign'><TextField onChange={(e)=>{setPassword(e.target.value)}}  sx={{'& > :not(style)': { width: '50ch' },}} type='password' id="standard-basic" label="Password" variant="standard" /></div>}
      {verfipass&&<div className='input_sign'><TextField onChange={(e)=>{setPassword(e.target.value)}} error helperText="incorrect password"  sx={{'& > :not(style)': { width: '50ch' },}} type='password' id="standard-basic" label="password" variant="standard" /></div>}
    </Box>
    <div className='radio_sign'>
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Your Role :</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={role}
        onChange={(e)=>{handleChange(e)}}
      >
        <FormControlLabel value="client" control={<Radio />} label="client" />
        <FormControlLabel value="seller" control={<Radio />} label="seller" />
      </RadioGroup>
    </FormControl>
    </div>
        </div>
        <div>
        <Stack >
            <Button onClick={()=>{    
              if(showLastName()===false&&showFirtName()===false&&showemail()===false){
                register()
              }
              else{
                showFirtName()
                showLastName()
                showemail()
                showpass()
              }
              }} style={sty}>Create Account</Button>
        </Stack>
        <Stack >
        <Button   style={sty2}   startIcon={<GoogleIcon/>}>Sign up with Google</Button>
        </Stack>
        </div>
        <p className='parag_sign'>Already have account? <a onClick={()=>{}} className='link_sign' ><Link to={'/login'}>Log in</Link></a></p>
    </div>
    </div>
  )
}

export default Register
