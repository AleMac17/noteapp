// const db = require('../config/dbConfig');

// const authenticateUser = (req, res, next) => {
//   const { email, password } = req.body;
//   console.log(email, password);

//   if (!email || !password) {
//     return res
//       .status(401)
//       .json({ error: 'Email and password are required.' });
//   }

//   checkCredentials(email, password, (err, isValidUser) => {
//     if (err) {
//       console.log('1', err);
//       console.error('Error during authentication:', err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     if (!isValidUser) {
//       console.log('2', err);
//       return res.status(401).json({ error: 'Invalid email or password.' });
//     }
//     next();
//   });
// };

// const checkCredentials = (email, password, callback) => {
//   const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
//   const values = [email, password];

//   db.query(query, values, (error, result) => {
//     console.log('Query Result:', result);
//     if (error) {
//       console.error('Error executing query:', error);
//       return callback(error, false);
//     }

//     if (result.length > 0) {
//       // User found
//       return callback(null, true);
//     } else {
//       // User not found or an empty result set
//       return callback(null, false);
//     }
//   });
// };

// module.exports = authenticateUser;
