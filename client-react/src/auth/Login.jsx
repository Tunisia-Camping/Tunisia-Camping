import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
function Login({getone}) {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

const handleValue=(set,e)=>{
  set(e.target.value)
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
    <div>
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
      <div className='input_sign'><TextField  onChange={(e)=>{handleValue(setEmail,e)}} sx={{'& > :not(style)': { width: '50ch' },}} type='email' id="standard-basic" label="Email or Phone Number" variant="standard" /></div>
      <div className='input_sign'><TextField  onChange={(e)=>{handleValue(setPassword,e)}} sx={{'& > :not(style)': { width: '50ch' },}} type='password' id="standard-basic" label="Password" variant="standard" /></div>
    </Box>
        </div>
        <div>
        <Stack  spacing={17} direction="row" >
            <Button   style={sty}>Log In</Button>
            <Button   style={sty2} >Forget Password?</Button>
        </Stack>
        </div>
    </div>
  )
}

export default Login
