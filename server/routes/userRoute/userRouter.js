const translateRoute = require("express").Router();

const userController = require("../../controllers/UserController/user.js");

    translateRoute.put("/edit/:id",userController.updateOneUser); 

module.exports=translateRoute;