const express = require('express');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

router
  .get('/categories', categoryController.getAllCategories)
  .post('/categories', categoryController.createCategory)
  .delete('/categories/:id', categoryController.deleteCategory);

module.exports = router;
