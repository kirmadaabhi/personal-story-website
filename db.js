const mongoose = require('mongoose');

// MongoDB connection URI
const URI = 'mongodb://localhost:27017/your_database_name';

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Connected to MongoDB database');
});
