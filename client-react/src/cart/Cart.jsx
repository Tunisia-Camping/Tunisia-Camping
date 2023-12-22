import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/cart/getAllProduct')
      .then(response => {
        console.log('API Response:', response.data);
        const responseData = response.data || [];
        setCartItems(responseData);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteOneProduct = (productId) => {
    axios.delete(`/api/cart/deleteOneProduct/${productId}`)
      .then(response => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const handleDeleteAllProducts = () => {
    axios.delete('/api/cart/deleteAllProduct')
      .then(response => {
        setCartItems([]);
      })
      .catch(error => {
        console.error('Error deleting all products:', error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <div>
                <p>{item.name}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => handleDeleteOneProduct(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleDeleteAllProducts}>Clear Cart</button>
    </div>
  );
};

export default Cart;
