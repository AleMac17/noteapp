const db = require('../config/dbConfig');

const getAllNotes = () => {
  return db.promise().query('SELECT * FROM notes');
};

const createNote = (noteData) => {
  return db
    .promise()
    .query('INSERT INTO notes SET ?', [noteData])
    .then((result) => {
      const insertedNoteId = result[0].insertId;

      return db
        .promise()
        .query('SELECT * FROM notes WHERE id = ?', [insertedNoteId]);
    })
    .then((selectedResult) => {
      const insertedNote = selectedResult[0][0];
      return insertedNote;
    })
    .catch((error) => {
      throw error;
    });
};

const deleteNote = async (noteId) => {
  try {
    return await db
      .promise()
      .query('DELETE FROM notes WHERE id = ?', [noteId]);
  } catch (error) {
    throw error;
  }
};

const updateNote = async (noteId, updatedFields) => {
  try {
    const query =
      'UPDATE notes SET title = ?, text = ?, category_id = ? WHERE id = ?';
    const values = [
      updatedFields.title,
      updatedFields.text,
      updatedFields.category_id,
      noteId,
    ];

    await db.promise().query(query, values);

    const selectQuery = 'SELECT * FROM notes WHERE id = ?';
    const selectValues = [noteId];
    const selectedResult = await db
      .promise()
      .query(selectQuery, selectValues);
    const updatedNote = selectedResult[0][0];

    return updatedNote;
  } catch (error) {
    throw error;
  }
};

const toggleArchiveNote = async (noteId, archive) => {
  try {
    const query = 'UPDATE notes SET isArchived = ? WHERE id = ?';
    const values = [archive, noteId];
    return await db.promise().query(query, values);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
  toggleArchiveNote,
};
