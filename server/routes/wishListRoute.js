const wishListRoute = require("express").Router();
const wishListController = require("../controllers/wishList.js");

wishListRoute.get("/getAllProduct",wishListController.getAllProduct);
wishListRoute.get("/getOneProduct/:id",wishListController.getOneProduct);
wishListRoute.delete("/deleteOneProduct/:id",wishListController.deleteOneProduct);
wishListRoute.delete("/deleteAllProduct",wishListController.deleteAllProduct);

module.exports =wishListRoute;