const {Product,sequelize ,User} = require("../../database-mysql/index.js");

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
  Product.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.status(200).json({ message: 'Product deleted successfully' });
    })
    .catch((err) => {
      console.error('Error deleting product:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};
module.exports.deleteAllProduct = (req, res) => {
   Product.destroy({ where: {} })
     .then((result) => {
       res.status(200).json(result)
     })
     .catch((err) => {
       res.status(500).json({ error: err.message })
     })
 }

 module.exports.sendDiscountEmail = (req, res) => {
   const email = req.params.email;
 
   if (!email) {
     return res.status(400).json({ error: 'Please provide your email.' });
   }
 
   User.findOne({ where: { email } })
     .then((result) => {
       if (!result) {
         // Email not found in the database
         return res.status(404).json({ error: 'Unknown information. Email not found.' });
       }
 
       // Email found in the database
       res.status(200).json({ message: 'Discount email sent successfully.', user: result });
     })
     .catch((err) => {
       if (err.name === 'SequelizeDatabaseError') {
         // Handle specific database error (e.g., unknown column)
         console.error('Error checking email in the database:', err);
         res.status(500).json({ error: 'Internal Server Error', details: err.message });
       } else {
         // Handle other errors
         console.error('Error checking email in the database:', err);
         res.status(500).json({ error: 'Internal Server Error' });
       }
     });
 };
 

