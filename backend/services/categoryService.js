const categoryDao = require('../daos/categoryDao');

const getAllCategories = async () => {
  try {
    const categories = await categoryDao.getAllCategories();
    return categories;
  } catch (error) {
    throw error;
  }
};

const createCategory = async (categoryData) => {
  try {
    const newCategory = await categoryDao.createCategory(categoryData);
    return newCategory;
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const deletedCategory = await categoryDao.deleteCategory(categoryId);
    return deletedCategory;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
};
