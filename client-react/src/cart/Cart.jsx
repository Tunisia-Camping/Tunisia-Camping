import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css'; // Import your custom CSS file
import Header from '../../footerHeader/Header.jsx';
import Footer from '../../footerHeader/Footer.jsx';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/Cart/getAllProduct')
      .then(response => {
        setProducts(response.data);
        const initialQuantities = {};
        response.data.forEach(product => {
          initialQuantities[product.id] = 1;
        });
        setQuantities(initialQuantities);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteOne = (productId) => {
    axios
      .delete(`http://localhost:3000/Cart/deleteOneProduct/${productId}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  const handleDeleteAll = () => {
    axios
      .delete('http://localhost:3000/Cart/deleteAllProduct')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error deleting all products:', error);
      });
  };

  const handleQuantityChange = (productId, quantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: quantity
    }));
  };

  const calculateTotalPrice = (product) => {
    return product.price * quantities[product.id];
  };

  const calculateGrandTotal = () => {
    return products.reduce((total, product) => {
      return total + calculateTotalPrice(product);
    }, 0);
  };

  const handlePlaceOrder = () => {
    alert('You will receive your order between 24 and 48 hours.');
  };

  return (
    <div>
      <Header />
      <div className="cart-container">
        <table className="cart">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img className="image" src={`data:image/jpeg;base64,${product.image}`} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price} DT</td>
                <td>
                  <button
                    onClick={() => handleQuantityChange(product.id, quantities[product.id] - 1)}
                    disabled={quantities[product.id] <= 1}
                  >
                    -
                  </button>
                  <span>{quantities[product.id]}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, quantities[product.id] + 1)}
                  >
                    +
                  </button>
                </td>
                <td>{calculateTotalPrice(product)} DT</td>
                <td>
                  <button onClick={() => handleDeleteOne(product.id)}>Delete Item</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="summary-box">
          <p>Total: {calculateGrandTotal()} DT</p>
          <button className="bn14" onClick={handlePlaceOrder}>Place Order</button>
          <button className="bn14" onClick={handleDeleteAll}>Cancel Order</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
