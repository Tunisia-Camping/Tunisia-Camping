// WishList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from '../cart/Cart.jsx';
import './wishlist.css';

function WishList({ user = {} }) {
  const [loggedId, setLoggedId] = useState(user.id || '');
  const [wish, setWish] = useState([]);
  const { addToCart } = Cart();

  useEffect(() => {
    if (user.id) {
      axios
        .get(`http://localhost:3000/wishList/getAllProduct`)
        .then((result) => {
          const wishPromises = result.data.map((wish) => {
            return axios.get(`http://localhost:3000/wishList/getOneProduct/${wish.ProductId}`);
          });

          Promise.all(wishPromises)
            .then((responses) => {
              const productsData = responses.map((response) => response.data);
              setWish(productsData);
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user.id]);

  const handleAddToCartFromWishlist = (productId) => {
    if (loggedId) {
      addToCart(productId);
    } else {
      alert('Please login first');
    }
  };

  const handleDeleteFromWishlist = (productId) => {
    const updatedWish = wish.filter((wish) => wish.id !== productId);
    setWish(updatedWish);
  };

  const handleGetAllFromWishlist = () => {
    const wishlistItems = wish.map((product) => (
      <div key={product.id} className="wishlist-item">
        <img src={product.imageUrl[0]} alt={product.productName} />
        <h3>{product.productName}</h3>
        <p>{product.price}</p>
        <button onClick={() => handleAddToCartFromWishlist(product.id)}>
          Add to Cart
        </button>
        <button onClick={() => handleDeleteFromWishlist(product.id)}>
          Remove
        </button>
      </div>
    ));

    // Render the wishlist items
    return (
      <div>
        <h2>All Products in Wishlist</h2>
        {wishlistItems}
      </div>
    );
  };

  return (
    <div>
      <div className="allWish">
        <div>
          <div className="wishAndBtn">
            <span>Wishlist({wish.length})</span>
          </div>
        </div>
        <div className="allprod">
          {wish.map((product) => (
            <div className="product-container" key={product.id}>
              <div className="product-image">
                <img src={product.imageUrl[0]} alt={product.productName} />
                <button className="buy-button" onClick={() => handleAddToCartFromWishlist(product.id)}>
                  Add To Cart
                </button>
              </div>
              <div className="product-details">
                <div className="product-name">{product.productName}</div>
                <div className="product-price">{product.price}</div>
                <div className="wishlist-buttons">
                  <button onClick={() => handleAddToCartFromWishlist(product.id)}>Add to Cart</button>
                  <button onClick={() => handleDeleteFromWishlist(product.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="wishAndBtn">
          <div className="sqandtxt">
            <div className="square"></div>
            <h2 className="jfy">just for you</h2>
          </div>
          <button onClick={() => handleGetAllFromWishlist()} className="wishbtn">See All</button>
        </div>
        <div className="allprod">{/* Other products */}</div>
      </div>
    </div>
  );
}

export default WishList;

