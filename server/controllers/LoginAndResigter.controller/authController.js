import {User} from "../../../database-mysql/index";


const AddUser = function (req, res) {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password:  req.body.password,
        role: req.body.role,
    })
      .then((result) => {
        res.status(200).send("created");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  };

  const GetUsers = function (req, res) {
    User.findAll()
    .then((result) => {
        res.status(200).send(result);
      })
    .catch((error) => {
        res.status(500).send(error);
      });
  };

  
  module.exports = {AddUser,GetUsers}