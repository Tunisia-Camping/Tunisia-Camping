const express = require("express");
const cors= require ("cors")
const conn = require("../database-mysql");
const translateRouteAdmin = require("./routes/routesAdmin/translate.route.admin");


const app = express();
const PORT = 3000;
const routerSiler =require("./routes/SellerRoute")
const routerClients= require("./routes/routerclients2/router")
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/admin", translateRouteAdmin);
app.use("/clients",routerClients)
app.use("/seller",routerSiler)
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
