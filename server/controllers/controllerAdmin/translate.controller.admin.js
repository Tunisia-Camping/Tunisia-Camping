// require your Model phrase here
const {User,Product,sequelize } = require("../../../database-mysql/index");


// module.exports.isAdmin=(req,res,next)=>{
//   if(req.user&&req.user.role==="admin"){
//     next()
//   }else{
//     res.status(403).json("Admin access required")
//   }
// }

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
module.exports.addCategory=(async (req,res)=>{
  const {newCategory}=req.body;

  try{
    await Product.create({category:newCategory})
    res.json('Category added successfully')
  } catch(err){
    console.error(err);
    res.status(500).json(err);
  }
})

module.exports.updateCategory=(async(req,res)=>{
  const {categoryId}=req.params
  const {updatedCategory}=req.body
  try{
    await sequelize.transaction(async (t) => {
      await Product.update(
        { category:updatedCategory},
        { where:{category: categoryId}},
        {transaction:t}
      )
    })

    res.json('Category updated successfully');
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



