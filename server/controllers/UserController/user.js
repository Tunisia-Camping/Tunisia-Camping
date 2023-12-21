const {User} = require('../../../database-mysql/index')

const updateOneUser = (req, res) => {
    console.log(req.body);
    User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email ,
        adress : req.body.address
      },
      {
        where: {
          id: req.params.id,

        },
      }
    )
      .then((result) => {
        res.status(200).send("updated");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };
  
  const deleteOneUser = (req, res) => {
    User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((result) => {
        res.status(200).send("deleted");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  module.exports={updateOneUser}