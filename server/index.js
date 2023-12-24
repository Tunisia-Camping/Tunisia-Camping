const express = require("express");
const cors = require("cors");
const conn = require("../database-mysql");
const translateRouteAdmin = require("./routes/routesAdmin/translate.route.admin");
const translateRoutewishList = require("./routes/wishListRoute");
const translateRouteClient1= require("./routes/Client1");
const translateRouteCart = require("./routes/CartRoute");
const translateRouteAuth = require("./routes/LoginAndResigter.routes/authRouters.js");
const SellerRoute = require ("./routes/SellerRoute.js")
const routerClients= require("./routes/routerclients2/router")
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use(cors());
app.use("/client1",translateRouteClient1);
app.use("/cart",translateRouteCart)
app.use("/auth", translateRouteAuth);
app.use("/admin", translateRouteAdmin);
app.use("/clients",routerClients)
app.use("/seller", SellerRoute)
app.use("/wishList", translateRoutewishList);
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

