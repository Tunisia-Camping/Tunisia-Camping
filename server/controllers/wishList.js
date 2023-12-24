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
 module.exports.addToCartFromWishlist = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = await Product.findOne({ where: { id: productId } });

    await Product.destroy({ where: { id: productId } });

    res.status(200).json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error('Error adding to cart from wishlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};