import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { Box, Stack, TextField, Select, MenuItem, Button } from '@mui/material';
import Navbar from "./Navbar";

const SellerOneProduct=({refresh, setRefresh})=>{
    const [oneProduct, setOneProduct] = useState({})
    const [name, setName] = useState("")
    const [price, setPrice] = useState (0)
    const [description, setDescription] = useState("")
    const [unit, setUnit] = useState(0)
    const [category, setCategory] = useState("Tent")
    const [images, setImages] = useState("")
    const[show, setShow]= useState(false)
    const {id}= useParams()
    const navigate= useNavigate()
   



    useEffect(()=>{
        axios.get(`http://localhost:3000/seller/getOne/${id}`).then((res)=>{
        setOneProduct(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    },[id])

    // const uploadImage=()=>{
    //   const formData= new formData()
    //   formData.append("file",images)
    //   formData.append("upload_preset","pa4ezjqw")
    
    //   axios.post("http://api.cloudinary.com/v1_1/dfsyqvvim/image/upload", formData)
    //   .then((res)=>{
    //     console.log(res)
    //   })
    // }

    const obj={
        name:name,
        price:price,
        description:description,
        unit:unit,
        category:category,
        images:JSON.stringify(images)
    }

    const modify=(id)=>{
        console.log(obj)
        axios.put(`http://localhost:3000/seller/updateProduct/${id}`,obj).then(()=>{
          alert("Product Modified")
          setRefresh(!refresh)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const remove=(id)=>{
        axios.delete(`http://localhost:3000/seller/removeProduct/${id}`).then(()=>{
            alert("Product deleted")
            navigate("/Seller")
          })
          .catch((err)=>{
              console.log(err)
          })
    }

 return(
    <div>
      <Navbar/>
        <div>
        <img className="" src={oneProduct.images} alt="" />
        <h4>{oneProduct.name}</h4>
        <div>{oneProduct.price}</div>
        <div>{oneProduct.description}</div>
        <div>{oneProduct.unit}</div>
        <div>{oneProduct.category}</div>
        <button
        className="Delete"
        onClick={() => {
            remove(oneProduct.id)
        }}
      >
       Delete
      </button>
      <button
        className="Modify"
        onClick={() => {
        setShow(!show)
        }}
      >
        Modify
      </button>
      </div>
      {show&&(
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
    <input type="file" onChange={(e)=>{setImages(e.target.files)}}/>
    <Button variant="contained" onClick={()=>{modify(oneProduct.id)}}>
        Update
      </Button>
            </Stack>
            </Box>
)}
    </div>
 )
}

export default SellerOneProduct