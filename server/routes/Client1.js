const Client1Route = require("express").Router();
const Client1Controller = require("../controllers/Client1Controller.js");

Client1Route.get("/getAllProduct", Client1Controller.getAllProduct);
Client1Route.get("/searchProductByName/:name", Client1Controller.searchProductByName);

module.exports =Client1Route;