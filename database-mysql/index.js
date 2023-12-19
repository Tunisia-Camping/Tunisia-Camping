const config = require("./config.js");
const { Sequelize, DataTypes } = require("sequelize");

// create a database connection in your application using a Sequelize instance and the config file
const connection = new Sequelize(
  "hello_world_db",
  "DATABASE_USERNAME",
  "DATABASE_PASSWORD",
  {
    host: "host_name",
    dialect: "mysql",
  }
);

//verify your connection here !
connection.authenticate();

//  create your table using sequilize loke: like this example manuelement mele5er
// const Phrase = connection.define("phrases", {
//   kor: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   eng: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   rom: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   status: {
//     type: DataTypes.ENUM("Not yet", "Almost", "Got it"),
//     allowNull: false,
//     defaultValue: "Not yet",
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: Sequelize.fn("NOW"),
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: Sequelize.fn("NOW"),
//   },
// });



// this call, Sequelize will automatically perform an SQL query to the database and create a table, printing the message phrase table created successfully!.
// please run this below *****one time***** after creating your connection

connection
  .sync({ force: true })
  .then(() => {
    console.log("db created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create db : ", error);
  });

// export your Model Phrase below
