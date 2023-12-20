// require your Model phrase here
const {User,Product} = require("../../../database-mysql/index");


module.exports.getAllClients=(async(req,res)=>{
  try{
    const clients=await User.findAll({
      where:{role:'client'},
    })
    res.json(clients)
  } 
  catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})
module.exports.getAllSellers=(async(req,res)=>{
  try{
    const sellers=await User.findAll({
      where:{role:'seller'},
    })
    res.json(sellers)
  } 
  catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})
module.exports.getAllProducts=(async(req,res)=>{
  try{
    const products=await Product.findAll()
    res.json(products)
  } catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})
module.exports.addProduct=(async(req,res)=>{
  const {name,price,description,unit,category,images}=req.body

  try{
    console.log(req.body);

    const newProduct = await Product.create({
      name,
      price,
      description,
      unit,
      category,
      images,
    });

    console.log(newProduct); 

    res.json({product:newProduct})
  } catch(err){
    console.error(err) 
    res.status(500).json(err)
  }
});
module.exports.updateProduct=(async(req,res)=>{

  const{name,price,description,unit,category,images}=req.body

  try{
    console.log(req.params.id)
    const currentProduct=await Product.findByPk(req.params.id)
    if(!currentProduct){
      return res.status(404).json('Product not found')
    }  
    currentProduct.name = name;
    currentProduct.price = price;
    currentProduct.description = description;
    currentProduct.unit = unit;
    currentProduct.category = category;
    currentProduct.images = images;

    await currentProduct.save()
    console.log(currentProduct)

    res.json(currentProduct)
  } catch(err){
    console.error(err)
    res.status(500).json(err)
  }
})

module.exports.deleteProduct=(async(req,res)=>{
  try{
    console.log(req.params.id);
    const currentProduct = await Product.findByPk(req.params.id)
    if(!currentProduct){
      return res.status(404).json('Product not found')
    }
    await currentProduct.destroy()
    console.log(currentProduct)
    res.json('Product deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})




