const express = require("express");
const cors= require ("cors")
const conn = require("../database-mysql");
const translateRouteAdmin = require("./routes/routesAdmin/translate.route.admin");
const translateRouteAuth= require("./routes/LoginAndResigter.routes/authRouters.js")
const translateRouteUser= require("./routes/userRoute/userRouter.js")

const app = express();
app.use(express.static(__dirname + "/../react-client/dist"));

const PORT = 3000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use("/auth", translateRouteAuth);
app.use("/admin", translateRouteAdmin);
app.use("/user", translateRouteUser);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
