const express = require('express');
const noteController = require('../controllers/noteController');
const router = express.Router();

router
  .get('/', noteController.getAllNotes)
  .post('/', noteController.createNote)
  .delete('/:id', noteController.deleteNote)
  .put('/:id', noteController.updateNote)
  .patch('/:id/archive', noteController.toggleArchiveNote);

module.exports = router;
