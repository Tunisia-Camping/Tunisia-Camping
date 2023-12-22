import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import ProductAdmin from './ProductAdmin';
import AddProduct from './AddProduct';
import Client from './Client'
import Seller from './Seller'

const AdminPage = () => {
  const [display, setDisplay] = useState('');
  const [clients, setClients] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [product, setProduct] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.all([
      axios.get('http://localhost:3000/admin/getAllClients'),
      axios.get('http://localhost:3000/admin/getAllSellers'),
      axios.get('http://localhost:3000/admin/getAllProducts'),
    ])
      .then(axios.spread((clientsResult, sellersResult, productsResult) => {
        setClients(clientsResult.data);
        setSellers(sellersResult.data);
        setProduct(productsResult.data);
      }))
      .catch((err) => {
        console.error(err);
      });
  }, [refresh]);

  const handleButtonClick = (category) => {
    switch (category) {
      case 'Clients':
        setDisplay(clients.map((client) => <Client key={client.id} client={client} />));
        break;
      case 'Sellers':
        setDisplay(sellers.map((seller) => <Seller key={seller.id} seller={seller} />));
        break;
      case 'Products':
        setDisplay(product.map((product) => <ProductAdmin key={product.id} product={product} />));
        break;
      case 'AddProduct':
        setDisplay(<AddProduct onAddProduct={() => setRefresh(!refresh)} />);
        break;
      default:
        setDisplay('');
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-dashboard">
        <button onClick={() => handleButtonClick('Clients')}>Clients</button>
        <button onClick={() => handleButtonClick('Sellers')}>Sellers</button>
        <button onClick={() => handleButtonClick('Products')}>Products</button>
        <button onClick={() => handleButtonClick('AddProduct')}>Add Product</button>
      </div>
      <div className="admin-content">
        <h2>Welcome Admin</h2>
        <div className="display-container">
          {display}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
