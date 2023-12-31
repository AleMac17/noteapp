const noteDao = require('../daos/noteDao');

const getAllNotes = () => {
  return noteDao.getAllNotes();
};

const createNote = (noteData) => {
  return noteDao.createNote(noteData);
};

const deleteNote = (noteId) => {
  return noteDao.deleteNote(noteId);
};

const updateNote = (noteId, updatedFields) => {
  return noteDao.updateNote(noteId, updatedFields);
};

const toggleArchiveNote = (noteId, archive) => {
  return noteDao.toggleArchiveNote(noteId, archive);
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
  toggleArchiveNote,
};
