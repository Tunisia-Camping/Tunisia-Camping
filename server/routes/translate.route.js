const translateRoute = require("express").Router();
const controller = require("../controllers/translate.controller");






translateRoute.get("/hello", controller.getAll);

module.exports = translateRoute;
