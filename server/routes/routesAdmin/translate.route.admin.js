const translateRoute = require("express").Router();
const controller = require("../../controllers/controllerAdmin/translate.controller.admin");

translateRoute.get("/getAllClients", controller.getAllClients);
translateRoute.get("/getAllSellers", controller.getAllSellers);
translateRoute.get("/getAllProducts", controller.getAllSellers);


module.exports = translateRoute;
