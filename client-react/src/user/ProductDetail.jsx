import "./ProductDetails.css";
import React, { useState } from "react";
import { Link,useLocation } from "react-router-dom";

import Ps5Controller from "../assets/googlePlay.png";
import Ps5Controller1 from "../assets/googlePlay.png";
import Ps5Controller2 from"../assets/googlePlay.png";
import Ps5Controller3 from"../assets/googlePlay.png";
import Ps5Controller4 from"../assets/googlePlay.png";
import Star from "../assets/Vector.svg";
import WishListIcon from "../assets/Wishlist.svg";
import ReturnIcon from "../assets/icon-delivery.svg";
import SendIcon from "../assets/icon-delivery.svg"
function ProductsDetails() {
const [quantity,setQuantity]=useState(1)
const location = useLocation();
  const product = location.state 
console.log(location.state,"ee")
// const averageRating =
//     rating.length > 0
//       ? rating.reduce(
//           (acc, curr) => acc + curr.rating * 1,

//           0
//         ) / rating.length
//       : 0;

//   const renderStars = () => {
//     const stars = [];
//     const roundedRating = Math.round(averageRating);

//     for (let i = 0; i < 5; i++) {
//       if (i < roundedRating) {
//         stars.push(<Star key={i} style={styles.star} source={Star} />);
//       } else {
//         stars.push(<Star key={i} style={styles.star} source={emptyStar} />);
//       }
//     }

//     return stars;
//   }; 

  return (
    <div className="ProductDetails">
      <div className="ProductDetails_header">
        <div className="ProductDetails_gallery">
          <div className="vertical_gallery">
            <img src={product.images[0].url} alt="" />
            <img src={product.images[1].url}alt="" />
            <img src={product.images[2].url} alt="" />
            <img src={product.images[0].url} alt="" />
          </div>
          <div className="main_product">
            <img src={product.images[2].url} alt="" />
          </div>
        </div>
        <div className="ProductDetails_Info">
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
              <p id="reviews_counter">(150 Reviews)</p>
              <p id="availibilty">In Stock</p>
            </div>
            <p id="price">${product.price*quantity}</p>
            <p id="description">
             {product.description}
            </p>
          </div>
          <div className="buttons">
            <div id="colorChoice">
              <p>Colors: </p>
              <div id="blue">
                <div></div>
              </div>
              <div id="red">
                <div></div>
              </div>
            </div>
         
            <div id="cuantity">
            <div className="cuantity_counter">
  <button id="minest">-</button>
  <input style={{color: "black"}} onChange={(e)=>setQuantity(e.target.value)} type="number" id="num" step="1"/>
  <button id="plus">+</button>
</div>

              <button id="add">Add To Cart</button>
              <div className="wishList">
                <img src={WishListIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="shipping">
            <div className="rect1">
              <img src={ReturnIcon} alt="" />
              <div className="containerr">
                <p id="free">Free Delivery</p>
                <p id="free_desc">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="rect2">
              <img src={SendIcon} alt="" />
              <div className="containerr">
                <p id="return">Return Delivery</p>
                <p id="return_desc">
                  Free 30 Days Delivery Returns. <span>Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </div>
  );
}

export default ProductsDetails;