import React from 'react';
import './Admin.css';

const Client = ({ client }) => {
    console.log(client)
  return (
    <div className="product-card">
      
      <p>FirstName: {client.firstName}</p>
      <p>LastName: {client.lastName}</p>
      <p>Adress: {client.adress}</p>
      <p>Password: {client.password}</p>
      <p>Email :{client.email}</p>
      <p>Role :{client.role}</p>
    </div>
  );
};

export default Client;