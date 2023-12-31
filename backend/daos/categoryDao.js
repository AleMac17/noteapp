const db = require('../config/dbConfig');

const getAllCategories = async () => {
  try {
    const [categories] = await db
      .promise()
      .query('SELECT * FROM categories');
    return categories;
  } catch (error) {
    throw error;
  }
};

const createCategory = async (categoryData) => {
  try {
    const [result] = await db
      .promise()
      .query('INSERT INTO categories SET ?', [categoryData]);

    const insertedCategoryId = result.insertId;

    const [selectedResult] = await db
      .promise()
      .query('SELECT * FROM categories WHERE id = ?', [
        insertedCategoryId,
      ]);

    const insertedCategory = selectedResult[0];

    return insertedCategory;
  } catch (error) {
    throw error;
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const [result] = await db
      .promise()
      .query('DELETE FROM categories WHERE id = ?', [categoryId]);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
};
