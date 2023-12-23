const { User, Product } = require("../../../database-mysql/index");
const bcrypt = require('bcrypt');

module.exports = {

  checkpassword:async (req,res)=>{
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
console.log(req.body.currentPassword,"currentr")
console.log(userInfo.password,"user")
              const isPasswordValid =  bcrypt.compare(req.body.currentPassword, userInfo.password);

              if (!isPasswordValid) {

          
                console.log("hi")
                return res.status(401).json({
                  status: 'error',
                  message: 'Incorrect current password',
                });
              }
              console.log(req.body.newPassword,"new")

  
              const hashedNewPassword = await bcrypt.hash(req.body.newPassword, 10);
              console.log(hashedNewPassword,"body")

              await User.update({
                firstName: req.body.firstName,
                email: req.body.email,
                password: hashedNewPassword,
                    adress:req.body.adress,
                    lastName:req.body.lastName

              }, {
                where: { id: userInfo.id }
              });
  
              res.json({
                status: 'success',
                message: 'Password updated successfully',
                data: {
                  user: userInfo,
                },
              });

              console.log("body")

              console.log("hi")
            } catch (error) {
         throw error
            }
  
        },

  ByCategory: async (req, res) => {
    try {
      const result = await Product.findAll({ where: { category: req.params.category } });
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send({ message: "Product not found in the specified category" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },


};
