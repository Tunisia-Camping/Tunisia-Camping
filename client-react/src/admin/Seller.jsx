import React from 'react';
import './Admin.css';

const Seller = ({ seller }) => {
    console.log(seller)
  return (
    <div className="product-card">
      
      <p>FirstName: {seller.firstName}</p>
      <p>LastName: {seller.lastName}</p>
      <p>Adress: {seller.adress}</p>
      <p>Password: {seller.password}</p>
      <p>Email :{seller.email}</p>
      <p>Role :{seller.role}</p>
    </div>
  );
};

export default Seller;