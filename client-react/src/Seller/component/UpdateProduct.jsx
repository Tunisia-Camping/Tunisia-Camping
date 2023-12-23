import { useState } from "react"
import "./cssFiles/UpdateProduct.css"
import axios from "axios"


const UpdateProduct=({oneProduct})=>{
    
    const [name, setName] = useState("")
    const [price, setPrice] = useState (0)
    const [description, setDescription] = useState("")
    const [unit, setUnit] = useState(0)
    const [category, setCategory] = useState("Tent")
    const [refresh, setRefresh] = useState(false)
    
    
   
    const obj={
        name:name,
        price:price,
        description:description,
        unit:unit,
        category:category,
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

    return (
        <div className="container">
          <h2>Update Product Details</h2>
          <form >
          <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
         
            <div className="form-group">
              <label>Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
    
            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
    
            <div className="form-group">
              <label>Unit:</label>
              <input
                type="number"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </div>
    
            <div className="form-group">
           <label>Category:</label>
           <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Tent">Tent</option>
             <option value="Sleepingbags">Sleeping bags</option>
             <option value="Campingpillow">Camping pillow</option>
            <option value="flashlights">Flashlights</option>
            <option value="Campchairs">Camp chairs</option>
            <option value="Camptable">Camp table</option>
            <option value="Lantern">Lantern</option>
           </select>
            </div>
            <button type="submit" onClick={()=>{modify(oneProduct.id)}}>Update Product</button>
          </form>
        </div>
      );
}

export default UpdateProduct