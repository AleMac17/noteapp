const categoryService = require('../services/categoryService');

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.json(categories);
  } catch (error) {
    console.error('Error in getAllCategories:', error);
    res.status(500).json({ error: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    res.json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const deletedCategory = await categoryService.deleteCategory(
      categoryId
    );

    if (deletedCategory) {
      const updatedCategories = await categoryService.getAllCategories();

      res.json({
        message: 'Category deleted successfully',
        categories: updatedCategories,
      });
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
};
