import React from 'react';
import './Admin.css';


const Client = ({ client, onEditRole }) => {
  const handleEditRole = () => {
    const newRole = client.role === 'seller' ? 'client' : 'seller';
    onEditRole(client.id, newRole);
  };

  
  return (
    <div>
   
    <div className="product-card">
      <p>FirstName: {client.firstName}</p>
      <p>LastName: {client.lastName}</p>
      <p>Adress: {client.adress}</p>
      {/* <p>Password: {client.password}</p> */}
      <p>Email: {client.email}</p>
      <p>Role: {client.role}</p>
      <button onClick={handleEditRole}>Edit Role</button>
    </div>
    </div>
  );
};

export default Client;
