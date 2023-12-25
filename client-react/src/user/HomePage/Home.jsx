import "./Home.css";
import  {useEffect, useState} from "react";
import axios from "axios"
import Star from "../../assets/Vector.svg";
import NavBar from '../edit/navbar'
 

 function Home({handleClick}){
  const [data, setData] = useState([]);
  console.log(data);
  const [showAllProducts, setShowAllProducts] = useState(false);

  
  const ByCategory = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/clients/productByCategory/${category}`
      );
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };

  
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/seller/getAll"
      );
      setData(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayedProducts = showAllProducts ? data : data.slice(0, 6);

  return (
    <div>
    <NavBar/>

 <div  className="homePage" >  
  <div   className="startOfthepage">
    <div  className="category">
<h4  onClick={()=>{ByCategory("Tent")}}>Tent</h4>
<h4  onClick={()=>{ByCategory("Sleeping bags")}}>Sleeping bags</h4>
<h4 onClick={()=>{ByCategory("Camping pillow")}}>Camping pillow</h4>
<h4 onClick={()=>{ByCategory("flashlights")}}>flashlights</h4>
<h4 onClick={()=>{ByCategory("Camp chairs")}}>Camp chairs</h4>
<h4 onClick={()=>{ByCategory("Camp chairs")}} >Camp table</h4>
<h4>Lantern</h4>

    </div>
    <div className="pub">
{ <img    style={{width:"1000px",height:"500px"}} src="https://i.imgur.com/G0GeFGh.png"alt="" /> }
    </div>
  </div>


  <div className="productContainer">
        {displayedProducts.map((product) => (
          <div key={product.id} className="productCard">
  
  <img   onClick={()=>{
    handleClick(product)
  }} src={product.images[0] }/>

           <div className="Details">
            <p id="Product_Title">{product.name}</p>
            <div className="Details_reviews">
              <div id="reviews">
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
                <img src={Star} alt="" />
              </div>
              <p id="availibilty">In Stock</p>
            </div>
            <p    id="price">${product.price}</p>
            </div>
            {/* <Link to={`/product/${product.id}`}>View Details</Link> */}
          </div>
        ))}
      </div>
      {!showAllProducts && (
        <button   id="add" onClick={() => setShowAllProducts(true)}>View All</button>
      )}
 </div>
 </div>
 



)}
 export default Home