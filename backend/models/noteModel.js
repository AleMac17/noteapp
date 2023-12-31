const mysql = require('mysql2');

const noteSchema = {
  title: 'VARCHAR(255)',
  text: 'TEXT',
  isArchived: 'BOOLEAN',
  category_id: 'INT',
};

const Note = mysql.model('Note', noteSchema);

module.exports = Note;
