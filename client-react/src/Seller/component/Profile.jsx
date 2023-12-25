import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SellerNavbar from './SellerNavbar.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';




const defaultTheme = createTheme();

const Profile=()=>{


  const [firstName,setFirstName]=useState("")
const [lastName,setLastName]=useState("")
const [email,setEmail]=useState("")
const [adress,setAdress]=useState("")
const [currentPassword,setCurrentPassword]=useState("")
const [newPassword,setNewPassword]=useState("")
const [userid,setUserId]= useState('')




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
  else {
    axios
      .post("http://localhost:3000/seller/UpdateProfile", user)
      .then((res) => {
console.log(res.data,"res")
        alert("You successfully updated your account");
        })
      .catch((err) =>

console.log(err)
        // alert("check your password is incorrect")

      );
  }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
        <SellerNavbar/>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
           Update Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={firstName}
                 onChange={(e)=>setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  autoComplete="family-name"
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="adress"
                  label="Address"
                  name="Adress"
                  value={adress}
                  autoComplete="Adress"
                  onChange={(e)=>setAdress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Current password"
                  label="Current Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setCurrentPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="New password"
                  label="New Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setNewPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>{modifyProfile({email:email,newPassword:newPassword,currentPassword:currentPassword,firstName:firstName,lastName:lastName,adress:adress})}}
            >
             Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default Profile