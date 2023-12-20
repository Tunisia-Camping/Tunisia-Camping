const translateRoute = require("express").Router();
const controller = require("../../controllers/controllerAdmin/translate.controller.admin");

translateRoute.get("/getAllClients", controller.getAllClients);
translateRoute.get("/getAllSellers", controller.getAllSellers);
translateRoute.get("/getAllProducts", controller.getAllProducts);
translateRoute.post("/addCategory", controller.addCategory);
translateRoute.put("/updateCategory", controller.updateCategory);


module.exports = translateRoute;
