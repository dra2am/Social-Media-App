//set up connection to mysql
//using mysql2 due to err code: 'ER_NOT_SUPPORTED_AUTH_MODE',
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '679604',
  database: 'all_curls'
});

// test the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database!");
});

module.exports = connection;
