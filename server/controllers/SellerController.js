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
 Product.create({
   name:req.body.name,
   price:req.body.price,
   description:req.body.description,
   unit:req.body.unit,
   category:req.body.category,
   images:req.body.images
 })
 .then((result)=>{
   res.status(200).send("Product created")
 })
 .catch((err)=>{
   res.status(500).send(err)})
};

const updateProduct = (req, res) => {
  Product.update({
   name:req.body.name,
   price:req.body.price,
   description:req.body.description,
   unit:req.body.unit,
   category:req.body.category,
   images:req.body.images
 })
 .then((result)=>{
   res.status(200).send("Product created")
 })
 .catch((err)=>{
   res.status(500).send(err)})
};

const remove = (req, res) => {
  Product.destroy(req.params.id)
  .then((result)=>{
   res.status(200).send("product removed")
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
};

const updateProfile = (req, res) => {
 User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:  req.body.password,
 })
 .then((result)=>{
   res.status(200).send("profile updated")
  })
  .catch((err)=>{
   res.status(500).send(err)
  })
};

module.exports={getAll, add, updateProduct, remove, updateProfile}
