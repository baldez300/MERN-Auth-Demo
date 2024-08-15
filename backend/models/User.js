// backend/models/User.js

const mongoose = require('mongoose');
// A library used to hash passwords securely.
const bcrypt = require('bcryptjs'); 

// This schema defines the structure of 
// the user document in the MongoDB database.
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Adds for createdAt and updatedAt fields.

// Mongoose middleware that hashes the password before saving the user.
// If the password field hasn't been modified, skip the hashing process.
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10); // Random data added to the password to hash it.
  this.password = await bcrypt.hash(this.password, salt);
  next(); // Proceed to saving the user.
});

//  Creates a model named User based on the UserSchema, allowing 
// for interaction with the users collection in the database.
const User = mongoose.model('User', UserSchema);

module.exports = User; 
