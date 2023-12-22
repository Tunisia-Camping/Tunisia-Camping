import React from 'react';
import './Admin.css';

const ProductAdmin = ({ product }) => {
    console.log(product)
  return (
    <div className="product-card">
      <img src={product.images} alt={product.name} />
      <h3>Name: {product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Available Units: {product.unit}</p>
      <p>Description :{product.description}</p>
    </div>
  );
};

export default ProductAdmin;
