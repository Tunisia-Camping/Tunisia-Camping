const express = require("express");

const conn = require("../database-mysql");
const translateRoute = require("./routes/translate.route");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/../react-client/dist"));

app.use("/api/product", translateRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
