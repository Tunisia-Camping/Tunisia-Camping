import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../footerHeader/Footer.jsx';
import "./cart.css"


const Cart = () => {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Replace the empty string with the correct URL for fetching product data
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

  const handleAddToCart = (productId) => {
    const updatedProducts = [...products, productId];
    setProducts(updatedProducts);
    // Add your logic to handle adding a product to the cart
  };

  const handleDeleteOne = (productId) => {
    axios
      .delete(`http://localhost:3000/Cart/deleteOneProduct/${productId}`)
      .then((response) => {
        console.log(response.data);
        // After deleting, fetch the updated product list
        axios.get('http://localhost:3000/Cart/getAllProduct')
          .then(response => {
            setProducts(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
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
        alert("you will receive your order between 24 and 48 hours"); 
        // After deleting all, set products to an empty array
        setProducts([]);
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

  const handleSend = async () => {
    if (!userEmail) {
      // Email is empty
      alert('Please enter your email.');
    } else {
      try {
        const response = await axios.post(`http://localhost:3000/Cart/sendDiscountEmail/${userEmail}`);
    
        if (response.status === 200) {
          // Email exists in the database, and discount email sent successfully
          alert('Please check your email for confirmation.');
        } else {
          // Unexpected response status
          alert('Unexpected error. Please try again later.');
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Email not found in the database
          alert('Unknown information. Email not found.');
        } else {
          // Other error
          console.error('Error sending discount email:', error);
          alert('Error sending discount email. Please try again later.');
        }
      }
    }
  };

  return (
    <div>
  
      <div className="flexy">
        <div className="cart-container">
          <table className="cart">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(products) && products.map((product) => (
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
          </div>
        </div>
      </div>
      <div className="vl"></div>
      <div className="wrapper">
        <div className="box">
          <h4 className="title">Cart Total:</h4>
          <div className="center">
            <h5 className="center">Insert your Email And Get your Discount:</h5>
            <input
              className="inp"
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button className="but" onClick={handleSend}>Send</button>
          </div>
          <br /><br />
          <div className="left">Subtotal: {calculateGrandTotal()} DT</div>
          <div className="left">Shipping: Free</div>
          <div className="right">Total: {calculateGrandTotal()} DT</div>
          <button className="but" onClick={handleDeleteAll}>BUY</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
