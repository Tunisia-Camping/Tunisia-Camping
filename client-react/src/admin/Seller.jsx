import React from 'react';
import './Admin.css';


const Seller = ({ seller, onEditRole }) => {
  const handleEditRole = () => {
    const newRole = seller.role === 'seller' ? 'client' : 'seller';
    onEditRole(seller.id, newRole);
  };

  return (
    <div className="product-card">
      <p>FirstName: {seller.firstName}</p>
      <p>LastName: {seller.lastName}</p>
      <p>Adress: {seller.adress}</p>
      <p>Password: {seller.password}</p>
      <p>Email: {seller.email}</p>
      <p>Role: {seller.role}</p>
      <button onClick={handleEditRole}>Edit Role</button>
    </div>
  );
};

export default Seller;
