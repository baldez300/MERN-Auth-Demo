// backend/config/db.js

// Mongoose is a library for MongoDB, used to handle database 
// interactions and define schemas/models in a more structured way.

const mongoose = require('mongoose');

// An asynchronous function is declared 
// it waits for Mongoose to connect to the MongoDB database.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
