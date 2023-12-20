require('dotenv').config()
console.log(typeof(process.env.PASS)) 
module.exports = {
  host: "localhost",
  user: process.env.NAME,
  password: process.env.PASS,
  database: "tunisiacamping",
};
