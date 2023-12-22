const translateRoute = require("express").Router();
const controllers = require("../../controllers/LoginAndResigterController/authController.js")

translateRoute.post("/add", controllers.AddUser);
translateRoute.post("/register", controllers.registerUser);
translateRoute.get("/get", controllers.GetUsers);
translateRoute.post("/login", controllers.loginUser);



module.exports = translateRoute;