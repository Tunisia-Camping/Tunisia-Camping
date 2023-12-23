const CartRoute = require("express").Router();
const CartController = require("../controllers/cartController.js");

CartRoute.get("/getAllProduct",CartController.getAllProduct);
CartRoute.get("/getOneProduct/:id",CartController.getOneProduct);
CartRoute.delete("/deleteOneProduct/:id",CartController.deleteOneProduct);
CartRoute.delete("/deleteAllProduct",CartController.deleteAllProduct);

module.exports =CartRoute;