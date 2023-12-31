CREATE DATABASE IF NOT EXISTS notedb;

USE notedb;

CREATE TABLE IF NOT EXISTS users (
  id INT(11) NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS categories (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY unique_category_name (name)
);

CREATE TABLE IF NOT EXISTS notes (
  id INT(11) NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) DEFAULT NULL,
  text TEXT,
  isArchived BOOLEAN,
  category_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

DESCRIBE notes;
DESCRIBE categories;
DESCRIBE users;

INSERT INTO categories (name) VALUES
  ('Work'),
  ('Personal'),
  ('Study');

INSERT INTO notes (title, text, isArchived, category_id) VALUES
  ('Meeting notes', 'Discussion points from the team meeting', false, 1),
  ('Shopping list', 'Items to buy at the grocery store', false, 2),
  ('Study plan', 'Plan for upcoming exams', true, 3),
  ('Project update', 'Progress report for the ongoing project', false, 1),
  ('Recipe ideas', 'Exploring new recipes for dinner', false, 2),
  ('Research findings', 'Summary of recent research findings', true, 3);

INSERT INTO users (email, password) VALUES
  ('test@hotmail.com', 'test123');

SELECT * FROM notes;
SELECT * FROM categories;
SELECT * FROM users;
