const {Product,sequelize} = require("../../database-mysql/index.js");
module.exports. getAllProduct = (req, res) => {
 Product.findAll()
 .then((result)=>{
    res.status(200).send(result)
 })
 .catch((err)=>{
  res.status(500).send(err)
 })
};

module.exports.searchProductByName = (req, res) => {
  const {name} = req.params
  console.log(req.params.name);
  Product.findOne({where:{name}})
  .then((result)=>{
     res.status(200).send(result)
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
};
module.exports.searchProductBycategory = (req, res) => {
  const {category} = req.params
  console.log(req.params.category);
  Product.findAll({where:{category}})
  .then((result)=>{
     res.status(200).send(result)
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
}
