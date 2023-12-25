import React, { useState, useEffect } from "react";
import './Wishlist.css';
import Navbar from "../user/edit/navbar.jsx";
import Footer from "../../footerHeader/Footer";
import Cookies from "js-cookie";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton'; // Import IconButton from Material-UI

const Wishlist = () => {
  const [postData, setPostData] = useState([]);
  const userId = Cookies.get('userId');

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(`http://localhost:3000/wishList/getProductsOfUserInWishList/${userId}`);
        const responseData = await response.json();
        console.log(responseData, "fdsmfd;ù");
        setPostData(responseData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchWishlist();
  }, [userId]); // Include userId in the dependency array to ensure useEffect is triggered when userId changes

  const handleDelete = async (productId) => {
    try {
      await fetch(`http://localhost:3000/wishList/deleteOneProductFromWishlist/${productId}`, {
        method: 'DELETE'
      });
      setPostData((prevData) => prevData.filter((product) => product.id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await fetch(`http://localhost:3000/wishList/deleteAllProductFromWishlist`, {
        method: 'DELETE'
      });
      setPostData([]);
    } catch (error) {
      console.error("Error deleting all products:", error);
    }
  };

  const handleAddToCart = (id) => {
    axios.post('http://localhost:3000/cart/add', { userId: userId, productId: id })
      .then(() => console.log('added to cart'))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <>
      <Navbar />
      <hr />
      <div className="divWishlist">
        <div className="divWishlist23">
          <div className="divWishlist24">Wishlist ({postData.length})</div>
          <div className="divWishlist25" onClick={handleDeleteAll}>
            Delete All
          </div>
        </div>

        <div className="divWishlist26">
          <div className="divWishlist27">
            <div className="columnWishlist">
              {postData.map((product) => (
                <div className="divWishlist28" key={product.id}>
                  <div className="deleteIconContainer">
                    <IconButton onClick={() => handleDelete(product.id)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </div>
                  <div className="divWishlist36">{product.product_name}</div>
                  <div className="divWishlist37">
                    <div className="divWishlist38">{product.price}</div>
                  </div>
                  <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Wishlist;




