import React, { useState } from 'react';
import axios from 'axios';
import './Admin.css';

const AddProduct = ({ onAddProduct, setRefresh , refresh}) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productUnits, setProductUnits] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const addProduct = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'project');

    try {
      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/ds3tmq5iw/image/upload', formData);

      const newProduct = {
        name: productName,
        price: productPrice,
        category: productCategory,
        unit: productUnits,
        description: productDescription,
        images: cloudinaryResponse.data.secure_url,
      };

      await axios.post('http://localhost:3000/admin/addProduct', newProduct);
      setRefresh(!refresh)
      onAddProduct(newProduct);

      setProductName('');
      setProductPrice('');
      setProductCategory('');
      setProductDescription('');
      setProductUnits('');
      setSelectedFile(null);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-product-container">
      <label>Name:</label>
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />

      <label>Price:</label>
      <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />

      <label>Category:</label>
      <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />

      <label>Units:</label>
      <input type="text" value={productUnits} onChange={(e) => setProductUnits(e.target.value)} />

      <label>Description:</label>
      <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />

      <label className="form-label">Image:</label>
      <input className="form-control" type="file" onChange={handleImageChange} />

      {selectedFile && <p>Selected File: {selectedFile.name}</p>}

      <button onClick={addProduct}>ADD Now</button>
    </div>
  );
};

export default AddProduct;
