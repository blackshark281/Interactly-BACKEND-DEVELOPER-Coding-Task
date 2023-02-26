const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contact_db",
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database!");
});

module.exports = db;
