const conn= require('../../database-mysql/index')
 
const getAll = (req, res) => {
 Product.findAll()
 .then((result)=>{
    res.status(200).send(result)
 })
 .catch((err)=>{
  res.status(500).send(err)
 })
};

const add = (req, res) => {
 Product.create()
};

const updateProduct = (req, res) => {
  
};

const remove = (req, res) => {
  
};

const updateProfile = (req, res) => {
 
};

module.exports={getAll, add, updateProduct, remove, updateProfile}
