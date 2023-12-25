// ProductAdmin.jsx
import React from 'react';
import axios from 'axios';
import './Admin.css';

const ProductAdmin = ({ product, onDeleteProduct }) => {
  const handleDelete = () => {
    // You need to implement the actual delete request to the backend here
    axios.delete(`http://localhost:3000/admin/deleteProduct/${product.id}`)
      .then((res) => {
        console.log(res.data);
        // Trigger the parent component's function to refresh the product list
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
      {/* Add the delete button */}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductAdmin;
