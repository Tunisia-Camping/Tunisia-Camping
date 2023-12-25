import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './wishList.css';
import Header from '../../footerHeader/Header.jsx';
import Footer from '../../footerHeader/Footer.jsx';

const WishList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:3000/wishList/getAllProduct')
      .then(response => {
        if (response.data && Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error('Unexpected response format from the server:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching wishlist products:', error);
      });
  };

  const handleGetOne = (productId) => {
    axios.get(`http://localhost:3000/wishList/getOneProduct/${productId}`)
      .then(response => {
        console.log('Product details:', response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  };

  const handleDeleteOne = (productId) => {
    axios.delete(`http://localhost:3000/wishList/${productId}`)
      .then(response => {
        console.log('Product deleted successfully:', response.data);
        fetchProducts(); // Refresh the product list after deletion
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const handleDeleteAll = () => {
    axios.delete('http://localhost:3000/wishList/deleteAllProduct')
      .then(response => {
        console.log('All products deleted successfully:', response.data);
        setProducts([]); // Clear the products array after deleting all products
      })
      .catch(error => {
        console.error('Error deleting all products:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className="allWish">
        {/* Your existing JSX code for displaying wishlist */}
        {/* ... */}

        {/* Example of rendering products from the fetched data */}
        <div className="allprod">
          {products.map(product => (
            <div className="product-container" key={product.id}>
              <div className="product-image">
                <img src={product.imageUrl} alt={product.name} />
                <button className="buy-button">AddToCart</button>
              </div>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">{`$${product.price}`}</div>
                <div>
                  <button onClick={() => handleGetOne(product.id)}>Get Details</button>
                  <button onClick={() => handleDeleteOne(product.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ... */}
        <div>
          <button onClick={handleDeleteAll}>Delete All</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishList;
