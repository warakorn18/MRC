const mysql = require("mysql2");

const ConnectDB = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "mt900db",
},console.log('Connected MT900_Server'));

// const ConnectDB = async () => {
//   try {
//     mysql.createConnection({
//       user: "mt900_admin",
//       host: "163.50.57.176",
//       password: "Admin!@#",
//       database: "mt900db",
//     })
//     console.log('Connected MT900Server');
//   } catch (err) {
//     console.log(err);
//   }
// };
module.exports = ConnectDB;
