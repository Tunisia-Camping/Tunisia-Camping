const {Product,sequelize } = require("../../database-mysql/index.js");
 
module.exports.getAllProduct = (req, res) => {
 Product.findAll()
 .then((result)=>{
    res.status(200).send(result)
 })
 .catch((err)=>{
   console.log(err);
  res.status(500).send(err)
 })
};

module.exports.getOneProduct = (req, res) => {
 Product.findOne({where:{id:req.params.id}})
 .then((result)=>{
    res.status(200).send(result)
 })
 .catch((err)=>{
  res.status(500).send(err)
 })
}
module.exports.deleteOneProduct = (req, res) => {
 Product.destroy({where:{id:req.params.id}})
 .then(() => {
   res.status(200).json({ message: 'product deleted successfully' })
 })
 .catch((err) => {
   console.error('Error deleting product:', err);
   res.status(500).json({ error: 'Internal Server Error' })
 })
}
module.exports.deleteAllProduct = (req, res) => {
   Product.destroy({ where: {} })
     .then((result) => {
       res.status(200).json(result)
     })
     .catch((err) => {
       res.status(500).json({ error: err.message })
     })
 }