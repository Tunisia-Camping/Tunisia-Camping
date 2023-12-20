require('dotenv').config()

module.exports = {
  host: "localhost",
  user: process.env.NAME,
  password: process.env.PASS,
  database: "tunisiacamping",
};
