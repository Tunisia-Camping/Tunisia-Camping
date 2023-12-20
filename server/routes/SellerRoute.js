const SellerRoute = require("express").Router();
const SellerController = require("../controllers/SellerController.js");

SellerRoute.get("/getAllProduct/:id", SellerController.getAll);
SellerRoute.post("/addProduct", SellerController.add);
SellerRoute.put("/updateProduct/:id", SellerController.updateProduct);
SellerRoute.delete("/removeProduct/:id",  SellerController.remove);
SellerRoute.put("/updateProfile", SellerController.updateProfile)

module.exports =SellerRoute;
