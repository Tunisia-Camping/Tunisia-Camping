import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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
import shadows from '@mui/material/styles/shadows';

function Register() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [role, setRol] =useState('');
  const [alert,setAlert]=useState(false)
  const [verifname,setVerifname]=useState(false)
  const [verifemail,setVerifemail]=useState(false)
  const [verfipass,setVerifpass]=useState(false)
  axios.defaults.withCredentials=true

 

const adduser=(info)=>{
     let user={
    name:name,
    email:email,
    password:password,
    rols:role
  }
  axios.post("http://localhost:3000/auth/",info)
  .then(()=>{
   console.log("user added");
   setAlert(!alert)
  })
  .catch((err)=>{
   console.error("error:",err);
  })
 }

const handleChange = (event) => {
  setRol(event.target.value);
};

const handleValue=(set,e)=>{
  set(e.target.value)
}
const verif_email=(x)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(x);
}
const verif_name=(x)=>{
  if(x.length<6){
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

let showname=()=>{
  if(!verif_name(name)){
    setVerifname(!verifname)
    return true
  }
  else{
    setVerifname(false)
    return false
  }
}
let showemail=()=>{
  if(!verif_email(email)){
    setVerifemail(!verifemail)
    return true
  }
  else{
    setVerifemail(false)
    return false
  }
}
let showpass=()=>{
  if(!verif_password(password)){
    setVerifpass(!verfipass)
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
      {!verifname&&<div className='input_sign'><TextField  onChange={(e)=>{handleValue(setName,e)}}  sx={{'& > :not(style)': { width: '50ch' },}} type='text' id="standard-basic" label="Name" variant="standard" /></div>}
      {verifname&&<div className='input_sign'><TextField  error helperText="incorrect entry" onChange={(e)=>{handleValue(setName,e)}}  sx={{'& > :not(style)': { width: '50ch' },}} type='text' id="standard-basic" label="Name"  variant="standard" /></div>}
      {!verifemail&&<div className='input_sign'><TextField onChange={(e)=>{handleValue(setEmail,e)}} sx={{'& > :not(style)': { width: '50ch' },}} type='email' id="standard-basic" label="Your Email" variant="standard" /></div>}
      {verifemail&&<div className='input_sign'><TextField error helperText="incorrect email" onChange={(e)=>{handleValue(setEmail,e)}} sx={{'& > :not(style)': { width: '50ch' },}} type='email' id="standard-basic" label="Your Email" variant="standard" /></div>}
      {!verfipass&&<div className='input_sign'><TextField onChange={(e)=>{handleValue(setPassword,e)}}  sx={{'& > :not(style)': { width: '50ch' },}} type='password' id="standard-basic" label="Password" variant="standard" /></div>}
      {verfipass&&<div className='input_sign'><TextField error helperText="incorrect password" onChange={(e)=>{handleValue(setPassword,e)}}  sx={{'& > :not(style)': { width: '50ch' },}} type='password' id="standard-basic" label="password" variant="standard" /></div>}
    </Box>
    <div className='radio_sign'>
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Your Rol :</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={role}
        onChange={handleChange}
      >
        <FormControlLabel value="user" control={<Radio />} label="client" />
        <FormControlLabel value="seller" control={<Radio />} label="seller" />
      </RadioGroup>
    </FormControl>
    </div>
        </div>
        <div>
        <Stack >
            <Button onClick={()=>{    
              if(showname()===false&&showemail()===false&&shadows()===false){
                adduser(info)
              }
              else{
                showname();
                showemail();
                showpass()
              }
              }} style={sty}>Create Account</Button>
        </Stack>
        <Stack >
        <Button   style={sty2}   startIcon={<GoogleIcon/>}>Sign up with Google</Button>
        </Stack>
        </div>
        <p className='parag_sign'>Already have account? <a onClick={()=>{}} className='link_sign' >Log in</a></p>
    </div>
  )
}

export default Register
