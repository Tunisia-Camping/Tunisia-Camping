const express = require("express");
const cors= require ("cors")
const conn = require("../database-mysql");
const SellerRoute = require("./routes/SellerRoute.js");

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/api/seller", SellerRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
