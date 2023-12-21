

const {User,Product } = require("../../../database-mysql/index");


module.exports={

      UpdateClients:async (req,res)=>{
          try {
              const userInfo = await User.findOne({
                where: {
                  email: req.body.email,
                }
              });
  
              if (!userInfo) {
                return res.status(404).json({
                  status: 'error',
                  message: 'User not found',
                });
              }
  
              const isPasswordValid = await bcrypt.compare(req.body.currentPassword, userInfo.password);
  
              if (!isPasswordValid) {
                return res.status(401).json({
                  status: 'error',
                  message: 'Incorrect current password',
                });
              }
  
              const hashedNewPassword = await bcrypt.hash(req.body.newPassword, 10);
  
              await User.update({
                firstName: req.body.firstName,
                email: req.body.email,
                password: hashedNewPassword,
                lastName: req.body.lastName,
                adress:req.body.adress
                
              }, {
                where: { email: userInfo.email }
              });
  
              res.json({
                status: 'success',
                message: 'Password updated successfully',
                data: {
                  user: userInfo,
                },
              });
            } catch (error) {
              console.error(error);
              res.status(500).json({
                status: 'error',
                message: 'Internal server error',
              });
            }
  
        },
   ByCategory: async (req, res) => {
  try {
    const result = await Product.findAll({where:{ category: req.params.category }});
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send({ message: "Product not found in the specified category" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
}
      
      }