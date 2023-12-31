const noteService = require('../services/noteService');

const getAllNotes = async (req, res) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json(notes[0]);
  } catch (error) {
    console.error('Error in getAllNotes:', error);
    res.status(500).json({ error: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const newNote = await noteService.createNote(req.body);
    res.json(newNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;

  try {
    const deletedNote = await noteService.deleteNote(noteId);
    if (deletedNote) {
      res.json({ message: 'Note deleted successfully' });
    } else {
      res.status(404).json({ error: 'Note not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { title, text, category_id } = req.body;

  try {
    const updatedNote = await noteService.updateNote(noteId, {
      title,
      text,
      category_id,
    });
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const toggleArchiveNote = async (req, res) => {
  const noteId = req.params.id;
  const archive = req.body.isArchived;
  try {
    await noteService.toggleArchiveNote(noteId, archive);
    res.json({
      message: 'Note archive status updated successfully',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  deleteNote,
  updateNote,
  toggleArchiveNote,
};
