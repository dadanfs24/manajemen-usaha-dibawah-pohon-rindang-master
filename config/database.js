const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "admin",
  password: "Admin123+-",
  database: "manajemen_keuangan",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
