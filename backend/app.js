const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/dbConfig');
const noteRoutes = require('./routes/noteRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
// const authenticateRoutes = require('./routes/authenticateRoutes');
// const authenticateUser = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Successfully connected to MySQL with ID ' + db.threadId);
});

app.use('/api', noteRoutes);
app.use('/api', categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
