const mysql = require('mysql2');

const categorySchema = {
  name: 'VARCHAR(255)',
};

const Category = mysql.model('Category', categorySchema);

module.exports = Category;
