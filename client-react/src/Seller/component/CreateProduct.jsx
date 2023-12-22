import {useState} from "react";
import {useNavigate} from "react-router-dom"
import Navbar from "./Navbar";
import axios from "axios"
import { Box, Stack, TextField, Select, MenuItem, Button } from '@mui/material';
import "./cssFiles/CreateProduct.css"



const CreateProduct=()=>{
const [name, setName] = useState("")
const [price, setPrice] = useState (0)
const [description, setDescription] = useState("")
const [unit, setUnit] = useState(0)
const [category, setCategory] = useState("Tent")
const [images, setImages] = useState("")
const navigate = useNavigate()
 


const handleChangeImage=(e)=>{
  const file=e.target.files[0]
  setImages(file)
}

const addProduct=()=>{
  const formData = new FormData();
  formData.append("file",images)
  formData.append("upload_preset","pa4ezjqw")
  const cloudinaryResponse= axios.post("http://api.cloudinary.com/v1_1/dfsyqvvim/image/upload", formData)
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })

  const obj={
    name:name,
    price:price,
    description:description,
    unit:unit,
    category:category,
    images: cloudinaryResponse
}

  axios.post("http://localhost:3000/seller/addProduct",obj).then(()=>{
  alert("Product added")
  navigate("/Seller")
  })
  .catch((err)=>{
   console.log (err)
  })
  }

    
 

    return(
        <div>
            <div>
                <Navbar/>
            </div>
            <h1 className="addTitle">Add New Product</h1>
            <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
    >
            <Stack
      component="form"
      sx={{
        width: '50ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
      id="inputs"
    >
       
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Product Name"
        variant="filled"
        size="small"
        onChange={(e)=>setName(e.target.value)}
      />
      
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Product Price"
        variant="filled"
        size="small"
        onChange={(e)=>setPrice(e.target.value)}
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="description"
        variant="filled"
        size="small"
        onChange={(e)=>setDescription(e.target.value)}
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="How many product you have"
        variant="filled"
        size="small"
        onChange={(e)=>setUnit(e.target.value)}
      />
       <Select
      variant="outlined"
      value={category}
      sx={{
        width: '400px',               
        borderRadius: '8px',          
        borderColor: '#ccc',         
        '&:focus': {
          borderColor: '#00bcd4',     
          outline: 'none'             
        }
      }}
      onChange={(e)=> setCategory(e.target.value)}
    >
      <MenuItem value="Tent">Tent</MenuItem>
      <MenuItem value="Sleepingbags">Sleeping bags</MenuItem>
      <MenuItem value="Campingpillow">Camping pillow</MenuItem>
      <MenuItem value="flashlights">flashlights</MenuItem>
      <MenuItem value="Campchairs">Camp chairs</MenuItem>
      <MenuItem value="Camptable">Camp table</MenuItem>
      <MenuItem value="Lantern">Lantern</MenuItem>
    </Select>
    <input type="file" onChange={(e)=>{handleChangeImage(e)}}/>
    <Button variant="contained" onClick={()=>{addProduct()}}>
        Add Product
      </Button>
         </Stack>
            </Box>
        </div>
    )
}

export default CreateProduct