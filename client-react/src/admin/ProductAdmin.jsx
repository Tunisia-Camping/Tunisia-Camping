
import React from 'react';
import axios from 'axios';
import './Admin.css';

const ProductAdmin = ({ product, onDeleteProduct }) => {
  const handleDelete = () => {
    
    axios.delete(`http://localhost:3000/admin/deleteProduct/${product.id}`)
      .then((res) => {
        console.log(res.data);
        
        onDeleteProduct();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="product-card">
      <img src={product.images} alt={product.name} />
      <h3>Name: {product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Available Units: {product.unit}</p>
      <p>Description: {product.description}</p>
      
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductAdmin;
