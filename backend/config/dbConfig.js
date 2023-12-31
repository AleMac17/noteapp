const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ale123',
  database: 'notedb',
});

module.exports = db;
